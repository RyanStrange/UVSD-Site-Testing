export default function FacilitiesPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 text-center">
      <h1 className="text-4xl font-bold">Facilities</h1>
      <p className="mt-4 text-lg">
        Our state-of-the-art facilities provide the perfect environment for
        designing, building, and testing our micro satellites. Equipped with
        advanced tools and technologies, our labs and workshops enable hands-on
        learning and innovation. From clean rooms for assembly to testing rigs
        for simulations, our facilities support every stage of our satellite
        missions. We are committed to maintaining a safe and collaborative space
        where students can explore their passion for aerospace engineering and
        contribute to cutting-edge space technology.
      </p>
      <div className="w-full border-t border-accent mt-10">
        <p className="text-2xl font-bold mt-10 ">Clubroom</p>
        <p className="mt-4 text-lg">
          The main gathering space for the satellite club, used for meetings,
          collaboration, and project planning in a relaxed, team-oriented
          environment.{" "}
        </p>
      </div>
      <div className="w-full border-t border-accent mt-10">
        <p className="text-2xl font-bold mt-10">Proplab</p>
        <p className="mt-4 text-lg">
          A hands-on workspace equipped for mechanical and electrical
          fabrication, where members prototype, assemble, and test satellite
          hardware and related systems.{" "}
        </p>
      </div>
      <div className="w-full border-t border-accent mt-10">
        <p className="text-2xl font-bold mt-10">Antennas</p>
        <p className="mt-4 text-lg">
          The ground station area housing communication equipment and antenna
          arrays, used for tracking, receiving, and transmitting data to
          satellites in orbit.{" "}
        </p>
      </div>
      <div className="w-full border-t border-accent mt-10">
        <p className="text-2xl font-bold mt-10">Clean Room</p>
        <p className="mt-4 text-lg">
          A controlled environment designed to minimize contamination, used for
          the final assembly and integration of sensitive satellite components.{" "}
        </p>
      </div>
    </main>
  );
}
