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
🔥 CONFIRMACIÓN DE TRANSFERENCIA 🔥

🏪 Sucursal: ${sucursal}
🧾 Orden: ${orden}
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
      <div className="transferencias-card">
        <h2>🔥 REGISTRO DE PAGO 🔥</h2>
        <p>Selecciona tu sucursal e ingresa los datos de tu transferencia.</p>

        <select value={sucursal} onChange={(e) => setSucursal(e.target.value)}>
          <option>Sucursal Granjas</option>
          <option>Sucursal Cumbres</option>
        </select>

        <input placeholder="Número de orden" value={orden} onChange={e => setOrden(e.target.value)} />
        <input placeholder="Nombre completo" value={nombre} onChange={e => setNombre(e.target.value)} />
        <input placeholder="WhatsApp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
        <input type="number" placeholder="Monto $" value={monto} onChange={e => setMonto(e.target.value)} />
        <input placeholder="Referencia / Clave de rastreo" value={referencia} onChange={e => setReferencia(e.target.value)} />

        <button onClick={enviarWhatsApp}>
          Confirmar transferencia
        </button>
      </div>
    </section>
  );
}
