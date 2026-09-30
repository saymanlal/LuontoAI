"use client";

import React from "react";
import { Leaf } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080d13] text-[#f1f5f9] pt-16 pb-12 border-t border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#1b4d3e] to-[#2e6047] border border-[#38ef7d]/30 flex items-center justify-center text-white">
                <Leaf className="w-4 h-4 text-[#38ef7d]" />
              </div>
              <span className="font-semibold text-xl tracking-tight text-white font-serif">
                LuontoAI
              </span>
            </div>
            <p className="text-sm text-[#cbd5e1] font-serif max-w-sm">
              AI-Powered Sustainable Resource Discovery & Circular Engineering
            </p>
            <p className="text-xs text-[#94a3b8] max-w-md leading-relaxed">
              Discovering sustainable resource and product possibilities hidden inside everyday waste. Built with Nordic circular design principles and accelerated by Groq LPU inference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#94a3b8]">
              Platform Modes
            </div>
            <ul className="space-y-2 text-sm text-[#cbd5e1]">
              <li>
                <button
                  onClick={() => scrollTo("explorer")}
                  className="hover:text-[#38ef7d] transition-colors cursor-pointer text-left"
                >
                  Single Waste Discovery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("explorer")}
                  className="hover:text-[#38ef7d] transition-colors cursor-pointer text-left"
                >
                  Multi-Waste Compounding
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("explorer")}
                  className="hover:text-[#38ef7d] transition-colors cursor-pointer text-left"
                >
                  Material Swap Comparisons
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("finland")}
                  className="hover:text-[#38ef7d] transition-colors cursor-pointer text-left"
                >
                  Nordic Bioeconomy
                </button>
              </li>
            </ul>
          </div>

          {/* Context & Tags */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#94a3b8]">
              Context & Focus
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-[#142334] text-xs text-[#a5f3fc] border border-[#38bdf8]/20">
                Circular Economy
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-[#142334] text-xs text-[#a5f3fc] border border-[#38bdf8]/20">
                Groq AI LPU
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-[#142334] text-xs text-[#a5f3fc] border border-[#38bdf8]/20">
                Nordic Bio-Compounding
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94a3b8]">
          <p>
            Student innovation project · Finland · World Tourism Day 2026
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-[#38ef7d]">Powered by Groq Cloud</span>
            <span>·</span>
            <span>Zero Greenwashing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
