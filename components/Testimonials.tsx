import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Eduardo Mendonça",
    role: "Proprietário",
    farm: "Fazenda Santa Clara — GO",
    avatar: "CM",
    color: "#6DC267",
    quote:
      "Antes usávamos caderno e WhatsApp para tudo. Com o agNOUT, cada atividade fica registrada com foto e data, e consigo acompanhar o que acontece na fazenda pelo celular mesmo estando na cidade. Mudou completamente a gestão.",
  },
  {
    name: "Ana Paula Ribeiro",
    role: "Gestora Administrativa",
    farm: "Grupo Cerrado Verde — MT",
    avatar: "AR",
    color: "#5B9BD5",
    quote:
      "A parte de lembretes é o que mais uso. Vacinações, contratos, manutenções — tudo tem data e aparece pra minha equipe na hora certa. O Seu Chico IA surpreende quando pede um resumo do mês: ele traz exatamente o que eu preciso.",
  },
  {
    name: "Roberto Farias",
    role: "Gerente de Pecuária",
    farm: "Estância São Benedito — MS",
    avatar: "RF",
    color: "#E6A817",
    quote:
      "Trabalho com três fazendas diferentes e o agNOUT deixa tudo separado mas num só lugar. A equipe de campo adotou fácil — é simples de usar no celular, mesmo sem internet boa. Recomendo pra qualquer produtor que quer organização de verdade.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#1C1C1C" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
            style={{ backgroundColor: "rgba(45, 90, 39, 0.2)", color: "#8DD889" }}
          >
            Depoimentos
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight" style={{ color: "#EFEFEF" }}>
            O que dizem nossos{" "}
            <span style={{ color: "#6DC267" }}>produtores</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#AAAAAA" }}>
            Fazendas de todo o Brasil já usam o agNOUT para organizar sua
            operação do campo ao escritório.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative flex flex-col rounded-2xl p-6 border transition-shadow"
              style={{ backgroundColor: "#242424", borderColor: "#333333" }}
            >
              {/* Quote icon */}
              <Quote
                className="w-8 h-8 mb-4 opacity-20"
                style={{ color: t.color }}
                strokeWidth={1.5}
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "#BBBBBB" }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div
                className="flex items-center gap-3 pt-4 border-t"
                style={{ borderColor: "#333333" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: t.color + "33", color: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "#EFEFEF" }}>
                    {t.name}
                  </div>
                  <div className="text-xs" style={{ color: "#666666" }}>
                    {t.role} · {t.farm}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
