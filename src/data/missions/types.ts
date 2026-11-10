export type MissionStatus =
  | "Completed"
  | "In Orbit"
  | "In Development"
  | "In Testing"
  | "In Planning";

export interface MissionImage {
  src?: string;
  alt: string;
  caption?: string;
}

export interface MissionSpec {
  label: string;
  value: string;
}

export interface Mission {
  slug: string;
  title: string;
  subtitle: string;
  status: MissionStatus;
  heroImage?: string;
  overview: {
    heading: string;
    description: string[];
    image?: MissionImage;
    externalLink?: {
      label: string;
      url: string;
    };
  };
  specifications?: MissionSpec[];
  gallery: MissionImage[];
}

export interface PastProject {
  title: string;
  description: string;
  image?: MissionImage;
  status?: string;
}
