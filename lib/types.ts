export interface ProductIdea {
  name: string;
  description: string;
  benefit: string;
  suitabilityForTarget?: string;
  compositeSynergy?: string;
}

export interface TransformationStep {
  step: number;
  title: string;
  description: string;
}

export interface MaterialComparison {
  conventionalMaterial: string;
  circularReplacement: string;
  pros: string[];
  cons: string[];
  costFeasibility: string;
  durabilityComparison: string;
}

export interface AnalysisResponse {
  mode?: "single" | "multi_blend" | "product_target" | "material_swap";
  material: string;
  materialsList?: string[];
  targetGoal?: string;
  category: string;
  resourcePotential: string;
  resourceDescription: string;
  productIdeas: ProductIdea[];
  replacementOpportunity: string;
  whyThisAlternative: string;
  transformationSteps: TransformationStep[];
  circularityScore: number;
  practicalityScore: number;
  wastePotential: string;
  resourcePotentialEstimate: string;
  waterImpact: string;
  suitableFor: string[];
  limitations: string[];
  confidence: string;
  isFallback?: boolean;
  materialComparison?: MaterialComparison;
  blendSynergyAnalysis?: string;
}

export interface AnalyzeRequestBody {
  mode?: "single" | "multi_blend" | "product_target" | "material_swap";
  material?: string;
  materials?: string[];
  targetGoal?: string;
  currentProduct?: string;
  currentResource?: string;
}
