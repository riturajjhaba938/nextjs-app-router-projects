"use client";

import { useState } from "react";
import Link from "next/link";
import EventBreadcrumbs from "@/components/EventBreadcrumbs";

interface RegisteredTicket {
  ticketNumber: string;
  eventId: string;
  eventTitle: string;
  tier: string;
  date: string;
  time: string;
  venue: string;
  cityName: string;
  attendeeName: string;
  seatZone: string;
}

const sampleTickets: RegisteredTicket[] = [
  {
    ticketNumber: "TKT-8849-NEXT-26",
    eventId: "nextjs-summit-2026",
    eventTitle: "Global Next.js Architecture Summit 2026",
    tier: "VIP All-Access",
    date: "Thursday, Nov 12, 2026",
    time: "09:00 AM - 06:00 PM PST",
    venue: "Moscone Center West, Level 3",
    cityName: "San Francisco",
    attendeeName: "Alex Rivera",
    seatZone: "Orchestra Section A, Row 2, Seat 14",
  },
  {
    ticketNumber: "TKT-4921-TOKYO-26",
    eventId: "tokyo-ambient-sound",
    eventTitle: "Tokyo Spatial Audio & Ambient Night",
    tier: "Standard Listening Seat",
    date: "Saturday, Dec 5, 2026",
    time: "07:00 PM - 11:30 PM JST",
    venue: "Roppongi Arts Pavilion, Hall B",
    cityName: "Tokyo",
    attendeeName: "Alex Rivera",
    seatZone: "Acoustic Zone C",
  },
];

export default function MyTicketsPage() {
  const [tickets, setTickets] = useState<RegisteredTicket[]>(sampleTickets);
  const [downloaded, setDownloaded] = useState<string | null>(null);

  const handleDownload = (ticketNo: string) => {
    setDownloaded(ticketNo);
    setTimeout(() => setDownloaded(null), 3000);
  };

  const handleCancel = (ticketNo: string) => {
    if (confirm("Are you sure you want to release this ticket reservation?")) {
      setTickets(tickets.filter((t) => t.ticketNumber !== ticketNo));
    }
  };

  return (
    <div className="space-y-8 pb-16">
      <EventBreadcrumbs
        items={[
          { label: "Events Directory", href: "/events" },
          { label: "My Passes & Tickets" },
        ]}
      />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
            Attendee Management Portal
          </span>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight mt-2">My Passes & Tickets</h1>
          <p className="text-slate-600 text-sm mt-1">
            Access your verified QR codes, download wallet passes, and manage check-in credentials.
          </p>
        </div>

        <Link
          href="/events"
          className="self-start sm:self-auto px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
        >
          + Find More Events
        </Link>
      </div>

      {tickets.length > 0 ? (
        <div className="space-y-6">
          {tickets.map((tkt) => (
            <div
              key={tkt.ticketNumber}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row"
            >
              {/* Ticket Left / Main info */}
              <div className="p-6 md:p-8 flex-1 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 font-bold rounded-lg text-xs">
                    {tkt.tier}
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    ID: {tkt.ticketNumber}
                  </span>
                </div>

                <Link
                  href={`/events/${tkt.eventId}`}
                  className="text-xl md:text-2xl font-black text-slate-900 hover:text-indigo-600 transition-colors block"
                >
                  {tkt.eventTitle}
                </Link>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 pt-2">
                  <div>
                    <span className="font-semibold text-slate-400 block text-[11px]">DATE & TIME</span>
                    <span className="font-bold text-slate-800">{tkt.date}</span>
                    <p className="text-slate-500">{tkt.time}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-400 block text-[11px]">LOCATION</span>
                    <span className="font-bold text-slate-800">{tkt.venue}</span>
                    <p className="text-slate-500">{tkt.cityName}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-400 block text-[11px]">ATTENDEE</span>
                    <span className="font-bold text-slate-800">{tkt.attendeeName}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-400 block text-[11px]">SEATING ASSIGNMENT</span>
                    <span className="font-bold text-indigo-600">{tkt.seatZone}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-2 border-t border-slate-100">
                  <button
                    onClick={() => handleDownload(tkt.ticketNumber)}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5"
                  >
                    <span>📲</span>
                    {downloaded === tkt.ticketNumber ? "Pass Saved to Device!" : "Save to Wallet (PKPass)"}
                  </button>

                  <button
                    onClick={() => handleCancel(tkt.ticketNumber)}
                    className="px-4 py-2 bg-white border border-slate-200 hover:bg-red-50 hover:text-red-600 text-slate-600 rounded-xl text-xs font-semibold transition-all"
                  >
                    Cancel Reservation
                  </button>
                </div>
              </div>

              {/* Ticket Right / Perforated Stub QR Code */}
              <div className="bg-slate-50 border-t md:border-t-0 md:border-l border-dashed border-slate-300 p-6 md:p-8 flex flex-col items-center justify-center text-center w-full md:w-64 space-y-3">
                <div className="w-28 h-28 bg-white border-2 border-slate-900 rounded-xl p-2 flex flex-col items-center justify-center shadow-inner">
                  {/* CSS simulated QR code matrix */}
                  <div className="grid grid-cols-5 gap-1 w-full h-full p-1 bg-slate-900 rounded">
                    {[...Array(25)].map((_, i) => (
                      <div
                        key={i}
                        className={`rounded-2xs ${
                          (i * 7 + 3) % 2 === 0 || i === 0 || i === 4 || i === 20 || i === 24
                            ? "bg-white"
                            : "bg-transparent"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
                  Scan at Entrance
                </span>
                <span className="inline-block px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-[10px] font-bold">
                  ● ACTIVE PASS
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4">
          <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-3xl mx-auto">
            🎟️
          </div>
          <h3 className="text-lg font-bold text-slate-900">No Active Event Passes</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            You haven't registered for any events yet. Browse our directory to reserve your spot!
          </p>
          <Link
            href="/events"
            className="inline-block px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
          >
            Explore Events Now
          </Link>
        </div>
      )}
    </div>
  );
}
