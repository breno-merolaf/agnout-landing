import {
  FileText,
  Users,
  Bell,
  Bot,
  BarChart2,
  Building2,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Registros de Campo",
    description:
      "Crie e organize anotações em pastas como Pecuária, Agricultura e Administrativo. Adicione fotos, datas e atribua responsáveis a cada registro.",
    color: "#16a34a",
    bg: "#f0fdf4",
  },
  {
    icon: Users,
    title: "Gestão de Equipe",
    description:
      "Convide colaboradores por e-mail e defina permissões precisas: Admin, Gestor, Escritor ou Visualizador. Controle quem vê e edita cada informação.",
    color: "#2563eb",
    bg: "#eff6ff",
  },
  {
    icon: Bell,
    title: "Lembretes",
    description:
      "Programe avisos para vacinações, adubações, vencimentos e qualquer tarefa recorrente da fazenda. Nunca mais perca um prazo importante.",
    color: "#d97706",
    bg: "#fffbeb",
  },
  {
    icon: Bot,
    title: "Seu Chico IA",
    description:
      "O assistente inteligente analisa os dados da sua fazenda e responde perguntas, sugere ações e gera insights baseados no histórico de registros.",
    color: "#7c3aed",
    bg: "#f5f3ff",
  },
  {
    icon: BarChart2,
    title: "Relatórios e Dashboards",
    description:
      "Visualize gráficos de registros por estrutura, usuários ativos, evolução ao longo do tempo e muito mais — tudo em tempo real.",
    color: "#0891b2",
    bg: "#ecfeff",
  },
  {
    icon: Building2,
    title: "Multi-Fazenda",
    description:
      "Gerencie várias propriedades em uma só conta. Cada fazenda tem seus dados completamente isolados, com equipe e configurações independentes.",
    color: "#1C5C1C",
    bg: "#f0fdf4",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
            style={{ backgroundColor: "#e8f5e9", color: "#1C5C1C" }}
          >
            Funcionalidades
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Tudo que sua fazenda precisa,{" "}
            <span style={{ color: "#1C5C1C" }}>em um só app</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Do campo ao escritório, o agNOUT centraliza informações, simplifica
            a comunicação e ajuda a sua operação a funcionar com mais eficiência.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl p-6 border border-gray-100 bg-white transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: feature.bg }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: feature.color }}
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
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
