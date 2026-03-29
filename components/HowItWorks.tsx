import { Building2, UserPlus, Smartphone } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Building2,
    title: "Admin cria a fazenda",
    description:
      "O administrador cadastra a propriedade no agNOUT, define o nome, configura as pastas e estrutura a organização conforme a realidade da fazenda.",
  },
  {
    number: "02",
    icon: UserPlus,
    title: "Convida a equipe por e-mail",
    description:
      "Com um clique, você envia convites para peões, gestores e agrônomos. Cada membro recebe acesso personalizado de acordo com seu papel na operação.",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Equipe registra o campo pelo celular",
    description:
      "No dia a dia, cada colaborador registra o que acontece diretamente pelo smartphone — com foto, data, localização e assinatura digital. Sem papel.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
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
            Como funciona
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Comece em{" "}
            <span style={{ color: "#1C5C1C" }}>3 passos simples</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Em menos de 10 minutos, sua fazenda já está organizada e sua equipe
            conectada. Sem treinamentos complicados.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-14 left-1/2 -translate-x-1/2 w-2/3 h-0.5"
            style={{ backgroundColor: "#e8f5e9" }}
          />

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative flex flex-col items-center text-center">
                  {/* Step number + icon */}
                  <div className="relative mb-6">
                    {/* Outer ring */}
                    <div
                      className="w-28 h-28 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#e8f5e9" }}
                    >
                      {/* Inner circle */}
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center text-white shadow-md"
                        style={{ backgroundColor: "#1C5C1C" }}
                      >
                        <Icon className="w-9 h-9" strokeWidth={1.5} />
                      </div>
                    </div>
                    {/* Step number badge */}
                    <div
                      className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white flex items-center justify-center text-xs font-bold shadow-sm border-2"
                      style={{ color: "#1C5C1C", borderColor: "#1C5C1C" }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="https://app.agnout.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-white font-semibold rounded-xl text-base transition-all hover:shadow-lg hover:opacity-90"
            style={{ backgroundColor: "#1C5C1C" }}
          >
            Criar minha fazenda grátis
          </a>
          <p className="text-sm text-gray-400 mt-3">
            Sem cartão de crédito. Sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
}
