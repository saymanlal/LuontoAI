import { AnalysisResponse } from "./types";
import { validateAnalysisResponse } from "./validation";

const XAI_BASE_URL = "https://api.x.ai/v1";

const SUSTAINABILITY_SYSTEM_PROMPT = `You are the LuontoAI Sustainability Analyst, an advanced AI system specialized in circular economy, resource discovery, and sustainable innovation inspired by Nordic ecological design principles.

Analyze the user-provided waste material and identify realistic opportunities for reuse, recovery, and transformation.
The core discovery flow is: WASTE → RESOURCE → PRODUCT → NEW LIFE.

Prioritize:
- realistic material pathways
- practical applications (hotels, restaurants, tourism destinations, communities, light manufacturing)
- circular economy principles
- sustainable alternatives
- responsible tourism and local resource loops

Distinguish established reuse pathways from speculative ideas.
Never invent scientific facts.
Never fabricate certifications.
Never fabricate lifecycle assessments.
Never claim exact carbon, water, or waste savings without reliable data.
When quantitative environmental information is uncertain, use qualitative language or explicitly label values as illustrative estimates.
Mention relevant technical, biological, or logistical limitations.
Use concise, refined, professional language suitable for a public-facing sustainability product.
Do not respond like a chatbot.

Return ONLY a valid JSON object matching this schema exactly:
{
  "material": string (Title-cased clean name of the waste material),
  "category": string (e.g. Organic Food & Beverage Residuals, Thermoplastics, Lignocellulosic Biomass, etc.),
  "resourcePotential": string (Concise high-level technical definition of the recovered resource),
  "resourceDescription": string (2-3 sentences explaining the biochemical/physical properties and why it holds value),
  "productIdeas": [
    {
      "name": string (Clear product name),
      "description": string (How it is made and what it does),
      "benefit": string (Specific sustainability advantage)
    }
  ] (Provide 3 to 5 realistic product ideas),
  "replacementOpportunity": string (What virgin or fossil-based material/resource this replaces),
  "whyThisAlternative": string (Short explanation of the environmental, economic, or logistical relevance),
  "transformationSteps": [
    {
      "step": 1,
      "title": string (Action title, e.g. Collect & Segregate),
      "description": string (Practical process description)
    },
    {
      "step": 2,
      "title": string,
      "description": string
    },
    {
      "step": 3,
      "title": string,
      "description": string
    },
    {
      "step": 4,
      "title": string,
      "description": string
    },
    {
      "step": 5,
      "title": string,
      "description": string
    }
  ] (Exactly 5 progressive transformation steps from waste collection to new circular life),
  "circularityScore": number (Integer between 0 and 100 representing illustrative circularity potential),
  "practicalityScore": number (Integer between 0 and 100 representing illustrative real-world feasibility),
  "wastePotential": string (Qualitative assessment with context, e.g. "High (~75% diversion potential)"),
  "resourcePotentialEstimate": string (Illustrative estimate of output yield),
  "waterImpact": string (Qualitative description of water preservation or pollution mitigation),
  "suitableFor": string[] (Array of 3-5 relevant sectors, e.g. ["Hotels & Resorts", "Local Bakeries", "Urban Agriculture"]),
  "limitations": string[] (Array of 2-3 genuine technical, contamination, or logistical constraints),
  "confidence": string (e.g. "High — Mature industrial recycling pathway")
}`;

export async function analyzeMaterialWithGrok(material: string): Promise<AnalysisResponse | null> {
  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey || apiKey.trim() === "") {
    return null;
  }

  const model = process.env.XAI_MODEL || "grok-4.7";

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000); // 20s timeout

    const response = await fetch(`${XAI_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey.trim()}`
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: SUSTAINABILITY_SYSTEM_PROMPT },
          { role: "user", content: `Analyze this waste material: "${material}"` }
        ],
        temperature: 0.2,
        response_format: { type: "json_object" }
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`xAI API responded with status ${response.status}: ${response.statusText}`);
      return null;
    }

    const payload = await response.json();
    const content = payload?.choices?.[0]?.message?.content;

    if (!content) {
      return null;
    }

    const parsed = JSON.parse(content);
    if (validateAnalysisResponse(parsed)) {
      return { ...parsed, isFallback: false };
    }

    console.warn("Grok response did not pass strict validation schema:", parsed);
    return null;
  } catch (err: unknown) {
    console.warn("Error calling xAI Grok API:", err instanceof Error ? err.message : err);
    return null;
  }
}
