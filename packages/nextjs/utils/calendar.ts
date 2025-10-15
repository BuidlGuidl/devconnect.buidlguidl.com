import { Session } from "~~/app/sessions";

/**
 * Formats date and time for iCalendar with timezone
 * @param date - Date string in format YYYY-MM-DD
 * @param time - Time string in format HH:MM
 * @returns Formatted date string for iCalendar (YYYYMMDDTHHMMSS)
 */
const formatDateTimeForICS = (date: string, time: string): string => {
  const [year, month, day] = date.split("-");
  const [hours, minutes] = time.split(":");

  // Return local time format (not UTC) - timezone will be specified separately
  return `${year}${month}${day}T${hours}${minutes}00`;
};

/**
 * Escapes special characters for iCalendar format
 */
const escapeICalText = (text: string): string => {
  return text.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
};

/**
 * Builds event data for iCalendar format
 */
const buildEventData = (session: Session) => {
  const speakers = session.speaker?.map(s => s.name).join(", ") || "";
  const speakerText = speakers ? `\n\nSpeaker(s): ${speakers}` : "";

  const description = escapeICalText(session.description + speakerText);
  const title = escapeICalText(session.title);
  const location = "Devconnect main venue - Workshop space (Yellow Pavilion)";

  // Generate unique ID for the event
  const uid = `${session.date}-${session.startTime}-${session.title.replace(/\s+/g, "-")}@devconnect.buidlguidl.com`;

  return { description, title, location, uid };
};

/**
 * Generates an iCalendar (.ics) file content for a single session
 */
export const generateSessionICS = (session: Session): string => {
  const startDateTime = formatDateTimeForICS(session.date, session.startTime);
  const endDateTime = formatDateTimeForICS(session.date, session.endTime);
  const { description, title, location, uid } = buildEventData(session);

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//BuidlGuidl//Devconnect Builder Bootcamp//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VTIMEZONE",
    "TZID:America/Argentina/Buenos_Aires",
    "BEGIN:STANDARD",
    "DTSTART:19700101T000000",
    "TZOFFSETFROM:-0300",
    "TZOFFSETTO:-0300",
    "END:STANDARD",
    "END:VTIMEZONE",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTART;TZID=America/Argentina/Buenos_Aires:${startDateTime}`,
    `DTEND;TZID=America/Argentina/Buenos_Aires:${endDateTime}`,
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
    const startDateTime = formatDateTimeForICS(session.date, session.startTime);
    const endDateTime = formatDateTimeForICS(session.date, session.endTime);
    const { description, title, location, uid } = buildEventData(session);

    return [
      "BEGIN:VEVENT",
      `UID:${uid}`,
      `DTSTART;TZID=America/Argentina/Buenos_Aires:${startDateTime}`,
      `DTEND;TZID=America/Argentina/Buenos_Aires:${endDateTime}`,
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
    "BEGIN:VTIMEZONE",
    "TZID:America/Argentina/Buenos_Aires",
    "BEGIN:STANDARD",
    "DTSTART:19700101T000000",
    "TZOFFSETFROM:-0300",
    "TZOFFSETTO:-0300",
    "END:STANDARD",
    "END:VTIMEZONE",
    ...events,
    "END:VCALENDAR",
  ].join("\r\n");

  return icsContent;
};

/**
 * Opens ICS file directly (better UX - no download required)
 */
export const openICS = (icsContent: string, filename: string): void => {
  // Use data URI to open calendar app directly without downloading
  const dataUri = `data:text/calendar;charset=utf-8,${encodeURIComponent(icsContent)}`;
  const link = document.createElement("a");
  link.href = dataUri;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Adds a single session to calendar
 */
export const addSessionToCalendar = (session: Session): void => {
  const icsContent = generateSessionICS(session);
  const filename = `${session.title.replace(/\s+/g, "-")}.ics`;
  openICS(icsContent, filename);
};

/**
 * Adds all sessions to calendar
 */
export const addAllSessionsToCalendar = (sessions: Session[]): void => {
  const icsContent = generateAllSessionsICS(sessions);
  openICS(icsContent, "BuidlGuidl-Devconnect-All-Sessions.ics");
};

/**
 * Generates Google Calendar URL for a session
 * Note: Times are in Argentina timezone (America/Argentina/Buenos_Aires)
 */
export const getGoogleCalendarUrl = (session: Session): string => {
  // Google Calendar dates format: YYYYMMDDTHHmmss
  // We use the raw date/time values which represent Argentina local time
  const startDateTime = formatDateTimeForICS(session.date, session.startTime);
  const endDateTime = formatDateTimeForICS(session.date, session.endTime);

  const speakers = session.speaker?.map(s => s.name).join(", ") || "";
  const speakerText = speakers ? `\n\nSpeaker(s): ${speakers}` : "";
  // Note: For Google Calendar, we don't escape - we URL encode instead
  const details = encodeURIComponent(session.description + speakerText);
  const location = encodeURIComponent("Devconnect main venue - Workshop space (Yellow Pavilion)");
  const title = encodeURIComponent(session.title);

  const dates = `${startDateTime}/${endDateTime}`;

  // ctz parameter tells Google Calendar the timezone for the event
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}&ctz=America/Argentina/Buenos_Aires`;
};
