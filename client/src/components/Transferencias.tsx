import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Upload, CheckCircle2, User, Phone, MapPin, Hash, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Transferencias() {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  
  // Estados para controlar los campos del formulario
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sucursal, setSucursal] = useState("granjas");
  const [orden, setOrden] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 1. Creamos el mensaje para WhatsApp
    const mensaje = `*NUEVO REGISTRO DE PAGO - YUM YUM* 🍗%0A%0A` +
                    `*Nombre:* ${nombre}%0A` +
                    `*Teléfono:* ${telefono}%0A` +
                    `*Sucursal:* ${sucursal.toUpperCase()}%0A` +
                    `*# Orden:* ${orden}%0A%0A` +
                    `_Adjunto mi captura de pantalla abajo._`;

    // 2. Número de destino
    const numeroWhatsApp = "528994698833"; 

    // 3. Abrir WhatsApp
    setTimeout(() => {
      window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, "_blank");
      setLoading(false);
      
      toast({
        title: "✅ ¡Casi listo!",
        description: "Envía el mensaje en WhatsApp para finalizar.",
      });
    }, 1000);
  };

  return (
    <section id="transferencias" className="min-h-screen bg-[#0a0a0a] py-10 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto bg-[#141414] border border-yellow-500/20 rounded-2xl p-6 shadow-2xl"
      >
        <h2 className="text-2xl font-black text-center text-yellow-500 mb-2 text-shadow-sm">⚡ REGISTRO RÁPIDO ⚡</h2>
        <p className="text-gray-400 text-center text-sm mb-8">Envía tu comprobante directo a nuestro WhatsApp</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Sucursal</label>
              <div className="relative flex items-center">
                <MapPin className="absolute left-3 text-yellow-500" size={18} />
                <select 
                  required 
                  value={sucursal}
                  onChange={(e) => setSucursal(e.target.value)}
                  className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-3 pl-10 text-white appearance-none focus:border-yellow-500 outline-none transition-all"
                >
                  <option value="granjas" className="bg-[#1a1a1a]">Granjas</option>
                  <option value="torres" className="bg-[#1a1a1a]">Torres</option>
                  <option value="cumbres" className="bg-[#1a1a1a]">Cumbres</option>
                </select>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1"># Orden</label>
              <div className="relative flex items-center">
                <Hash className="absolute left-3 text-yellow-500" size={18} />
                <input 
                  type="number" 
                  placeholder="Ej: 501" 
                  required 
                  value={orden}
                  onChange={(e) => setOrden(e.target.value)}
                  className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-3 pl-10 text-white focus:border-yellow-500 outline-none transition-all" 
                />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Nombre de quien recoge</label>
            <div className="relative flex items-center">
              <User className="absolute left-3 text-yellow-500" size={18} />
              <input 
                type="text" 
                placeholder="Nombre completo" 
                required 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-3 pl-10 text-white focus:border-yellow-500 outline-none transition-all" 
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Teléfono</label>
            <div className="relative flex items-center">
              <Phone className="absolute left-3 text-yellow-500" size={18} />
              <input 
                type="tel" 
                placeholder="899 000 0000" 
                required 
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-3 pl-10 text-white focus:border-yellow-500 outline-none transition-all" 
              />
            </div>
          </div>

          <div className="pt-2">
            <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-yellow-500/20 rounded-2xl bg-yellow-500/5 hover:bg-yellow-500/10 transition-all cursor-pointer group">
              <div className="flex flex-col items-center justify-center">
                {file ? (
                  <>
                    <CheckCircle2 className="text-green-500 mb-2" size={32} />
                    <p className="text-xs text-gray-300 font-medium px-4 text-center">{file.name}</p>
                  </>
                ) : (
                  <>
                    <div className="p-3 bg-yellow-500/10 rounded-full mb-2 group-hover:scale-110 transition-transform">
                      <Camera className="text-yellow-500" size={28} />
                    </div>
                    <p className="text-xs text-gray-400">Toca para tomar foto o subir captura</p>
                  </>
                )}
              </div>
              <input 
                type="file" 
                accept="image/*" 
                capture="environment" 
                className="hidden" 
                onChange={handleFileChange}
                required
              />
            </label>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#25D366] hover:bg-[#128C7E] disabled:bg-gray-700 text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"
          >
            {loading ? "ABRIENDO..." : <><MessageCircle size={22} /> ENVIAR POR WHATSAPP</>}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
