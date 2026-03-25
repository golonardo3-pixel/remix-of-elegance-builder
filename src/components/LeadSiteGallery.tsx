import { useState } from "react";
import { GalleryImage } from "@/lib/gallery-images";
import { X } from "lucide-react";

interface LeadSiteGalleryProps {
  images: GalleryImage[];
  label: string;
  heading: string;
}

const LeadSiteGallery = ({ images, label, heading }: LeadSiteGalleryProps) => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section className="salon-section">
        <div className="text-center mb-12">
          <p className="text-gold uppercase text-xs tracking-[0.2em] font-medium mb-3">{label}</p>
          <h2 className="salon-heading mb-4">{heading}</h2>
          <div className="gold-divider" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.slice(0, 10).map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`relative overflow-hidden rounded group cursor-pointer ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={640}
                height={640}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default LeadSiteGallery;
