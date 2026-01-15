// src/pages/Home.tsx
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import About from "@/components/sections/About";
import WhyChoose from "@/components/sections/WhyChoose";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import WhoIsInfinity from "@/components/sections/WhoIsInfinity";

export default function Home() {
  return (
    <main className="text-white">
      <Navbar />

      {/* SOBRE (INÍCIO) */}
     <section id="about">
  <About />
</section>

<section id="why">
  <WhyChoose />
</section>

<section id="who">
  <WhoIsInfinity />
</section>

<section id="services">
  <Services />
</section>

      {/* PROJETOS (3 cards com foto) */}
      <section id="projects">
        <Projects />
      </section>

      {/* CONTATO CENTRALIZADO ANTES DO FOOTER */}
      <section id="contact" className="flex justify-center py-24 px-6">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
