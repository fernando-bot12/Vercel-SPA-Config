import { Button } from "@/components/ui/button";
import { ArrowDown, ChevronRight } from "lucide-react";
import heroImage from "@assets/generated_images/close-up_of_delicious_glazed_chicken_wings_with_steam_rising,_dark_moody_lighting,_gold_accents..png";

export default function Hero() {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };
  
  const scrollToReservations = () => {
    document.getElementById("reservations")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: "brightness(0.6)"
        }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-black via-black/40 to-black/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-in slide-in-from-bottom-10 fade-in duration-1000">
          <h2 className="text-primary font-heading font-medium tracking-[0.2em] mb-4 uppercase text-lg md:text-xl">
            El sabor que distingue a Yum-Yum
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white uppercase leading-none mb-8 drop-shadow-2xl">
            Alitas y Boneless<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">con Sabor Inigualable</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button 
              size="lg" 
              onClick={scrollToReservations}
              className="bg-primary hover:bg-primary/90 text-black font-bold uppercase tracking-wider px-8 py-6 text-lg w-full sm:w-auto"
            >
              Reserva tu mesa
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToMenu}
              className="border-2 border-white text-white hover:bg-white hover:text-black font-bold uppercase tracking-wider px-8 py-6 text-lg w-full sm:w-auto"
            >
              Ver Menú
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ArrowDown className="text-white/50" size={32} />
      </div>
    </section>
  );
}
