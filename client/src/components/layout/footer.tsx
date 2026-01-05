import { Facebook, Instagram, Twitter, MapPin, Phone, MessageSquare, Clock } from "lucide-react";

export default function Footer() {
  const sucursales = [
    {
      name: "Sucursal Granjas",
      address: "Avenida Central, entre calle Décima y Onceava",
      phone: "899 454 8738",
      whatsapp: "899 467 6569",
      hours: "8:00 a.m. a 2:00 a.m."
    },
    {
      name: "Sucursal Cumbres",
      address: "Poniente 1, esquina con Calle 1",
      phone: "899 445 1883",
      whatsapp: "899 155 7828",
      hours: "3:00 p.m. a 12:00 a.m."
    },
    {
      name: "Sucursal Torres",
      address: "Ampliación Tamaulipas, Av. Reynosa #1311",
      phone: "899 740 4572",
      whatsapp: "899 155 5564",
      hours: "3:00 p.m. a 12:00 a.m."
    }
  ];

  return (
    <footer id="contact" className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-heading font-bold text-white uppercase">
              YUM<span className="text-primary">-YUM</span>
            </h3>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Especialistas en alitas y boneless con el sabor urbano más intenso de la ciudad. Calidad, ambiente y buena vibra en cada bocado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Sucursales */}
          {sucursales.map((sucursal, index) => (
            <div key={index} className="space-y-6">
              <h4 className="text-lg font-heading font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <MapPin className="text-primary" size={18} />
                {sucursal.name}
              </h4>
              <div className="space-y-4 text-sm">
                <div className="text-gray-300 leading-tight">
                  {sucursal.address}
                </div>
                <div className="space-y-2">
                  <a href={`tel:${sucursal.phone.replace(/\s/g, '')}`} className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors">
                    <Phone className="text-primary shrink-0" size={16} />
                    <span>{sucursal.phone}</span>
                  </a>
                  <a href={`https://wa.me/${sucursal.whatsapp.replace(/\s/g, '')}`} className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors">
                    <MessageSquare className="text-primary shrink-0" size={16} />
                    <span>{sucursal.whatsapp}</span>
                  </a>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Clock className="text-primary shrink-0" size={16} />
                    <span>Lunes a Domingo<br/>{sucursal.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} YUM-YUM Alitas & Boneless. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>Privacidad</span>
            <span>Términos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
