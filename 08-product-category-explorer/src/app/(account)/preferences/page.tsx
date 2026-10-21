"use client";

import { useState } from "react";
import Link from "next/link";
import ProductBreadcrumbs from "@/components/ProductBreadcrumbs";

export default function PreferencesPage() {
  const [currency, setCurrency] = useState("USD");
  const [layout, setLayout] = useState("grid-3");
  const [newsletter, setNewsletter] = useState(true);
  const [stockAlerts, setStockAlerts] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-16">
      <ProductBreadcrumbs items={[{ label: "Account" }, { label: "Shopping Preferences" }]} />

      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
          User Settings & Route Group (account)
        </span>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight mt-2">Shopping Preferences</h1>
        <p className="text-slate-500 text-sm mt-1">
          Customize your browsing currency, storefront layout, and notifications.
        </p>
      </div>

      <form onSubmit={handleSave} className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs space-y-8">
        {saved && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-800 text-xs font-bold">
            <span className="text-lg">✓</span>
            <span>Preferences successfully updated and persisted to your local session!</span>
          </div>
        )}

        {/* Currency Setting */}
        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Catalog Currency
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { code: "USD", symbol: "$", label: "US Dollar" },
              { code: "EUR", symbol: "€", label: "Euro" },
              { code: "GBP", symbol: "£", label: "British Pound" },
              { code: "JPY", symbol: "¥", label: "Japanese Yen" },
            ].map((c) => (
              <label
                key={c.code}
                onClick={() => setCurrency(c.code)}
                className={`p-4 rounded-2xl border cursor-pointer text-center space-y-1 transition-all ${
                  currency === c.code
                    ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                    : "border-slate-200 hover:bg-slate-50 text-slate-800"
                }`}
              >
                <div className="text-lg font-black">{c.symbol} {c.code}</div>
                <div className={`text-[10px] ${currency === c.code ? "text-slate-300" : "text-slate-400"}`}>
                  {c.label}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Display Grid Layout */}
        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Default Catalog Grid Density
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: "grid-3", title: "Comfortable Grid (3 Columns)", desc: "Larger visuals and full feature summaries" },
              { id: "grid-compact", title: "Compact Density (4 Columns)", desc: "Higher product density with streamlined cards" },
            ].map((opt) => (
              <label
                key={opt.id}
                onClick={() => setLayout(opt.id)}
                className={`p-4 rounded-2xl border cursor-pointer space-y-1 transition-all ${
                  layout === opt.id
                    ? "border-slate-900 bg-slate-50 ring-1 ring-slate-900"
                    : "border-slate-200 hover:bg-slate-50"
                }`}
              >
                <div className="font-bold text-xs text-slate-900">{opt.title}</div>
                <div className="text-[11px] text-slate-500">{opt.desc}</div>
              </label>
            ))}
          </div>
        </div>

        {/* Communication Toggles */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Notifications & Dispatch Alerts
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={stockAlerts}
              onChange={(e) => setStockAlerts(e.target.checked)}
              className="mt-0.5 rounded text-slate-900 focus:ring-slate-900"
            />
            <div>
              <span className="font-bold text-xs text-slate-800 block">Restock & Production Alerts</span>
              <span className="text-[11px] text-slate-500">
                Receive instant notifications when sold-out bespoke items return to active inventory.
              </span>
            </div>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
              className="mt-0.5 rounded text-slate-900 focus:ring-slate-900"
            />
            <div>
              <span className="font-bold text-xs text-slate-800 block">PlainShop Design Journal</span>
              <span className="text-[11px] text-slate-500">
                A weekly digest on workspace ergonomics, computational materials, and industrial design.
              </span>
            </div>
          </label>
        </div>

        {/* Actions */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <Link
            href="/products"
            className="text-xs font-semibold text-slate-500 hover:text-slate-800"
          >
            ← Return to Products
          </Link>

          <button
            type="submit"
            className="px-6 py-2.5 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all shadow-md"
          >
            Save Preferences
          </button>
        </div>
      </form>
    </div>
  );
}
