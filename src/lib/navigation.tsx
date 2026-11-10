export const navigation = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Missions",
    href: "/missions",
    children: [
      { title: "Mission Hub", href: "/missions" },
      { title: "ORCASat", href: "/missions/orcasat" },
      { title: "MARMOTSat", href: "/missions/marmotsat" },
      { title: "DOOMBalloon", href: "/missions/doomballoon" },
      { title: "Ground Stations", href: "/missions/ground-stations" },
      { title: "Past Projects", href: "/missions/past-projects" },
    ],
  },
  {
    title: "About",
    href: "/about",
    children: [
      { title: "About UVSD", href: "/about" },
      // { title: "Our Story", href: "/about/story" },
      { title: "Team", href: "/about/team" },
      { title: "Facilities", href: "/about/facilities" },
      // { title: "Alumni", href: "/about/alumni" },
    ],
  },
  {
    title: "Opportunities",
    href: "/opportunities",
    // children: [
    //   { title: "Join UVSD", href: "/opportunities/join" },
    //   { title: "Student Roles", href: "/opportunities/roles" },
    //   { title: "Workshops", href: "/opportunities/workshops" },
    //   { title: "Co-op and Research", href: "/opportunities/pathways" },
    //   { title: "Employment", href: "/opportunities/employment" },
    // ],
  },
  {
    title: "Sponsors",
    href: "/sponsors",
    // children: [
    //   { title: "Current Sponsors", href: "/sponsors/current" },
    //   { title: "Donate", href: "/sponsors/donate" },
    //   { title: "Become a Sponsor", href: "/sponsors/become-a-sponsor" },
    // ],
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
