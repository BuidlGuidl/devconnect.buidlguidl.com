"use client";

import Image from "next/image";
import { Session, formatTo12Hour } from "~~/app/sessions";
import { addSessionToCalendar, getGoogleCalendarUrl } from "~~/utils/calendar";

interface SessionModalProps {
  session: Session | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SessionModal = ({ session, isOpen, onClose }: SessionModalProps) => {
  if (!session) return null;

  const handleGoogleCalendar = () => {
    try {
      const url = getGoogleCalendarUrl(session);
      if (!url) {
        alert("Unable to generate Google Calendar link. Please try the ICS download option.");
        return;
      }

      const newWindow = window.open(url, "_blank");
      if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
        // Popup was blocked
        alert(
          "Popup blocked! Please allow popups for this site, or copy this link:\n\n" + url.substring(0, 100) + "...",
        );
      }
    } catch (error) {
      console.error("Failed to open Google Calendar:", error);
      alert("Unable to open Google Calendar. Please try the ICS download option.");
    }
  };

  const handleICSDownload = () => {
    addSessionToCalendar(session);
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
    game: "#FFCCB5", // light orange
  };

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""} items-start sm:items-center pt-16 sm:pt-0`}>
      <div
        className="modal-box max-w-2xl max-h-[90vh] overflow-y-auto"
        style={{ backgroundColor: lightColors[session.type] }}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-lg text-primary mb-0">{session.title}</h3>
            {session.speaker && (
              <div className="flex items-start gap-6 mb-2 mt-3">
                {session.speaker.map(speaker => (
                  <div key={speaker.name} className="flex items-start gap-2">
                    <Image
                      key={speaker.name}
                      src={speaker.image}
                      alt={speaker.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-bold">{speaker.name}</span>
                      {speaker.company && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm text-base-content/70">{speaker.company.name}</span>
                          <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 rounded overflow-hidden">
                            <Image
                              src={speaker.company.icon}
                              alt={`${speaker.company.name} logo`}
                              width={16}
                              height={16}
                              className="opacity-70 object-contain max-w-full max-h-full"
                            />
                          </div>
                        </div>
                      )}
                    </div>
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

        <p className="text-base leading-relaxed whitespace-pre-line mb-0">{session.description}</p>
        {session.link && (
          <a href={session.link.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-white">
            {session.link.text}
          </a>
        )}

        <div className="divider"></div>

        <div className="flex gap-4 items-center text-sm">
          <button
            onClick={handleGoogleCalendar}
            className="text-base-content/70 hover:text-base-content cursor-pointer"
          >
            📅 <span className="underline">Add to Google Calendar</span>
          </button>
          <span className="text-base-content/40">or</span>
          <button
            onClick={handleICSDownload}
            className="text-base-content/70 hover:text-base-content underline cursor-pointer"
          >
            Download ICS file
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
};
