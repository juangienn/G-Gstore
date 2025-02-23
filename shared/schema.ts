import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  price: integer("price").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  productId: integer("product_id").references(() => products.id),
});

export const paymentMethods = {
  GCASH: "gcash",
  BANK_TRANSFER: "bank_transfer",
} as const;

export const paymentDetails = {
  [paymentMethods.GCASH]: {
    name: "G-Cash",
    instructions: "Send payment to G-Cash number: 09XX-XXX-XXXX",
  },
  [paymentMethods.BANK_TRANSFER]: {
    name: "Bank Transfer",
    instructions: "Transfer to BDO Account: XXXX-XXXX-XXXX",
  },
} as const;

export const insertProductSchema = createInsertSchema(products).pick({
  name: true,
  description: true,
  category: true,
  price: true,
  imageUrl: true,
});

export const insertInquirySchema = createInsertSchema(inquiries).pick({
  name: true,
  email: true,
  message: true,
  productId: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  paymentMethod: z.enum([paymentMethods.GCASH, paymentMethods.BANK_TRANSFER]),
});

export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type PaymentMethod = keyof typeof paymentMethods;

export const productCategories = [
  "T-Shirts",
  "Mugs",
  "Caps",
  "Plates",
  "Souvenirs"
] as const;