import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const promos = [
  {
    day: "Lunes Yum",
    content: "20 boneless o alitas",
    details: "Incluye 4 salsas, vegetales y ranch",
    price: "$339",
    color: "bg-yellow-500" // Not using primary exactly to differentiate cards slightly if needed, or stick to brand
  },
  {
    day: "Martes Yum",
    content: "20 boneless o alitas",
    details: "Incluye 4 salsas, vegetales y ranch",
    price: "$329",
    color: "bg-primary"
  },
  {
    day: "Miércoles Yum",
    content: "20 boneless o alitas",
    details: "Incluye 4 salsas, vegetales y ranch",
    price: "$339",
    color: "bg-primary"
  },
  {
    day: "Jueves Yum",
    content: "24 boneless o alitas",
    details: "Incluye 3 salsas, vegetales y ranch",
    price: "$369",
    color: "bg-primary"
  }
];

export default function Promotions() {
  const scrollToReservations = () => {
    document.getElementById("reservations")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="promos" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="text-primary border-primary/20 px-4 py-1 uppercase tracking-widest text-xs">
            Ofertas Semanales
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">
            Promociones <span className="text-primary">Yum</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promos.map((promo, index) => (
            <div 
              key={promo.day} 
              className="group relative bg-zinc-900 border border-white/5 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col"
            >
              {/* Highlight effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 flex-grow text-center space-y-4">
                <h3 className="text-2xl font-heading font-bold text-white uppercase border-b border-white/10 pb-4">
                  {promo.day}
                </h3>
                <div className="space-y-2">
                  <p className="text-xl font-bold text-primary">{promo.content}</p>
                  <p className="text-sm text-gray-400">{promo.details}</p>
                </div>
                <div className="pt-4">
                  <span className="text-4xl font-heading font-bold text-white">{promo.price}</span>
                </div>
              </div>

              <div className="relative z-10 mt-6">
                <Button 
                  onClick={scrollToReservations}
                  className="w-full bg-white text-black hover:bg-primary font-bold uppercase tracking-wider transition-colors"
                >
                  Ordenar Ahora
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
