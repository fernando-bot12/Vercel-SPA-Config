import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Upload, CheckCircle2, User, Phone, MapPin, Hash } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Transferencias() {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulación de envío
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "✅ ¡Recibido!",
        description: "Tu comprobante está en revisión. ¡Gracias!",
      });
      setFile(null);
    }, 1500);
  };

  return (
    <section id="transferencias" className="min-h-screen bg-[#0a0a0a] py-10 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto bg-[#141414] border border-yellow-500/20 rounded-2xl p-6 shadow-2xl"
      >
        <h2 className="text-2xl font-black text-center text-yellow-500 mb-2">⚡ REGISTRO RÁPIDO ⚡</h2>
        <p className="text-gray-400 text-center text-sm mb-8">Valida tu pedido de Yum Yum en segundos</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Fila 1: Sucursal y Orden */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Sucursal</label>
              <div className="relative flex items-center">
                <MapPin className="absolute left-3 text-yellow-500" size={18} />
                <select 
                  required 
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
                  className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-3 pl-10 text-white focus:border-yellow-500 outline-none transition-all" 
                />
              </div>
            </div>
          </div>

          {/* Fila 2: Nombre Completo */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Nombre de quien recoge</label>
            <div className="relative flex items-center">
              <User className="absolute left-3 text-yellow-500" size={18} />
              <input 
                type="text" 
                placeholder="Nombre completo" 
                required 
                className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-3 pl-10 text-white focus:border-yellow-500 outline-none transition-all" 
              />
            </div>
          </div>

          {/* Fila 3: Teléfono */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Teléfono</label>
            <div className="relative flex items-center">
              <Phone className="absolute left-3 text-yellow-500" size={18} />
              <input 
                type="tel" 
                placeholder="899 000 0000" 
                required 
                className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-3 pl-10 text-white focus:border-yellow-500 outline-none transition-all" 
              />
            </div>
          </div>

          {/* Área de Cámara / Upload */}
          <div className="pt-2">
            <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-yellow-500/20 rounded-2xl bg-yellow-500/5 hover:bg-yellow-500/10 transition-all cursor-pointer group">
              <div className="flex flex-col items-center justify-center">
                {file ? (
                  <>
                    <CheckCircle2 className="text-green-500 mb-2" size={32} />
                    <p className="text-xs text-gray-300 font-medium">{file.name}</p>
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

          {/* Botón de Envío */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-700 text-black font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"
          >
            {loading ? "PROCESANDO..." : <><Upload size={20} /> ENVIAR DATOS</>}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
