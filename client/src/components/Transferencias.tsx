import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";

type FormState = {
  sucursal: string;
  orden: string;
  nombre: string;
  whatsapp: string;
  monto: string;
  referencia: string;
};

export default function Transferencias() {
  const [form, setForm] = useState<FormState>({
    sucursal: "",
    orden: "",
    nombre: "",
    whatsapp: "",
    monto: "",
    referencia: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate() {
    const newErrors: Partial<FormState> = {};

    if (!form.sucursal) newErrors.sucursal = "Selecciona una sucursal";
    if (!form.orden) newErrors.orden = "Ingresa el número de orden";
    if (!form.nombre) newErrors.nombre = "Ingresa tu nombre";
    if (!form.whatsapp) newErrors.whatsapp = "Ingresa tu WhatsApp";
    if (!form.monto) newErrors.monto = "Ingresa el monto";
    if (!form.referencia) newErrors.referencia = "Ingresa la referencia";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    toast({
      title: "✅ Transferencia enviada",
      description: "Tu información fue enviada correctamente",
    });

    const mensaje = `
🔥 REGISTRO DE PAGO - YUM YUM

Sucursal: ${form.sucursal}
Orden: ${form.orden}
Nombre: ${form.nombre}
WhatsApp: ${form.whatsapp}
Monto: $${form.monto}
Referencia: ${form.referencia}
`;

    const telefono = "528992559363"; // 👈 CAMBIA AQUÍ EL NÚMERO
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  }

  return (
    <section className="py-24 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-lg bg-card p-8 rounded-xl shadow-xl border border-border"
      >
        <h2 className="text-2xl font-heading text-gold text-center mb-2">
          🔥 REGISTRO DE PAGO 🔥
        </h2>
        <p className="text-center text-muted-foreground mb-6">
          Selecciona tu sucursal e ingresa los datos de tu transferencia
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Sucursal */}
          <select
            className={`w-full bg-secondary p-3 rounded ${
              errors.sucursal ? "border border-red-500" : ""
            }`}
            onChange={(e) => setForm({ ...form, sucursal: e.target.value })}
          >
            <option value="">Selecciona sucursal</option>
            <option value="Sucursal Granjas">Sucursal Granjas</option>
            <option value="Sucursal Cumbres">Sucursal Cumbres</option>
            <option value="Sucursal Torres">Sucursal Torres</option>
          </select>

          {/* Orden */}
          <input
            type="text"
            placeholder="Número de orden"
            className={`w-full bg-secondary p-3 rounded ${
              errors.orden ? "border border-red-500" : ""
            }`}
            onChange={(e) => setForm({ ...form, orden: e.target.value })}
          />

          {/* Nombre */}
          <input
            type="text"
            placeholder="Nombre completo"
            className={`w-full bg-secondary p-3 rounded ${
              errors.nombre ? "border border-red-500" : ""
            }`}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          />

          {/* WhatsApp */}
          <input
            type="tel"
            placeholder="WhatsApp"
            className={`w-full bg-secondary p-3 rounded ${
              errors.whatsapp ? "border border-red-500" : ""
            }`}
            onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
          />

          {/* Monto */}
          <input
            type="number"
            placeholder="Monto ($)"
            className={`w-full bg-secondary p-3 rounded ${
              errors.monto ? "border border-red-500" : ""
            }`}
            onChange={(e) => setForm({ ...form, monto: e.target.value })}
          />

          {/* Referencia */}
          <input
            type="text"
            placeholder="Clave de rastreo / referencia"
            className={`w-full bg-secondary p-3 rounded ${
              errors.referencia ? "border border-red-500" : ""
            }`}
            onChange={(e) => setForm({ ...form, referencia: e.target.value })}
          />

          <button
            type="submit"
            className="w-full bg-gold text-black font-bold py-3 rounded hover:opacity-90 transition"
          >
            Enviar transferencia
          </button>
        </form>
      </motion.div>
    </section>
  );
}
