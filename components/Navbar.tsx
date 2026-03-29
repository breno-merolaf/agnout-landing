"use client";

import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100"
      style={{ boxShadow: "0 1px 12px rgba(0,0,0,0.06)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "#1C5C1C" }}
            >
              <Leaf className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span
              className="text-xl font-bold tracking-tight"
              style={{ color: "#1C5C1C" }}
            >
              agNOUT
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Funcionalidades
            </a>
            <a
              href="#como-funciona"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Como funciona
            </a>
            <a
              href="#planos"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Planos
            </a>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://app.agnout.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-white rounded-lg transition-colors"
              style={{ backgroundColor: "#1C5C1C" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#2d7a2d")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#1C5C1C")
              }
            >
              Entrar no app
            </a>
            <button
              className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
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
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          <a
            href="#features"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
            onClick={() => setMenuOpen(false)}
          >
            Funcionalidades
          </a>
          <a
            href="#como-funciona"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
            onClick={() => setMenuOpen(false)}
          >
            Como funciona
          </a>
          <a
            href="#planos"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
            onClick={() => setMenuOpen(false)}
          >
            Planos
          </a>
          <a
            href="https://app.agnout.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white rounded-lg"
            style={{ backgroundColor: "#1C5C1C" }}
          >
            Entrar no app
          </a>
        </div>
      )}
    </header>
  );
}
