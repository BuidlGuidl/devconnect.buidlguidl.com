export enum SessionType {
  WORKSHOP = "workshop",
  OFFICE_HOURS = "office_hours",
  PANEL = "panel",
  CTF = "ctf",
  STUDENTS = "students",
  CHALLENGE = "challenge",
}

export interface Session {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  description: string;
  dayOfWeek: string;
  dateString: string;
  type: SessionType;
}

export const sessionTypeColors = {
  [SessionType.WORKSHOP]: "bg-blue-200 border-blue-300 text-blue-800",
  [SessionType.OFFICE_HOURS]: "bg-green-200 border-green-300 text-green-800",
  [SessionType.PANEL]: "bg-purple-200 border-purple-300 text-purple-800",
  [SessionType.CTF]: "bg-red-200 border-red-300 text-red-800",
  [SessionType.STUDENTS]: "bg-orange-200 border-orange-300 text-orange-800",
  [SessionType.CHALLENGE]: "bg-indigo-200 border-indigo-300 text-indigo-800",
};

export const sessions: Session[] = [
  // Tuesday 18
  {
    title: "Why build on Ethereum",
    date: "2025-11-18",
    startTime: "10:00",
    endTime: "11:00",
    description:
      "Introduction: How to build on Ethereum. Learn the fundamentals of Ethereum development and why it's the leading platform for decentralized applications.",
    dayOfWeek: "Tuesday",
    dateString: "November 18",
    type: SessionType.WORKSHOP,
  },
  {
    title: "Build your first dApp on Ethereum",
    date: "2025-11-18",
    startTime: "11:30",
    endTime: "12:30",
    description:
      "The usual hands-on SE-2 workshop. Get your hands dirty building and deploying your first decentralized application using Scaffold-ETH 2.",
    dayOfWeek: "Tuesday",
    dateString: "November 18",
    type: SessionType.WORKSHOP,
  },
  {
    title: "Introduction to SpeedRunEthereum",
    date: "2025-11-18",
    startTime: "14:00",
    endTime: "15:00",
    description:
      "Overview of platform / onchain portfolio / first few challenges. Learn how SpeedRunEthereum can help you build your onchain developer portfolio.",
    dayOfWeek: "Tuesday",
    dateString: "November 18",
    type: SessionType.WORKSHOP,
  },
  {
    title: "Challenge: OCL / Stablecoins",
    date: "2025-11-18",
    startTime: "15:30",
    endTime: "16:30",
    description:
      "Dive into Optimism Collective Learning challenges focused on stablecoins. Build and understand the mechanics of stable digital currencies.",
    dayOfWeek: "Tuesday",
    dateString: "November 18",
    type: SessionType.CHALLENGE,
  },
  {
    title: "BG Office hours / Mentoring",
    date: "2025-11-18",
    startTime: "16:30",
    endTime: "17:30",
    description:
      "Get direct guidance, code reviews, and mentorship from BuidlGuidl members. Ask questions and get personalized help with your projects.",
    dayOfWeek: "Tuesday",
    dateString: "November 18",
    type: SessionType.OFFICE_HOURS,
  },

  // Wednesday 19
  {
    title: "Challenge 2: Prediction Markets",
    date: "2025-11-19",
    startTime: "10:00",
    endTime: "11:00",
    description:
      "Build a prediction market application. Learn about oracle integration, betting mechanisms, and market resolution systems.",
    dayOfWeek: "Wednesday",
    dateString: "November 19",
    type: SessionType.CHALLENGE,
  },
  {
    title: "Challenge 3: ZK",
    date: "2025-11-19",
    startTime: "11:30",
    endTime: "12:30",
    description:
      "Explore Zero-Knowledge proofs and privacy-preserving applications. Build ZK circuits and understand the future of private computation.",
    dayOfWeek: "Wednesday",
    dateString: "November 19",
    type: SessionType.CHALLENGE,
  },
  {
    title: "Leveraging AI to build on Ethereum",
    date: "2025-11-19",
    startTime: "14:00",
    endTime: "15:00",
    description:
      "A non-coder/vibe-coder approach to building on Ethereum. Learn how AI tools can accelerate your development process.",
    dayOfWeek: "Wednesday",
    dateString: "November 19",
    type: SessionType.WORKSHOP,
  },
  {
    title: "Live vibe coding (game + play)",
    date: "2025-11-19",
    startTime: "15:30",
    endTime: "16:30",
    description:
      "Let's vibe code a game together and play with the audience. Interactive coding session with real-time audience participation.",
    dayOfWeek: "Wednesday",
    dateString: "November 19",
    type: SessionType.WORKSHOP,
  },
  {
    title: "BG Office hours / Mentoring",
    date: "2025-11-19",
    startTime: "16:30",
    endTime: "17:30",
    description:
      "Get direct guidance, code reviews, and mentorship from BuidlGuidl members. Ask questions and get personalized help with your projects.",
    dayOfWeek: "Wednesday",
    dateString: "November 19",
    type: SessionType.OFFICE_HOURS,
  },

  // Thursday 20
  {
    title: "Farcaster Miniapp (horsefacts)",
    date: "2025-11-20",
    startTime: "10:00",
    endTime: "11:00",
    description:
      "Build applications for the Farcaster protocol. Learn about decentralized social media and Frame development.",
    dayOfWeek: "Thursday",
    dateString: "November 20",
    type: SessionType.WORKSHOP,
  },
  {
    title: "PMfers live / Interview / Panel",
    date: "2025-11-20",
    startTime: "11:30",
    endTime: "12:30",
    description:
      "Let's bring someone interesting to talk about education / developer onboarding / landing your first job / your onchain career.",
    dayOfWeek: "Thursday",
    dateString: "November 20",
    type: SessionType.PANEL,
  },
  {
    title: "Capture the Flag",
    date: "2025-11-20",
    startTime: "14:30",
    endTime: "18:00",
    description:
      "Test your skills in a competitive Capture the Flag challenge. Solve puzzles, find vulnerabilities, and compete with other developers.",
    dayOfWeek: "Thursday",
    dateString: "November 20",
    type: SessionType.CTF,
  },

  // Friday 21
  {
    title: "Students / Companies fair (Shyam)",
    date: "2025-11-21",
    startTime: "10:00",
    endTime: "13:00",
    description:
      "A meetup space for students and companies. Student project pitches, Companies lightning talks, Panel, Networking. Shyam working on the programming.",
    dayOfWeek: "Friday",
    dateString: "November 21",
    type: SessionType.STUDENTS,
  },
  {
    title: "Founder speed dating / Pitch your idea",
    date: "2025-11-21",
    startTime: "14:00",
    endTime: "15:30",
    description:
      "Meet potential co-founders, teammates, or collaborators. Pitch your ideas and find your next business partner.",
    dayOfWeek: "Friday",
    dateString: "November 21",
    type: SessionType.PANEL,
  },
  {
    title: "Use Scaffold-ETH for your ETH Global Hackathon",
    date: "2025-11-21",
    startTime: "16:00",
    endTime: "17:30",
    description:
      "Learn how to leverage Scaffold-ETH 2 for your ETH Global hackathon projects. Get tips, tricks, and BG office hours support.",
    dayOfWeek: "Friday",
    dateString: "November 21",
    type: SessionType.WORKSHOP,
  },
];

