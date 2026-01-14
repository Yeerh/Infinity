import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-xl text-center rounded-2xl p-10 bg-white/5 border border-white/10 backdrop-blur"
    >
      <h2 className="text-4xl font-extrabold">
        <span className="bg-gradient-to-r from-[#5D2A9B] to-[#502F78] bg-clip-text text-transparent">
          Contato
        </span>
      </h2>

      <p className="mt-4 text-white/70">
        Vamos tirar sua ideia do papel. Envie sua mensagem e retornamos o mais rápido possível.
      </p>

      <form className="mt-8 flex flex-col gap-4">
        <input
          className="rounded-xl px-4 py-3 bg-black/40 border border-white/10 outline-none focus:border-[#5D2A9B]"
          placeholder="Nome"
        />
        <input
          className="rounded-xl px-4 py-3 bg-black/40 border border-white/10 outline-none focus:border-[#5D2A9B]"
          placeholder="Email"
          type="email"
        />
        <textarea
          className="rounded-xl px-4 py-3 bg-black/40 border border-white/10 outline-none focus:border-[#5D2A9B]"
          placeholder="Mensagem"
          rows={4}
        />

        <button
          type="button"
          className="mt-2 rounded-full px-6 py-3 font-semibold bg-gradient-to-r from-[#5D2A9B] to-[#502F78]"
        >
          Enviar
        </button>
      </form>
    </motion.div>
  );
}
