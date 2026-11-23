"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute left-0 right-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6 lg:px-16">

        <a
          href="/#home"
          className="font-serif text-3xl font-bold tracking-tight"
        >
          KA<span className="text-[#d95c6b]">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 md:flex">
          <a href="/about" className="transition hover:text-[#d95c6b]">
            About
          </a>

          <a href="/projects" className="transition hover:text-[#d95c6b]">
            Projects
          </a>

          <a href="/experience" className="transition hover:text-[#d95c6b]">
            Experience
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="rounded-xl bg-[#fde8eb] px-5 py-3 text-xl md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mx-8 flex flex-col gap-5 rounded-2xl border border-[#f0cdd2] bg-[#fff7f8] p-6 shadow-lg md:hidden">

          <a
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-[#d95c6b]"
          >
            About
          </a>

          <a
            href="/projects"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-[#d95c6b]"
          >
            Projects
          </a>

          <a
            href="/experience"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-[#d95c6b]"
          >
            Experience
          </a>

        </div>
      )}
    </nav>
  );
}