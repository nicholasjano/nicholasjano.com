import {
  faFile,
  faEnvelope,
  faPhone,
  faCode,
  faLocationDot,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type {
  StackItemsType,
  RoleInfo,
  ProjectInfo,
  FooterRightInfo,
  FooterLeftInfo,
  FooterType,
  DynamicStatsType,
} from "@pageTypes/pageTypes";
import MarmonRail from "@assets/MarmonRail.webp";
import NetSolutionsTime from "@assets/NetSolutionsTime.webp";
import LeetBuddy from "@assets/LeetBuddy.webp";
import BeadHive from "@assets/BeadHive.webp";
import Villara from "@assets/Villara.webp";
import KeepUpChampions from "@assets/KeepUpChampions.webp";
import LavishDiscordChatBot from "@assets/LavishDiscordChatBot.webp";

export const latestProject = "LeetBuddy";

export const baseSymbols: readonly string[] = [
  "{}",
  "++",
  "</>",
  "!=",
  "//",
  "[]",
  "==",
  ":=",
  "**",
  "||",
  ">>",
  "->",
];

export const navItemsRight: readonly string[] = [
  "Home",
  "Stats",
  "About",
  "Experience",
  "Projects",
  "Contact",
];

export const navItemsLeft: readonly IconDefinition[] = [
  faFile,
  faLinkedin,
  faGithub,
];

export const navItemsLeftURL: readonly string[] = [
  "/resume.pdf",
  "https://www.linkedin.com/in/nicholasjano/",
  "https://github.com/nicholasjano",
];

export const personalDescription: string = `
Hi, I'm Nicholas Jano, a Software Engineer I at Marmon Rail and a Bachelor of Computer Science (Honours) graduate from Queen's University in Ontario, Canada. Ever since I was a kid, I've been fascinated by computers and how they work. I started in elementary school, creating mini-applications with JavaScript and ActionScript. This early passion led me to keep learning and constantly expand my technical skills, shaping me into the engineer I am today.

In the ever-evolving field of Software Engineering, I strive to stay in a consistent state of learning and innovation so I can develop software solutions that make a meaningful impact. I'm driven by the challenge of tackling new problems and exploring emerging technologies. From working on personal projects to participating in hackathons, I always seek new opportunities to learn and develop. Over the years, I've gained experience across the full development stack, including designing system architecture, developing responsive frontend applications, and building scalable backend services. By combining my creativity with my technical skills, I can create innovative applications that solve everyday problems.
`;

const languages: readonly StackItemsType[] = [
  { name: "Python", icon: "devicon-python-plain" },
  { name: "Java", icon: "devicon-java-plain" },
  { name: "C", icon: "devicon-c-plain" },
  { name: "C++", icon: "devicon-cplusplus-plain" },
  { name: "C#", icon: "devicon-csharp-plain" },
  { name: "Visual Basic", icon: "devicon-visualbasic-plain" },
  { name: "HTML", icon: "devicon-html5-plain" },
  { name: "CSS", icon: "devicon-css3-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "SQL", icon: "devicon-azuresqldatabase-plain" },
  { name: "Swift", icon: "devicon-swift-plain" },
  { name: "Kotlin", icon: "devicon-kotlin-plain" },
];

const frameworksAndLibraries: readonly StackItemsType[] = [
  { name: "React", icon: "devicon-react-original" },
  { name: "Tailwind", icon: "devicon-tailwindcss-original" },
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "Express", icon: "devicon-express-original" },
  { name: "Spring Boot", icon: "devicon-spring-original" },
  { name: ".NET", icon: "devicon-dotnetcore-plain" },
  { name: "Flask", icon: "devicon-flask-original" },
  { name: "PyTorch", icon: "devicon-pytorch-original" },
  { name: "SQLAlchemy", icon: "devicon-sqlalchemy-plain" },
  { name: "PySpark", icon: "devicon-apachespark-original" },
  { name: "Pandas", icon: "devicon-pandas-plain" },
  { name: "NumPy", icon: "devicon-numpy-plain" },
  { name: "SwiftUI", icon: "devicon-swift-plain" },
  { name: "Jetpack Compose", icon: "devicon-jetpackcompose-plain" },
];

const platformsAndInfrastructure: readonly StackItemsType[] = [
  { name: "MySQL", icon: "devicon-mysql-original" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "Redis", icon: "devicon-redis-plain" },
  { name: "Elasticsearch", icon: "devicon-elasticsearch-plain" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
  { name: "Microsoft Azure", icon: "devicon-azure-plain" },
  { name: "Google Cloud Platform", icon: "devicon-googlecloud-plain" },
  { name: "Docker", icon: "devicon-docker-plain" },
  { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
  { name: "Nginx", icon: "devicon-nginx-original" },
];

const developerTools: readonly StackItemsType[] = [
  { name: "Git", icon: "devicon-git-plain" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "Figma", icon: "devicon-figma-plain" },
  { name: "Jira", icon: "devicon-jira-plain" },
  { name: "Postman", icon: "devicon-postman-plain" },
  { name: "VSCode", icon: "devicon-vscode-plain" },
  { name: "Visual Studio", icon: "devicon-visualstudio-plain" },
  { name: "Jetbrains Suite", icon: "devicon-jetbrains-plain" },
  { name: "DBeaver", icon: "devicon-dbeaver-plain" },
  { name: "Xcode", icon: "devicon-xcode-plain" },
];

// Ensure length is 4
export const stackTitles: readonly [string, string, string, string] = [
  "Languages",
  "Frameworks and Libraries",
  "Platforms and Infrastructure",
  "Developer Tools",
];

// Ensure length is 4
export const stackItems: readonly [
  readonly StackItemsType[],
  readonly StackItemsType[],
  readonly StackItemsType[],
  readonly StackItemsType[]
] = [
  languages,
  frameworksAndLibraries,
  platformsAndInfrastructure,
  developerTools,
];

const MarmonRailInfo: RoleInfo = {
  image: MarmonRail,
  role: "Software Engineer I",
  company: "Marmon Rail and Leasing Group",
  period: "June 2024 - Present",
  highlights: `
In this position, I evaluated and utilized the ontology-powered Palantir Foundry platform to build ETL pipelines with Pipeline Builder, create custom LLM functions using AIP Assist, and design dashboards with Workshop and Quiver. One of my key achievements to date was developing a custom dashboard from scratch in just three days using Pipeline Builder, Workshop, and Quiver, which improves data visualization and supports better decision-making.

I also engineered and optimized Azure Synapse data pipelines using Spark-based Data Flows and PySpark notebooks, reducing pipeline runtime by 40%, and leveraged GitHub for version control and code collaboration. Additionally, I designed and implemented Power BI dashboards that are used daily by over 1,000 business users, enhancing operational efficiency and supporting data-driven decision-making through insightful visualizations.
`,
};

const NetSolutionsTimeInfo: RoleInfo = {
  image: NetSolutionsTime,
  role: "Software Engineer Intern",
  company: "NetSolutionsTime",
  period: "May 2023 - August 2023",
  highlights: `
During this role, I collaborated closely with internal stakeholders to gather functional requirements, develop technical specifications, and implement comprehensive test plans.

A significant achievement of mine was implementing RESTful APIs and microservices for enterprise integration applications that consolidated data for over 15 million customers of a major North American financial institution. This implementation enabled a comprehensive Customer 360 view using Informatica MDM technologies. I also customized and deployed code to a Microsoft Azure Cloud Database, incorporating robust error handling and monitoring systems to ensure reliable performance.
`,
};

export const ExperienceInfos: RoleInfo[] = [
  MarmonRailInfo,
  NetSolutionsTimeInfo,
];

const LeetBuddyInfo: ProjectInfo = {
  image: LeetBuddy,
  title: "LeetBuddy",
  description:
    "LeetBuddy is a Google Chrome Extension that enhances LeetCode problem-solving with AI-powered explanations, hints, and coding assistance. It provides a built-in whiteboard for visualizing problems and supports real-time guidance during coding sessions. The extension also tracks the conversation history to offer a seamless and personalized learning experience, leveraging Google Gemini's multimodal capabilities for both text and image-based inputs. With over 2,000 active users globally and a 4.8/5 star rating from 46 reviews, LeetBuddy has proven to be a valuable tool for the coding community.",
  links: {
    github: "https://github.com/LeetBuddyAI/LeetBuddy",
    preview:
      "https://chromewebstore.google.com/detail/nlemdecocfoaimdbfgpilfgdmcllhphn",
  },
};

const BeadHiveInfo: ProjectInfo = {
  image: BeadHive,
  title: "The Bead Hive",
  description:
    "The Bead Hive is an interactive Indigenous Art Gallery that preserves Indigenous history and showcases Indigenous artwork through a modern, engaging web experience. It enables artists to share their creations and stories while providing students and researchers with an accessible platform to explore rich multimedia exhibits. The Bead Hive fosters cultural education and community connection, supporting both preservation and celebration of Indigenous art and heritage.",
  links: {
    preview:
      "https://beadhive.ca",
  },
};

const VillaraInfo: ProjectInfo = {
  image: Villara,
  title: "Villara",
  description:
    "Villara is a full-stack web application to connect those with talents in freelancing and trade skills to potential customers and clients within a community. Services include haircuts, nails, automotive repairs, and more in the coming future. Villara is currently still in development.",
  links: {},
};

const KeepUpChampionsInfo: ProjectInfo = {
  image: KeepUpChampions,
  title: "Keep Up Champions",
  description:
    "Keep Up Champions is a Roblox Simulator game. Core software engineering principles were incorporated into the development process of the game. The game has a lifetime of over 15,000 visits with an 86% positive like-to-dislike ratio and made a 400% gain on investment.",
  links: {
    preview:
      "https://www.roblox.com/games/7167348960/WORLD-CUP-Keep-Up-Champions",
  },
};

const LavishDiscordChatBotInfo: ProjectInfo = {
  image: LavishDiscordChatBot,
  title: "Lavish - Discord Chat Bot",
  description:
    "Lavish is a Discord bot that I created using Discord.py. The bot comes packed with features, including a global weather tracker, meme captioning system, user/server information commands, activity viewer, and lots more. It connects to several APIs to fetch data, like using the OWM API for live weather updates. The bot has grown to serve over 45,000 users.",
  links: {
    github: "https://github.com/nicholasjano/LavishDiscordBot",
  },
};

export const ProjectInfos: ProjectInfo[] = [
  LeetBuddyInfo,
  BeadHiveInfo,
  VillaraInfo,
  KeepUpChampionsInfo,
  LavishDiscordChatBotInfo,
];

const FooterRoleInfo: FooterLeftInfo = {
  title: "Software Engineer",
  icon: faCode,
};

const FooterSchoolInfo: FooterLeftInfo = {
  title: "Queen's University",
  icon: faSchool,
};

const FooterLocationInfo: FooterLeftInfo = {
  title: "Richmond Hill, Ontario, Canada",
  icon: faLocationDot,
};

const EmailInfo: FooterRightInfo = {
  link: "mailto:nicholasjano@outlook.com",
  aria: "Email",
  icon: faEnvelope,
};

const PhoneInfo: FooterRightInfo = {
  link: "tel:+14167029974",
  aria: "Phone",
  icon: faPhone,
};

const LinkedInInfo: FooterRightInfo = {
  link: "https://www.linkedin.com/in/nicholasjano/",
  aria: "LinkedIn profile",
  icon: faLinkedin,
};

const GitHubInfo: FooterRightInfo = {
  link: "https://github.com/nicholasjano",
  aria: "Github profile",
  icon: faGithub,
};

export const FooterInfo: FooterType = {
  name: "Nicholas Jano",
  internal: [FooterRoleInfo, FooterSchoolInfo, FooterLocationInfo],
  external: [EmailInfo, PhoneInfo, LinkedInInfo, GitHubInfo],
};

// Average
export const defaultStats: Readonly<DynamicStatsType> = {
  totalCommitsPastMonth: 88,
  uniqueRepositoriesPastMonth: 4,
  newSolutionCommits: 20,
};

export const API_URL = "https://stats.nicholasjano.com/stats.json" as const;

export const mainInfoRootMargin = 40 as const;
