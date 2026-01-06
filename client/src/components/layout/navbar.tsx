import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, MapPin, Phone, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Sobre Nosotros", href: "#about" },
    { name: "Menú", href: "#menu" },
    { name: "Promociones", href: "#promos" },
    { name: "Galería", href: "#gallery" },
    { name: "Contacto", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-black/90 backdrop-blur-md border-white/10 py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-heading font-bold uppercase tracking-tighter text-white">
          YUM<span className="text-primary">-YUM</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium uppercase tracking-wide text-white/80 hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* CTA & Socials */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://www.facebook.com/YumYumAlitasYBoneless?locale=es_LA" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
            <Facebook size={20} />
          </a>
          <Button 
            onClick={() => scrollToSection("#reservations")}
            className="bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-wider"
          >
            Reservar
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col space-y-6 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-lg font-heading uppercase text-white hover:text-primary text-left"
            >
              {link.name}
            </button>
          ))}
          <Button 
            onClick={() => scrollToSection("#reservations")}
            className="w-full bg-primary text-black font-bold uppercase"
          >
            Reservar Mesa
          </Button>
        </div>
      )}
    </nav>
  );
}
