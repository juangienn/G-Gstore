import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent sm:text-5xl">
            Transform Your Ideas Into Reality With Custom Printing
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Professional sublimation printing services for t-shirts, mugs, caps, plates, and more. 
            Bring your designs to life with our high-quality printing solutions.
          </p>
          <div className="flex gap-4">
            <Link href="/products">
              <Button size="lg">Browse Products</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">Get a Quote</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
