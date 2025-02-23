import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 font-semibold text-lg">
            <Printer className="h-6 w-6" />
            <span>G&G Printing Services</span>
          </a>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/products">
            <a className={location === "/products" ? "text-primary" : ""}>
              Products
            </a>
          </Link>
          <Link href="/gallery">
            <a className={location === "/gallery" ? "text-primary" : ""}>
              Gallery
            </a>
          </Link>
          <Link href="/about">
            <a className={location === "/about" ? "text-primary" : ""}>
              About
            </a>
          </Link>
          <Link href="/contact">
            <Button>Contact Us</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}