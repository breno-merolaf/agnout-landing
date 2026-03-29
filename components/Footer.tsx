import { Leaf } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t" style={{ backgroundColor: "#141414", borderColor: "#292929" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#2D5A27" }}
              >
                <Leaf className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-tight" style={{ color: "#6DC267" }}>
                agNOUT
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#666666" }}>
              Gestão agrícola inteligente para fazendas de todos os tamanhos. Do
              campo ao escritório, tudo conectado.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: "#888888" }}>
              Produto
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "#features", label: "Funcionalidades" },
                { href: "#como-funciona", label: "Como funciona" },
                { href: "#planos", label: "Planos" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-link text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: "#888888" }}>
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {["Sobre", "Blog", "Contato"].map((label) => (
                <li key={label}>
                  <a href="#" className="footer-link text-sm">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: "#888888" }}>
              Legal
            </h4>
            <ul className="space-y-2.5">
              {["Termos de uso", "Privacidade", "LGPD"].map((label) => (
                <li key={label}>
                  <a href="#" className="footer-link text-sm">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t"
          style={{ borderColor: "#292929" }}
        >
          <p className="text-sm" style={{ color: "#444444" }}>
            &copy; {currentYear} agNOUT. Todos os direitos reservados.
          </p>
          <a
            href="https://app.agnout.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-app-link text-sm font-semibold"
          >
            app.agnout.com.br &rarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
