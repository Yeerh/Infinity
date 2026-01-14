export default function WhoIsInfinity() {
  return (
    <section className="relative py-20 sm:py-28 px-6 overflow-hidden">
      {/* background em degradê */}

      <div className="mx-auto max-w-6xl">
        {/* Mobile: centralizado | Desktop: alinhado à direita */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-2xl text-center lg:text-left">
            {/* ícone infinito */}
            <div className="mb-5 text-white text-3xl sm:text-4xl">∞</div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight">
              Quem é a InfinityWeb?
            </h2>

            {/* Logo-text responsivo (não corta no mobile) */}
            <h3 className="mt-6 font-extrabold tracking-tight leading-none break-words">
              <span className="block text-5xl sm:text-6xl md:text-7xl text-white">
                INFINITY
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl text-[#7c5cff]">
                WEB
              </span>
            </h3>

            <p className="mt-8 text-lg sm:text-xl text-white/80 leading-relaxed">
              É a marca que você está criando para oferecer serviços de
              desenvolvimento web.
            </p>

            <p className="mt-6 text-base sm:text-lg text-white/65 leading-relaxed">
              Trata-se de um estúdio digital especializado em criar sites, lojas
              online e blogs para pessoas e pequenos negócios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
