export interface ProductIdea {
  name: string;
  description: string;
  benefit: string;
}

export interface TransformationStep {
  step: number;
  title: string;
  description: string;
}

export interface AnalysisResponse {
  material: string;
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
}

export interface AnalyzeRequestBody {
  material: string;
}
