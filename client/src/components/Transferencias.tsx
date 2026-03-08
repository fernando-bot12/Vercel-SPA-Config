import { useState } from "react";

export default function Transferencias() {
  const [sucursal, setSucursal] = useState("Sucursal Granjas");
  const [orden, setOrden] = useState("");
  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [monto, setMonto] = useState("");
  const [referencia, setReferencia] = useState("");

  const enviarWhatsApp = () => {
    const mensaje = `
🔥 REGISTRO DE PAGO 🔥

🏪 Sucursal: ${sucursal}
🧾 Número de orden: ${orden}
👤 Nombre: ${nombre}
📱 WhatsApp: ${whatsapp}
💰 Monto: $${monto}
🔑 Referencia: ${referencia}
    `;

    const telefono = "8992559363";
    const url = `https://wa.me/52${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="transferencias-section">
      {/* 🛑 AQUÍ ESTABA EL LOGO QUE HE ELIMINADO 🛑 */}

      <div className="transferencias-card">
        <h2>🔥 REGISTRO DE PAGO 🔥</h2>
        <p>Selecciona tu sucursal e ingresa los datos de tu transferencia.</p>

        <label>Selecciona Sucursal</label>
        <select value={sucursal} onChange={(e) => setSucursal(e.target.value)}>
          <option>Sucursal Granjas</option>
          <option>Sucursal Cumbres</option>
          <option>Sucursal Torres</option>
        </select>

        <label>Número de Orden</label>
        <input
          placeholder="Ej. 000"
          value={orden}
          onChange={(e) => setOrden(e.target.value)}
        />

        <label>Nombre Completo</label>
        <input
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <div className="transferencias-row">
          <div>
            <label>WhatsApp</label>
            <input
              placeholder="5512345678"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
          </div>

          <div>
            <label>Monto ($)</label>
            <input
              type="number"
              placeholder="0"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
            />
          </div>
        </div>

        <label>Clave de Rastreo / Referencia</label>
        <input
          placeholder="Ej. 1234567"
          value={referencia}
          onChange={(e) => setReferencia(e.target.value)}
        />

        <button onClick={enviarWhatsApp}>
          Confirmar transferencia
        </button>
      </div>
    </section>
  );
}
