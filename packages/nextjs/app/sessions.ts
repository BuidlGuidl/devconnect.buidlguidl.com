export enum SessionType {
  WORKSHOP = "workshop",
  OFFICE_HOURS = "office_hours",
  PANEL = "panel",
  CTF = "ctf",
  STUDENTS = "students",
  CHALLENGE = "challenge",
  TALK = "talk",
}

export type Speaker = {
  name: string;
  image: string;
  company?: {
    name: string;
    icon: string;
  };
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
  speaker?: Speaker[];
  link?: {
    url: string;
    text: string;
  };
}

export const sessionTypeColors = {
  [SessionType.WORKSHOP]: { backgroundColor: "#73B4F0" }, //blue
  [SessionType.OFFICE_HOURS]: { backgroundColor: "#FF85A6" }, //pink
  [SessionType.PANEL]: { backgroundColor: "#F4A0FF" }, //purplish pink
  [SessionType.CTF]: { backgroundColor: "#D0FF73" }, //green
  [SessionType.STUDENTS]: { backgroundColor: "#FFC83D" }, //yellow
  [SessionType.CHALLENGE]: { backgroundColor: "#B2A0FF" }, //purple
  [SessionType.TALK]: { backgroundColor: "#8FD9B8" }, //greenish
};

export const SPEAKERS = {
  PATRICK: {
    name: "Patrick McCorry",
    image: "/speakers/patrick.jpg",
    company: {
      name: "Arbitrum",
      icon: "/companies/arbitrum.svg",
    },
  },
  AUSTIN: {
    name: "Austin Griffith",
    image: "/speakers/austin.png",
    company: {
      name: "Ethereum Foundation",
      icon: "/companies/ethereum-foundation.png",
    },
  },
  CARLOS: {
    name: "Carlos Sánchez",
    image: "/speakers/carlos.jpg",
    company: {
      name: "BuidlGuidl",
      icon: "/companies/buidlguidl.svg",
    },
  },
  SHIV: {
    name: "Shiv Bhonde",
    image: "/speakers/shiv.jpeg",
    company: {
      name: "BuidlGuidl",
      icon: "/companies/buidlguidl.svg",
    },
  },
  PABLO: {
    name: "Pablo Alayeto",
    image: "/speakers/pablo.png",
    company: {
      name: "BuidlGuidl",
      icon: "/companies/buidlguidl.svg",
    },
  },
  PHILIP: {
    name: "Philip Krause",
    image: "/speakers/philip.png",
    company: {
      name: "BuidlGuidl",
      icon: "/companies/buidlguidl.svg",
    },
  },
  ELLIOT: {
    name: "Elliott Alexander",
    image: "/speakers/elliott.png",
    company: {
      name: "Ethereum Foundation",
      icon: "/companies/ethereum-foundation.png",
    },
  },
  HORSEFACTS: {
    name: "Horsefacts",
    image: "/speakers/horsefacts.jpg",
    company: {
      name: "Farcaster",
      icon: "/companies/farcaster.svg",
    },
  },
  SHYAM: {
    name: "Shyam",
    image: "/speakers/shyam.jpg",
    company: {
      name: "Ethereum Foundation",
      icon: "/companies/ethereum-foundation.png",
    },
  },
  EDA: {
    name: "Eda Akturk",
    image: "/speakers/eda.jpg",
    company: {
      name: "Hyperlane",
      icon: "/companies/hyperlane.jpeg",
    },
  },
  KEVIN: {
    name: "Kevin Jones",
    image: "/speakers/kevin.jpg",
    company: {
      name: "Edge & Node",
      icon: "/companies/edge-and-node.png",
    },
  },
  SPENCER: {
    name: "Spencer Faber",
    image: "/speakers/spencer.jpg",
    company: {
      name: "BuidlGuidl",
      icon: "/companies/buidlguidl.svg",
    },
  },
  JEFFREY: {
    name: "Jeffrey Scholz",
    image: "/speakers/jeffrey.jpg",
    company: {
      name: "RareSkills",
      icon: "/companies/rareskills.jpeg",
    },
  },
  NIKOLAI: {
    name: "Nikolai",
    image: "/speakers/nikolai.jpeg",
  },
  HUNTER: {
    name: "Hunter B.",
    image: "/speakers/hunter.jpg",
    company: {
      name: "Arbitrum",
      icon: "/companies/arbitrum.svg",
    },
  },
  MONICA: {
    name: "Monica Zeng",
    image: "/speakers/monica.png",
  },
  DAMU: {
    name: "Damian Martinelli",
    image: "/speakers/damu.jpg",
    company: {
      name: "BuidlGuidl",
      icon: "/companies/buidlguidl.svg",
    },
  },
  SOPHIA: {
    name: "Sophia",
    image: "/speakers/sophia.jpg",
    company: {
      name: "Celo",
      icon: "/companies/celo.svg",
    },
  },
};

