import { motion } from "framer-motion";

import rastromovilleImg from "@/assets/rastromoville.png";
import pernambucoImg from "@/assets/pernambuco.png";
import recadastramentoImg from "@/assets/recadastramento.png";

const projects = [
  {
    title: "Rastromoville",
    description:
      "Plataforma focada na gestão de rotas e tráfego de caminhões, oferecendo controle, organização e eficiência logística.",
    image: rastromovilleImg,
  },
  {
    title: "Pernambuco em Foco",
    description:
      "Portal de blog e turismo dedicado ao estado de Pernambuco, com conteúdos sobre viagens, cultura e pontos turísticos.",
    image: pernambucoImg,
  },
  {
    title: "Recadastramento – Prefeitura do Paulista",
    description:
      "Sistema desenvolvido para auxiliar servidores efetivos no processo de recadastramento funcional, de forma simples e segura.",
    image: recadastramentoImg,
  },
];

export default function Projects() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          <span className="bg-gradient-to-r from-[#5D2A9B] to-[#502F78] bg-clip-text text-transparent">
            Projetos
          </span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur"
            >
              {/* IMAGEM */}
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={`Projeto ${project.title}`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* CONTEÚDO */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-white/70 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
