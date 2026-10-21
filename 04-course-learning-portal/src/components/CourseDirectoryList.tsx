"use client";

import { useState, useMemo } from "react";
import { Course } from "../types";
import CourseCard from "./CourseCard";

interface Props {
  initialCourses: Course[];
  topics: { slug: string; name: string }[];
}

export default function CourseDirectoryList({ initialCourses, topics }: Props) {
  const [search, setSearch] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const filtered = useMemo(() => {
    return initialCourses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.description.toLowerCase().includes(search.toLowerCase()) ||
        course.instructor.name.toLowerCase().includes(search.toLowerCase());

      const matchesTopic = selectedTopic === "all" || course.topicSlug === selectedTopic;
      const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;

      return matchesSearch && matchesTopic && matchesLevel;
    });
  }, [initialCourses, search, selectedTopic, selectedLevel]);

  return (
    <div className="space-y-6">
      {/* Search and Filters Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        <div className="relative flex-1">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses by title, instructor, or framework..."
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-violet-500 focus:bg-white transition"
          />
          <svg
            className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5"
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
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="text-sm bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-violet-500"
          >
            <option value="all">All Topics</option>
            {topics.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.name}
              </option>
            ))}
          </select>

          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="text-sm bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-violet-500"
          >
            <option value="all">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>
          Showing <strong className="text-slate-900">{filtered.length}</strong> of {initialCourses.length} courses
        </span>
        {(search || selectedTopic !== "all" || selectedLevel !== "all") && (
          <button
            onClick={() => {
              setSearch("");
              setSelectedTopic("all");
              setSelectedLevel("all");
            }}
            className="text-violet-700 hover:text-violet-900 font-medium"
          >
            Reset filters
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="bg-white p-12 text-center rounded-2xl border border-dashed border-slate-300">
          <p className="text-slate-500 text-sm">No courses match your active criteria.</p>
        </div>
      )}
    </div>
  );
}
