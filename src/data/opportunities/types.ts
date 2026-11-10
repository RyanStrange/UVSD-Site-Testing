export interface OpportunityImage {
  src: string;
  alt: string;
}

export interface StudentRole {
  slug: string;
  name: string;
  description: string;
  image: OpportunityImage;
  skills?: string[];
  order: number;
}

export interface Workshop {
  slug: string;
  name: string;
  description: string;
  image: OpportunityImage;
  category?: string;
  order: number;
}

export interface Pathway {
  title: string;
  description: string;
  image?: OpportunityImage;
}

export interface MeetingInformation {
  schedule: string | null;
  location: string | null;
  calendarUrl: string | null;
}

export interface OpportunityContact {
  generalEmail: string | null;
  managementEmail: string | null;
  instagramUrl: string | null;
  linkedinUrl: string | null;
  signupUrl: string | null;
}

export interface OpportunitiesPageData {
  hero: {
    title: string;
    subtitle: string;
    image: OpportunityImage;
  };
  roles: StudentRole[];
  workshops: Workshop[];
  coOpPathways: Pathway;
  researchPathways: Pathway;
  employment: {
    title: string;
    description: string;
    opportunities: {
      title: string;
      description: string;
      url?: string;
    }[];
  };
  meetings: MeetingInformation;
  contact: OpportunityContact;
}
