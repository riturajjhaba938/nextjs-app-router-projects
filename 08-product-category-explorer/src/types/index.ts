export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  categoryPath: string[]; // e.g. ["electronics", "audio"]
  categoryName: string;
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  badge?: string;
  emoji: string;
  description: string;
  features: string[];
  specs: ProductSpec[];
}

export interface CategoryItem {
  slug: string;
  name: string;
  icon: string;
  description: string;
  parentSlug?: string;
}
