export default function SocialProof() {
  const farms = [
    "Fazenda Santa Clara",
    "Agropecuária Três Irmãos",
    "Fazenda Bom Jardim",
    "Grupo Rural Cerrado Verde",
    "Estância São Benedito",
  ];

  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">
          Fazendas que já usam o agNOUT
        </p>

        {/* Desktop: horizontal row | Mobile: wrap */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {farms.map((farm) => (
            <span
              key={farm}
              className="text-base font-semibold text-gray-300 whitespace-nowrap select-none"
              style={{ letterSpacing: "-0.01em" }}
            >
              {farm}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
