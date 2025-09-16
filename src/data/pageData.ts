import {
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
import RecapMe from "@assets/RecapMe.webp";
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
  faLinkedin,
  faGithub,
];

export const navItemsLeftURL: readonly string[] = [
  "https://www.linkedin.com/in/nicholasjano/",
  "https://github.com/nicholasjano",
];

export const personalDescription: string = `
Hi, I'm Nicholas Jano, a Software Engineer at Marmon Rail with a Bachelor of Computer Science (Honours) background from Queen's University in Ontario, Canada. Ever since I was a kid, I've been fascinated by computers and how they work. I started in elementary school, creating mini-applications with JavaScript and ActionScript. This early passion led me to keep learning and constantly expand my technical skills, shaping me into the engineer I am today.

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
  role: "Software Engineer",
  company: "Marmon Rail and Leasing Group",
  period: "June 2024 - Present",
  highlights: `
In this role, I leveraged the ontology-powered Palantir Foundry platform to design scalable ETL pipelines with Pipeline Builder, create custom LLM-powered functions using AIP Assist, and deliver interactive dashboards with Workshop and Quiver.

I also optimized Azure Synapse data pipelines using Spark-based Data Flows and PySpark notebooks, cutting runtime by 40% while using GitHub for streamlined collaboration and code reviews.

In addition, I delivered Power BI dashboards consumed daily by over 1,000 business users, driving operational efficiency and enabling faster, data-driven decisions by collaborating closely with stakeholders to gather requirements.

Finally, I developed and deployed enterprise-grade Spring Boot services with REST APIs, improving backend performance by 35% and scaling seamlessly to over 1,200 daily active users.
`,
};

const NetSolutionsTimeInfo: RoleInfo = {
  image: NetSolutionsTime,
  role: "Software Engineer",
  company: "NetSolutionsTime",
  period: "May 2023 - August 2023",
  highlights: `
During this role, I collaborated with internal partners to gather functional requirements, develop technical specifications, and implement comprehensive test plans, contributing to a 17% reduction in post-release defects.

A key achievement was implementing RESTful APIs and microservices for enterprise integration applications that consolidated data for over 15 million customers of a major financial institution, enabling a comprehensive Customer 360 view.

In addition, I customized and deployed code to a Microsoft Azure Cloud Database, incorporating error handling and monitoring systems to ensure reliable performance.
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
    "LeetBuddy is a Google Chrome Extension that enhances LeetCode problem-solving with AI-powered explanations, hints, and coding assistance. It provides a built-in whiteboard for visualizing problems and supports real-time guidance during coding sessions. The extension also tracks the conversation history to offer a seamless and personalized learning experience, leveraging Google Gemini's multimodal capabilities for both text and image-based inputs. With over 3,000 active users globally and a 4.6/5 star rating from over 50 reviews, LeetBuddy has proven to be a valuable tool for the coding community.",
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

const RecapMeInfo: ProjectInfo = {
  image: RecapMe,
  title: "RecapMe",
  description:
    "RecapMe is a mobile application built with Kotlin and Jetpack Compose that automatically generates concise, context-aware summaries of chat conversations. Powered by a scalable Spring Boot backend with REST APIs, it reliably supports over 500 concurrent sessions with low-latency performance and seamless data exchange. The app integrates the Google Gemini API to deliver LLM-powered summarization, cutting average recap generation time by 40% while improving content retention and accuracy. Since launch, RecapMe has grown to over 3,000 users with consistent engagement, providing an efficient way for people to quickly digest and revisit their conversations.",
  links: {},
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
  RecapMeInfo,
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
  monthlyActiveUsers: 32000,
};

export const API_URL = "https://stats.nicholasjano.com/stats.json" as const;

export const mainInfoRootMargin = 40 as const;
