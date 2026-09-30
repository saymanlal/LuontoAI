"use client";

import React, { useState } from "react";
import { Leaf, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onExploreClick?: () => void;
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
    <header className="sticky top-0 z-50 bg-[#fbfbf9]/90 backdrop-blur-md border-b border-[#e6e8e5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand */}
          <a
            href="#"
            className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-[#1e3a2b] rounded-lg p-1"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#1e3a2b] flex items-center justify-center text-white shadow-xs group-hover:bg-[#2d5a43] transition-colors">
              <Leaf className="w-5 h-5 text-[#edf2ee]" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-semibold text-lg sm:text-xl tracking-tight text-[#1c211f]">
                  LuontoAI
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-[#edf2ee] text-[#1e3a2b] font-medium border border-[#cbd2cb]/40">
                  FI
                </span>
              </div>
              <p className="text-[11px] text-[#667069] hidden sm:block font-normal">
                Sustainable Resource Discovery
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#667069]">
            <button
              onClick={() => handleNavClick("explorer")}
              className="hover:text-[#1e3a2b] transition-colors py-1 cursor-pointer"
            >
              Discover
            </button>
            <button
              onClick={() => handleNavClick("how-it-works")}
              className="hover:text-[#1e3a2b] transition-colors py-1 cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick("applications")}
              className="hover:text-[#1e3a2b] transition-colors py-1 cursor-pointer"
            >
              Applications
            </button>
            <button
              onClick={() => handleNavClick("finland")}
              className="hover:text-[#1e3a2b] transition-colors py-1 cursor-pointer"
            >
              About
            </button>
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onExploreClick || (() => handleNavClick("explorer"))}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#1e3a2b] hover:bg-[#2d5a43] text-white text-sm font-medium transition-all shadow-xs hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a2b] focus:ring-offset-2 cursor-pointer"
            >
              <span>Explore</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#667069] hover:text-[#1c211f] hover:bg-[#edf2ee] focus:outline-none focus:ring-2 focus:ring-[#1e3a2b]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#e6e8e5] bg-[#fbfbf9] px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => handleNavClick("explorer")}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-[#1c211f] hover:bg-[#edf2ee]"
          >
            Discover
          </button>
          <button
            onClick={() => handleNavClick("how-it-works")}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-[#1c211f] hover:bg-[#edf2ee]"
          >
            How It Works
          </button>
          <button
            onClick={() => handleNavClick("applications")}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-[#1c211f] hover:bg-[#edf2ee]"
          >
            Applications
          </button>
          <button
            onClick={() => handleNavClick("finland")}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-[#1c211f] hover:bg-[#edf2ee]"
          >
            About
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onExploreClick) onExploreClick();
                else handleNavClick("explorer");
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-[#1e3a2b] text-white text-sm font-medium"
            >
              <span>Explore Materials</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
