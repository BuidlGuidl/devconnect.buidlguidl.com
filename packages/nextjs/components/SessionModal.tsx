"use client";

import { useState } from "react";
import Image from "next/image";
import { Session, formatTo12Hour } from "~~/app/sessions";
import { addSessionToCalendar, getGoogleCalendarUrl } from "~~/utils/calendar";

interface SessionModalProps {
  session: Session | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SessionModal = ({ session, isOpen, onClose }: SessionModalProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  if (!session) return null;

  const handleGoogleCalendar = () => {
    window.open(getGoogleCalendarUrl(session), "_blank");
    setShowDropdown(false);
  };

  const handleICSDownload = () => {
    addSessionToCalendar(session);
    setShowDropdown(false);
  };

  // Solid lighter versions of the session colors
  const lightColors = {
    workshop: "#B8D4F7", // light blue
    office_hours: "#FFB8D1", // light pink
    panel: "#F4D0FF", // light purplish pink
    ctf: "#E8FFB8", // light green
    students: "#FFE4A0", // light yellow
    challenge: "#D4B0FF", // light purple
    talk: "#C7EBD9", // light greenish
  };

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box max-w-2xl" style={{ backgroundColor: lightColors[session.type] }}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-lg text-primary mb-0">{session.title}</h3>
            {session.speaker && (
              <div className="flex items-center gap-6">
                {session.speaker.map(speaker => (
                  <div key={speaker.name} className="flex items-center gap-2">
                    <Image
                      key={speaker.name}
                      src={speaker.image}
                      alt={speaker.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <p className="font-bold">{speaker.name}</p>
                  </div>
                ))}
              </div>
            )}
            <p className="text-sm text-base-content/70 m-0">
              {session.dayOfWeek}, {session.dateString}
            </p>
            <p className="text-sm text-base-content/70 mt-0 m-0">
              {formatTo12Hour(session.startTime)} - {formatTo12Hour(session.endTime)}
            </p>
          </div>
          <span onClick={onClose} className="text-2xl cursor-pointer">
            ✕
          </span>
        </div>

        <div className="divider"></div>

        <p className="text-base leading-relaxed whitespace-pre-line">{session.description}</p>
        {session.link && (
          <a href={session.link.url} target="_blank" rel="noopener noreferrer" className="link">
            {session.link.text}
          </a>
        )}

        <div className="mt-6">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="btn bg-white/60 hover:bg-white border-2 border-primary text-primary font-bold"
          >
            📅 Add to Calendar
          </button>
          {showDropdown && (
            <div className="mt-2 p-3 bg-white rounded-lg shadow-lg border-2 border-base-300">
              <div className="flex flex-col gap-2">
                <button onClick={handleGoogleCalendar} className="btn btn-sm btn-outline w-full">
                  Google Calendar
                </button>
                <button onClick={handleICSDownload} className="btn btn-sm btn-outline w-full">
                  Apple/Outlook Calendar (.ics)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
};
