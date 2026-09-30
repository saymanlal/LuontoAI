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
import { AnalysisResponse } from "@/lib/types";
import { AlertCircle, RefreshCw } from "lucide-react";

export default function Home() {
  const [currentMaterial, setCurrentMaterial] = useState<string>("");
  const [analysisResult, setAnalysisResult] = useState<AnalysisResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleAnalyze = async (material: string) => {
    if (!material.trim()) return;

    setCurrentMaterial(material);
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ material: material.trim() })
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

  const handleScrollToExplorer = (suggested?: string) => {
    if (suggested) {
      setCurrentMaterial(suggested);
      handleAnalyze(suggested);
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
    <div className="flex flex-col min-h-screen">
      {/* Top Sticky Navigation */}
      <Navbar onExploreClick={() => handleScrollToExplorer()} />

      <main className="flex-grow">
        {/* Editorial Hero */}
        <Hero
          onExploreClick={() => handleScrollToExplorer()}
          onHowItWorksClick={() => {
            const el = document.getElementById("how-it-works");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Material Explorer Input Area */}
        <MaterialExplorer
          onAnalyze={handleAnalyze}
          isLoading={isLoading}
          activeMaterial={currentMaterial}
        />

        {/* Friendly Error State */}
        {errorMessage && (
          <section className="py-6 max-w-3xl mx-auto px-4 sm:px-6">
            <div className="p-6 rounded-2xl bg-[#fbfbf9] border border-[#cbd2cb] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center space-x-3">
                <AlertCircle className="w-6 h-6 text-[#667069] shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-[#1c211f]">
                    We couldn’t analyze this material right now.
                  </h4>
                  <p className="text-xs text-[#667069] mt-0.5">
                    {errorMessage}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleAnalyze(currentMaterial || "Coffee Grounds")}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-[#1e3a2b] hover:bg-[#2d5a43] text-white text-xs font-medium transition-all shrink-0 cursor-pointer"
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
            onSelectSample={(mat) => handleScrollToExplorer(mat)}
          />
        </div>

        {/* Tourism & Industry Applications */}
        <TourismApplications
          onSelectSectorMaterial={(mat) => handleScrollToExplorer(mat)}
        />

        {/* Circular Economy Flow */}
        <CircularFlow />

        {/* Community Value Formula */}
        <CommunityValue onExploreClick={() => handleScrollToExplorer()} />

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
