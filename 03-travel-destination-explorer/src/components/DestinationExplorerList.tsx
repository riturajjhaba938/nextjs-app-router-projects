"use client";

import { useState, useMemo } from "react";
import { Destination } from "../types";
import DestinationCard from "./DestinationCard";

interface Props {
  initialDestinations: Destination[];
  regions: { slug: string; name: string }[];
}

export default function DestinationExplorerList({ initialDestinations, regions }: Props) {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const filtered = useMemo(() => {
    return initialDestinations.filter((dest) => {
      const matchesSearch =
        dest.name.toLowerCase().includes(search.toLowerCase()) ||
        dest.country.toLowerCase().includes(search.toLowerCase()) ||
        dest.subregionName.toLowerCase().includes(search.toLowerCase()) ||
        dest.highlights.some((h) => h.toLowerCase().includes(search.toLowerCase()));

      const matchesRegion = selectedRegion === "all" || dest.regionSlug === selectedRegion;

      return matchesSearch && matchesRegion;
    });
  }, [initialDestinations, search, selectedRegion]);

  return (
    <div className="space-y-6">
      {/* Search and Tabs */}
      <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        <div className="relative flex-1">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by destination, country, or top attractions..."
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition"
          />
          <svg
            className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setSelectedRegion("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              selectedRegion === "all"
                ? "bg-emerald-600 text-white"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200"
            }`}
          >
            All Regions
          </button>
          {regions.map((reg) => (
            <button
              key={reg.slug}
              onClick={() => setSelectedRegion(reg.slug)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedRegion === reg.slug
                  ? "bg-emerald-600 text-white"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {reg.name}
            </button>
          ))}
        </div>
      </div>

      <div className="text-xs text-stone-500 flex items-center justify-between">
        <span>
          Showing <strong className="text-stone-900">{filtered.length}</strong> of {initialDestinations.length} destinations
        </span>
        {(search || selectedRegion !== "all") && (
          <button
            onClick={() => {
              setSearch("");
              setSelectedRegion("all");
            }}
            className="text-emerald-700 hover:text-emerald-900 font-medium"
          >
            Reset filters
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      ) : (
        <div className="bg-white p-12 text-center rounded-2xl border border-dashed border-stone-300">
          <p className="text-stone-500 text-sm">No destinations found for your search query.</p>
        </div>
      )}
    </div>
  );
}