export const sessions: Session[] = [
  // Tuesday 18
  {
    title: "Why is Ethereum interesting and how does it work?",
    date: "2025-11-18",
    startTime: "10:00",
    endTime: "11:30",
    description:
      "Explore what makes Ethereum fascinating and discover how the blockchain technology actually works. We'll dive into the core concepts, consensus mechanisms, and unique features that make Ethereum the world's most programmable blockchain platform.",
    dayOfWeek: "Tuesday",
    dateString: "November 18",
    type: SessionType.TALK,
    speaker: [SPEAKERS.PATRICK],
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
    speaker: [SPEAKERS.AUSTIN],
  },
  {
    title: "Unveiling Scaffold UI",
    date: "2025-11-18",
    startTime: "12:30",
    endTime: "13:00",
    description:
      "Scaffold UI is a collection of React components and hooks designed specifically for building Ethereum dApps. These components provide a seamless way to interact with Ethereum addresses, balances, and user inputs in your decentralized applications.",
    dayOfWeek: "Tuesday",
    dateString: "November 18",
    type: SessionType.WORKSHOP,
    speaker: [SPEAKERS.SHIV],
  },
  {
    title: "Introduction to Speedrun Ethereum",
    date: "2025-11-18",
    startTime: "14:00",
    endTime: "15:00",
    description:
      "This session introduces Speedrun Ethereum, a gamified learning platform that helps developers understand all the Ethereum development gotchas as you build your onchain portfolio. We'll do a walkthrough of the first few challenges.",
    dayOfWeek: "Tuesday",
    dateString: "November 18",
    type: SessionType.WORKSHOP,
    speaker: [SPEAKERS.AUSTIN],
  },
  {
    title: "Stablecoins",
    date: "2025-11-18",
    startTime: "15:30",
    endTime: "16:30",
    description:
      "Dive deep into the mechanics of decentralized algorithmic stablecoins and explore how they maintain price stability. Discover the critical role of over-collateralization in protecting against volatility and collapse. Then, put theory into practice with a guided Speedrun Ethereum challenge that demonstrates how economic principles and incentive design can keep digital assets stable in real-world conditions.",
    dayOfWeek: "Tuesday",
    dateString: "November 18",
    type: SessionType.CHALLENGE,
    speaker: [SPEAKERS.ELLIOT],
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
      "Build your own prediction market and understand how these powerful tools aggregate wisdom from crowds. This Speedrun Ethereum challenge walks you through implementing betting mechanisms, oracle integration for real-world data, and automated resolution systems.",
    dayOfWeek: "Wednesday",
    dateString: "November 19",
    type: SessionType.CHALLENGE,
    speaker: [SPEAKERS.EDA],
  },
  {
    title: "Zero-Knowledge Proofs",
    date: "2025-11-19",
    startTime: "11:00",
    endTime: "12:00",
    description:
      "Explore the world of Zero-Knowledge proofs and privacy-preserving computation. This Speedrun Ethereum challenge guides you through implementing ZK circuits, understanding proof generation and verification, and building applications that can prove knowledge without revealing secrets.",
    dayOfWeek: "Wednesday",
    dateString: "November 19",
    type: SessionType.CHALLENGE,
    speaker: [SPEAKERS.PHILIP],
  },
  {
    title: "Run your own Ethereum node",
    date: "2025-11-19",
    startTime: "12:00",
    endTime: "13:00",
    description:
      "Take control of your Ethereum experience by running your own node! Discover why node operators are the backbone of decentralization, learn the difference between execution and consensus clients, and walk through the complete setup process. We'll cover hardware requirements, client selection, and best practices for maintaining a secure, synced node that gives you trustless access to the Ethereum network.",
    dayOfWeek: "Thursday",
    dateString: "November 20",
    type: SessionType.WORKSHOP,
    speaker: [SPEAKERS.SPENCER],
  },
  {
    title: "Leveraging AI to build on Ethereum",
    date: "2025-11-19",
    startTime: "14:00",
    endTime: "15:00",
    description:
      "Discover how AI can accelerate your Ethereum development in this beginner-friendly workshop. Perfect for non-coders and casual developers, you'll learn to leverage AI tools like ChatGPT, Cursor, Claude Code, and specialized AI tools to build sophisticated dApps without deep technical expertise.",
    dayOfWeek: "Wednesday",
    dateString: "November 19",
    type: SessionType.WORKSHOP,
    speaker: [SPEAKERS.PABLO],
  },
  {
    title: "Rareskills is your next step",
    date: "2025-11-19",
    startTime: "15:00",
    endTime: "15:45",
    description:
      "Join Jeffrey from Rareskills to discuss your next steps after the speedrun. His ZK Book and Uniswap v4 course are next level.",
    dayOfWeek: "Wednesday",
    dateString: "November 19",
    type: SessionType.TALK,
    speaker: [SPEAKERS.JEFFREY],
  },
  {
    title: "Play a vibe coded game",
    date: "2025-11-19",
    startTime: "15:45",
    endTime: "16:30",
    description:
      "Join Austin for an entertaining and educational live coding adventure! We'll collaboratively build an onchain game from scratch with real-time input from the audience. Watch the development process unfold, suggest features, and immediately play what we create together.",
    dayOfWeek: "Wednesday",
    dateString: "November 19",
    type: SessionType.WORKSHOP,
    speaker: [SPEAKERS.AUSTIN],
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
    title: "Farcaster Miniapps",
    date: "2025-11-20",
    startTime: "10:00",
    endTime: "11:00",
    description:
      "Learn to build Farcaster miniapps and Frames that bring Ethereum functionality directly into social feeds. This hands-on workshop covers the Farcaster protocol, Frame development, and how to create engaging social experiences that interact with Ethereum.",
    dayOfWeek: "Thursday",
    dateString: "November 20",
    type: SessionType.WORKSHOP,
    speaker: [SPEAKERS.HORSEFACTS],
  },
  {
    title: "Miniapps in Scaffold-ETH",
    date: "2025-11-20",
    startTime: "11:00",
    endTime: "11:30",
    description: "Join Nikolai for a hands-on workshop on building & deploying Farcaster miniapps with Scaffold-ETH",
    dayOfWeek: "Thursday",
    dateString: "November 20",
    type: SessionType.WORKSHOP,
    speaker: [SPEAKERS.NIKOLAI],
  },
  {
    title: "Miniapps ecosystem on Arbitrum",
    date: "2025-11-20",
    startTime: "11:30",
    endTime: "12:00",
    description:
      "Join Hunter to explore the growing ecosystem of Farcaster miniapps on Arbitrum. We'll dive into the latest trends, use cases, and tools available for building on this Layer 2 network.",
    dayOfWeek: "Thursday",
    dateString: "November 20",
    type: SessionType.TALK,
    speaker: [SPEAKERS.HUNTER],
  },
  {
    title: "Miniapps ecosystem on Celo",
    date: "2025-11-20",
    startTime: "12:00",
    endTime: "12:30",
    description:
      "Learn how to build mini apps on Celo, the L2 built for the real world with fast, low-cost transactions worldwide. Explore Celo’s vibe code tools, mobile-first design, and strategies to reach millions of users through Opera MiniPay.",
    dayOfWeek: "Thursday",
    dateString: "November 20",
    type: SessionType.TALK,
    speaker: [SPEAKERS.SOPHIA],
  },
  {
    title: "Open time to build a miniapp",
    date: "2025-11-20",
    startTime: "12:30",
    endTime: "13:00",
    description:
      "Get hands-on experience building your first miniapp in this interactive workshop. Learn the fundamentals of miniapp development and deploy your creation by the end of the session.",
    dayOfWeek: "Thursday",
    dateString: "November 20",
    type: SessionType.WORKSHOP,
  },
  {
    title: "Capture the Flag",
    date: "2025-11-20",
    startTime: "14:00",
    endTime: "17:30",
    description:
      "Tackle 12 increasingly challenging Solidity puzzles in this high-stakes Capture the Flag competition! Form teams and compete for $5,000 in prizes as you hunt for vulnerabilities, exploit smart contract weaknesses, and solve cryptographic challenges.",
    dayOfWeek: "Thursday",
    dateString: "November 20",
    type: SessionType.CTF,
    speaker: [SPEAKERS.CARLOS, SPEAKERS.DAMU],
  },

  // Friday 21
  {
    title: "Students & Companies Connect",
    date: "2025-11-21",
    startTime: "10:00",
    endTime: "13:00",
    description:
      "We're bringing students face-to-face with the builders, and teams shaping Ethereum. If you're a student looking to start a career in the ecosystem, or a company looking to meet and recruit top emerging talent, this is your chance to connect and build the future of decentralized technologies together!\n\n For companies: you'll get the chance to meet student builders, check out project demos, and receive a curated list of pre-screened resumes and portfolios from highly engaged students across our global university network. No commitments, no booths — just show up, chat, and discover new talent.\n\n For students:  it's your chance to showcase your work, connect directly with leading teams, and be a part of an open dialgue with some of the most experienced builders in the ecosystem. Student clubs can also apply for 10 free tickets to bring their members along!\n\n",
    dayOfWeek: "Friday",
    dateString: "November 21",
    type: SessionType.STUDENTS,
    speaker: [SPEAKERS.SHYAM],
    link: {
      url: "https://luma.com/kwu2wzzy",
      text: "Register here",
    },
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
    speaker: [SPEAKERS.AUSTIN, SPEAKERS.KEVIN],
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
    speaker: [SPEAKERS.AUSTIN],
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
  for (let hour = 10; hour <= 17; hour++) {
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

  // Each hour = 104px, so each minute = 104/60 px
  const pixelsPerMinute = 120 / 60;

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
