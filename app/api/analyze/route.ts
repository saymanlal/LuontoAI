import { NextRequest, NextResponse } from "next/server";
import { validateAnalyzeRequest } from "@/lib/validation";
import { analyzeMaterialWithGroq } from "@/lib/groq";
import { findFallbackData } from "@/lib/fallback-data";
import { AnalysisResponse } from "@/lib/types";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON format in request body." },
        { status: 400 }
      );
    }

    const validation = validateAnalyzeRequest(body);
    if (!validation.valid || !validation.data) {
      return NextResponse.json(
        { error: validation.error || "Invalid request parameters." },
        { status: 400 }
      );
    }

    const requestData = validation.data;

    // 1. Attempt Groq AI analysis
    const groqResult = await analyzeMaterialWithGroq(requestData);
    if (groqResult) {
      return NextResponse.json(groqResult);
    }

    // 2. Intelligent local fallback system
    const fallbackSeed = requestData.materials?.[0] || requestData.material || "coffee grounds";
    const fallbackResult = findFallbackData(fallbackSeed);

    if (fallbackResult) {
      const enrichedFallback: AnalysisResponse = {
        ...fallbackResult,
        mode: requestData.mode || "single",
        targetGoal: requestData.targetGoal,
        materialsList: requestData.materials,
        materialComparison: {
          conventionalMaterial: requestData.currentResource || "Virgin Petrochemical Polymer / Virgin Wood Pulp",
          circularReplacement: fallbackResult.material,
          pros: [
            "Cuts virgin resource extraction and lifecycle carbon footprint by up to 75%",
            "Prevents municipal landfill methane emissions",
            "Enhances ESG compliance for Nordic & EU sustainability mandates",
            "Creates resilient local supply loops independent of foreign raw material volatility"
          ],
          cons: [
            "Requires initial quality segregation and moisture calibration",
            "Tensile resilience may require bio-binder compounding for structural applications"
          ],
          costFeasibility: "Cost-neutral to 10% lower at local municipal collection scale",
          durabilityComparison: "Comparable structural performance when compounded with bio-binders"
        },
        blendSynergyAnalysis: requestData.materials && requestData.materials.length > 1
          ? `Co-processing ${requestData.materials.join(" with ")} creates a synergistic composite matrix where fibrous components provide tensile reinforcement while organic/polymer fractions serve as continuous binding binders.`
          : undefined
      };
      return NextResponse.json(enrichedFallback);
    }

    return NextResponse.json(
      {
        error: "We couldn't analyze this material combination right now. Please try again or select one of our curated benchmarks."
      },
      { status: 503 }
    );
  } catch (error: unknown) {
    console.error("Unhandled error in /api/analyze route:", error);
    return NextResponse.json(
      {
        error: "An unexpected error occurred while analyzing the material. Please try again."
      },
      { status: 500 }
    );
  }
}
