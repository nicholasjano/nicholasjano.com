import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import type { BaseSymbolsType } from "@pageTypes/pageTypes";
import type {
  NavItemsRightType,
  NavItemsLeftType,
  NavItemsLeftURLType,
} from "@pageTypes/pageTypes";

export const baseSymbols: BaseSymbolsType = [
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

export const navItemsRight: NavItemsRightType = [
  "Home",
  "Stats",
  "About",
  "Experience",
  "Projects",
  "Contact",
];

export const navItemsLeft: NavItemsLeftType = [faFile, faLinkedin, faGithub];

export const navItemsLeftURL: NavItemsLeftURLType = [
  "https://www.google.com/", // Update to resume link
  "https://www.linkedin.com/in/nicholasjano/",
  "https://github.com/nicholasjano",
];

export const personalDescription: string = `
  Hi, I'm Nicholas Jano, a Software Engineer and final-year Bachelor of Computing student at Queen's University in Ontario, Canada. Ever since I was a kid, I've been fascinated by computers and how they work. I started in elementary school, creating mini-applications with JavaScript and ActionScript. This early passion led me to keep learning and constantly expand my technical skills, shaping me into the engineer I am today.

  In the ever-evolving field of Software Engineering, I strive to stay in a consistent state of learning and innovation so I can develop software solutions that make a meaningful impact. I'm driven by the challenge of tackling new problems and exploring emerging technologies. From working on personal projects to participating in hackathons, I always seek new opportunities to learn and develop. Over the years, I've gained experience across the full development stack, including designing system architecture, building scalable backend services, and developing responsive frontend applications. By combining my creativity with my technical skills, I can create innovative applications that solve everyday problems.
`;
