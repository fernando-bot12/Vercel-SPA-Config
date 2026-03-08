import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

type FormState = {
  sucursal: string;
  orden: string;
  nombre: string;
  whatsapp: string;
  monto: string;
  referencia: string;
};

export default function Transferencias() {
  const { toast } = useToast();
  const [form, setForm] = useState<FormState>({
    sucursal: "",
    orden: "",
    nombre: "",
    whatsapp: "",
    monto: "",
    referencia: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría tu lógica de envío
    toast({
      title: "✅ Transferencia enviada",
      description: "Estamos validando tu pago. ¡Gracias!",
    });
  };

  return (
    <section id="transferencias" className="transferencias-section">
      {/* Logo con animación de entrada suave */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="transferencias-logo"
      >
        <img src="/yumyum.jpg" alt="Yum Yum Logo" />
      </motion.div>

      {/* Card principal con Glassmorphism y Animación */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="transferencias-card"
      >
        <h2>🔥 Registro de Pago 🔥</h2>
        <p>Selecciona tu sucursal e ingresa los datos de tu transferencia.</p>

        <form onSubmit={handleSubmit}>
          <label>Selecciona Sucursal</label>
          <select 
            required 
            value={form.sucursal}
            onChange={(e) => setForm({...form, sucursal: e.target.value})}
          >
            <option value="">Seleccionar sucursal...</option>
            <option value="granjas">Sucursal Granjas</option>
            <option value="cumbres">Sucursal Cumbres</option>
          </select>

          <label>Número de Orden</label>
          <input 
            type="text" 
            placeholder="Ej. 000" 
            required 
            value={form.orden}
            onChange={(e) => setForm({...form, orden: e.target.value})}
          />

          <label>Nombre Completo</label>
          <input 
            type="text" 
            placeholder="Tu nombre" 
            required 
            value={form.nombre}
            onChange={(e) => setForm({...form, nombre: e.target.value})}
          />

          <div className="transferencias-row">
            <div>
              <label>WhatsApp</label>
              <input 
                type="tel" 
                placeholder="5512345678" 
                required 
                value={form.whatsapp}
                onChange={(e) => setForm({...form, whatsapp: e.target.value})}
              />
            </div>
            <div>
              <label>Monto ($)</label>
              <input 
                type="number" 
                placeholder="0" 
                required 
                value={form.monto}
                onChange={(e) => setForm({...form, monto: e.target.value})}
              />
            </div>
          </div>

          <label>Clave de Rastreo / Referencia</label>
          <input 
            type="text" 
            placeholder="Ej. 1234567" 
            required 
            value={form.referencia}
            onChange={(e) => setForm({...form, referencia: e.target.value})}
          />

          <button type="submit">
            Confirmar Transferencia
          </button>
        </form>
      </motion.div>
    </section>
  );
}
