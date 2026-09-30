import { AnalysisResponse, AnalyzeRequestBody } from "./types";

export function validateAnalyzeRequest(body: unknown): {
  valid: boolean;
  error?: string;
  data?: AnalyzeRequestBody;
} {
  if (!body || typeof body !== "object") {
    return { valid: false, error: "Request body must be a valid JSON object." };
  }

  const obj = body as Record<string, unknown>;
  const mode = (obj.mode as string) || "single";

  if (mode === "single") {
    const mat = typeof obj.material === "string" ? obj.material.trim() : "";
    if (!mat) {
      return { valid: false, error: "Please enter a waste material to analyze." };
    }
    if (mat.length > 250) {
      return { valid: false, error: "Material description is too long (max 250 characters)." };
    }
    return {
      valid: true,
      data: {
        mode: "single",
        material: mat,
        targetGoal: typeof obj.targetGoal === "string" ? obj.targetGoal.trim() : undefined
      }
    };
  }

  if (mode === "multi_blend") {
    const rawList = Array.isArray(obj.materials)
      ? obj.materials
      : typeof obj.material === "string"
      ? obj.material.split(/,|\band\b|\bwith\b|\b\+\b/).map((s) => s.trim())
      : [];

    const materials = rawList
      .filter((s): s is string => typeof s === "string" && s.trim().length > 0)
      .map((s) => s.trim())
      .slice(0, 6);

    if (materials.length === 0) {
      return { valid: false, error: "Please specify at least 2 waste items to blend." };
    }

    return {
      valid: true,
      data: {
        mode: "multi_blend",
        materials,
        material: materials.join(" + "),
        targetGoal: typeof obj.targetGoal === "string" ? obj.targetGoal.trim() : undefined
      }
    };
  }

  if (mode === "material_swap") {
    const currentProduct = typeof obj.currentProduct === "string" ? obj.currentProduct.trim() : "";
    const currentResource = typeof obj.currentResource === "string" ? obj.currentResource.trim() : "";
    const availableWaste = typeof obj.material === "string" ? obj.material.trim() : "";

    if (!currentProduct && !currentResource) {
      return { valid: false, error: "Please provide the product and conventional resource you want to find an alternative for." };
    }

    return {
      valid: true,
      data: {
        mode: "material_swap",
        currentProduct,
        currentResource,
        material: availableWaste || `${currentProduct} (${currentResource})`,
        targetGoal: typeof obj.targetGoal === "string" ? obj.targetGoal.trim() : undefined
      }
    };
  }

  // Fallback default
  const defaultMat = typeof obj.material === "string" ? obj.material.trim() : "";
  if (!defaultMat) {
    return { valid: false, error: "Please enter a valid material or product description." };
  }

  return {
    valid: true,
    data: {
      mode: "single",
      material: defaultMat
    }
  };
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

  return true;
}
