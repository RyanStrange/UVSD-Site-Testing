import type { Mission } from "./types";

export const orcasat: Mission = {
  slug: "orcasat",
  title: "ORCASat",
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  status: "Completed",
  heroImage: "/ORCASat-Hero-Image.jpg",
  overview: {
    heading: "Mission Overview",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur.",
      "Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor.",
    ],
    image: {
      src: "",
      alt: "ORCASat mission hardware",
    },
    externalLink: {
      label: "Visit the mission website",
      url: "#",
    },
  },
  specifications: [
    { label: "Mission type", value: "Lorem ipsum" },
    { label: "Launch year", value: "20XX" },
    { label: "Orbit", value: "Lorem ipsum" },
    { label: "Organization", value: "UVSD" },
  ],
  gallery: [
    { src: "", alt: "ORCASat gallery image 1", caption: "Mission photograph" },
    {
      src: "",
      alt: "ORCASat gallery image 2",
      caption: "Hardware and integration",
    },
    {
      src: "",
      alt: "ORCASat gallery image 3",
      caption: "Testing and development",
    },
  ],
};
