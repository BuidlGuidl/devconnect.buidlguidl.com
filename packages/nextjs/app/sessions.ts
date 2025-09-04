export enum SessionType {
  WORKSHOP = "workshop",
  OFFICE_HOURS = "office_hours",
  PANEL = "panel",
  CTF = "ctf",
  STUDENTS = "students",
  CHALLENGE = "challenge",
}

export type Speaker = {
  name: string;
  image: string;
};

export interface Session {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  description: string;
  dayOfWeek: string;
  dateString: string;
  type: SessionType;
  speaker?: Speaker;
}

export const sessionTypeColors = {
  [SessionType.WORKSHOP]: "bg-blue-900 border-blue-300",
  [SessionType.OFFICE_HOURS]: "bg-green-900 border-green-300",
  [SessionType.PANEL]: "bg-purple-900 border-purple-300",
  [SessionType.CTF]: "bg-red-900 border-red-300",
  [SessionType.STUDENTS]: "bg-orange-900 border-orange-300",
  [SessionType.CHALLENGE]: "bg-indigo-900 border-indigo-300",
};

export const SPEAKERS = {
  AUSTIN: {
    name: "Austin Griffith",
    image: "/speakers/austin.png",
  },
  CARLOS: {
    name: "Carlos Sánchez",
    image: "/speakers/carlos.jpg",
  },
  PABLO: {
    name: "Pablo Alayeto",
    image: "/speakers/pablo.png",
  },
  PHILIP: {
    name: "Philip Krause",
    image: "/speakers/philip.png",
  },
  ELLIOT: {
    name: "Elliott Alexander",
    image: "/speakers/elliott.png",
  },
  HORSEFACTS: {
    name: "Horsefacts",
    image: "/speakers/horsefacts.jpg",
  },
  SHYAM: {
    name: "Shyam",
    image: "/speakers/shyam.jpg",
  },
};

