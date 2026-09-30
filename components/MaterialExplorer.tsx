"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  Sparkles,
  Loader2,
  RefreshCw,
  Layers,
  Repeat,
  Plus,
  Trash2,
  Target,
  ArrowRight,
  Compass,
  Check
} from "lucide-react";
import { AnalyzeRequestBody } from "@/lib/types";

interface MaterialExplorerProps {
  onAnalyze: (request: AnalyzeRequestBody) => Promise<void>;
  isLoading: boolean;
  initialMode?: "single" | "multi_blend" | "material_swap";
  activeMaterial?: string;
}

const SINGLE_PRESETS = [
  "Coffee Grounds",
  "Plastic Bottles",
  "Cardboard",
  "Food Waste",
  "Old Textile",
  "Glass Bottles",
  "Wood Waste",
  "Aluminium Cans",
  "Used Paper",
  "Coconut Shells"
];

const MULTI_PRESETS = [
  { label: "Coffee Grounds + Plastic Bottles", items: ["Used Coffee Grounds", "Recycled Plastic Bottles (PET)"], goal: "Bio-composite hotel accessories" },
  { label: "Wood Offcuts + Food Starch", items: ["Wood Sawdust Offcuts", "Discarded Potato & Corn Starch"], goal: "Biodegradable acoustic wall panels" },
  { label: "Old Cotton Linens + Cardboard", items: ["Old Hotel Cotton Linens", "Corrugated Cardboard"], goal: "Thermal insulation batts" }
];

const SWAP_PRESETS = [
  { product: "Hotel Toiletries Bottles", resource: "Virgin Single-Use Plastic (HDPE)", waste: "Recycled Ocean PET + Spent Coffee Grounds" },
  { product: "Shipping Packaging Foam", resource: "Expanded Polystyrene (Styrofoam)", waste: "Molded Cardboard Pulp & Agricultural Husk" },
  { product: "Office Acoustic Wall Panels", resource: "Fiberglass / Rockwool Panels", waste: "Old Textile Fabrics & Recycled PET Felt" }
];

const ROTATING_MESSAGES = [
  "Engineering circular bio-compounding pathways",
  "Evaluating tensile strength & moisture resilience",
  "Synthesizing sequential transformation steps",
  "Calculating replacement opportunities & feasibility"
];

