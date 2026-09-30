"use client";

import React from "react";
import { Leaf, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1c211f] text-[#fbfbf9] pt-16 pb-12 border-t border-[#232b28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#edf2ee] flex items-center justify-center text-[#1e3a2b]">
                <Leaf className="w-4 h-4" />
              </div>
              <span className="font-semibold text-xl tracking-tight text-white">
                LuontoAI
              </span>
            </div>
            <p className="text-sm text-[#cbd2cb] font-serif max-w-sm">
              AI-Powered Sustainable Resource Discovery
            </p>
            <p className="text-xs text-[#9aa59d] max-w-md leading-relaxed">
              Discovering sustainable resource and product possibilities hidden inside everyday waste. Built with Nordic circular design principles.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#9aa59d]">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-[#cbd2cb]">
              <li>
                <button
                  onClick={() => scrollTo("explorer")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Discover
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("how-it-works")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("applications")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Applications
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("finland")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About
                </button>
              </li>
            </ul>
          </div>

          {/* Context & Tags */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#9aa59d]">
              Context & Focus
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded bg-[#232b28] text-xs text-[#cbd2cb] border border-[#333d39]">
                Circular Economy
              </span>
              <span className="px-2.5 py-1 rounded bg-[#232b28] text-xs text-[#cbd2cb] border border-[#333d39]">
                Sustainable Tourism
              </span>
              <span className="px-2.5 py-1 rounded bg-[#232b28] text-xs text-[#cbd2cb] border border-[#333d39]">
                Responsible Innovation
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2d3834] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9aa59d]">
          <p>
            Student innovation project · Finland · World Tourism Day 2026
          </p>
          <div className="flex items-center space-x-4">
            <span>Powered by xAI Grok</span>
            <span>·</span>
            <span>Zero Greenwashing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
