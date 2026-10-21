import { events, cities, categories } from "@/data/events";
import EventDirectoryList from "@/components/EventDirectoryList";
import EventBreadcrumbs from "@/components/EventBreadcrumbs";

export const metadata = {
  title: "Events Calendar & Directory | EventHub",
  description: "Browse all upcoming conferences, hackathons, and creative meetups worldwide.",
};

export default function EventsIndexPage() {
  return (
    <div className="space-y-6 pb-16">
      <EventBreadcrumbs items={[{ label: "Events Directory" }]} />

      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Events Directory</h1>
        <p className="text-slate-600 text-sm mt-1">
          Explore upcoming industry gatherings, technical workshops, and global conferences. Filter by topic, city, or search by keyword.
        </p>
      </div>

      <EventDirectoryList
        initialEvents={events}
        cities={cities}
        categories={categories}
      />
    </div>
  );
}
