import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "agNOUT Smart Field — Gestão agrícola inteligente para sua fazenda",
  description:
    "Registros de campo, gestão de equipe, lembretes e inteligência artificial para fazendas. Tudo que acontece na sua fazenda, registrado e acessível de qualquer lugar.",
  keywords: [
    "gestão agrícola",
    "fazenda",
    "agronegócio",
    "registros de campo",
    "gestão rural",
    "pecuária",
    "agricultura",
    "SaaS agrícola",
    "agNOUT",
  ],
  authors: [{ name: "agNOUT" }],
  creator: "agNOUT",
  publisher: "agNOUT",
  metadataBase: new URL("https://agnout.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://agnout.com.br",
    siteName: "agNOUT Smart Field",
    title: "agNOUT Smart Field — Gestão agrícola inteligente para sua fazenda",
    description:
      "Registros de campo, gestão de equipe, lembretes e inteligência artificial para fazendas. Tudo que acontece na sua fazenda, registrado e acessível de qualquer lugar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "agNOUT Smart Field — Gestão agrícola inteligente",
    description:
      "Registros de campo, gestão de equipe e IA para fazendas. Acesse de qualquer lugar.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
