import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { StackItemsType } from "@pageTypes/pageTypes";

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
  "https://www.google.com/", // Update to resume link
  "https://www.linkedin.com/in/nicholasjano/",
  "https://github.com/nicholasjano",
];

export const personalDescription: string = `
  Hi, I'm Nicholas Jano, a Software Engineer and final-year Bachelor of Computing student at Queen's University in Ontario, Canada. Ever since I was a kid, I've been fascinated by computers and how they work. I started in elementary school, creating mini-applications with JavaScript and ActionScript. This early passion led me to keep learning and constantly expand my technical skills, shaping me into the engineer I am today.

  In the ever-evolving field of Software Engineering, I strive to stay in a consistent state of learning and innovation so I can develop software solutions that make a meaningful impact. I'm driven by the challenge of tackling new problems and exploring emerging technologies. From working on personal projects to participating in hackathons, I always seek new opportunities to learn and develop. Over the years, I've gained experience across the full development stack, including designing system architecture, building scalable backend services, and developing responsive frontend applications. By combining my creativity with my technical skills, I can create innovative applications that solve everyday problems.
`;

const languages: readonly StackItemsType[] = [
  { name: "Python", icon: "devicon-python-plain" },
  { name: "Java", icon: "devicon-java-plain" },
  { name: "C", icon: "devicon-c-plain" },
  { name: "C++", icon: "devicon-cplusplus-plain" },
  { name: "C#", icon: "devicon-csharp-plain" },
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
  { name: "Flask", icon: "devicon-flask-original" },
  { name: "PyTorch", icon: "devicon-pytorch-original" },
  { name: "SQLAlchemy", icon: "devicon-sqlalchemy-plain" },
  { name: "Apache Spark", icon: "devicon-apachespark-original" },
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
