import { NextRequest, NextResponse } from "next/server";
import { validateMaterialInput } from "@/lib/validation";
import { analyzeMaterialWithGroq } from "@/lib/groq";
import { findFallbackData } from "@/lib/fallback-data";

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

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Request body must be a JSON object." },
        { status: 400 }
      );
    }

    const inputData = body as { material?: unknown };
    const validation = validateMaterialInput(inputData.material);

    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error || "Invalid input material." },
        { status: 400 }
      );
    }

    const material = validation.value;

    // 1. Attempt Groq AI analysis
    const groqResult = await analyzeMaterialWithGroq(material);
    if (groqResult) {
      return NextResponse.json(groqResult);
    }

    // 2. Fallback system
    const fallbackResult = findFallbackData(material);
    if (fallbackResult) {
      return NextResponse.json(fallbackResult);
    }

    // 3. Graceful failure if no AI and no fallback match
    return NextResponse.json(
      {
        error: "We couldn't analyze this material right now. Please try another material or check your connection."
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
