import { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, MapPin, Hash, MessageCircle, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Transferencias() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sucursal, setSucursal] = useState("granjas");
  const [orden, setOrden] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const mensajeTexto = 
      `NUEVO REGISTRO DE PAGO - YUM YUM\n\n` +
      `Cliente: ${nombre}\n` +
      `Telefono: ${telefono}\n` +
      `Sucursal: ${sucursal.toUpperCase()}\n` +
      `No. de Orden: ${orden}\n\n` +
      `--------------------------\n` +
      `Envio mi foto de pago abajo`;

    const mensajeFinal = encodeURIComponent(mensajeTexto);
    const numeroWhatsApp = "528994698833"; 

    setTimeout(() => {
      window.open(`https://wa.me/${numeroWhatsApp}?text=${mensajeFinal}`, "_blank");
      setLoading(false);
      toast({
        title: "WhatsApp abierto",
        description: "Adjunta tu foto y envía el mensaje.",
      });
    }, 800);
  };

  return (
    // SE AGREGA id="transferencias" PARA QUE EL NAV FUNCIONE
    <section id="transferencias" className="min-h-screen bg-[#0a0a0a] py-10 px-4 scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto bg-[#141414] border border-yellow-500/20 rounded-2xl p-6 shadow-2xl"
      >
        <h2 className="text-2xl font-black text-center text-yellow-500 mb-2 italic">REGISTRO RAPIDO</h2>
        
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3 mb-6 flex gap-3 items-start">
          <Info className="text-blue-400 shrink-0 mt-1" size={20} />
          <p className="text-[11px] text-blue-100 leading-relaxed">
            <span className="font-bold block text-blue-400 mb-1 text-xs">PASO FINAL:</span>
            Se abrira WhatsApp. **Adjunta la foto de tu comprobante** antes de enviar.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Sucursal</label>
              <div className="relative flex items-center">
                <MapPin className="absolute left-3 text-yellow-500" size={16} />
                <select 
                  required 
                  value={sucursal}
                  onChange={(e) => setSucursal(e.target.value)}
                  className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-2.5 pl-9 text-white appearance-none outline-none focus:border-yellow-500 transition-all"
                >
                  <option value="granjas">Granjas</option>
                  <option value="torres">Torres</option>
                  <option value="cumbres">Cumbres</option>
                </select>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">No. Orden</label>
              <div className="relative flex items-center">
                <Hash className="absolute left-3 text-yellow-500" size={16} />
                <input 
                  type="number" placeholder="000" required 
                  value={orden} onChange={(e) => setOrden(e.target.value)}
                  className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-2.5 pl-9 text-white outline-none focus:border-yellow-500 transition-all" 
                />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Nombre completo</label>
            <div className="relative flex items-center">
              <User className="absolute left-3 text-yellow-500" size={16} />
              <input 
                type="text" placeholder="Quien recoge" required 
                value={nombre} onChange={(e) => setNombre(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-2.5 pl-9 text-white outline-none focus:border-yellow-500 transition-all" 
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Telefono</label>
            <div className="relative flex items-center">
              <Phone className="absolute left-3 text-yellow-500" size={16} />
              <input 
                type="tel" placeholder="899 000 0000" required 
                value={telefono} onChange={(e) => setTelefono(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-2.5 pl-9 text-white outline-none focus:border-yellow-500 transition-all" 
              />
            </div>
          </div>

          <button 
            type="submit" disabled={loading}
            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 mt-4"
          >
            {loading ? "ABRIENDO..." : <><MessageCircle size={20} /> ENVIAR POR WHATSAPP</>}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
