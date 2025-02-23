import { products, inquiries, type Product, type InsertProduct, type Inquiry, type InsertInquiry } from "@shared/schema";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private inquiries: Map<number, Inquiry>;
  private currentProductId: number;
  private currentInquiryId: number;

  constructor() {
    this.products = new Map();
    this.inquiries = new Map();
    this.currentProductId = 1;
    this.currentInquiryId = 1;
    this.initializeProducts();
  }

  private initializeProducts() {
    const mockProducts: InsertProduct[] = [
      {
        name: "Custom T-Shirt",
        description: "High-quality sublimation printed t-shirt with your design",
        category: "T-Shirts",
        price: 2500,
        imageUrl: "https://images.unsplash.com/photo-1585212156846-ab9106dca29c"
      },
      {
        name: "Personalized Mug",
        description: "Ceramic mug with custom design",
        category: "Mugs",
        price: 1500,
        imageUrl: "https://images.unsplash.com/photo-1544443830-22675fff7986"
      },
      {
        name: "Custom Cap",
        description: "Baseball cap with sublimation printing",
        category: "Caps",
        price: 2000,
        imageUrl: "https://images.unsplash.com/photo-1556910096-6f5e72db6803"
      },
      {
        name: "Decorative Plate",
        description: "Ceramic plate with custom design",
        category: "Plates",
        price: 3000,
        imageUrl: "https://images.unsplash.com/photo-1484632152040-840235adc262"
      }
    ];

    mockProducts.forEach(product => {
      const id = this.currentProductId++;
      this.products.set(id, { ...product, id });
    });
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      product => product.category === category
    );
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.currentInquiryId++;
    const inquiry: Inquiry = { ...insertInquiry, id };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }
}

export const storage = new MemStorage();
