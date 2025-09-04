"use client";

import Image from "next/image";
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
      <div className="modal-box max-w-2xl bg-[#331230]">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-lg text-primary mb-0">{session.title}</h3>
            {session.speaker && (
              <div className="flex items-center gap-2">
                <Image
                  src={session.speaker.image}
                  alt={session.speaker.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <p className="font-bold">{session.speaker.name}</p>
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

        <p className="text-base leading-relaxed">{session.description}</p>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
};