export const sessions: Session[] = [
  // Tuesday 18
  {
    title: "Why build on Ethereum",
    date: "2025-11-18",
    startTime: "10:00",
    endTime: "11:00",
    description:
      "Introduction into the Ethereum ecosystem for builders. Learn the fundamentals of Ethereum development and why it's the leading platform for decentralized applications.",
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
      "Jump into Ethereum development with this hands-on workshop! Using Scaffold-ETH 2, you'll build and deploy your very first decentralized application from scratch. By the end of this session, you'll have a working dApp and understand the fundamentals of smart contract development. No prior blockchain experience required.",
    dayOfWeek: "Tuesday",
    dateString: "November 18",
    type: SessionType.WORKSHOP,
    speaker: SPEAKERS.AUSTIN,
  },
  {
    title: "Introduction to SpeedRunEthereum",
    date: "2025-11-18",
    startTime: "14:00",
    endTime: "15:00",
    description:
      "This session introduces SpeedRunEthereum, a gamified learning platform that helps developers understand all the Ethereum development gotchas as you build your onchain portfolio. We'll do a walkthrough of the first few challenges.",
    dayOfWeek: "Tuesday",
    dateString: "November 18",
    type: SessionType.WORKSHOP,
  },
  {
    title: "Stablecoins",
    date: "2025-11-18",
    startTime: "15:30",
    endTime: "16:30",
    description:
      "Dive deep into the mechanics of stablecoins. Discover what problems they solve and explore different approaches like overcollateralization. This SpeedRunEthereum challenge will guide you through building your own stablecoin implementation while understanding the economic principles that keep these digital assets stable.",
    dayOfWeek: "Tuesday",
    dateString: "November 18",
    type: SessionType.CHALLENGE,
    speaker: SPEAKERS.ELLIOT,
  },
  {
    title: "BG Office hours / Mentoring",
    date: "2025-11-18",
    startTime: "16:30",
    endTime: "17:30",
    description:
      "Get personalized guidance from experienced BuidlGuidl builders in this interactive mentoring session. Whether you're stuck on a coding challenge, need a code review, or want strategic advice on your project direction, our mentors are here to help. Bring your questions, your code, and your ideas.",
    dayOfWeek: "Tuesday",
    dateString: "November 18",
    type: SessionType.OFFICE_HOURS,
  },

  // Wednesday 19
  {
    title: "Prediction Markets",
    date: "2025-11-19",
    startTime: "10:00",
    endTime: "11:00",
    description:
      "Build your own prediction market and understand how these powerful tools aggregate wisdom from crowds. This SpeedRunEthereum challenge walks you through implementing betting mechanisms, oracle integration for real-world data, and automated resolution systems.",
    dayOfWeek: "Wednesday",
    dateString: "November 19",
    type: SessionType.CHALLENGE,
    speaker: SPEAKERS.PHILIP,
  },
  {
    title: "Zero-Knowledge Proofs",
    date: "2025-11-19",
    startTime: "11:30",
    endTime: "12:30",
    description:
      "Explore the world of Zero-Knowledge proofs and privacy-preserving computation. This SpeedRunEthereum challenge guides you through implementing ZK circuits, understanding proof generation and verification, and building applications that can prove knowledge without revealing secrets.",
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
      "Discover how AI can accelerate your Ethereum development in this beginner-friendly workshop. Perfect for non-coders and casual developers, you'll learn to leverage AI tools like ChatGPT, Cursor, and specialized AI assistants to build sophisticated dApps without deep technical expertise.",
    dayOfWeek: "Wednesday",
    dateString: "November 19",
    type: SessionType.WORKSHOP,
    speaker: SPEAKERS.PABLO,
  },
  {
    title: "Play a vibe coded game",
    date: "2025-11-19",
    startTime: "15:30",
    endTime: "16:30",
    description:
      "Join Austin for an entertaining and educational live coding adventure! We'll collaboratively build an onchain game from scratch with real-time input from the audience. Watch the development process unfold, suggest features, and immediately play what we create together.",
    dayOfWeek: "Wednesday",
    dateString: "November 19",
    type: SessionType.WORKSHOP,
    speaker: SPEAKERS.AUSTIN,
  },
  {
    title: "BG Office hours / Mentoring",
    date: "2025-11-19",
    startTime: "16:30",
    endTime: "17:30",
    description:
      "Get personalized guidance from experienced BuidlGuidl builders in this interactive mentoring session. Whether you're stuck on a coding challenge, need a code review, or want strategic advice on your project direction, our mentors are here to help. Bring your questions, your code, and your ideas.",
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
      "Learn to build Farcaster miniapps and Frames that bring Ethereum functionality directly into social feeds. This hands-on workshop covers the Farcaster protocol, Frame development, and how to create engaging social experiences that interact with Ethereum.",
    dayOfWeek: "Thursday",
    dateString: "November 20",
    type: SessionType.WORKSHOP,
    speaker: SPEAKERS.HORSEFACTS,
  },
  {
    title: "PMfers live / Panel",
    date: "2025-11-20",
    startTime: "11:30",
    endTime: "12:30",
    description:
      "Join us for an inspiring panel discussion about building your career in Web3! We'll bring in special guests to share insights about developer education, breaking into the Ethereum industry, landing your first Web3 job, and building a successful onchain career.",
    dayOfWeek: "Thursday",
    dateString: "November 20",
    type: SessionType.PANEL,
    speaker: SPEAKERS.AUSTIN,
  },
  {
    title: "Capture the Flag",
    date: "2025-11-20",
    startTime: "14:30",
    endTime: "18:00",
    description:
      "Tackle 12 increasingly challenging Solidity puzzles in this high-stakes Capture the Flag competition! Form teams and compete for $5,000 in prizes as you hunt for vulnerabilities, exploit smart contract weaknesses, and solve cryptographic challenges.",
    dayOfWeek: "Thursday",
    dateString: "November 20",
    type: SessionType.CTF,
    speaker: SPEAKERS.CARLOS,
  },

  // Friday 21
  {
    title: "Students & Companies fair",
    date: "2025-11-21",
    startTime: "10:00",
    endTime: "13:00",
    description:
      "Connect, showcase, and network at this career fair designed for the next generation of Ethereum talent! Students will pitch their ideas, companies will deliver lightning talks about opportunities, and everyone will participate in networking sessions and panel discussions.",
    dayOfWeek: "Friday",
    dateString: "November 21",
    type: SessionType.STUDENTS,
    speaker: SPEAKERS.SHYAM,
  },
  {
    title: "Founder Speed Dating",
    date: "2025-11-21",
    startTime: "14:00",
    endTime: "15:30",
    description:
      "Find your perfect co-founder in this fast-paced networking session! Rotate through quick 5-minute conversations with fellow entrepreneurs, developers, and visionaries. Pitch your ideas, discover complementary skills, and make the connections that could launch your next Ethereum venture.",
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
      "Maximize your hackathon success with Scaffold-ETH 2! This workshop is specifically designed for ETH Global participants, covering advanced SE-2 techniques and rapid prototyping strategies. Learn how to build & deploy faster and access ongoing BuidlGuidl office hours support during your hackathon journey.",
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
