import SplitText from "@/components/ui/SplitText";
import logo from "@/assets/logo.png";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      
      {/* LOGO */}
      <img
        src={logo}
        alt="InfinityWeb Logo"
        className="w-24 md:w-28 mb-6"
      />

      {/* NOME COM SPLITTEXT */}
      <SplitText
        text="InfinityWeb"
        className="text-5xl md:text-7xl font-extrabold"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />

      {/* SUBTEXTO (opcional) */}
      <p className="mt-6 max-w-xl text-white/70 text-lg">
        Desenvolvimento web com identidade, performance e propósito.
      </p>
    </section>
  );
}
