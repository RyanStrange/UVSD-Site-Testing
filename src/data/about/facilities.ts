import type { Facility } from "./types";

export const facilities: Facility[] = [
  {
    name: "UVSD Clubroom",
    description:
      "The clubroom provides a space for members to collaborate, work on projects, and develop their engineering skills.",
    image: "/images/facilities/uvsd-clubroom.jpeg",
    details: ["Project workspace", "Team collaboration", "Prototyping"],
    order: 1,
  },
  {
    name: "Ground Station",
    description:
      "Explore the ground station equipment and communications infrastructure associated with UVSD's satellite projects.",
    image: "/images/facilities/ground-station.jpg",
    details: ["Antenna systems", "Radio communications"],
    order: 2,
  },
  {
    name: "Clean Room",
    description:
      "Learn about the clean room facilities available to support relevant satellite development and testing activities.",
    image: "/images/facilities/clean-room.jpg",
    details: ["Clean room environment", "Satellite development"],
    order: 3,
  },
  {
    name: "Portable Ground Station",
    description: "A look at UVSD's portable ground station development work.",
    image: "/images/facilities/portable-ground-station.jpg",
    details: ["Portable communications", "Ground station development"],
    order: 4,
  },
];
