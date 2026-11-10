export interface AboutNavigationItem {
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface About {
  title: string;
  subtitle: string;
  heroImage?: string;
  //   IntroTitle?: string;
  overview: {
    title: string;
    description: string;
  };
  navigation: AboutNavigationItem[];
}

export type PersonnelCategory =
  | "executive"
  | "technical-lead"
  | "general-member"
  | "alumni";

export interface Personnel {
  name: string;
  position?: string;
  discipline?: string;
  year?: string;
  category: PersonnelCategory;
  image?: string;
  linkedIn?: string;
  order: number;
}

export interface Facility {
  name: string;
  description: string;
  image: string;
  details?: string[];
  order: number;
}
