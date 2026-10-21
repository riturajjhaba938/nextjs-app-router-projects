"use client";

import { useState, useMemo } from "react";
import { EventItem, City, EventCategory } from "../types";
import EventCard from "./EventCard";

interface Props {
  initialEvents: EventItem[];
  cities: City[];
  categories: EventCategory[];
}

export default function EventDirectoryList({ initialEvents, cities, categories }: Props) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");

  const filtered = useMemo(() => {
    return initialEvents.filter((ev) => {
      const matchesSearch =
        ev.title.toLowerCase().includes(search.toLowerCase()) ||
        ev.description.toLowerCase().includes(search.toLowerCase()) ||
        ev.venue.toLowerCase().includes(search.toLowerCase());

      const matchesCat = selectedCategory === "all" || ev.categorySlug === selectedCategory;
      const matchesCity = selectedCity === "all" || ev.citySlug === selectedCity;

      return matchesSearch && matchesCat && matchesCity;
    });
  }, [initialEvents, search, selectedCategory, selectedCity]);

  return (
    <div className="space-y-6">
      {/* Search & Filters */}
      <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-xs flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        <div className="relative flex-1">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search events by title, venue, or keywords..."
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-rose-500 focus:bg-white transition"
          />
          <svg
            className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5"
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

        <div className="flex flex-wrap sm:flex-nowrap gap-3 items-center">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="text-sm bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-zinc-700 focus:outline-hidden focus:ring-2 focus:ring-rose-500"
          >
            <option value="all">All Global Cities</option>
            {cities.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
            selectedCategory === "all"
              ? "bg-rose-600 text-white shadow-xs"
              : "bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-50"
          }`}
        >
          All Categories
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setSelectedCategory(cat.slug)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              selectedCategory === cat.slug
                ? "bg-rose-600 text-white shadow-xs"
                : "bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-50"
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-zinc-500">
        <span>
          Showing <strong className="text-zinc-900">{filtered.length}</strong> of {initialEvents.length} events
        </span>
        {(search || selectedCategory !== "all" || selectedCity !== "all") && (
          <button
            onClick={() => {
              setSearch("");
              setSelectedCategory("all");
              setSelectedCity("all");
            }}
            className="text-rose-600 hover:text-rose-800 font-medium"
          >
            Reset filters
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((ev) => (
            <EventCard key={ev.id} event={ev} />
          ))}
        </div>
      ) : (
        <div className="bg-white p-12 text-center rounded-2xl border border-dashed border-zinc-300">
          <p className="text-zinc-500 text-sm">No events found matching your search.</p>
        </div>
      )}
    </div>
  );
}
