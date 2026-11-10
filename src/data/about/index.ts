import type { About } from "./types";

export const aboutLandingData: About = {
  title: "About UVSD",
  subtitle: "Student Space Technologies at the University of Victoria",

  heroImage: "/images/about/business-card-front.jpg",

  overview: {
    title: "Who We Are",
    description:
      "The University of Victoria Satellite Design team (UVSD) is a student-led organization focused on developing student space technologies. Through collaborative engineering projects, research, and hands-on experience, members work together to explore the challenges of designing and developing space systems.",
  },

  navigation: [
    // {
    //   title: "Our Story",
    //   description:
    //     "Learn about UVSD, our history, and the goals that drive our organization.",
    //   href: "/about/story",
    //   image: "/images/about/story.jpg",
    // },
    {
      title: "Our Team",
      description:
        "Meet the students and leaders behind UVSD's projects and initiatives.",
      href: "/about/team",
      image: "/images/about/team.jpg",
    },
    {
      title: "Facilities",
      description:
        "Explore the equipment, workspaces, and infrastructure supporting our projects.",
      href: "/about/facilities",
      image: "/images/about/facilities.jpg",
    },
    // {
    //   title: "Alumni",
    //   description:
    //     "Recognizing the former members who have contributed to UVSD.",
    //   href: "/about/alumni",
    //   image: "/images/about/alumni.jpg",
    // },
  ],
};
