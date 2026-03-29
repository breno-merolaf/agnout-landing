"use client";

import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: "#1C1C1C",
        borderColor: "#333333",
        boxShadow: "0 1px 12px rgba(0,0,0,0.4)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
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

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "#features", label: "Funcionalidades" },
              { href: "#como-funciona", label: "Como funciona" },
              { href: "#planos", label: "Planos" },
            ].map((link) => (
              <a key={link.href} href={link.href} className="nav-link text-sm font-medium">
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://app.agnout.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg"
            >
              Entrar no app
            </a>
            <button
              className="md:hidden p-2 rounded-lg transition-colors nav-link"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-4 py-4 flex flex-col gap-4"
          style={{ backgroundColor: "#1C1C1C", borderColor: "#333333" }}
        >
          {[
            { href: "#features", label: "Funcionalidades" },
            { href: "#como-funciona", label: "Como funciona" },
            { href: "#planos", label: "Planos" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://app.agnout.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-lg"
          >
            Entrar no app
          </a>
        </div>
      )}
    </header>
  );
}
