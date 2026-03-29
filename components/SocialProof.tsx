export default function SocialProof() {
  const farms = [
    "Fazenda Santa Clara",
    "Agropecuária Três Irmãos",
    "Fazenda Bom Jardim",
    "Grupo Rural Cerrado Verde",
    "Estância São Benedito",
  ];

  return (
    <section
      className="py-10 border-b"
      style={{ backgroundColor: "#1C1C1C", borderColor: "#292929" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-center text-sm font-medium uppercase tracking-widest mb-8"
          style={{ color: "#555555" }}
        >
          Fazendas que já usam o agNOUT
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {farms.map((farm) => (
            <span
              key={farm}
              className="text-base font-semibold whitespace-nowrap select-none"
              style={{ color: "#3A3A3A", letterSpacing: "-0.01em" }}
            >
              {farm}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
