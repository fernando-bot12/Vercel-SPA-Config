import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Upload, CheckCircle2, User, Phone } from "lucide-react"; // Añadí iconos nuevos
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
    
    // Aquí es donde conectarás con Supabase o tu backend más adelante
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
    <section id="transferencias" className="transferencias-section">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="transferencias-card"
      >
        <h2>⚡ Registro Rápido ⚡</h2>
        <p>Completa tus datos y sube tu captura para validar tu pedido.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Fila 1: Sucursal y Orden */}
          <div className="transferencias-row">
            <div>
              <label>Sucursal</label>
              <select required className="w-full">
                <option value="cumbres">Cumbres</option>
                <option value="granjas">Granjas</option>
              </select>
            </div>
            <div>
              <label># Orden</label>
              <input type="number" placeholder="Ej: 501" required className="w-full" />
            </div>
          </div>

          {/* Fila 2: Nombre Completo */}
          <div className="flex flex-col">
            <label>Nombre Completo</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-500" size={18} />
              <input 
                type="text" 
                placeholder="Nombre de quien recoge" 
                required 
                className="w-full pl-10" 
              />
            </div>
          </div>

          {/* Fila 3: Teléfono */}
          <div className="flex flex-col">
            <label>Teléfono de Contacto</label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-500" size={18} />
              <input 
                type="tel" 
                placeholder="899 000 0000" 
                required 
                className="w-full pl-10" 
              />
            </div>
          </div>

          {/* Área de carga de archivos (Captura de Pantalla) */}
          <div className="relative pt-2">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-primary/30 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all cursor-pointer">
              <div className="flex flex-col items-center justify-center">
                {file ? (
                  <>
                    <CheckCircle2 className="text-primary mb-1" size={30} />
                    <p className="text-xs text-white px-2 text-center">{file.name}</p>
                  </>
                ) : (
                  <>
                    <Camera className="text-primary/60 mb-1" size={30} />
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
            className="w-full flex items-center justify-center gap-2 bg-primary py-3 rounded-lg font-bold"
          >
            {loading ? "Enviando..." : <><Upload size={20} /> Enviar Datos</>}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
