export type Sponsor = {
  name: string;
  logo: string;
  websiteUrl?: string;
};

export const sponsors: Sponsor[] = [
  {
    name: "Altium",
    logo: "/images/sponsors/Altium_Logo_BLK.svg",
  },
  {
    name: "Ansys",
    logo: "/images/sponsors/Ansys.png",
  },
  {
    name: "Keysight Technologies",
    logo: "/images/sponsors/keysight-agilent-technologies-technology-hewlett-p.png",
  },
  {
    name: "Rainhouse",
    logo: "/images/sponsors/Logo_Rainhouse_Horizontal.png",
  },
  {
    name: "National Research Council Canada",
    logo: "/images/sponsors/NRC.png",
  },
  {
    name: "Quaternion Aerospace",
    logo: "/images/sponsors/Quaternion Aerospace.png",
  },
  {
    name: "Primary Logo",
    logo: "/images/sponsors/Primary Logo - Horizontal Red on White.tif",
  },
  {
    name: "WEDC",
    logo: "/images/sponsors/WEDC.png",
  },
  {
    name: "Canadian Space Agency",
    logo: "/images/sponsors/utilisation-logo-asc-colore-circulaire-clair.png",
  },
];

export const sponsorPageData = {
  donationUrl: null as string | null,
  sponsorshipPackageUrl: null as string | null,
  managementEmail: null as string | null,
};
