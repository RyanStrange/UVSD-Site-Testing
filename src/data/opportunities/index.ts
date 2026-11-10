import type { OpportunitiesPageData } from "./types";

export const opportunitiesData: OpportunitiesPageData = {
  hero: {
    title: "Join UVSD",
    subtitle:
      "Design, build, and operate student-led space technologies at the University of Victoria.",
    image: {
      src: "/images/opportunities/ground-station-hero.jpg",
      alt: "UVSD ground station and antenna infrastructure",
    },
  },

  roles: [
    {
      slug: "mechanical",
      name: "Mechanical Team",
      description:
        "Works on structures, CAD, mechanical design, thermal design, manufacturing, testing, and integration.",
      image: {
        src: "/images/opportunities/roles/mechanical.jpg",
        alt: "Students working on mechanical engineering and CAD",
      },
      order: 1,
    },
    {
      slug: "electrical",
      name: "Electrical Team",
      description:
        "Works on electronics, power systems, communications hardware, PCB design, testing, and integration.",
      image: {
        src: "/images/opportunities/roles/electrical.jpg",
        alt: "Students working on electrical satellite hardware",
      },
      order: 2,
    },
    {
      slug: "computer",
      name: "Computer Team",
      description:
        "Works on software, embedded systems, flight software, data handling, ground software, and automation.",
      image: {
        src: "/images/opportunities/roles/computer.jpg",
        alt: "Students developing software and computer systems",
      },
      order: 3,
    },
    {
      slug: "research",
      name: "Research Team",
      description:
        "Works on technical research, mission concepts, analysis, documentation, and proposal support.",
      image: {
        src: "/images/opportunities/roles/research.jpg",
        alt: "Students conducting technical aerospace research",
      },
      order: 4,
    },
    {
      slug: "outreach",
      name: "Outreach Team",
      description:
        "Works on recruitment, public engagement, social media, event planning, sponsor communication, and educational outreach.",
      image: {
        src: "/images/opportunities/roles/outreach.jpg",
        alt: "Students participating in an outreach event",
      },
      order: 5,
    },
    {
      slug: "project-management",
      name: "Project Management",
      description:
        "Works on scheduling, documentation, task tracking, meeting coordination, risk management, and project organization.",
      image: {
        src: "/images/opportunities/roles/project-management.jpg",
        alt: "Students coordinating an engineering project",
      },
      order: 6,
    },
  ],

  workshops: [
    {
      slug: "nx-cad",
      name: "NX CAD",
      description:
        "Develop practical skills in computer-aided design and mechanical modelling.",
      image: {
        src: "/images/opportunities/workshops/nx-cad.jpg",
        alt: "CAD modelling on a computer",
      },
      category: "Mechanical",
      order: 1,
    },
    {
      slug: "soldering",
      name: "Soldering",
      description:
        "Learn practical electronics assembly and soldering techniques.",
      image: {
        src: "/images/opportunities/workshops/soldering.jpg",
        alt: "Electronics soldering workshop",
      },
      category: "Electrical",
      order: 2,
    },
    {
      slug: "git",
      name: "Introduction to Git",
      description:
        "Learn version control and collaborative software development workflows.",
      image: {
        src: "/images/opportunities/workshops/git.jpg",
        alt: "Software development workstation",
      },
      category: "Computer",
      order: 3,
    },
    {
      slug: "embedded-systems",
      name: "Embedded Systems",
      description:
        "Explore the software and hardware used in embedded computing systems.",
      image: {
        src: "/images/opportunities/workshops/embedded-systems.jpg",
        alt: "Embedded electronics development",
      },
      category: "Computer",
      order: 4,
    },
    {
      slug: "fusion-cam",
      name: "Fusion 360 CAM",
      description:
        "Explore computer-aided manufacturing and digital fabrication workflows.",
      image: {
        src: "/images/opportunities/workshops/fusion-cam.jpg",
        alt: "Computer-aided manufacturing workstation",
      },
      category: "Mechanical",
      order: 5,
    },
    {
      slug: "satnogs",
      name: "SatNOGS & Ground Station Operations",
      description:
        "Learn about satellite communications, ground stations, and radio operations.",
      image: {
        src: "/images/opportunities/workshops/satnogs.jpg",
        alt: "Satellite ground station antenna",
      },
      category: "Communications",
      order: 6,
    },
  ],

  coOpPathways: {
    title: "Co-op Opportunities",
    description:
      "Working with UVSD gives students hands-on experience in engineering, technical development, teamwork, and project management. These experiences can help students build skills relevant to aerospace, engineering, and future co-op positions.",
  },

  researchPathways: {
    title: "Research Pathways",
    description:
      "Students can gain experience with technical research, mission development, testing, analysis, and documentation while contributing to real engineering projects.",
  },

  employment: {
    title: "Employment Opportunities",
    description:
      "Employment opportunities connected to UVSD and its partners can be shared here as they become available.",
    opportunities: [],
  },

  meetings: {
    schedule: null,
    location: null,
    calendarUrl: null,
  },

  contact: {
    generalEmail: null,
    managementEmail: null,
    instagramUrl: null,
    linkedinUrl: null,
    signupUrl: null,
  },
};