export const MaterialExplorer: React.FC<MaterialExplorerProps> = ({
  onAnalyze,
  isLoading,
  initialMode = "single",
  activeMaterial = ""
}) => {
  const [activeTab, setActiveTab] = useState<"single" | "multi_blend" | "material_swap">(initialMode);
  const [messageIndex, setMessageIndex] = useState(0);

  // Mode 1: Single Material State
  const [singleMaterial, setSingleMaterial] = useState(activeMaterial || "Coffee Grounds");
  const [singleGoal, setSingleGoal] = useState("");

  // Mode 2: Multi-Waste Blending State
  const [blendItems, setBlendItems] = useState<string[]>(["Spent Coffee Grounds", "Plastic Bottles (PET)"]);
  const [newBlendItem, setNewBlendItem] = useState("");
  const [blendGoal, setBlendGoal] = useState("Durable Hospitality Products & Trays");

  // Mode 3: Material Swap Comparison State
  const [currentProduct, setCurrentProduct] = useState("Hotel Disposable Amenities & Cups");
  const [currentResource, setCurrentResource] = useState("Virgin Single-Use Plastic Polymers");
  const [availableWaste, setAvailableWaste] = useState("Used Coffee Grounds + Recycled Paper Pulp");
  const [swapGoal, setSwapGoal] = useState("100% Biodegradable / Zero Petrochemicals");

  useEffect(() => {
    if (initialMode) {
      setActiveTab(initialMode);
    }
  }, [initialMode]);

  useEffect(() => {
    if (activeMaterial && activeTab === "single") {
      setSingleMaterial(activeMaterial);
    }
  }, [activeMaterial, activeTab]);

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

  // Handle Mode 1 Submit
  const handleSingleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!singleMaterial.trim() || isLoading) return;
    onAnalyze({
      mode: "single",
      material: singleMaterial.trim(),
      targetGoal: singleGoal.trim() || undefined
    });
  };

  // Handle Mode 2 Submit
  const handleBlendSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (blendItems.length === 0 || isLoading) return;
    onAnalyze({
      mode: "multi_blend",
      materials: blendItems,
      material: blendItems.join(" + "),
      targetGoal: blendGoal.trim() || undefined
    });
  };

  // Handle Mode 3 Submit
  const handleSwapSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentProduct.trim() || isLoading) return;
    onAnalyze({
      mode: "material_swap",
      currentProduct: currentProduct.trim(),
      currentResource: currentResource.trim(),
      material: availableWaste.trim() || undefined,
      targetGoal: swapGoal.trim() || undefined
    });
  };

  const handleAddBlendItem = () => {
    if (newBlendItem.trim() && blendItems.length < 5) {
      setBlendItems([...blendItems, newBlendItem.trim()]);
      setNewBlendItem("");
    }
  };

  const handleRemoveBlendItem = (index: number) => {
    setBlendItems(blendItems.filter((_, i) => i !== index));
  };

  return (
    <section id="explorer" className="py-12 md:py-16 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="nordic-card rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-all">
          {/* Top Subtle Ice Glow Accent */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#11998e] via-[#38ef7d] to-[#38bdf8]" />

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#142334] text-[#a5f3fc] border border-[#38bdf8]/30 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#38ef7d]" />
              <span>Multi-Stream Circular Intelligence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-tight">
              Discover What’s Still Useful
            </h2>
            <p className="text-xs sm:text-sm text-[#94a3b8]">
              Analyze single waste streams, co-compound multiple wastes into bio-composites, or find circular swaps for existing products.
            </p>
          </div>

          {/* Mode Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 p-1.5 bg-[#0b1622] rounded-2xl border border-[#243547] max-w-2xl mx-auto">
            <button
              type="button"
              onClick={() => setActiveTab("single")}
              className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs font-medium transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                activeTab === "single"
                  ? "bg-[#1b4d3e] text-white border border-[#38ef7d]/40 shadow-sm"
                  : "text-[#94a3b8] hover:text-white hover:bg-[#142334]"
              }`}
            >
              <Compass className="w-4 h-4 text-[#38ef7d]" />
              <span>Single Waste Stream</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("multi_blend")}
              className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs font-medium transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                activeTab === "multi_blend"
                  ? "bg-[#1b4d3e] text-white border border-[#38ef7d]/40 shadow-sm"
                  : "text-[#94a3b8] hover:text-white hover:bg-[#142334]"
              }`}
            >
              <Layers className="w-4 h-4 text-[#38bdf8]" />
              <span>Multi-Waste Compounding</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("material_swap")}
              className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs font-medium transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                activeTab === "material_swap"
                  ? "bg-[#1b4d3e] text-white border border-[#38ef7d]/40 shadow-sm"
                  : "text-[#94a3b8] hover:text-white hover:bg-[#142334]"
              }`}
            >
              <Repeat className="w-4 h-4 text-[#38ef7d]" />
              <span>Compare Material Swaps</span>
            </button>
          </div>

          {/* TAB 1: Single Waste Stream */}
          {activeTab === "single" && (
            <form onSubmit={handleSingleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-7 space-y-2 text-left">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#cbd5e1] font-semibold">
                    What waste material do you have?
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#94a3b8]">
                      <Search className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      value={singleMaterial}
                      onChange={(e) => setSingleMaterial(e.target.value)}
                      maxLength={200}
                      disabled={isLoading}
                      placeholder="e.g. Coffee grounds, wood offcuts, plastic bottles..."
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-[#243547] bg-[#0b1622] text-white placeholder:text-[#94a3b8]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#38ef7d] transition-all disabled:opacity-60"
                    />
                  </div>
                </div>

                <div className="md:col-span-5 space-y-2 text-left">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#cbd5e1] font-semibold flex items-center space-x-1.5">
                    <Target className="w-3.5 h-3.5 text-[#38ef7d]" />
                    <span>Target Specific Idea (Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={singleGoal}
                    onChange={(e) => setSingleGoal(e.target.value)}
                    maxLength={150}
                    disabled={isLoading}
                    placeholder="e.g. Hotel bathroom tiles, packaging..."
                    className="w-full px-4 py-3.5 rounded-xl border border-[#243547] bg-[#0b1622] text-white placeholder:text-[#94a3b8]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#38ef7d] transition-all disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Preset Chips */}
              <div className="space-y-2 text-left">
                <span className="text-xs text-[#94a3b8] font-mono">Quick benchmark materials:</span>
                <div className="flex flex-wrap gap-2">
                  {SINGLE_PRESETS.map((mat) => {
                    const isCurrent = singleMaterial.toLowerCase() === mat.toLowerCase();
                    return (
                      <button
                        key={mat}
                        type="button"
                        disabled={isLoading}
                        onClick={() => {
                          setSingleMaterial(mat);
                          onAnalyze({ mode: "single", material: mat, targetGoal: singleGoal || undefined });
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border cursor-pointer ${
                          isCurrent
                            ? "bg-[#1b4d3e] text-white border-[#38ef7d]/60 shadow-xs"
                            : "bg-[#0b1622] hover:bg-[#142334] text-[#cbd5e1] border-[#243547]"
                        }`}
                      >
                        {mat}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading || !singleMaterial.trim()}
                  className="nordic-button-primary w-full py-4 rounded-xl font-medium text-sm transition-all shadow-md flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#a5f3fc]" />
                      <span>Analyzing Material with Groq...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-[#a5f3fc]" />
                      <span>Discover Resource Potential & Products</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* TAB 2: Multi-Waste Compounding */}
          {activeTab === "multi_blend" && (
            <form onSubmit={handleBlendSubmit} className="space-y-6 text-left">
              <div className="space-y-3">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#cbd5e1] font-semibold flex items-center justify-between">
                  <span>Input Waste Streams To Compound Together (2 to 5 materials)</span>
                  <span className="text-[11px] text-[#38ef7d] font-normal font-mono">{blendItems.length}/5 added</span>
                </label>

                {/* Material list items */}
                <div className="flex flex-wrap gap-2 p-3 rounded-2xl bg-[#0b1622] border border-[#243547] min-h-[50px] items-center">
                  {blendItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-[#142634] text-white text-xs border border-[#38bdf8]/40"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#38ef7d]" />
                      <span className="font-medium">{item}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveBlendItem(idx)}
                        className="text-[#94a3b8] hover:text-red-400 p-0.5 rounded cursor-pointer"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))}

                  {blendItems.length < 5 && (
                    <div className="flex items-center space-x-2 flex-1 min-w-[200px]">
                      <input
                        type="text"
                        value={newBlendItem}
                        onChange={(e) => setNewBlendItem(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleAddBlendItem();
                          }
                        }}
                        placeholder="Add another waste (e.g. Sawdust, Paper Slurry, Bio-resin)..."
                        className="w-full bg-transparent text-xs text-white placeholder:text-[#94a3b8]/50 focus:outline-none py-1 px-2"
                      />
                      <button
                        type="button"
                        onClick={handleAddBlendItem}
                        disabled={!newBlendItem.trim()}
                        className="px-2.5 py-1 rounded-lg bg-[#1b4d3e] hover:bg-[#246350] text-[#a5f3fc] text-xs font-medium border border-[#38ef7d]/30 disabled:opacity-40 cursor-pointer flex items-center space-x-1 shrink-0"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Add</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Target Domain for Blend */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#cbd5e1] font-semibold flex items-center space-x-1.5">
                  <Target className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>What do you want to manufacture with this blend?</span>
                </label>
                <input
                  type="text"
                  value={blendGoal}
                  onChange={(e) => setBlendGoal(e.target.value)}
                  placeholder="e.g. High-strength restaurant trays, acoustic panels, modular furniture..."
                  className="w-full px-4 py-3.5 rounded-xl border border-[#243547] bg-[#0b1622] text-white placeholder:text-[#94a3b8]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8] transition-all"
                />
              </div>

              {/* Multi-Blend Preset Blueprints */}
              <div className="space-y-2">
                <span className="text-xs text-[#94a3b8] font-mono">Curated multi-stream recipes:</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {MULTI_PRESETS.map((preset, i) => (
                    <button
                      key={i}
                      type="button"
                      disabled={isLoading}
                      onClick={() => {
                        setBlendItems(preset.items);
                        setBlendGoal(preset.goal);
                        onAnalyze({
                          mode: "multi_blend",
                          materials: preset.items,
                          material: preset.items.join(" + "),
                          targetGoal: preset.goal
                        });
                      }}
                      className="p-3 rounded-xl bg-[#0b1622] hover:bg-[#142334] border border-[#243547] hover:border-[#38bdf8]/50 text-left transition-all cursor-pointer space-y-1"
                    >
                      <div className="text-xs font-medium text-[#a5f3fc] leading-snug">
                        {preset.label}
                      </div>
                      <div className="text-[11px] text-[#94a3b8] font-mono">
                        Target: {preset.goal}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading || blendItems.length < 2}
                  className="nordic-button-primary w-full py-4 rounded-xl font-medium text-sm transition-all shadow-md flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#a5f3fc]" />
                      <span>Co-Compounding Materials with Groq...</span>
                    </>
                  ) : (
                    <>
                      <Layers className="w-4 h-4 text-[#a5f3fc]" />
                      <span>Analyze Compounding Synergy & Output Products</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* TAB 3: Material Swap & Pros/Cons Comparison */}
          {activeTab === "material_swap" && (
            <form onSubmit={handleSwapSubmit} className="space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Product to replace */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#cbd5e1] font-semibold">
                    1. Current Product You Want to Replace
                  </label>
                  <input
                    type="text"
                    value={currentProduct}
                    onChange={(e) => setCurrentProduct(e.target.value)}
                    placeholder="e.g. Plastic hotel bathroom bottles, Styrofoam shipping boxes..."
                    className="w-full px-4 py-3.5 rounded-xl border border-[#243547] bg-[#0b1622] text-white placeholder:text-[#94a3b8]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#38ef7d]"
                  />
                </div>

                {/* Conventional Resource */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#cbd5e1] font-semibold">
                    2. Conventional Material It Currently Uses
                  </label>
                  <input
                    type="text"
                    value={currentResource}
                    onChange={(e) => setCurrentResource(e.target.value)}
                    placeholder="e.g. Virgin Polyethylene (HDPE), Polystyrene Foam..."
                    className="w-full px-4 py-3.5 rounded-xl border border-[#243547] bg-[#0b1622] text-white placeholder:text-[#94a3b8]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#38ef7d]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Available waste streams */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#cbd5e1] font-semibold">
                    3. What Waste Streams Can You Supply? (Optional)
                  </label>
                  <input
                    type="text"
                    value={availableWaste}
                    onChange={(e) => setAvailableWaste(e.target.value)}
                    placeholder="e.g. Coffee grounds, hotel linens, waste paper, or leave empty for AI recommendation"
                    className="w-full px-4 py-3.5 rounded-xl border border-[#243547] bg-[#0b1622] text-white placeholder:text-[#94a3b8]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#38ef7d]"
                  />
                </div>

                {/* Priority Goal */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#cbd5e1] font-semibold flex items-center space-x-1.5">
                    <Target className="w-3.5 h-3.5 text-[#38ef7d]" />
                    <span>4. Key Requirement / Constraint</span>
                  </label>
                  <input
                    type="text"
                    value={swapGoal}
                    onChange={(e) => setSwapGoal(e.target.value)}
                    placeholder="e.g. High water resistance, under 6-month compostability, low cost..."
                    className="w-full px-4 py-3.5 rounded-xl border border-[#243547] bg-[#0b1622] text-white placeholder:text-[#94a3b8]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#38ef7d]"
                  />
                </div>
              </div>

              {/* Presets */}
              <div className="space-y-2">
                <span className="text-xs text-[#94a3b8] font-mono">Sample material replacement cases:</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {SWAP_PRESETS.map((preset, i) => (
                    <button
                      key={i}
                      type="button"
                      disabled={isLoading}
                      onClick={() => {
                        setCurrentProduct(preset.product);
                        setCurrentResource(preset.resource);
                        setAvailableWaste(preset.waste);
                        onAnalyze({
                          mode: "material_swap",
                          currentProduct: preset.product,
                          currentResource: preset.resource,
                          material: preset.waste,
                          targetGoal: "Maximum circularity & comparable durability"
                        });
                      }}
                      className="p-3 rounded-xl bg-[#0b1622] hover:bg-[#142334] border border-[#243547] hover:border-[#38ef7d]/50 text-left transition-all cursor-pointer space-y-1"
                    >
                      <div className="text-xs font-semibold text-white">
                        {preset.product}
                      </div>
                      <div className="text-[11px] text-[#94a3b8]">
                        Replaces <span className="text-red-300">{preset.resource}</span> with <span className="text-[#38ef7d]">{preset.waste}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading || !currentProduct.trim()}
                  className="nordic-button-primary w-full py-4 rounded-xl font-medium text-sm transition-all shadow-md flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#a5f3fc]" />
                      <span>Evaluating Circular Swap & Comparing Trade-offs...</span>
                    </>
                  ) : (
                    <>
                      <Repeat className="w-4 h-4 text-[#a5f3fc]" />
                      <span>Compare Circular Alternative (Pros & Cons, Costs & Steps)</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Active Loading Status Bar */}
          {isLoading && (
            <div className="mt-8 pt-8 border-t border-[#243547] text-center space-y-3">
              <div className="inline-flex items-center justify-center space-x-2 text-[#38ef7d]">
                <RefreshCw className="w-5 h-5 animate-spin text-[#38ef7d]" />
                <span className="font-semibold text-sm sm:text-base text-white">
                  Engineering Circular Intelligence with Groq LPU...
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#a5f3fc] font-mono">
                {ROTATING_MESSAGES[messageIndex]}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
