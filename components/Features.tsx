import { FileText, Users, Bell, Bot, BarChart2, Building2 } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Registros de Campo",
    description:
      "Crie e organize anotações em pastas como Pecuária, Agricultura e Administrativo. Adicione fotos, datas e atribua responsáveis a cada registro.",
    color: "#4CAF50",
    bg: "rgba(76, 175, 80, 0.12)",
  },
  {
    icon: Users,
    title: "Gestão de Equipe",
    description:
      "Convide colaboradores por e-mail e defina permissões precisas: Admin, Gestor, Escritor ou Visualizador. Controle quem vê e edita cada informação.",
    color: "#5B9BD5",
    bg: "rgba(91, 155, 213, 0.12)",
  },
  {
    icon: Bell,
    title: "Lembretes",
    description:
      "Programe avisos para vacinações, adubações, vencimentos e qualquer tarefa recorrente da fazenda. Nunca mais perca um prazo importante.",
    color: "#E6A817",
    bg: "rgba(230, 168, 23, 0.12)",
  },
  {
    icon: Bot,
    title: "Seu Chico IA",
    description:
      "O assistente inteligente analisa os dados da sua fazenda e responde perguntas, sugere ações e gera insights baseados no histórico de registros.",
    color: "#A78BFA",
    bg: "rgba(167, 139, 250, 0.12)",
  },
  {
    icon: BarChart2,
    title: "Relatórios e Dashboards",
    description:
      "Visualize gráficos de registros por estrutura, usuários ativos, evolução ao longo do tempo e muito mais — tudo em tempo real.",
    color: "#22D3EE",
    bg: "rgba(34, 211, 238, 0.12)",
  },
  {
    icon: Building2,
    title: "Multi-Fazenda",
    description:
      "Gerencie várias propriedades em uma só conta. Cada fazenda tem seus dados completamente isolados, com equipe e configurações independentes.",
    color: "#6DC267",
    bg: "rgba(45, 90, 39, 0.15)",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28" style={{ backgroundColor: "#1C1C1C" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
            style={{ backgroundColor: "rgba(45, 90, 39, 0.2)", color: "#8DD889" }}
          >
            Funcionalidades
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight" style={{ color: "#EFEFEF" }}>
            Tudo que sua fazenda precisa,{" "}
            <span style={{ color: "#6DC267" }}>em um só app</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#AAAAAA" }}>
            Do campo ao escritório, o agNOUT centraliza informações, simplifica
            a comunicação e ajuda a sua operação a funcionar com mais eficiência.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="card-dark rounded-2xl p-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: feature.bg }}
                >
                  <Icon className="w-6 h-6" style={{ color: feature.color }} strokeWidth={2} />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: "#EFEFEF" }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#999999" }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
