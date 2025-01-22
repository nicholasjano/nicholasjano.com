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
