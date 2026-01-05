import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
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

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-bold text-white uppercase tracking-wider">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                <span>Calle 5 de Mayo #123, Centro, Ciudad de México</span>
              </div>
              <a href="tel:+525512345678" className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+52 (55) 1234-5678</span>
              </a>
              <a href="mailto:hola@yumyum.com" className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors">
                <Mail className="text-primary shrink-0" size={18} />
                <span>hola@yumyum.com</span>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-bold text-white uppercase tracking-wider">Horarios</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Lunes - Jueves</span>
                <span className="text-primary font-medium">1:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Viernes - Sábado</span>
                <span className="text-primary font-medium">1:00 PM - 12:00 AM</span>
              </div>
              <div className="flex justify-between pb-2">
                <span>Domingo</span>
                <span className="text-primary font-medium">1:00 PM - 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2024 YUM-YUM Alitas & Boneless. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>Privacidad</span>
            <span>Términos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
