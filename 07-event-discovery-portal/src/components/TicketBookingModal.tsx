"use client";

import { useState } from "react";
import Link from "next/link";
import { TicketTier } from "../types";

interface Props {
  eventId: string;
  eventTitle: string;
  ticketTiers: TicketTier[];
}

export default function TicketBookingModal({ eventId, eventTitle, ticketTiers }: Props) {
  const [selectedTier, setSelectedTier] = useState<TicketTier>(ticketTiers[0]);
  const [quantity, setQuantity] = useState(1);
  const [booked, setBooked] = useState(false);
  const [attendeeName, setAttendeeName] = useState("");
  const [attendeeEmail, setAttendeeEmail] = useState("");

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!attendeeName || !attendeeEmail) return;
    setBooked(true);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
      <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
        🎟️ Register & Select Passes
      </h3>

      {booked ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center space-y-3">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
            ✓
          </div>
          <h4 className="text-base font-bold text-emerald-900">Registration Confirmed!</h4>
          <p className="text-xs text-emerald-700">
            {quantity}x <span className="font-semibold">{selectedTier.name}</span> pass reserved for{" "}
            <span className="font-semibold">{attendeeName}</span> ({attendeeEmail}).
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
            <Link
              href="/events/my-tickets"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-all shadow-sm"
            >
              View in My Tickets →
            </Link>
            <button
              onClick={() => setBooked(false)}
              className="px-3 py-2 text-xs text-emerald-800 hover:underline"
            >
              Book Another Pass
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleBook} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Select Ticket Tier
            </label>
            <div className="space-y-2">
              {ticketTiers.map((tier) => (
                <label
                  key={tier.name}
                  onClick={() => setSelectedTier(tier)}
                  className={`flex items-start justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                    selectedTier.name === tier.name
                      ? "border-indigo-600 bg-indigo-50/50 ring-1 ring-indigo-600"
                      : "border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="tier"
                        checked={selectedTier.name === tier.name}
                        onChange={() => setSelectedTier(tier)}
                        className="text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="font-bold text-xs text-slate-900">{tier.name}</span>
                    </div>
                    <ul className="text-[11px] text-slate-500 list-disc list-inside pl-4">
                      {tier.perks.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <span className="font-black text-xs text-indigo-700 bg-white px-2 py-1 rounded-md border border-indigo-100 shadow-2xs">
                    {tier.price}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Quantity</label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:outline-indigo-500"
              >
                {[1, 2, 3, 4, 5].map((q) => (
                  <option key={q} value={q}>
                    {q} {q === 1 ? "Ticket" : "Tickets"}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Attendee Name</label>
              <input
                type="text"
                required
                placeholder="Jane Doe"
                value={attendeeName}
                onChange={(e) => setAttendeeName(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Attendee Email</label>
            <input
              type="email"
              required
              placeholder="jane@example.com"
              value={attendeeEmail}
              onChange={(e) => setAttendeeEmail(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs transition-all shadow-md hover:shadow-indigo-500/20"
          >
            Confirm Reservation ({quantity} × {selectedTier.name})
          </button>
        </form>
      )}
    </div>
  );
}
