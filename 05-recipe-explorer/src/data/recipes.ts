import { Recipe, Cuisine } from "../types";

export const cuisines: Cuisine[] = [
  {
    slug: "east-asian",
    name: "East Asian",
    description: "Umami-rich broths, wok-fired noodles, fermented glazes, and delicately balanced seasonal produce.",
    icon: "🥢",
    regions: [
      {
        slug: "kansai",
        name: "Japanese Kansai & Kyoto",
        description: "Famed for dashi-infused comfort foods, delicately simmered silken tofu, and sweet red miso glazes.",
        traditions: ["Kombu Dashi extraction", "Mirin & Sake reductions", "Seasonal Kaiseki plating"],
      },
      {
        slug: "sichuan",
        name: "Sichuan Wok Traditions",
        description: "Pungent chili crisp oils, mouth-numbing Sichuan peppercorns, and rapid high-heat wok tossing.",
        traditions: ["Ma-la flavor profiles", "Doubanjiang fermented bean paste"],
      },
    ],
  },
  {
    slug: "italian",
    name: "Italian",
    description: "Sun-ripened tomatoes, cold-pressed olive oils, stone-milled semolina pastas, and fragrant fresh herbs.",
    icon: "🍝",
    regions: [
      {
        slug: "tuscany",
        name: "Tuscan Countryside",
        description: "Simple rustic cooking celebrated by wood-fired breads, extra-virgin olive oil, and white beans.",
        traditions: ["Florentine grilling", "Sourdough hydration", "Slow-simmered ragu"],
      },
    ],
  },
  {
    slug: "mexican",
    name: "Mexican",
    description: "Charred chiles, nixtamalized corn masa, complex aromatic mole sauces, and vibrant citrus marinades.",
    icon: "🌮",
    regions: [
      {
        slug: "oaxaca",
        name: "Oaxacan Valley",
        description: "Renowned for roasted cacao-and-chile moles, crispy tlayudas, and epazote-infused black beans.",
        traditions: ["Comal roasting", "Masa pressing", "Clay-pot simmering"],
      },
    ],
  },
];

