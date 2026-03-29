import { CheckCircle2, ArrowRight, Zap } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "Grátis",
    priceSub: "para sempre",
    description: "Ideal para produtores que querem começar a organizar a fazenda.",
    cta: "Criar conta grátis",
    ctaHref: "https://app.agnout.com.br",
    highlighted: false,
    features: [
      "Até 5 usuários",
      "Registros ilimitados",
      "Fotos nos registros",
      "Lembretes com vencimento",
      "1 fazenda",
      "Suporte por e-mail",
    ],
  },
  {
    name: "Pro",
    price: "R$ 197",
    priceSub: "por mês",
    description:
      "Para operações que precisam de mais escala, inteligência e controle.",
    cta: "Assinar plano Pro",
    ctaHref: "https://app.agnout.com.br",
    highlighted: true,
    badge: "Mais popular",
    features: [
      "Usuários ilimitados",
      "Registros ilimitados",
      "Fotos nos registros",
      "Lembretes com vencimento",
      "Múltiplas fazendas",
      "IA Seu Chico",
      "Relatórios avançados e dashboards",
      "Exportação de dados",
      "Suporte prioritário",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="planos"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#f8faf8" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
            style={{ backgroundColor: "#e8f5e9", color: "#1C5C1C" }}
          >
            Planos e Preços
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Comece grátis,{" "}
            <span style={{ color: "#1C5C1C" }}>cresça no seu ritmo</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Sem surpresas. Sem cobranças escondidas. Upgrade ou downgrade quando
            quiser.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "shadow-2xl"
                  : "border border-gray-200 bg-white shadow-sm"
              }`}
              style={
                plan.highlighted
                  ? {
                      backgroundColor: "#1C5C1C",
                      color: "white",
                    }
                  : {}
              }
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    <Zap className="w-3 h-3" strokeWidth={2.5} />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <div className="mb-6">
                <h3
                  className={`text-sm font-semibold uppercase tracking-widest mb-3 ${
                    plan.highlighted ? "text-green-200" : "text-gray-500"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-end gap-2 mb-2">
                  <span
                    className={`text-4xl font-bold ${
                      plan.highlighted ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm pb-1 ${
                      plan.highlighted ? "text-green-200" : "text-gray-400"
                    }`}
                  >
                    {plan.priceSub}
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    plan.highlighted ? "text-green-100" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Divider */}
              <div
                className={`h-px mb-6 ${
                  plan.highlighted ? "bg-white/20" : "bg-gray-100"
                }`}
              />

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? "text-green-300" : ""
                      }`}
                      style={!plan.highlighted ? { color: "#1C5C1C" } : {}}
                      strokeWidth={2}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-green-50" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlighted
                    ? "bg-white hover:bg-green-50"
                    : "border-2 hover:shadow-md"
                }`}
                style={
                  plan.highlighted
                    ? { color: "#1C5C1C" }
                    : {
                        color: "#1C5C1C",
                        borderColor: "#1C5C1C",
                      }
                }
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Fine print */}
        <p className="text-center text-sm text-gray-400 mt-10">
          Preços em reais. O plano Pro é cobrado mensalmente.{" "}
          <span className="font-medium">Cancele quando quiser.</span>
        </p>
      </div>
    </section>
  );
}
