import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, Info } from "lucide-react";

interface MenuItemProps {
  name: string;
  description?: string;
  price: string;
  highlight?: boolean;
}

function MenuItem({ name, description, price, highlight }: MenuItemProps) {
  return (
    <div className={`flex justify-between items-start py-4 border-b border-white/5 ${highlight ? 'bg-white/5 -mx-4 px-4 rounded-lg' : ''}`}>
      <div className="space-y-1">
        <h4 className={`text-lg font-heading font-bold uppercase ${highlight ? 'text-primary' : 'text-white'}`}>
          {name}
        </h4>
        {description && (
          <p className="text-sm text-gray-400 max-w-md">{description}</p>
        )}
      </div>
      <span className="text-xl font-bold text-white">{price}</span>
    </div>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">
            Nuestro <span className="text-primary">Menú</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explora nuestra selección de sabores intensos. Desde nuestras clásicas alitas hasta los combos más completos.
          </p>
        </div>

        <Tabs defaultValue="alitas" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-white/5 p-1 h-auto mb-12 rounded-xl">
            <TabsTrigger value="alitas" className="data-[state=active]:bg-primary data-[state=active]:text-black text-gray-300 py-3 uppercase font-bold text-xs md:text-sm tracking-wide">Alitas</TabsTrigger>
            <TabsTrigger value="boneless" className="data-[state=active]:bg-primary data-[state=active]:text-black text-gray-300 py-3 uppercase font-bold text-xs md:text-sm tracking-wide">Boneless</TabsTrigger>
            <TabsTrigger value="combos" className="data-[state=active]:bg-primary data-[state=active]:text-black text-gray-300 py-3 uppercase font-bold text-xs md:text-sm tracking-wide">Combos</TabsTrigger>
            <TabsTrigger value="salsas" className="data-[state=active]:bg-primary data-[state=active]:text-black text-gray-300 py-3 uppercase font-bold text-xs md:text-sm tracking-wide">Salsas</TabsTrigger>
            <TabsTrigger value="bebidas" className="data-[state=active]:bg-primary data-[state=active]:text-black text-gray-300 py-3 uppercase font-bold text-xs md:text-sm tracking-wide">Bebidas</TabsTrigger>
          </TabsList>

          <TabsContent value="alitas" className="space-y-2 animate-in fade-in slide-in-from-bottom-5">
            <MenuItem 
              name="Media Orden" 
              description="5 piezas de nuestras crujientes alitas bañadas en tu salsa favorita." 
              price="$120" 
            />
            <MenuItem 
              name="Orden Completa" 
              description="10 piezas para los que tienen buen apetito. Incluye vegetales y ranch." 
              price="$180" 
              highlight
            />
          </TabsContent>

          <TabsContent value="boneless" className="space-y-2 animate-in fade-in slide-in-from-bottom-5">
             <MenuItem 
              name="Media Orden" 
              description="5 piezas de pechuga de pollo empanizada y bañada en salsa." 
              price="$120" 
            />
            <MenuItem 
              name="Orden Completa" 
              description="10 piezas de puro sabor sin hueso. Incluye vegetales y ranch." 
              price="$180" 
              highlight
            />
          </TabsContent>

          <TabsContent value="combos" className="space-y-2 animate-in fade-in slide-in-from-bottom-5">
            <MenuItem name="Yum Mix" description="Combinación perfecta para probar de todo." price="$180" />
            <MenuItem name="Yum Estudiante" description="La opción económica y llenadora." price="$110" />
            <MenuItem name="Yum Godín" description="Ideal para tu hora de comida." price="$185" />
            <MenuItem name="Yum Botanero" description="Para compartir (o no)." price="$389" highlight />
            <MenuItem name="Yum 1" description="Combo individual básico." price="$165" />
            <MenuItem name="Yum 2" description="Combo para dos personas." price="$255" />
            <MenuItem name="Yum 3" description="Combo familiar pequeño." price="$430" />
            <MenuItem name="Yum 4" description="El festín definitivo." price="$520" />
          </TabsContent>

          <TabsContent value="salsas" className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-5">
            {["BBQ", "Buffalo", "Mango Habanero", "Lemon Pepper", "Tamarindo", "Chipotle"].map((salsa) => (
              <div key={salsa} className="bg-white/5 p-4 rounded-lg text-center border border-white/5 hover:border-primary/50 transition-colors">
                <span className="font-heading font-bold text-white uppercase">{salsa}</span>
              </div>
            ))}
            <div className="col-span-2 md:col-span-3 mt-4 text-center">
              <span className="text-primary font-bold">Extra salsa — $15</span>
            </div>
          </TabsContent>

          <TabsContent value="bebidas" className="space-y-2 animate-in fade-in slide-in-from-bottom-5">
            <MenuItem name="Refresco Vidrio" price="$35" />
            <MenuItem name="Refresco Plástico" price="$40" />
            <MenuItem name="Agua Natural" price="$30" />
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black gap-2 uppercase tracking-wide">
            <Download size={18} /> Descargar Menú Completo (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
}
