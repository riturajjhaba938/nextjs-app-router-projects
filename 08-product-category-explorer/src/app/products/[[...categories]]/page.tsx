import { notFound } from "next/navigation";
import {
  products,
  categories,
  getProductsByCategoryPath,
  getCategoryBySlug,
} from "@/data/products";
import ProductBreadcrumbs from "@/components/ProductBreadcrumbs";
import ProductCatalogView from "@/components/ProductCatalogView";

interface Props {
  params: Promise<{
    categories?: string[];
  }>;
}

export function generateStaticParams() {
  return [
    { categories: [] }, // /products
    { categories: ["electronics"] },
    { categories: ["electronics", "audio"] },
    { categories: ["electronics", "workstation"] },
    { categories: ["office"] },
    { categories: ["office", "lighting"] },
    { categories: ["office", "organization"] },
  ];
}

export async function generateMetadata({ params }: Props) {
  const { categories: rawCategories } = await params;
  const segments = rawCategories || [];

  if (segments.length === 0) {
    return {
      title: "All Products & Collections | PlainShop",
      description: "Browse the complete collection of minimalist hardware, acoustic monitors, and workspace tools.",
    };
  }

  const currentSlug = segments[segments.length - 1];
  const cat = getCategoryBySlug(currentSlug);

  return {
    title: cat ? `${cat.name} | PlainShop Catalog` : "Products | PlainShop",
    description: cat ? cat.description : "Explore products by category",
  };
}

export default async function ProductCategoryPage({ params }: Props) {
  const { categories: rawCategories } = await params;
  const segments = rawCategories || [];

  // Determine current active category
  let activeCatSlug: string | undefined;
  let categoryTitle = "All Products";
  let categoryDesc = "Carefully designed tools and architectural artifacts for the mindful desk.";

  if (segments.length > 0) {
    const currentSlug = segments[segments.length - 1];
    const cat = getCategoryBySlug(currentSlug);

    if (!cat) {
      notFound();
    }

    activeCatSlug = cat.slug;
    categoryTitle = cat.name;
    categoryDesc = cat.description;
  }

  const filteredProducts = getProductsByCategoryPath(segments);

  // Generate breadcrumb items
  const breadcrumbItems: { label: string; href?: string }[] = [{ label: "Products", href: "/products" }];
  let runningHref = "/products";

  segments.forEach((seg, idx) => {
    const matched = getCategoryBySlug(seg);
    runningHref += `/${seg}`;
    breadcrumbItems.push({
      label: matched ? matched.name : seg,
      href: idx < segments.length - 1 ? runningHref : undefined,
    });
  });

  return (
    <div className="space-y-6 pb-16">
      <ProductBreadcrumbs items={breadcrumbItems} />

      <ProductCatalogView
        initialProducts={filteredProducts}
        categories={categories}
        activeCategorySlug={activeCatSlug}
        categoryTitle={categoryTitle}
        categoryDesc={categoryDesc}
      />
    </div>
  );
}
