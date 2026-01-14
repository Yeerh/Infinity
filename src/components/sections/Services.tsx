import { motion } from "framer-motion";

const services = [
  {
    title: "Sites Profissionais",
    desc: "Sites modernos, responsivos e otimizados para conversão.",
  },
  {
    title: "Sistemas Web",
    desc: "Dashboards, painéis administrativos e automações sob medida.",
  },
  {
    title: "Assinatura / Suporte",
    desc: "Manutenção, melhorias contínuas, performance e segurança.",
  },
];

export default function Services() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-extrabold text-center">
          <span className="bg-gradient-to-r from-[#5D2A9B] to-[#502F78] bg-clip-text text-transparent">
            Serviços
          </span>
        </h2>

        <p className="mt-4 text-center text-white/60 max-w-2xl mx-auto">
          Entregamos soluções com identidade, performance e escalabilidade.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl p-8 bg-gradient-to-br from-[#5D2A9B]/25 to-[#502F78]/15 border border-white/10 backdrop-blur"
            >
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
