import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Carlos Rivera",
    review: "Las mejores alitas de la ciudad. El sabor de la salsa de mango habanero es increíble. Definitivamente regresaré.",
    rating: 5,
    initials: "CR"
  },
  {
    name: "Ana García",
    review: "Excelente ambiente y servicio. Los boneless son enormes y súper crujientes. ¡Me encantó la música!",
    rating: 5,
    initials: "AG"
  },
  {
    name: "Luis Torres",
    review: "El lugar tiene mucha onda urbana. Perfecto para venir con amigos a ver el partido y comer rico. Precios justos.",
    rating: 5,
    initials: "LT"
  },
  {
    name: "Mariana López",
    review: "La atención fue rápida y la comida llegó caliente. Probé el combo Botanero y es perfecto para compartir.",
    rating: 4,
    initials: "ML"
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase mb-4">
            Lo que dicen <span className="text-primary">de nosotros</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 p-4">
                  <div className="bg-zinc-900 border border-white/5 p-8 rounded-xl h-full flex flex-col justify-between hover:border-primary/30 transition-colors">
                    <div className="space-y-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={`${i < review.rating ? "text-primary fill-primary" : "text-gray-600"}`} 
                          />
                        ))}
                      </div>
                      <p className="text-gray-300 italic">"{review.review}"</p>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/5">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-black font-bold">
                          {review.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold text-white">{review.name}</h4>
                        <span className="text-xs text-gray-500">Google Reviews</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-transparent text-white border-white/20 hover:bg-primary hover:text-black hover:border-primary" />
            <CarouselNext className="bg-transparent text-white border-white/20 hover:bg-primary hover:text-black hover:border-primary" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center text-primary hover:text-white transition-colors uppercase font-bold text-sm tracking-widest border-b border-primary pb-1 hover:border-white">
            Déjanos tu reseña en Google
          </a>
        </div>
      </div>
    </section>
  );
}
