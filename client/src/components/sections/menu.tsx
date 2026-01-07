import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, Info, Flame } from "lucide-react";

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
  const salsas = {
    picante: [
      { name: "Verde Jalapeño" },
      { name: "Berry Morita" },
      { name: "Bufalo Ranch" },
      { name: "Brava Yum", extra: "La más picosa", highlight: true },
      { name: "Mango Habanero" },
      { name: "Bufalo Cheese" },
      { name: "Bufalo Lemon" },
      { name: "Bufalo" }
    ],
    dulce: [
      { name: "BBQ Chipotle" },
      { name: "BBQ Tamarindo" },
      { name: "Yumi Yumi" },
      { name: "BBQ" },
      { name: "Fresa Chipotle" }
    ],
    extra: [
      { name: "Lemon Pepper" },
      { name: "Chipotle Ranch" },
      { name: "Parmesano" },
      { name: "Parmesano Cremoso" }
    ]
  };

  return (
    <section id="menu" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">
            Nuestro <span className="text-primary">Menú</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explora nuestra selección de sabores intensos. Desde nuestras clásicas alitas hasta los platos más especiales.
          </p>
        </div>

        <Tabs defaultValue="alitas" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 bg-white/5 p-1 h-auto mb-12 rounded-xl gap-1">
            <TabsTrigger value="alitas" className="data-[state=active]:bg-primary data-[state=active]:text-black text-gray-300 py-3 uppercase font-bold text-xs tracking-wide">Alitas</TabsTrigger>
            <TabsTrigger value="boneless" className="data-[state=active]:bg-primary data-[state=active]:text-black text-gray-300 py-3 uppercase font-bold text-xs tracking-wide">Boneless</TabsTrigger>
            <TabsTrigger value="hamburguesas" className="data-[state=active]:bg-primary data-[state=active]:text-black text-gray-300 py-3 uppercase font-bold text-xs tracking-wide">Hamburguesas</TabsTrigger>
            <TabsTrigger value="papas" className="data-[state=active]:bg-primary data-[state=active]:text-black text-gray-300 py-3 uppercase font-bold text-xs tracking-wide">Papas</TabsTrigger>
            <TabsTrigger value="combos" className="data-[state=active]:bg-primary data-[state=active]:text-black text-gray-300 py-3 uppercase font-bold text-xs tracking-wide">Combos</TabsTrigger>
            <TabsTrigger value="salsas" className="data-[state=active]:bg-primary data-[state=active]:text-black text-gray-300 py-3 uppercase font-bold text-xs tracking-wide">Salsas</TabsTrigger>
            <TabsTrigger value="hotdogs" className="data-[state=active]:bg-primary data-[state=active]:text-black text-gray-300 py-3 uppercase font-bold text-xs tracking-wide">Hot Dogs</TabsTrigger>
            <TabsTrigger value="burritos" className="data-[state=active]:bg-primary data-[state=active]:text-black text-gray-300 py-3 uppercase font-bold text-xs tracking-wide">Burritos</TabsTrigger>
            <TabsTrigger value="tortas" className="data-[state=active]:bg-primary data-[state=active]:text-black text-gray-300 py-3 uppercase font-bold text-xs tracking-wide">Tortas</TabsTrigger>
            <TabsTrigger value="antojitos" className="data-[state=active]:bg-primary data-[state=active]:text-black text-gray-300 py-3 uppercase font-bold text-xs tracking-wide">Antojitos</TabsTrigger>
            <TabsTrigger value="tiras" className="data-[state=active]:bg-primary data-[state=active]:text-black text-gray-300 py-3 uppercase font-bold text-xs tracking-wide">Tiras de Pollo</TabsTrigger>
            <TabsTrigger value="parrilladas" className="data-[state=active]:bg-primary data-[state=active]:text-black text-gray-300 py-3 uppercase font-bold text-xs tracking-wide">Parrilladas</TabsTrigger>
            <TabsTrigger value="postres" className="data-[state=active]:bg-primary data-[state=active]:text-black text-gray-300 py-3 uppercase font-bold text-xs tracking-wide">Postres</TabsTrigger>
            <TabsTrigger value="bebidas" className="data-[state=active]:bg-primary data-[state=active]:text-black text-gray-300 py-3 uppercase font-bold text-xs tracking-wide">Bebidas</TabsTrigger>
            <TabsTrigger value="preparadas" className="data-[state=active]:bg-primary data-[state=active]:text-black text-gray-300 py-3 uppercase font-bold text-xs tracking-wide">Preparadas</TabsTrigger>
            <TabsTrigger value="menu-extra" className="data-[state=active]:bg-primary data-[state=active]:text-black text-gray-300 py-3 uppercase font-bold text-xs tracking-wide">Extra</TabsTrigger>
          </TabsList>

          <TabsContent value="alitas" className="space-y-2 animate-in fade-in slide-in-from-bottom-5">
            <MenuItem name="Media Orden" description="5 piezas de nuestras crujientes alitas." price="$120" />
            <MenuItem name="Orden Completa" description="10 piezas. Incluye vegetales y ranch." price="$190" highlight />
          </TabsContent>

          <TabsContent value="boneless" className="space-y-2 animate-in fade-in slide-in-from-bottom-5">
            <MenuItem name="Media Orden" description="5 piezas de pechuga de pollo empanizada." price="$120" />
            <MenuItem name="Orden Completa" description="10 piezas. Incluye vegetales y ranch." price="$190" highlight />
          </TabsContent>

          <TabsContent value="hamburguesas" className="space-y-2 animate-in fade-in slide-in-from-bottom-5">
            <MenuItem name="Clásica" price="$100" />
            <MenuItem name="Chicken Spicy" price="$140" />
            <MenuItem name="Especial" price="$120" />
            <MenuItem name="Country" price="$140" />
            <MenuItem name="Guacamole" price="$140" />
            <MenuItem name="Aros BBQ" price="$145" />
          </TabsContent>

          <TabsContent value="papas" className="space-y-2 animate-in fade-in slide-in-from-bottom-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <MenuItem name="Chili" price="$85" />
              <MenuItem name="Flamin Hot" price="$85" />
              <MenuItem name="Parmesano" price="$85" />
              <MenuItem name="Chipotle" price="$85" />
              <MenuItem name="Papas Pizza" price="$99" />
              <MenuItem name="Salchipapas" price="$89" />
              <MenuItem name="Papas con queso" price="$85" />
              <MenuItem name="Buffalo" price="$85" />
              <MenuItem name="Queso tocino" price="$85" />
              <MenuItem name="Dedos de queso" price="$90" />
              <MenuItem name="Aros de cebolla" price="$90" />
              <MenuItem name="Papas gajo" price="$80" />
              <MenuItem name="Papas Curly" price="$80" />
              <MenuItem name="Papas Crisscut" price="$80" />
            </div>
          </TabsContent>

          <TabsContent value="combos" className="space-y-2 animate-in fade-in slide-in-from-bottom-5">
            <MenuItem name="Yum Mix" price="$180" />
            <MenuItem name="Yum Estudiante" price="$110" />
            <MenuItem name="Yum Godín" price="$185" />
            <MenuItem name="Yum Botanero" price="$389" highlight />
            <MenuItem name="Yum 1" price="$165" />
            <MenuItem name="Yum 2" price="$255" />
            <MenuItem name="Yum 3" price="$430" />
            <MenuItem name="Yum 4" price="$940" />
          </TabsContent>

          <TabsContent value="salsas" className="animate-in fade-in slide-in-from-bottom-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-bold text-primary uppercase border-b border-primary/20 pb-2">Picante</h3>
                <div className="grid grid-cols-1 gap-2">
                  {salsas.picante.map((s) => (
                    <div key={s.name} className={`bg-white/5 p-3 rounded border border-white/5 flex justify-between items-center ${s.highlight ? 'border-primary/50 bg-primary/5' : ''}`}>
                      <span className={`font-bold uppercase text-sm ${s.highlight ? 'text-primary' : 'text-white'}`}>{s.name}</span>
                      {s.extra && <span className="text-[10px] bg-primary text-black px-1 font-bold uppercase">{s.extra}</span>}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-bold text-primary uppercase border-b border-primary/20 pb-2">Dulce</h3>
                <div className="grid grid-cols-1 gap-2">
                  {salsas.dulce.map((s) => (
                    <div key={s.name} className="bg-white/5 p-3 rounded border border-white/5">
                      <span className="font-bold text-white uppercase text-sm">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-bold text-primary uppercase border-b border-primary/20 pb-2">Extra</h3>
                <div className="grid grid-cols-1 gap-2">
                  {salsas.extra.map((s) => (
                    <div key={s.name} className="bg-white/5 p-3 rounded border border-white/5">
                      <span className="font-bold text-white uppercase text-sm">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <span className="text-primary font-bold">Extra salsa — $20</span>
            </div>
          </TabsContent>

          <TabsContent value="hotdogs" className="space-y-2 animate-in fade-in slide-in-from-bottom-5">
            <MenuItem name="Clásico" price="$35" />
            <MenuItem name="Chili" price="$45" />
            <MenuItem name="Especial" price="$50" />
          </TabsContent>

          <TabsContent value="burritos" className="space-y-2 animate-in fade-in slide-in-from-bottom-5">
            <MenuItem name="Clásico" price="$35" />
            <MenuItem name="Especial" price="$45" />
          </TabsContent>

          <TabsContent value="tortas" className="space-y-2 animate-in fade-in slide-in-from-bottom-5">
            <MenuItem name="Ternera" price="$80" />
            <MenuItem name="Del Chavo" price="$80" />
            <MenuItem name="Especial" price="$90" />
            <MenuItem name="De la barda" price="$110" />
            <MenuItem name="Bisteck" price="$80" />
            <MenuItem name="Sándwich de Pollo" price="$130" highlight />
          </TabsContent>

          <TabsContent value="antojitos" className="space-y-2 animate-in fade-in slide-in-from-bottom-5">
            <MenuItem name="Flautas" price="$110" />
            <MenuItem name="Sincronizada (Ternera o Bisteck)" price="$140" />
            <MenuItem name="Panchos" price="$170" highlight />
          </TabsContent>

          <TabsContent value="tiras" className="space-y-2 animate-in fade-in slide-in-from-bottom-5">
            <MenuItem name="Jr" price="$120" />
            <MenuItem name="Mediano" price="$140" />
            <MenuItem name="Master" price="$220" highlight />
          </TabsContent>

          <TabsContent value="parrilladas" className="animate-in fade-in slide-in-from-bottom-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-bold text-primary uppercase border-b border-primary/20 pb-2">Pollo</h3>
                <MenuItem name="1 Persona" price="$110" />
                <MenuItem name="2 Personas" price="$210" />
                <MenuItem name="4 Personas" price="$400" highlight />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-bold text-primary uppercase border-b border-primary/20 pb-2">Res</h3>
                <MenuItem name="1 Persona" price="$150" />
                <MenuItem name="2 Personas" price="$280" />
                <MenuItem name="4 Personas" price="$540" highlight />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-bold text-primary uppercase border-b border-primary/20 pb-2">Mixta</h3>
                <MenuItem name="1 Persona" price="$130" />
                <MenuItem name="2 Personas" price="$250" />
                <MenuItem name="4 Personas" price="$460" highlight />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="postres" className="space-y-2 animate-in fade-in slide-in-from-bottom-5">
            <MenuItem name="Cheese Cake" price="$100" />
            <MenuItem name="Fresas con Crema" price="$100" />
            <MenuItem name="Frape" description="Gansito, Ferrero, Nutela, Pingüino, Oreo, Mazapán." price="$80" />
          </TabsContent>

          <TabsContent value="bebidas" className="space-y-2 animate-in fade-in slide-in-from-bottom-5">
            <MenuItem name="Refresco Vidrio" price="$35" />
            <MenuItem name="Refresco Plástico" price="$40" />
            <MenuItem name="Agua de Sabor" description="Mango, Fresalimon, Pepinolimon. Horchata, Jamaica, Tamarindo." price="$35" />
            <MenuItem name="Agua Natural" price="$30" />
            <MenuItem name="Cerveza" description="Tecate, XX, Indio, Tecate Roja, Amstel Ultra, Bohemia, Miller High Life." price="$40" />
          </TabsContent>

          <TabsContent value="preparadas" className="space-y-2 animate-in fade-in slide-in-from-bottom-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <MenuItem name="Micheladas" price="$150" />
              <MenuItem name="Chelada" price="$150" />
              <MenuItem name="Piña Colada" price="$150" />
              <MenuItem name="Fresa Colada" price="$150" />
              <MenuItem name="Baby Mango" price="$150" />
              <MenuItem name="Baby Bre" price="$150" />
              <MenuItem name="Wisky" price="$150" />
              <MenuItem name="Vampiro" price="$150" />
              <MenuItem name="Pitufo" price="$150" />
              <MenuItem name="Margarita" price="$150" />
              <MenuItem name="Perla Negra" price="$150" />
            </div>
          </TabsContent>

          <TabsContent value="menu-extra" className="space-y-2 animate-in fade-in slide-in-from-bottom-5">
            <MenuItem name="Costillas Baby Back Rib" price="$220" highlight />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
