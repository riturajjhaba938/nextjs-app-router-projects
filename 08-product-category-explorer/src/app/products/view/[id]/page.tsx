import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductById } from "@/data/products";
import ProductBreadcrumbs from "@/components/ProductBreadcrumbs";
import ProductCard from "@/components/ProductCard";
import ProductDetailActions from "@/components/ProductDetailActions";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Product Not Found | PlainShop",
    };
  }

  return {
    title: `${product.name} — ${product.currency}${product.price} | PlainShop`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  // Find related products in the same category
  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.categoryPath[0] === product.categoryPath[0])
    .slice(0, 3);

  // Build breadcrumbs
  const breadcrumbs = [
    { label: "Products", href: "/products" },
    {
      label: product.categoryName,
      href: `/products/${product.categoryPath.join("/")}`,
    },
    { label: product.name },
  ];

  return (
    <div className="space-y-12 pb-16">
      <ProductBreadcrumbs items={breadcrumbs} />

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Visual and Technical Specs (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Main Visual Frame */}
          <div className="relative bg-white rounded-3xl border border-slate-200 p-12 sm:p-20 flex items-center justify-center shadow-xs overflow-hidden">
            {product.badge && (
              <span className="absolute top-6 left-6 px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-full">
                {product.badge}
              </span>
            )}

            <div className="text-8xl sm:text-9xl select-none filter drop-shadow-md hover:scale-105 transition-transform duration-300">
              {product.emoji}
            </div>

            <div className="absolute bottom-6 right-6 flex items-center gap-1.5 text-xs font-bold text-amber-500 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full border border-slate-200">
              <span>★</span>
              <span>{product.rating}</span>
              <span className="text-slate-400 font-normal">({product.reviewCount} customer reviews)</span>
            </div>
          </div>

          {/* About / Description */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 space-y-4 shadow-2xs">
            <h2 className="text-lg font-bold text-slate-900">Design & Purpose</h2>
            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
              {product.description}
            </p>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Features
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-2xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900">Technical Specifications</h2>
            <div className="divide-y divide-slate-100 text-xs">
              {product.specs.map((spec, idx) => (
                <div key={idx} className="py-3 flex justify-between items-center gap-4">
                  <span className="font-semibold text-slate-500">{spec.label}</span>
                  <span className="font-bold text-slate-900 text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sticky Purchase Sidebar (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="sticky top-24 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                {product.categoryName}
              </span>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
                {product.name}
              </h1>
              <p className="text-xs text-slate-400 font-mono">SKU: {product.id.toUpperCase()}</p>
            </div>

            <ProductDetailActions product={product} />

            <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-500">
              <span className="font-bold text-slate-800 block">PlainShop Craft Guarantee</span>
              <p className="leading-relaxed">
                Every unit is inspected by our quality assurance team in Portland, Oregon before sealed dispatch. If you are not completely satisfied within 30 days, we arrange a pickup and provide a complete refund.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="border-t border-slate-200 pt-12 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">Related in {product.categoryName}</h3>
            <Link
              href={`/products/${product.categoryPath.join("/")}`}
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
            >
              View Entire Collection →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rp) => (
              <ProductCard key={rp.id} product={rp} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
