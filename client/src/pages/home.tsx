import { Hero } from "@/components/layout/hero";
import { ProductCarousel } from "@/components/products/product-carousel";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import type { Product } from "@shared/schema";

export default function Home() {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  return (
    <div>
      <Hero />

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(4).fill(0).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-[4/3] w-full" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        ) : (
          <ProductCarousel products={products || []} />
        )}
      </div>

      <div className="container mx-auto px-4 py-16 bg-muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Workshop</h2>
          <p className="text-muted-foreground mb-8">
            Step into our professional printing facility where we bring your designs to life with state-of-the-art sublimation printing technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              alt="Printing workshop"
              className="rounded-lg aspect-video object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1575839127397-c12e55f70a38"
              alt="Printing process"
              className="rounded-lg aspect-video object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}