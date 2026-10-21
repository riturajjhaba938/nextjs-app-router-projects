export interface Ingredient {
  item: string;
  amount: string;
}

export interface InstructionStep {
  step: number;
  instruction: string;
  timingCue?: string;
}

export interface Recipe {
  id: string;
  title: string;
  cuisineSlug: string;
  cuisineName: string;
  regionSlug: string;
  regionName: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  calories: number;
  difficulty: "Easy" | "Medium" | "Hard";
  rating: number;
  description: string;
  ingredients: Ingredient[];
  instructions: InstructionStep[];
  tags: string[];
}

export interface CuisineRegion {
  slug: string;
  name: string;
  description: string;
  traditions: string[];
}

export interface Cuisine {
  slug: string;
  name: string;
  description: string;
  icon: string;
  regions: CuisineRegion[];
}
