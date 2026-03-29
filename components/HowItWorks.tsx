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
      style={{ backgroundColor: "#202020" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
            style={{ backgroundColor: "rgba(45, 90, 39, 0.2)", color: "#8DD889" }}
          >
            Como funciona
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight" style={{ color: "#EFEFEF" }}>
            Comece em{" "}
            <span style={{ color: "#6DC267" }}>3 passos simples</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#AAAAAA" }}>
            Em menos de 10 minutos, sua fazenda já está organizada e sua equipe
            conectada. Sem treinamentos complicados.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-14 left-1/2 -translate-x-1/2 w-2/3 h-0.5"
            style={{ backgroundColor: "#333333" }}
          />

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div
                      className="w-28 h-28 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "rgba(45, 90, 39, 0.15)" }}
                    >
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center text-white shadow-md"
                        style={{ backgroundColor: "#2D5A27" }}
                      >
                        <Icon className="w-9 h-9" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div
                      className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shadow-sm border-2"
                      style={{
                        backgroundColor: "#202020",
                        color: "#6DC267",
                        borderColor: "#2D5A27",
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-3" style={{ color: "#EFEFEF" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#999999" }}>
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-14">
          <a
            href="https://app.agnout.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 font-semibold rounded-xl text-base"
          >
            Criar minha fazenda grátis
          </a>
          <p className="text-sm mt-3" style={{ color: "#666666" }}>
            Sem cartão de crédito. Sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
}
