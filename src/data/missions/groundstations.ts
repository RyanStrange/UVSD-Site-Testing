import type { Mission } from "./types";

export const groundstations: Mission = {
  slug: "ground-stations",
  title: "Ground Stations",
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  status: "In Development",
  heroImage: "",
  overview: {
    heading: "Ground Station Overview",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
      "Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.",
    ],
    image: { src: "", alt: "UVSD ground station equipment" },
  },
  specifications: [
    { label: "Systems", value: "Lorem ipsum" },
    { label: "Development", value: "Ongoing" },
  ],
  gallery: [
    { src: "", alt: "Ground station gallery image 1", caption: "Ground station equipment" },
    { src: "", alt: "Ground station gallery image 2", caption: "Antenna development" },
    { src: "", alt: "Ground station gallery image 3", caption: "Portable ground station" },
  ],
};
