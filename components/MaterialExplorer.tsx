"use client";

import React, { useState, useEffect } from "react";
import { Search, Sparkles, Loader2, RefreshCw } from "lucide-react";

interface MaterialExplorerProps {
  onAnalyze: (material: string) => Promise<void>;
  isLoading: boolean;
  activeMaterial?: string;
}

const PRESET_MATERIALS = [
  "Coffee Grounds",
  "Plastic Bottles",
  "Cardboard",
  "Food Waste",
  "Textile",
  "Glass"
];

const ROTATING_MESSAGES = [
  "Identifying resource pathways",
  "Evaluating reuse possibilities",
  "Mapping circular applications",
  "Synthesizing transformation steps"
];

export const MaterialExplorer: React.FC<MaterialExplorerProps> = ({
  onAnalyze,
  isLoading,
  activeMaterial = ""
}) => {
  const [inputVal, setInputVal] = useState(activeMaterial);
  const [messageIndex, setMessageIndex] = useState(0);

  // Sync external activeMaterial changes
  useEffect(() => {
    if (activeMaterial) {
      setInputVal(activeMaterial);
    }
  }, [activeMaterial]);

  // Rotate loading messages while analyzing
  useEffect(() => {
    if (!isLoading) {
      setMessageIndex(0);
      return;
    }
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % ROTATING_MESSAGES.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim() || isLoading) return;
    onAnalyze(inputVal.trim());
  };

  const handleChipClick = (material: string) => {
    setInputVal(material);
    onAnalyze(material);
  };

  return (
    <section id="explorer" className="py-12 md:py-16 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#e6e8e5] p-6 sm:p-10 md:p-12 shadow-xs transition-all">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#1e3a2b] font-semibold">
              Resource Exploration Engine
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c211f] tracking-tight">
              Discover What’s Still Useful
            </h2>
            <p className="text-sm sm:text-base text-[#667069]">
              Enter any waste stream from hotels, restaurants, events, or packaging to evaluate its secondary circular value.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 text-left">
              <label
                htmlFor="material-input"
                className="block text-xs font-mono uppercase tracking-wider text-[#1c211f] font-semibold"
              >
                What waste material do you have?
              </label>

              <div className="relative flex flex-col sm:flex-row items-stretch gap-3">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#667069]">
                    <Search className="w-5 h-5" />
                  </div>
                  <input
                    id="material-input"
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    maxLength={200}
                    disabled={isLoading}
                    placeholder="Try coffee grounds, old textiles, glass bottles, wood shavings..."
                    className="w-full pl-11 pr-4 py-3.5 sm:py-4 rounded-xl border border-[#cbd2cb] bg-[#fbfbf9] text-[#1c211f] placeholder:text-[#667069]/60 text-base focus:outline-none focus:ring-2 focus:ring-[#1e3a2b] focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !inputVal.trim()}
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 sm:py-4 rounded-xl bg-[#1e3a2b] hover:bg-[#2d5a43] disabled:bg-[#cbd2cb] text-white text-base font-medium transition-all shadow-xs hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a2b] focus:ring-offset-2 disabled:cursor-not-allowed cursor-pointer shrink-0"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      <span>Analyze Material</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Chips */}
            <div className="space-y-2 pt-1 text-left">
              <span className="text-xs text-[#667069] font-mono">Suggested materials:</span>
              <div className="flex flex-wrap gap-2">
                {PRESET_MATERIALS.map((mat) => {
                  const isCurrent = inputVal.toLowerCase() === mat.toLowerCase();
                  return (
                    <button
                      key={mat}
                      type="button"
                      disabled={isLoading}
                      onClick={() => handleChipClick(mat)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all border cursor-pointer ${
                        isCurrent
                          ? "bg-[#1e3a2b] text-white border-[#1e3a2b]"
                          : "bg-[#f4f5f2] hover:bg-[#edf2ee] text-[#1c211f] border-[#e6e8e5]"
                      } disabled:opacity-60 disabled:cursor-not-allowed`}
                    >
                      {mat}
                    </button>
                  );
                })}
              </div>
            </div>
          </form>

          {/* Active Refined Loading State Box */}
          {isLoading && (
            <div className="mt-8 pt-8 border-t border-[#e6e8e5] text-center space-y-3 animate-fade-in">
              <div className="inline-flex items-center justify-center space-x-2 text-[#1e3a2b]">
                <RefreshCw className="w-5 h-5 animate-spin text-[#1e3a2b]" />
                <span className="font-semibold text-sm sm:text-base">Analyzing material with Groq AI...</span>
              </div>
              <p className="text-xs sm:text-sm text-[#667069] font-mono">
                {ROTATING_MESSAGES[messageIndex]}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
