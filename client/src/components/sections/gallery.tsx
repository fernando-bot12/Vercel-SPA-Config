import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import heroImage from "@assets/generated_images/close-up_of_delicious_glazed_chicken_wings_with_steam_rising,_dark_moody_lighting,_gold_accents..png";
import interiorImage from "@assets/stock_images/modern_restaurant_in_f3ea70ed.jpg";
import interiorImage2 from "@assets/stock_images/modern_restaurant_in_c0cd2d96.jpg";
import friendsImage from "@assets/stock_images/group_of_happy_frien_6a13fc47.jpg";

const galleryImages = [
  { src: "https://res.cloudinary.com/dsmadkb1y/image/upload/v1767655260/0df698e4-2d98-431a-a5fc-93a5bb785738_bh3na1.jpg", alt: "Yum Yum Signature 1", span: "md:col-span-2 md:row-span-2" },
  { src: "https://res.cloudinary.com/dsmadkb1y/image/upload/v1767655407/413ffb91-57ef-4b04-b975-473047c29f4c_1_kbcoyy.jpg", alt: "Yum Yum Signature 2", span: "md:col-span-1 md:row-span-1" },
  { src: "https://res.cloudinary.com/dsmadkb1y/image/upload/v1767655434/WhatsApp_Image_2026-01-05_at_3.53.30_PM_cy1foj.jpg", alt: "Yum Yum Signature 3", span: "md:col-span-1 md:row-span-1" },
  { src: "https://res.cloudinary.com/dsmadkb1y/image/upload/v1767655422/WhatsApp_Image_2026-01-05_at_3.46.34_PM_hssnba.jpg", alt: "Yum Yum Signature 4", span: "md:col-span-2 md:row-span-1" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase mb-4">
            Galería <span className="text-primary">Yum</span>
          </h2>
          <p className="text-gray-400">Vive la experiencia visual de nuestros platillos y espacios.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryImages.map((img, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div 
                  className={`relative group overflow-hidden rounded-xl cursor-pointer border border-white/5 ${img.span}`}
                  onClick={() => setSelectedImage(img.src)}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="text-primary transform scale-0 group-hover:scale-100 transition-transform duration-300" size={32} />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-transparent border-none p-0 shadow-none">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-auto rounded-lg shadow-2xl" 
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
