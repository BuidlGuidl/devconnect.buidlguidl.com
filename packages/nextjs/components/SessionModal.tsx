"use client";

import { Session, formatTo12Hour } from "~~/app/sessions";

interface SessionModalProps {
  session: Session | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SessionModal = ({ session, isOpen, onClose }: SessionModalProps) => {
  if (!session) return null;

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box max-w-2xl">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-lg text-primary">{session.title}</h3>
            <p className="text-sm text-base-content/70">
              {session.dayOfWeek}, {session.dateString}
            </p>
            <p className="text-sm text-base-content/70">
              {formatTo12Hour(session.startTime)} - {formatTo12Hour(session.endTime)}
            </p>
          </div>
          <button className="btn btn-sm btn-circle btn-ghost" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="divider"></div>

        <div className="py-4">
          <p className="text-base leading-relaxed">{session.description}</p>
        </div>

        <div className="modal-action">
          <button className="btn btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
};
