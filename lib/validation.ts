import { AnalysisResponse } from "./types";

export function validateMaterialInput(input: unknown): { valid: boolean; error?: string; value: string } {
  if (typeof input !== "string") {
    return { valid: false, error: "Material must be a valid text string.", value: "" };
  }

  const trimmed = input.trim();

  if (trimmed.length === 0) {
    return { valid: false, error: "Please provide a waste material to analyze.", value: "" };
  }

  if (trimmed.length > 200) {
    return { valid: false, error: "Material description must be under 200 characters.", value: trimmed };
  }

  return { valid: true, value: trimmed };
}

export function validateAnalysisResponse(data: unknown): data is AnalysisResponse {
  if (!data || typeof data !== "object") return false;

  const obj = data as Record<string, unknown>;

  const hasString = (key: string) => typeof obj[key] === "string" && (obj[key] as string).trim().length > 0;
  const hasNumber = (key: string) => typeof obj[key] === "number" && !isNaN(obj[key] as number);
  const hasArray = (key: string) => Array.isArray(obj[key]);

  if (
    !hasString("material") ||
    !hasString("category") ||
    !hasString("resourcePotential") ||
    !hasString("resourceDescription") ||
    !hasString("replacementOpportunity") ||
    !hasString("whyThisAlternative") ||
    !hasNumber("circularityScore") ||
    !hasNumber("practicalityScore") ||
    !hasString("wastePotential") ||
    !hasString("resourcePotentialEstimate") ||
    !hasString("waterImpact") ||
    !hasArray("productIdeas") ||
    !hasArray("transformationSteps") ||
    !hasArray("suitableFor") ||
    !hasArray("limitations") ||
    !hasString("confidence")
  ) {
    return false;
  }

  const productIdeas = obj.productIdeas as unknown[];
  if (productIdeas.length === 0) return false;
  for (const item of productIdeas) {
    if (!item || typeof item !== "object") return false;
    const p = item as Record<string, unknown>;
    if (typeof p.name !== "string" || typeof p.description !== "string" || typeof p.benefit !== "string") {
      return false;
    }
  }

  const steps = obj.transformationSteps as unknown[];
  if (steps.length === 0) return false;
  for (const item of steps) {
    if (!item || typeof item !== "object") return false;
    const s = item as Record<string, unknown>;
    if (typeof s.step !== "number" || typeof s.title !== "string" || typeof s.description !== "string") {
      return false;
    }
  }

  return true;
}
