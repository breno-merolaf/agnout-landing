import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative pt-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #141414 0%, #1C1C1C 50%, #1E221E 100%)",
      }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border"
              style={{
                backgroundColor: "rgba(45, 90, 39, 0.2)",
                borderColor: "rgba(45, 90, 39, 0.4)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "#6DC267" }}
              />
              <span className="text-sm font-medium" style={{ color: "#8DD889" }}>
                Gestão agrícola inteligente
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight mb-6 tracking-tight"
              style={{ color: "#EFEFEF" }}
            >
              Tudo que acontece na sua fazenda,{" "}
              <span style={{ color: "#6DC267" }}>registrado e acessível</span> de
              qualquer lugar
            </h1>

            <p className="text-lg mb-8 leading-relaxed max-w-lg" style={{ color: "#AAAAAA" }}>
              O agNOUT organiza os registros do campo, a equipe e os lembretes
              da sua fazenda em um só lugar — com IA para te ajudar a tomar
              melhores decisões.
            </p>

            {/* Trust bullets */}
            <ul className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
              {["Registros ilimitados", "Acesso pelo celular", "Multi-fazenda"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "#AAAAAA" }}
                  >
                    <CheckCircle2
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "#6DC267" }}
                    />
                    {item}
                  </li>
                )
              )}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://app.agnout.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-xl text-base"
              >
                Começar agora
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#features"
                className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-xl text-base"
              >
                <Play className="w-4 h-4" />
                Ver funcionalidades
              </a>
            </div>
          </div>

          {/* Right: App Mockup — mantido conforme original */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-72">
              {/* Phone frame */}
              <div
                className="relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
                style={{ border: "10px solid #0d3d0d", aspectRatio: "9/19" }}
              >
                {/* Status bar */}
                <div
                  className="flex items-center justify-between px-5 py-2 text-white text-xs font-medium"
                  style={{ backgroundColor: "#1C5C1C" }}
                >
                  <span>9:41</span>
                  <div className="flex gap-1.5 items-center">
                    <div className="w-3.5 h-1.5 border border-white rounded-sm flex">
                      <div className="w-3/4 bg-white rounded-sm" />
                    </div>
                  </div>
                </div>

                {/* App header */}
                <div
                  className="px-4 py-3 text-white"
                  style={{ backgroundColor: "#1C5C1C" }}
                >
                  <div className="text-xs text-green-200 mb-0.5">Fazenda Santa Clara</div>
                  <div className="text-base font-bold">Registros de Campo</div>
                </div>

                {/* App content */}
                <div className="bg-gray-50 flex-1 p-3 space-y-2">
                  {[
                    { label: "Pecuária", count: "24 registros", color: "#d97706" },
                    { label: "Agricultura", count: "18 registros", color: "#16a34a" },
                    { label: "Administrativo", count: "11 registros", color: "#2563eb" },
                  ].map((folder) => (
                    <div
                      key={folder.label}
                      className="bg-white rounded-xl p-3 shadow-sm flex items-center gap-3"
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                        style={{ backgroundColor: folder.color }}
                      >
                        {folder.label[0]}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-800">
                          {folder.label}
                        </div>
                        <div className="text-xs text-gray-400">{folder.count}</div>
                      </div>
                    </div>
                  ))}

                  <div className="bg-white rounded-xl p-3 shadow-sm mt-2">
                    <div className="text-xs font-semibold text-gray-700 mb-1.5">
                      Último registro
                    </div>
                    <div
                      className="text-xs text-white rounded-lg px-2.5 py-2"
                      style={{ backgroundColor: "#1C5C1C" }}
                    >
                      Vacinação do lote B — 40 cabeças ✓
                    </div>
                    <div className="text-xs text-gray-400 mt-1.5">
                      Hoje, 10:32 · João Silva
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
                    <div className="text-xs text-yellow-800 font-medium">
                      Lembrete: Adubação safra — amanhã
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -right-4 top-20 rounded-2xl shadow-xl px-3 py-2.5 flex items-center gap-2"
                style={{ backgroundColor: "#242424", border: "1px solid #333333" }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: "#2D5A27" }}
                >
                  IA
                </div>
                <div>
                  <div className="text-xs font-semibold" style={{ color: "#EFEFEF" }}>
                    Seu Chico
                  </div>
                  <div className="text-xs" style={{ color: "#6DC267" }}>
                    IA disponível
                  </div>
                </div>
              </div>

              {/* Floating stat */}
              <div
                className="absolute -left-6 bottom-24 rounded-2xl shadow-xl px-3 py-2.5"
                style={{ backgroundColor: "#242424", border: "1px solid #333333" }}
              >
                <div className="text-xs mb-0.5" style={{ color: "#666666" }}>
                  Registros hoje
                </div>
                <div className="text-2xl font-bold" style={{ color: "#6DC267" }}>
                  12
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="relative h-12 overflow-hidden">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48V20C240 0 480 0 720 12C960 24 1200 32 1440 20V48H0Z"
            fill="#1C1C1C"
          />
        </svg>
      </div>
    </section>
  );
}
