import type { Personnel } from "./types";

export const teamGroupPhoto = "/images/team/team-photo.jpg";

export const personnel: Personnel[] = [
  // Executive Team
  {
    name: "Jane Smith",
    position: "President",
    discipline: "Mechanical Engineering",
    year: "5th Year",
    category: "executive",
    image: "/images/team/jane-smith.jpg",
    linkedIn: "https://www.linkedin.com/",
    order: 1,
  },
  {
    name: "John Smith",
    position: "Vice President",
    discipline: "Electrical Engineering",
    year: "4th Year",
    category: "executive",
    image: "/images/team/john-smith.jpg",
    order: 2,
  },

  // Technical Leads
  {
    name: "Alex Brown",
    position: "Mechanical Lead",
    discipline: "Mechanical Engineering",
    year: "4th Year",
    category: "technical-lead",
    image: "/images/team/alex-brown.jpg",
    order: 1,
  },
  {
    name: "Sam Wilson",
    position: "Computer Lead",
    discipline: "Software Engineering",
    year: "3rd Year",
    category: "technical-lead",
    image: "/images/team/sam-wilson.jpg",
    order: 2,
  },

  // General Members
  {
    name: "Taylor Jones",
    discipline: "Computer Engineering",
    year: "2nd Year",
    category: "general-member",
    order: 1,
  },

  // Alumni
  {
    name: "Morgan Lee",
    position: "Former President",
    discipline: "Mechanical Engineering",
    year: "Class of 2024",
    category: "alumni",
    order: 1,
    linkedIn: "https://www.linkedin.com/",
  },
];
