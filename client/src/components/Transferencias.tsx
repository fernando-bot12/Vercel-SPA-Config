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

    // Creamos el mensaje usando una estructura que WhatsApp entiende mejor por URL
    const linea1 = "*— NUEVO REGISTRO DE PAGO —* 🍗";
    const linea2 = "*YUM YUM ALITAS Y BONELESS*";
    const datos = `👤 *Cliente:* ${nombre}\n📞 *Teléfono:* ${telefono}\n📍 *Sucursal:* ${sucursal.toUpperCase()}\n🆔 *# de Orden:* ${orden}`;
    const separador = "━━━━━━━━━━━━━━━━━━";
    const cierre = "✨ *Envío mi foto de pago aquí abajo* ✨";

    const mensajeCompleto = `${linea1}\n${linea2}\n\n${datos}\n\n${separador}\n${cierre}`;

    // La función encodeURIComponent es la clave para que los emojis y la línea no salgan con signos de interrogación
    const mensajeFinal = encodeURIComponent(mensajeCompleto);
    const numeroWhatsApp = "528994698833"; 

    setTimeout(() => {
      window.open(`https://wa.me/${numeroWhatsApp}?text=${mensajeFinal}`, "_blank");
      setLoading(false);
      
      toast({
        title: "🚀 ¡WhatsApp abierto!",
        description: "Adjunta tu captura y dale a enviar.",
      });
    }, 800);
  };

  return (
    <section className="min-h-screen bg-[#0a0a0a] py-10 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto bg-[#141414] border border-yellow-500/20 rounded-2xl p-6 shadow-2xl"
      >
        <h2 className="text-2xl font-black text-center text-yellow-500 mb-2">⚡ REGISTRO RÁPIDO ⚡</h2>
        
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3 mb-6 flex gap-3 items-start">
          <Info className="text-blue-400 shrink-0 mt-1" size={20} />
          <p className="text-[11px] text-blue-100 leading-relaxed">
            <span className="font-bold block text-blue-400 mb-1 text-xs">⚠️ PASO FINAL:</span>
            Se abrirá WhatsApp con tus datos listos. **¡Solo adjunta tu comprobante y dale enviar!**
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
                  className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-2.5 pl-9 text-white appearance-none outline-none focus:border-yellow-500"
                >
                  <option value="granjas" className="bg-[#1a1a1a]">Granjas</option>
                  <option value="torres" className="bg-[#1a1a1a]">Torres</option>
                  <option value="cumbres" className="bg-[#1a1a1a]">Cumbres</option>
                </select>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase ml-1"># Orden</label>
              <div className="relative flex items-center">
                <Hash className="absolute left-3 text-yellow-500" size={16} />
                <input 
                  type="number" placeholder="000" required 
                  value={orden} onChange={(e) => setOrden(e.target.value)}
                  className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-2.5 pl-9 text-white outline-none focus:border-yellow-500" 
                />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Nombre completo</label>
            <div className="relative flex items-center">
              <User className="absolute left-3 text-yellow-500" size={16} />
              <input 
                type="text" placeholder="Quién recoge el pedido" required 
                value={nombre} onChange={(e) => setNombre(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-2.5 pl-9 text-white outline-none focus:border-yellow-500" 
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Teléfono</label>
            <div className="relative flex items-center">
              <Phone className="absolute left-3 text-yellow-500" size={16} />
              <input 
                type="tel" placeholder="899 000 0000" required 
                value={telefono} onChange={(e) => setTelefono(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-2.5 pl-9 text-white outline-none focus:border-yellow-500" 
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
