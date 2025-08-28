"use client";

import { useState } from "react";
import { SessionModal } from "./SessionModal";
import {
  Session,
  formatTo12Hour,
  getAllDays,
  getDayInfo,
  getHourlyTimeSlotsFormatted,
  getSessionPosition,
  getSessionsForDay,
  sessionTypeColors,
} from "~~/app/sessions";

export const ScheduleCalendar = () => {
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const days = getAllDays();
  const timeSlots = getHourlyTimeSlotsFormatted();

  const handleSessionClick = (session: Session) => {
    setSelectedSession(session);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSession(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 overflow-x-auto">
      {/* Header with day names */}
      <div className="flex gap-2 sm:gap-4 mb-6 min-w-[800px]">
        <div className="w-8 text-sm font-medium text-base-content/60"></div>
        {days.map(day => {
          const { dayOfWeek, dateString } = getDayInfo(day);
          return (
            <div key={day} className="flex-1 text-center">
              <h2 className="text-lg font-bold text-primary">{dayOfWeek}</h2>
              <p className="text-sm text-base-content/70">{dateString}</p>
            </div>
          );
        })}
      </div>

      {/* Time grid container */}
      <div className="relative min-w-[800px]">
        {/* Time grid background */}
        <div className="flex gap-2 sm:gap-4">
          {/* Time column */}
          <div className="w-12 space-y-0">
            {timeSlots.map(timeSlot => (
              <div key={timeSlot.time24} className="h-16 border-b border-base-300 flex items-start pt-1">
                <span className="text-sm font-medium text-base-content/60">{timeSlot.time12}</span>
              </div>
            ))}
          </div>

          {/* Day columns */}
          {days.map(day => (
            <div key={day} className="flex-1 relative space-y-0">
              {timeSlots.map(timeSlot => (
                <div key={timeSlot.time24} className="h-16 border-b border-base-300"></div>
              ))}
            </div>
          ))}
        </div>

        {/* Positioned sessions overlay */}
        <div className="absolute inset-0 flex gap-2 sm:gap-4">
          {/* Skip time column */}
          <div className="w-12"></div>

          {/* Session overlays for each day */}
          {days.map(day => {
            const daySessions = getSessionsForDay(day);

            return (
              <div key={day} className="flex-1 relative">
                {daySessions.map(session => {
                  const position = getSessionPosition(session);
                  const colors = sessionTypeColors[session.type];

                  return (
                    <div
                      key={session.title}
                      className={`absolute left-0 right-0 ${colors} border rounded-lg cursor-pointer hover:shadow-md transition-shadow p-2 z-10`}
                      style={{
                        top: `${position.startOffset}px`,
                        height: `${position.duration}px`,
                      }}
                      onClick={() => handleSessionClick(session)}
                    >
                      <div className="h-full flex flex-col justify-between">
                        <div>
                          <h3 className="font-semibold text-sm leading-tight mb-1">{session.title}</h3>
                        </div>
                        <div>
                          <p className="text-xs opacity-75">
                            {formatTo12Hour(session.startTime)} - {formatTo12Hour(session.endTime)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <SessionModal session={selectedSession} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};
