import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Menu from "@/components/sections/menu";
import Promotions from "@/components/sections/promotions";
import Gallery from "@/components/sections/gallery";
import Reservations from "@/components/sections/reservations";
import Reviews from "@/components/sections/reviews";
import Transferencias from "@/components/Transferencias";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Menu />
        <Promotions />
        <Gallery />

        {/* 🔥 NUEVA SECCIÓN DE TRANSFERENCIAS */}
        <Transferencias />

        <Reservations />
        <Reviews />
      </main>

      <Footer />
    </div>
  );
}
