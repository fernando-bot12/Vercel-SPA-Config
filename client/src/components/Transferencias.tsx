import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Upload, CheckCircle2 } from "lucide-react";
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
    
    // Simulación de envío a tu backend PHP/MySQL
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
        <p>Sube tu ticket o captura para validar tu pedido al instante.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              <input type="number" placeholder="000" required />
            </div>
          </div>

          {/* Área de carga de archivos */}
          <div className="relative">
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-primary/30 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all cursor-pointer">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {file ? (
                  <>
                    <CheckCircle2 className="text-primary mb-2" size={40} />
                    <p className="text-sm text-white">{file.name}</p>
                  </>
                ) : (
                  <>
                    <Camera className="text-primary/60 mb-2" size={40} />
                    <p className="text-sm text-gray-400">Toca para tomar foto o subir ticket</p>
                  </>
                )}
              </div>
              <input 
                type="file" 
                accept="image/*" 
                capture="environment" // Esto abre la cámara directo en móviles
                className="hidden" 
                onChange={handleFileChange}
                required
              />
            </label>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="flex items-center justify-center gap-2"
          >
            {loading ? "Enviando..." : <><Upload size={20} /> Enviar Comprobante</>}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
