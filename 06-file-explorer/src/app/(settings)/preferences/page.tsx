"use client";

import { useState } from "react";
import FileBreadcrumbs from "../../../components/FileBreadcrumbs";
import { driveStats } from "../../../data/files";

export default function PreferencesPage() {
  const [showHidden, setShowHidden] = useState(false);
  const [showExtensions, setShowExtensions] = useState(true);
  const [defaultSort, setDefaultSort] = useState("name");

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <FileBreadcrumbs path={["preferences"]} />

      <div className="border-b border-slate-200 pb-5">
        <div className="inline-block px-2.5 py-1 text-xs font-semibold text-sky-800 bg-sky-50 border border-sky-100 rounded-md mb-2">
          Route Group: (settings)
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Preferences &amp; Explorer Settings
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Configure default filesystem view modes, code viewer themes, and directory traversal behaviors.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs space-y-6">
        <div>
          <h2 className="text-base font-bold text-slate-900 mb-4">General Display Settings</h2>
          <div className="space-y-4">
            <label className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 cursor-pointer">
              <div>
                <span className="text-xs font-bold text-slate-900 block">Show Hidden Files &amp; Dotfiles</span>
                <span className="text-xs text-slate-500">Display configuration dotfiles such as .gitignore and .env</span>
              </div>
              <input
                type="checkbox"
                checked={showHidden}
                onChange={(e) => setShowHidden(e.target.checked)}
                className="w-4 h-4 text-sky-600 rounded"
              />
            </label>

            <label className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 cursor-pointer">
              <div>
                <span className="text-xs font-bold text-slate-900 block">Always Show File Extensions</span>
                <span className="text-xs text-slate-500">Explicitly render .tsx, .json, and .md extensions in directory tables</span>
              </div>
              <input
                type="checkbox"
                checked={showExtensions}
                onChange={(e) => setShowExtensions(e.target.checked)}
                className="w-4 h-4 text-sky-600 rounded"
              />
            </label>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6">
          <h2 className="text-base font-bold text-slate-900 mb-4">Default Sorting Order</h2>
          <select
            value={defaultSort}
            onChange={(e) => setDefaultSort(e.target.value)}
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-700"
          >
            <option value="name">Sort by Name (Alphabetical)</option>
            <option value="size">Sort by Size (Largest First)</option>
            <option value="modified">Sort by Date Modified (Recent First)</option>
          </select>
        </div>

        <div className="border-t border-slate-100 pt-6">
          <h2 className="text-base font-bold text-slate-900 mb-2">Storage Diagnostics</h2>
          <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100 text-xs text-sky-900 space-y-1">
            <div><strong>Allocated Capacity:</strong> {driveStats.totalGB} GB</div>
            <div><strong>Current Usage:</strong> {driveStats.usedGB} GB ({driveStats.fileCount} files, {driveStats.folderCount} folders)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
