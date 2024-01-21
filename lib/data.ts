import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const skillsData = [
  "Kotlin",
  "Python",
  "JavaScript",
  "TypeScript",
  "Java",
  "Next.js",
  "UX Design",
  "Git",
  "Tailwind",
  "SQL/Database",
  "Internet of Things",
  "Excel",
  "Linux/Server",
  "IP Management",
  "Leadership",
  "Project Management",
  "Adaptability",
  "Time Management",
  "Target Oriented",
] as const;