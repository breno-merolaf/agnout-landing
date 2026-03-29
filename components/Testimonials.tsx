import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Eduardo Mendonça",
    role: "Proprietário",
    farm: "Fazenda Santa Clara — GO",
    avatar: "CM",
    color: "#1C5C1C",
    quote:
      "Antes usávamos caderno e WhatsApp para tudo. Com o agNOUT, cada atividade fica registrada com foto e data, e consigo acompanhar o que acontece na fazenda pelo celular mesmo estando na cidade. Mudou completamente a gestão.",
  },
  {
    name: "Ana Paula Ribeiro",
    role: "Gestora Administrativa",
    farm: "Grupo Cerrado Verde — MT",
    avatar: "AR",
    color: "#2563eb",
    quote:
      "A parte de lembretes é o que mais uso. Vacinações, contratos, manutenções — tudo tem data e aparece pra minha equipe na hora certa. O Seu Chico IA surpreende quando pede um resumo do mês: ele traz exatamente o que eu preciso.",
  },
  {
    name: "Roberto Farias",
    role: "Gerente de Pecuária",
    farm: "Estância São Benedito — MS",
    avatar: "RF",
    color: "#d97706",
    quote:
      "Trabalho com três fazendas diferentes e o agNOUT deixa tudo separado mas num só lugar. A equipe de campo adotou fácil — é simples de usar no celular, mesmo sem internet boa. Recomendo pra qualquer produtor que quer organização de verdade.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
            style={{ backgroundColor: "#e8f5e9", color: "#1C5C1C" }}
          >
            Depoimentos
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            O que dizem nossos{" "}
            <span style={{ color: "#1C5C1C" }}>produtores</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Fazendas de todo o Brasil já usam o agNOUT para organizar sua
            operação do campo ao escritório.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative flex flex-col rounded-2xl p-6 border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Quote icon */}
              <Quote
                className="w-8 h-8 mb-4 opacity-10"
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
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-400">
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
