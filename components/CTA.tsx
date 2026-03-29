import { ArrowRight, Leaf } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: "#141414" }}
    >
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
        style={{ backgroundColor: "#2D5A27" }}
      />
      <div
        className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full opacity-10"
        style={{ backgroundColor: "#2D5A27" }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto"
          style={{ backgroundColor: "rgba(45, 90, 39, 0.25)" }}
        >
          <Leaf className="w-8 h-8" style={{ color: "#6DC267" }} strokeWidth={1.5} />
        </div>

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight"
          style={{ color: "#EFEFEF" }}
        >
          Comece a organizar sua fazenda{" "}
          <span style={{ color: "#6DC267" }}>hoje mesmo</span>
        </h2>

        <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: "#AAAAAA" }}>
          Mais de 50 propriedades já usam o agNOUT. Crie sua conta grátis em
          menos de 2 minutos e experimente tudo sem cartão de crédito.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.agnout.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-base hover:-translate-y-0.5 transition-transform"
          >
            Criar minha conta grátis
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#planos"
            className="btn-secondary inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl text-base"
          >
            Ver planos
          </a>
        </div>

        <p className="text-sm mt-6" style={{ color: "#555555" }}>
          Grátis para sempre no plano Básico. Sem cartão de crédito.
        </p>
      </div>
    </section>
  );
}