export const getDaysSessions = (date: string) => {
  return sessions.filter(session => session.date === date);
};

export const getAllDays = () => {
  const uniqueDays = [...new Set(sessions.map(session => session.date))];
  return uniqueDays.sort();
};

// Time grid utilities
export const getHourlyTimeSlots = () => {
  const hours = [];
  for (let hour = 10; hour <= 18; hour++) {
    hours.push(`${hour.toString().padStart(2, "0")}:00`);
  }
  return hours;
};

export const getHourlyTimeSlotsFormatted = () => {
  const hours = [];
  for (let hour = 10; hour <= 18; hour++) {
    const time24 = `${hour.toString().padStart(2, "0")}:00`;
    hours.push({
      time24: time24,
      time12: formatTo12Hour(time24),
    });
  }
  return hours;
};

export const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

export const getSessionPosition = (session: Session) => {
  const startMinutes = timeToMinutes(session.startTime);
  const endMinutes = timeToMinutes(session.endTime);
  const gridStartMinutes = timeToMinutes("10:00"); // 10:00 AM = 600 minutes

  // Calculate precise position in pixels
  const startOffsetMinutes = startMinutes - gridStartMinutes;
  const durationMinutes = endMinutes - startMinutes;

  // Each hour = 64px, so each minute = 64/60 px
  const pixelsPerMinute = 64 / 60;

  return {
    startRow: Math.floor(startOffsetMinutes / 60) + 1, // which hour row
    spanRows: Math.ceil(durationMinutes / 60), // how many hour rows to span
    startOffset: startOffsetMinutes * pixelsPerMinute, // exact pixel offset from top
    duration: durationMinutes * pixelsPerMinute, // exact pixel height
  };
};

export const getSessionsForDay = (date: string) => {
  return sessions.filter(session => session.date === date);
};

export const getDayInfo = (date: string) => {
  const session = sessions.find(s => s.date === date);
  return {
    dayOfWeek: session?.dayOfWeek || "",
    dateString: session?.dateString || "",
  };
};

export const formatTo12Hour = (time24: string): string => {
  const [hours, minutes] = time24.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);

  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: minutes === 0 ? undefined : "2-digit",
    hour12: true,
  });
};
