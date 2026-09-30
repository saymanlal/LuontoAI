"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MaterialExplorer } from "@/components/MaterialExplorer";
import { AnalysisResult } from "@/components/AnalysisResult";
import { ProductPossibilities } from "@/components/ProductPossibilities";
import { CircularFlow } from "@/components/CircularFlow";
import { TourismApplications } from "@/components/TourismApplications";
import { CommunityValue } from "@/components/CommunityValue";
import { FinlandSection } from "@/components/FinlandSection";
import { ImpactCounter } from "@/components/ImpactCounter";
import { Footer } from "@/components/Footer";
import { NorthernLightsCanvas } from "@/components/NorthernLightsCanvas";
import { AnalysisResponse, AnalyzeRequestBody } from "@/lib/types";
import { AlertCircle, RefreshCw } from "lucide-react";

export default function Home() {
  const [currentRequest, setCurrentRequest] = useState<AnalyzeRequestBody>({
    mode: "single",
    material: "Coffee Grounds"
  });
  const [explorerMode, setExplorerMode] = useState<"single" | "multi_blend" | "material_swap">("single");
  const [analysisResult, setAnalysisResult] = useState<AnalysisResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleAnalyze = async (request: AnalyzeRequestBody) => {
    setCurrentRequest(request);
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error || "We couldn't analyze this material right now. Please try again."
        );
      }

      const data: AnalysisResponse = await response.json();
      setAnalysisResult(data);

      // Smooth scroll down to the analysis result
      setTimeout(() => {
        const resultEl = document.getElementById("analysis-result");
        if (resultEl) {
          resultEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } catch (err: unknown) {
      console.error("Analysis request error:", err);
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "We couldn't analyze this material right now."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleTriggerMode = (mode?: string, suggested?: string, goal?: string) => {
    if (mode === "multi_blend" || mode === "material_swap" || mode === "single") {
      setExplorerMode(mode);
    }

    if (suggested) {
      handleAnalyze({
        mode: (mode as "single" | "multi_blend" | "material_swap") || "single",
        material: suggested,
        targetGoal: goal
      });
    }

    const el = document.getElementById("explorer");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleReset = () => {
    setAnalysisResult(null);
    setErrorMessage(null);
    const el = document.getElementById("explorer");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-[#f1f5f9] relative">
      {/* Dynamic Northern Lights Background & Gentle Falling Snow */}
      <NorthernLightsCanvas />

      {/* Top Frosted Arctic Sticky Navigation */}
      <Navbar onExploreClick={(mode) => handleTriggerMode(mode)} />

      <main className="flex-grow z-10">
        {/* Editorial Arctic Hero */}
        <Hero
          onExploreClick={() => handleTriggerMode("single")}
          onMultiBlendClick={() => handleTriggerMode("multi_blend")}
          onHowItWorksClick={() => {
            const el = document.getElementById("how-it-works");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Enhanced 3-Mode Material Explorer */}
        <MaterialExplorer
          onAnalyze={handleAnalyze}
          isLoading={isLoading}
          initialMode={explorerMode}
          activeMaterial={currentRequest.material}
        />

        {/* Friendly Error State */}
        {errorMessage && (
          <section className="py-6 max-w-3xl mx-auto px-4 sm:px-6">
            <div className="p-6 rounded-2xl bg-[#142334] border border-red-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center space-x-3">
                <AlertCircle className="w-6 h-6 text-red-400 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    We couldn’t analyze this material combination right now.
                  </h4>
                  <p className="text-xs text-[#94a3b8] mt-0.5">
                    {errorMessage}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleAnalyze(currentRequest)}
                className="nordic-button-primary inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-medium transition-all shrink-0 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Try Again</span>
              </button>
            </div>
          </section>
        )}

        {/* Live Analysis Result Panel */}
        {analysisResult && (
          <AnalysisResult data={analysisResult} onReset={handleReset} />
        )}

        {/* Static Product Possibilities Showcase Catalog */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ProductPossibilities
            ideas={[]}
            onSelectSample={(mat, goal) => handleTriggerMode("single", mat, goal)}
          />
        </div>

        {/* Tourism & Industry Applications */}
        <TourismApplications
          onSelectSectorMaterial={(mat, goal) => handleTriggerMode("single", mat, goal)}
        />

        {/* Circular Economy Flow */}
        <CircularFlow />

        {/* Community Value Formula */}
        <CommunityValue onExploreClick={() => handleTriggerMode("single")} />

        {/* Finland Sustainability Heritage */}
        <FinlandSection />

        {/* Session Impact Tracker */}
        <ImpactCounter
          currentMaterial={analysisResult?.material}
          hasResult={Boolean(analysisResult)}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
