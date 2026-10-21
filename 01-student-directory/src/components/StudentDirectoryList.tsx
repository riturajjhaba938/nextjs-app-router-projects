"use client";

import { useState, useMemo } from "react";
import { Student } from "../types";
import StudentCard from "./StudentCard";

interface Props {
  initialStudents: Student[];
  departments: { slug: string; name: string }[];
}

export default function StudentDirectoryList({ initialStudents, departments }: Props) {
  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  const filteredStudents = useMemo(() => {
    return initialStudents.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.specialization.toLowerCase().includes(search.toLowerCase()) ||
        student.advisor.toLowerCase().includes(search.toLowerCase()) ||
        student.id.toLowerCase().includes(search.toLowerCase());

      const matchesDept =
        selectedDept === "all" || student.departmentSlug === selectedDept;

      const matchesYear =
        selectedYear === "all" || student.year.toLowerCase().includes(selectedYear.toLowerCase());

      return matchesSearch && matchesDept && matchesYear;
    });
  }, [initialStudents, search, selectedDept, selectedYear]);

  return (
    <div className="space-y-6">
      {/* Search and Filters Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        <div className="relative flex-1">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search students by name, track, or advisor..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
          />
          <svg
            className="w-4 h-4 text-slate-400 absolute left-3.5 top-3"
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
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Departments</option>
            {departments.map((d) => (
              <option key={d.slug} value={d.slug}>
                {d.name}
              </option>
            ))}
          </select>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Years</option>
            <option value="1st">1st Year</option>
            <option value="2nd">2nd Year</option>
            <option value="3rd">3rd Year</option>
            <option value="4th">4th Year</option>
            <option value="graduate">Graduate / MS</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>
          Showing <strong className="text-slate-800">{filteredStudents.length}</strong> of{" "}
          {initialStudents.length} enrolled students
        </span>
        {(search || selectedDept !== "all" || selectedYear !== "all") && (
          <button
            onClick={() => {
              setSearch("");
              setSelectedDept("all");
              setSelectedYear("all");
            }}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Reset filters
          </button>
        )}
      </div>

      {/* Grid */}
      {filteredStudents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        <div className="bg-white p-12 text-center rounded-xl border border-dashed border-slate-300">
          <p className="text-slate-500 text-sm font-medium">No students match your filter criteria.</p>
          <button
            onClick={() => {
              setSearch("");
              setSelectedDept("all");
              setSelectedYear("all");
            }}
            className="mt-3 text-xs text-blue-600 hover:underline font-semibold"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
