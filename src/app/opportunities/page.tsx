import type { Metadata } from "next";
import OpportunitiesPage from "@/components/opportunities/OpportunitiesPage";

export const metadata: Metadata = {
  title: "Join UVSD | University of Victoria Satellite Design",
  description:
    "Discover student roles, workshops, research pathways, and opportunities to get involved with UVSD.",
};

export default function Page() {
  return <OpportunitiesPage />;
}
