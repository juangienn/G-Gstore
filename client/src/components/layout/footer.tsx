import { Link } from "wouter";
import { Printer } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/">
              <a className="flex items-center gap-2 font-semibold text-lg mb-4">
                <Printer className="h-6 w-6" />
                <span>G&G Printing Services</span>
              </a>
            </Link>
            <p className="text-sm text-muted-foreground">
              Quality sublimation printing for all your custom needs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/products">Products</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <address className="not-italic text-sm text-muted-foreground">
              <p>123 Print Street</p>
              <p>Artsville, PR 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@gandgprinting.com</p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}