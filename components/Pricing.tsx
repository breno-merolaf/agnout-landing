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
    <section id="planos" className="py-20 lg:py-28" style={{ backgroundColor: "#202020" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
            style={{ backgroundColor: "rgba(45, 90, 39, 0.2)", color: "#8DD889" }}
          >
            Planos e Preços
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight" style={{ color: "#EFEFEF" }}>
            Comece grátis,{" "}
            <span style={{ color: "#6DC267" }}>cresça no seu ritmo</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#AAAAAA" }}>
            Sem surpresas. Sem cobranças escondidas. Upgrade ou downgrade quando quiser.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-2xl p-8 flex flex-col"
              style={
                plan.highlighted
                  ? {
                      backgroundColor: "#2D5A27",
                      boxShadow: "0 8px 40px rgba(45,90,39,0.4)",
                    }
                  : { backgroundColor: "#242424", border: "1px solid #333333" }
              }
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    <Zap className="w-3 h-3" strokeWidth={2.5} />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="text-sm font-semibold uppercase tracking-widest mb-3"
                  style={{ color: plan.highlighted ? "#A8D5A2" : "#666666" }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-end gap-2 mb-2">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: plan.highlighted ? "#FFFFFF" : "#EFEFEF" }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="text-sm pb-1"
                    style={{ color: plan.highlighted ? "#A8D5A2" : "#666666" }}
                  >
                    {plan.priceSub}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: plan.highlighted ? "#C8E6C4" : "#999999" }}
                >
                  {plan.description}
                </p>
              </div>

              <div
                className="h-px mb-6"
                style={{
                  backgroundColor: plan.highlighted
                    ? "rgba(255,255,255,0.15)"
                    : "#333333",
                }}
              />

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: plan.highlighted ? "#6DC267" : "#2D5A27" }}
                      strokeWidth={2}
                    />
                    <span
                      className="text-sm"
                      style={{ color: plan.highlighted ? "#E0F0DC" : "#BBBBBB" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm ${
                  plan.highlighted ? "btn-white" : "btn-outlined"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-10" style={{ color: "#555555" }}>
          Preços em reais. O plano Pro é cobrado mensalmente.{" "}
          <span className="font-medium" style={{ color: "#777777" }}>
            Cancele quando quiser.
          </span>
        </p>
      </div>
    </section>
  );
}
