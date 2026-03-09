import { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, MapPin, Hash, MessageCircle, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Transferencias() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  // Estados para capturar la información del formulario
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sucursal, setSucursal] = useState("granjas");
  const [orden, setOrden] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Configuración del mensaje "bonito" para WhatsApp
    const mensaje = 
      `*— NUEVO REGISTRO DE PAGO —* 🍗%0A` +
      `*YUM YUM ALITAS Y BONELESS*%0A%0A` +
      `👤 *Cliente:* ${nombre}%0A` +
      `📞 *Teléfono:* ${telefono}%0A` +
      `📍 *Sucursal:* ${sucursal.toUpperCase()}%0A` +
      `🆔 *# de Orden:* ${orden}%0A%0A` +
      `━━━━━━━━━━━━━━━━━━%0A` +
      `✨ *Adjunto mi foto de pago aquí abajo* ✨`;

    const numeroWhatsApp = "528994698833"; // Número de Yum Yum

    setTimeout(() => {
      // Abre WhatsApp en una nueva pestaña con el mensaje listo
      window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, "_blank");
      setLoading(false);
      
      toast({
        title: "🚀 ¡WhatsApp abierto!",
        description: "Recuerda adjuntar tu captura antes de enviar el chat.",
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
        
        {/* Cuadro de instrucciones para el cliente */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3 mb-6 flex gap-3 items-start">
          <Info className="text-blue-400 shrink-0 mt-1" size={20} />
          <p className="text-[11px] text-blue-100 leading-relaxed">
            <span className="font-bold block text-blue-400 mb-1 text-xs">⚠️ PASO FINAL:</span>
            Se abrirá WhatsApp con tus datos listos. **¡Solo adjunta tu comprobante y dale enviar!**
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Fila: Sucursal y Orden */}
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
              <label className="text-[10px] font-bold text-gray-500 uppercase ml-1"># Orden</label>
              <div className="relative flex items-center">
                <Hash className="absolute left-3 text-yellow-500" size={16} />
                <input 
                  type="number" 
                  placeholder="000" 
                  required 
                  value={orden}
                  onChange={(e) => setOrden(e.target.value)}
                  className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-2.5 pl-9 text-white outline-none focus:border-yellow-500 transition-all" 
                />
              </div>
            </div>
          </div>

          {/* Campo: Nombre */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Nombre completo</label>
            <div className="relative flex items-center">
              <User className="absolute left-3 text-yellow-500" size={16} />
