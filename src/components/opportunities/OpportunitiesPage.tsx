import { opportunitiesData } from "@/data/opportunities";

import OpportunitiesHero from "./OpportunitiesHero";
import StudentRoles from "./StudentRoles";
import Workshops from "./Workshops";
import Pathways from "./Pathways";
import Employment from "./Employment";
import MeetingInfo from "./MeetingInfo";
import ContactSection from "./ContactSection";

export default function OpportunitiesPage() {
  const data = opportunitiesData;

  return (
    <main>
      <OpportunitiesHero data={data.hero} signupUrl={data.contact.signupUrl} />

      <StudentRoles roles={data.roles} />

      <Workshops workshops={data.workshops} />

      <Pathways coOp={data.coOpPathways} research={data.researchPathways} />

      <Employment data={data.employment} />

      <MeetingInfo data={data.meetings} />

      {/* <ContactSection data={data.contact} /> */}
    </main>
  );
}
