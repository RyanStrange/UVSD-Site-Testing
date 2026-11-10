import type { Mission } from "./types";

export const doomballoon: Mission = {
  slug: "doomballoon",
  title: "DOOMBalloon",
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  status: "In Development",
  heroImage: "",
  overview: {
    heading: "Project Overview",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.",
    ],
    image: { src: "", alt: "DOOMBalloon project hardware" },
    externalLink: { label: "Explore the project", url: "#" },
  },
  gallery: [
    { src: "", alt: "DOOMBalloon gallery image 1", caption: "Project overview" },
    { src: "", alt: "DOOMBalloon gallery image 2", caption: "Development and testing" },
    { src: "", alt: "DOOMBalloon gallery image 3", caption: "Team photograph" },
  ],
};
