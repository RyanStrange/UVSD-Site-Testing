import type { Mission } from "./types";

export const marmotsat: Mission = {
  slug: "marmotsat",
  title: "MARMOTSat",
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  status: "In Development",
  heroImage: "",
  overview: {
    heading: "Mission Overview",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum.",
    ],
    image: { src: "", alt: "MARMOTSat mission hardware" },
    externalLink: { label: "Learn more about MARMOTSat", url: "#" },
  },
  specifications: [
    { label: "Mission type", value: "Lorem ipsum" },
    { label: "Mission status", value: "In development" },
  ],
  gallery: [
    { src: "", alt: "MARMOTSat gallery image 1", caption: "Project development" },
    { src: "", alt: "MARMOTSat gallery image 2", caption: "Hardware" },
    { src: "", alt: "MARMOTSat gallery image 3", caption: "Team and testing" },
  ],
};
