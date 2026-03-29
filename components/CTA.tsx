import { ArrowRight, Leaf } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: "#0d3d0d" }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
        style={{ backgroundColor: "#2d7a2d" }}
      />
      <div
        className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full opacity-10"
        style={{ backgroundColor: "#1C5C1C" }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        >
          <Leaf className="w-8 h-8 text-green-300" strokeWidth={1.5} />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
          Comece a organizar sua fazenda{" "}
          <span className="text-green-300">hoje mesmo</span>
        </h2>

        <p className="text-lg text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Mais de 50 propriedades já usam o agNOUT. Crie sua conta grátis em
          menos de 2 minutos e experimente tudo sem cartão de crédito.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.agnout.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white font-bold rounded-xl text-base transition-all hover:bg-green-50 hover:shadow-xl hover:-translate-y-0.5"
            style={{ color: "#1C5C1C" }}
          >
            Criar minha conta grátis
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#planos"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl text-base transition-all hover:bg-white/20"
          >
            Ver planos
          </a>
        </div>

        <p className="text-sm text-green-300/70 mt-6">
          Grátis para sempre no plano Básico. Sem cartão de crédito.
        </p>
      </div>
    </section>
  );
}
