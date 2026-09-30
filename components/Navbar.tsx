"use client";

import React, { useState } from "react";
import { Leaf, Menu, X, ArrowUpRight, Compass, Layers, Repeat } from "lucide-react";

interface NavbarProps {
  onExploreClick?: (mode?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onExploreClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0b1622]/80 backdrop-blur-xl border-b border-[#243547]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand */}
          <a
            href="#"
            className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-[#38ef7d] rounded-lg p-1"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#1b4d3e] to-[#2e6047] border border-[#38ef7d]/30 flex items-center justify-center text-white shadow-xs group-hover:border-[#38ef7d]/60 transition-colors">
              <Leaf className="w-5 h-5 text-[#38ef7d]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-lg sm:text-xl tracking-tight text-white font-serif">
                  LuontoAI
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded-full bg-[#11998e]/20 text-[#a5f3fc] font-medium border border-[#38bdf8]/30">
                  NORDIC · FI
                </span>
              </div>
              <p className="text-[11px] text-[#94a3b8] hidden sm:block font-normal">
                Sustainable Resource Discovery & Circular Engineering
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-[#94a3b8]">
            <button
              onClick={() => handleNavClick("explorer")}
              className="hover:text-[#38ef7d] transition-colors py-1 cursor-pointer flex items-center space-x-1"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Materials</span>
            </button>
            <button
              onClick={() => handleNavClick("how-it-works")}
              className="hover:text-[#38ef7d] transition-colors py-1 cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick("applications")}
              className="hover:text-[#38ef7d] transition-colors py-1 cursor-pointer"
            >
              Applications
            </button>
            <button
              onClick={() => handleNavClick("finland")}
              className="hover:text-[#38ef7d] transition-colors py-1 cursor-pointer"
            >
              Nordic Bioeconomy
            </button>
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => (onExploreClick ? onExploreClick("multi_blend") : handleNavClick("explorer"))}
              className="px-3.5 py-2 rounded-lg bg-[#142334] hover:bg-[#1a2d42] text-[#a5f3fc] border border-[#38bdf8]/30 text-xs font-medium transition-all cursor-pointer flex items-center space-x-1.5"
            >
              <Layers className="w-3.5 h-3.5 text-[#38ef7d]" />
              <span>Multi-Waste Blend</span>
            </button>

            <button
              onClick={() => (onExploreClick ? onExploreClick("material_swap") : handleNavClick("explorer"))}
              className="nordic-button-primary px-4 py-2 rounded-lg text-xs font-medium transition-all shadow-xs cursor-pointer flex items-center space-x-1.5"
            >
              <Repeat className="w-3.5 h-3.5 text-[#38ef7d]" />
              <span>Compare Alternatives</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#94a3b8] hover:text-white hover:bg-[#142334] focus:outline-none focus:ring-2 focus:ring-[#38ef7d]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#243547] bg-[#0b1622]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => handleNavClick("explorer")}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#142334]"
          >
            Discover Materials
          </button>
          <button
            onClick={() => handleNavClick("how-it-works")}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-[#94a3b8] hover:bg-[#142334]"
          >
            How It Works
          </button>
          <button
            onClick={() => handleNavClick("applications")}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-[#94a3b8] hover:bg-[#142334]"
          >
            Applications
          </button>
          <button
            onClick={() => handleNavClick("finland")}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-[#94a3b8] hover:bg-[#142334]"
          >
            Nordic Heritage
          </button>
          <div className="pt-2 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onExploreClick) onExploreClick("multi_blend");
                else handleNavClick("explorer");
              }}
              className="flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-lg bg-[#142334] border border-[#38bdf8]/30 text-white text-xs font-medium"
            >
              <Layers className="w-3.5 h-3.5 text-[#38ef7d]" />
              <span>Multi-Waste</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onExploreClick) onExploreClick("material_swap");
                else handleNavClick("explorer");
              }}
              className="nordic-button-primary flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-lg text-white text-xs font-medium"
            >
              <Repeat className="w-3.5 h-3.5 text-[#38ef7d]" />
              <span>Swap Alternative</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
