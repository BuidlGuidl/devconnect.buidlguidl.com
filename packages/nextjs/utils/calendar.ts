import { Session } from "~~/app/sessions";

/**
 * Converts a date string and time to ISO format for iCalendar
 * @param date - Date string in format YYYY-MM-DD
 * @param time - Time string in format HH:MM
 * @returns ISO date string in format YYYYMMDDTHHMMSSZ
 */
const toISODateString = (date: string, time: string): string => {
  const [year, month, day] = date.split("-");
  const [hours, minutes] = time.split(":");

  // Create date in local timezone (Argentina)
  // Devconnect Argentina is UTC-3
  const localDate = new Date(`${year}-${month}-${day}T${hours}:${minutes}:00`);

  // Convert to UTC for iCalendar format
  const utcYear = localDate.getUTCFullYear();
  const utcMonth = String(localDate.getUTCMonth() + 1).padStart(2, "0");
  const utcDay = String(localDate.getUTCDate()).padStart(2, "0");
  const utcHours = String(localDate.getUTCHours()).padStart(2, "0");
  const utcMinutes = String(localDate.getUTCMinutes()).padStart(2, "0");

  return `${utcYear}${utcMonth}${utcDay}T${utcHours}${utcMinutes}00Z`;
};

/**
 * Escapes special characters for iCalendar format
 */
const escapeICalText = (text: string): string => {
  return text.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
};

/**
 * Generates an iCalendar (.ics) file content for a single session
 */
export const generateSessionICS = (session: Session): string => {
  const startDateTime = toISODateString(session.date, session.startTime);
  const endDateTime = toISODateString(session.date, session.endTime);

  const speakers = session.speaker?.map(s => s.name).join(", ") || "";
  const speakerText = speakers ? `\n\nSpeaker(s): ${speakers}` : "";

  const description = escapeICalText(session.description + speakerText);
  const title = escapeICalText(session.title);
  const location = "Devconnect main venue - Workshop space (Yellow Pavilion)";

  // Generate unique ID for the event
  const uid = `${session.date}-${session.startTime}-${session.title.replace(/\s+/g, "-")}@devconnect.buidlguidl.com`;

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//BuidlGuidl//Devconnect Builder Bootcamp//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTART:${startDateTime}`,
    `DTEND:${endDateTime}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return icsContent;
};

/**
 * Generates an iCalendar (.ics) file content for all sessions
 */
export const generateAllSessionsICS = (sessions: Session[]): string => {
  const events = sessions.map(session => {
    const startDateTime = toISODateString(session.date, session.startTime);
    const endDateTime = toISODateString(session.date, session.endTime);

    const speakers = session.speaker?.map(s => s.name).join(", ") || "";
    const speakerText = speakers ? `\n\nSpeaker(s): ${speakers}` : "";

    const description = escapeICalText(session.description + speakerText);
    const title = escapeICalText(session.title);
    const location = "Devconnect main venue - Workshop space (Yellow Pavilion)";

    const uid = `${session.date}-${session.startTime}-${session.title.replace(/\s+/g, "-")}@devconnect.buidlguidl.com`;

    return [
      "BEGIN:VEVENT",
      `UID:${uid}`,
      `DTSTART:${startDateTime}`,
      `DTEND:${endDateTime}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      "STATUS:CONFIRMED",
      "SEQUENCE:0",
      "END:VEVENT",
    ].join("\r\n");
  });

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//BuidlGuidl//Devconnect Builder Bootcamp//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:BuidlGuidl Builder Bootcamp @ Devconnect",
    "X-WR-TIMEZONE:America/Argentina/Buenos_Aires",
    ...events,
    "END:VCALENDAR",
  ].join("\r\n");

  return icsContent;
};

/**
 * Downloads an ICS file
 */
export const downloadICS = (icsContent: string, filename: string): void => {
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(link.href);
};

/**
 * Downloads a single session as ICS file
 */
export const downloadSessionICS = (session: Session): void => {
  const icsContent = generateSessionICS(session);
  const filename = `${session.title.replace(/\s+/g, "-")}.ics`;
  downloadICS(icsContent, filename);
};

/**
 * Downloads all sessions as a single ICS file
 */
export const downloadAllSessionsICS = (sessions: Session[]): void => {
  const icsContent = generateAllSessionsICS(sessions);
  downloadICS(icsContent, "BuidlGuidl-Devconnect-All-Sessions.ics");
};