export const recipes: Recipe[] = [
  {
    id: "vegetable-noodles",
    title: "Brown Butter Garlic Vegetable Noodles",
    cuisineSlug: "east-asian",
    cuisineName: "East Asian",
    regionSlug: "kansai",
    regionName: "Japanese Kansai & Kyoto",
    prepTime: "15 mins",
    cookTime: "10 mins",
    servings: 2,
    calories: 420,
    difficulty: "Easy",
    rating: 4.94,
    description: "Handcrafted wheat noodles tossed in a caramelized nutty brown butter, roasted garlic confit, scallions, crisp bok choy, and a splash of umami tamari.",
    ingredients: [
      { item: "Fresh Ramen or Wheat Noodles", amount: "300g" },
      { item: "Unsalted Butter", amount: "3 tbsp (45g)" },
      { item: "Garlic Cloves (finely minced)", amount: "4 cloves" },
      { item: "Baby Bok Choy (quartered)", amount: "2 heads" },
      { item: "Shiitake Mushrooms (thinly sliced)", amount: "100g" },
      { item: "Tamari Soy Sauce", amount: "1.5 tbsp" },
      { item: "Toasted Sesame Oil", amount: "1 tsp" },
      { item: "Scallions (finely sliced)", amount: "2 stalks" },
    ],
    instructions: [
      {
        step: 1,
        instruction: "Bring a large pot of salted water to a rolling boil. Cook fresh noodles according to package directions (approx. 2-3 minutes). Drain and rinse briefly with warm water.",
        timingCue: "3 mins",
      },
      {
        step: 2,
        instruction: "Melt unsalted butter in a wide skillet over medium-low heat. Allow the milk solids to gently foam and turn golden brown with an aromatic nutty fragrance.",
        timingCue: "4 mins",
      },
      {
        step: 3,
        instruction: "Add minced garlic and sliced shiitake mushrooms to the browned butter. Sauté until fragrant and mushrooms soften.",
        timingCue: "2 mins",
      },
      {
        step: 4,
        instruction: "Toss in the quartered bok choy and cooked noodles. Drizzle with tamari and toasted sesame oil. Toss vigorously over medium-high heat until evenly coated.",
        timingCue: "1 min",
      },
      {
        step: 5,
        instruction: "Garnish with fresh scallions, toasted sesame seeds, and chili flakes if desired. Serve immediately while hot.",
      },
    ],
    tags: ["Vegetarian", "Noodles", "Quick Dinner", "Under 30 Mins"],
  },
  {
    id: "miso-glazed-eggplant",
    title: "Miso-Glazed Japanese Eggplant (Nasu Dengaku)",
    cuisineSlug: "east-asian",
    cuisineName: "East Asian",
    regionSlug: "kansai",
    regionName: "Japanese Kansai & Kyoto",
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: 2,
    calories: 280,
    difficulty: "Easy",
    rating: 4.88,
    description: "Tender, melt-in-your-mouth roasted Japanese eggplants brushed with a rich, caramelized sweet red miso glaze and garnished with toasted sesame seeds.",
    ingredients: [
      { item: "Japanese Eggplants (halved lengthwise)", amount: "3 medium" },
      { item: "Red Miso Paste", amount: "2.5 tbsp" },
      { item: "Mirin (sweet cooking wine)", amount: "2 tbsp" },
      { item: "Sake", amount: "1 tbsp" },
      { item: "Brown Sugar", amount: "1.5 tbsp" },
      { item: "Sesame Oil", amount: "1 tbsp" },
    ],
    instructions: [
      {
        step: 1,
        instruction: "Score the flesh of halved eggplants in a diamond crosshatch pattern without piercing the outer skin.",
      },
      {
        step: 2,
        instruction: "Pan-sear eggplants cut-side down in sesame oil until golden brown, then flip and steam covered until tender.",
        timingCue: "8 mins",
      },
      {
        step: 3,
        instruction: "Whisk miso, mirin, sake, and sugar in a small saucepan over low heat until thickened and glossy.",
      },
      {
        step: 4,
        instruction: "Brush generously over eggplant flesh and broil in oven for 3-4 minutes until bubbling and caramelized.",
        timingCue: "4 mins",
      },
    ],
    tags: ["Vegan", "Gluten-Free Option", "Kyoto Classic"],
  },
  {
    id: "roasted-tomato-herb-focaccia",
    title: "Roasted Tomato & Rosemary Focaccia",
    cuisineSlug: "italian",
    cuisineName: "Italian",
    regionSlug: "tuscany",
    regionName: "Tuscan Countryside",
    prepTime: "25 mins",
    cookTime: "20 mins",
    servings: 6,
    calories: 310,
    difficulty: "Medium",
    rating: 4.91,
    description: "Crispy, airy high-hydration Tuscan focaccia studded with sweet blistered cherry tomatoes, fresh rosemary sprigs, and flaky sea salt.",
    ingredients: [
      { item: "Bread Flour", amount: "400g" },
      { item: "Warm Water (80% hydration)", amount: "320ml" },
      { item: "Extra Virgin Olive Oil", amount: "4 tbsp" },
      { item: "Instant Yeast", amount: "7g" },
      { item: "Cherry Tomatoes (halved)", amount: "150g" },
      { item: "Fresh Rosemary", amount: "2 tbsp" },
    ],
    instructions: [
      {
        step: 1,
        instruction: "Mix flour, yeast, salt, and water into a shaggy dough. Perform stretch-and-folds every 30 minutes for 2 hours.",
      },
      {
        step: 2,
        instruction: "Transfer to a well-oiled baking pan and proof until doubled in volume and bubbly.",
      },
      {
        step: 3,
        instruction: "Dimple dough gently with fingers, press in cherry tomatoes, scatter rosemary, and bake at 220°C (425°F) until golden crust forms.",
        timingCue: "20 mins",
      },
    ],
    tags: ["Baking", "Italian", "Bread", "Vegan"],
  },
];

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find((r) => r.id.toLowerCase() === id.toLowerCase());
}

export function getCuisineRegion(cuisineSlug: string, regionSlug: string) {
  const cui = cuisines.find((c) => c.slug.toLowerCase() === cuisineSlug.toLowerCase());
  if (!cui) return undefined;
  const reg = cui.regions.find((r) => r.slug.toLowerCase() === regionSlug.toLowerCase());
  if (!reg) return undefined;
  return { cuisine: cui, region: reg };
}
