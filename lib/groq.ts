import { AnalysisResponse, AnalyzeRequestBody } from "./types";
import { validateAnalysisResponse } from "./validation";

const GROQ_BASE_URL = "https://api.groq.com/openai/v1";

const SUSTAINABILITY_SYSTEM_PROMPT = `You are the LuontoAI Sustainability Analyst & Circular Materials Engineer, an advanced system specializing in Nordic bioeconomy, circular engineering, material substitutions, and zero-waste cascades.

The platform provides 3 distinct modes:
1. "single": Discover resource potential, products, and lifecycle from a single waste stream.
2. "multi_blend": Analyze how MULTIPLE waste streams can be combined/compounded together (e.g. Spent Coffee Grounds + Recycled Plastic HDPE, or Sawdust + Cardboard Pulp + Food Starch) into high-performance composite products.
3. "material_swap": Compare a user's current conventional product/resource against circular alternatives made from available waste streams, providing a rigorous Pros & Cons comparison, cost feasibility, and durability evaluation.

If a "targetGoal" is specified (e.g. "hotel bathroom amenities", "lightweight structural furniture", "thermal insulation", "acoustic wall panels"), TAILOR the product ideas and recommendations specifically towards that target objective!

Principles:
- Distinguish established commercial pathways from emerging circular innovations.
- Deliver authentic materials science (tensile properties, binders, thermal characteristics, degradation).
- Never fabricate fake certifications or unverified lifecycle numbers.
- Provide realistic limitations (moisture sensitivity, binder ratios, sorting purity).
- Return clean, professional, non-chatbot structured JSON.

Return ONLY a valid JSON matching this schema:
{
  "mode": "single" | "multi_blend" | "product_target" | "material_swap",
  "material": string (Clean title-cased name of the waste material or combined stream),
  "materialsList": string[] (Optional list of individual waste inputs if multi_blend),
  "targetGoal": string (The target domain if provided),
  "category": string (e.g. Lignocellulosic Bio-Composite, Thermoplastic Polymer Blend, etc.),
  "resourcePotential": string (Concise definition of the recovered resource/feedstock),
  "resourceDescription": string (2-3 sentences explaining chemical/physical traits and structural synergy),
  "blendSynergyAnalysis": string (If multi-material blend, explain how the components reinforce each other chemically/mechanically. Otherwise concise synergy note),
  "productIdeas": [
    {
      "name": string (Concrete product name),
      "description": string (Manufacturing method and formulation),
      "benefit": string (Circular sustainability advantage),
      "suitabilityForTarget": string (How this directly answers the target goal),
      "compositeSynergy": string (Why this blend or material is uniquely suited)
    }
  ] (Provide 3 to 5 realistic recommendations),
  "replacementOpportunity": string (Conventional fossil/virgin resource displaced),
  "whyThisAlternative": string (Why this alternative is relevant for economics, supply chain, and local circularity),
  "materialComparison": {
    "conventionalMaterial": string (Conventional material being compared),
    "circularReplacement": string (Recommended circular waste alternative),
    "pros": string[] (3-4 bullet points of genuine advantages: carbon reduction, cost stability, weight, biodegradability),
    "cons": string[] (2-3 genuine engineering/logistics trade-offs: tensile limits, waterproofing needs, processing temperatures),
    "costFeasibility": string (Realistic economic estimate: comparable, 10-15% premium initially, or cost-saving at scale),
    "durabilityComparison": string (Expected lifespan and structural resilience vs conventional)
  },
  "transformationSteps": [
    { "step": 1, "title": string, "description": string },
    { "step": 2, "title": string, "description": string },
    { "step": 3, "title": string, "description": string },
    { "step": 4, "title": string, "description": string },
    { "step": 5, "title": string, "description": string }
  ] (5 sequential steps from collection to finished circular deployment),
  "circularityScore": number (0-100 illustrative assessment),
  "practicalityScore": number (0-100 illustrative assessment),
  "wastePotential": string (Qualitative assessment),
  "resourcePotentialEstimate": string (Illustrative output yield),
  "waterImpact": string (Water preservation/pollution impact),
  "suitableFor": string[] (3-5 relevant industry sectors),
  "limitations": string[] (2-3 genuine constraints),
  "confidence": string (e.g. "High — Mature industrial recycling pathway")
}`;

export async function analyzeMaterialWithGroq(req: AnalyzeRequestBody): Promise<AnalysisResponse | null> {
  const apiKey = process.env.GROQ_API_KEY || process.env.XAI_API_KEY;
  if (!apiKey || apiKey.trim() === "") {
    return null;
  }

  const model = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

  let prompt = "";
  if (req.mode === "multi_blend" && req.materials && req.materials.length > 0) {
    prompt = `Mode: Multi-Material Waste Blend.
Input Waste Materials: ${req.materials.join(", ")}
${req.targetGoal ? `Target Specific Product/Domain: "${req.targetGoal}"` : ""}
Task: Analyze how these distinct waste materials can be co-processed or compounded together into high-performance circular composite products. Detail the blend synergy, formulate 3-5 product ideas (aligned with target if provided), and provide comparison with conventional alternatives.`;
  } else if (req.mode === "material_swap") {
    prompt = `Mode: Alternative Material Swap & Comparison.
Current Conventional Product: "${req.currentProduct || "Not specified"}"
Current Conventional Resource / Material: "${req.currentResource || "Not specified"}"
Available Waste Stream (if any): "${req.material || "Recommend best circular waste alternative"}"
${req.targetGoal ? `Target Requirements: "${req.targetGoal}"` : ""}
Task: Provide an exact circular waste replacement for this conventional product/resource. Provide a detailed Pros vs Cons analysis, cost feasibility, durability comparison, and exact transformation steps to build it.`;
  } else {
    prompt = `Mode: Single Material Discovery.
Waste Material: "${req.material}"
${req.targetGoal ? `Target Specific Goal/Product: "${req.targetGoal}"` : ""}
Task: Analyze this waste stream and provide 3-5 circular product possibilities (focused on target if provided), replacement opportunity, metrics, and transformation steps.`;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000);

    const response = await fetch(`${GROQ_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey.trim()}`
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: SUSTAINABILITY_SYSTEM_PROMPT },
          { role: "user", content: prompt }
        ],
        temperature: 0.2,
        response_format: { type: "json_object" }
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`Groq API error status ${response.status}: ${response.statusText}`);
      return null;
    }

    const payload = await response.json();
    const content = payload?.choices?.[0]?.message?.content;

    if (!content) return null;

    const parsed = JSON.parse(content);
    if (validateAnalysisResponse(parsed)) {
      return { ...parsed, isFallback: false, mode: req.mode || "single" };
    }

    console.warn("Groq JSON response did not pass full schema check:", parsed);
    return null;
  } catch (err: unknown) {
    console.warn("Error calling Groq API:", err instanceof Error ? err.message : err);
    return null;
  }
}
