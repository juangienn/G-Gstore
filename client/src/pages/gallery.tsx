import { AspectRatio } from "@/components/ui/aspect-ratio";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1585212156846-ab9106dca29c",
    alt: "Custom printed t-shirt"
  },
  {
    src: "https://images.unsplash.com/photo-1544443830-22675fff7986",
    alt: "Personalized mug"
  },
  {
    src: "https://images.unsplash.com/photo-1556910096-6f5e72db6803",
    alt: "Printed cap"
  },
  {
    src: "https://images.unsplash.com/photo-1484632152040-840235adc262",
    alt: "Custom plate"
  },
  {
    src: "https://images.unsplash.com/photo-1625550105110-64e5390f4636",
    alt: "Printed t-shirt design"
  },
  {
    src: "https://images.unsplash.com/photo-1474667689933-0ff72b3d16e9",
    alt: "Collection of mugs"
  }
];

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Work</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <AspectRatio ratio={4/3}>
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full transition-transform hover:scale-105"
              />
            </AspectRatio>
          </div>
        ))}
      </div>
    </div>
  );
}
