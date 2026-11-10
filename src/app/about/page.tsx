import { AboutPage } from "@/components/about/AboutPage";
import { aboutLandingData } from "@/data/about";

export default function Page() {
  return (
    <>
      <AboutPage about={aboutLandingData} />
    </>
  );
}
