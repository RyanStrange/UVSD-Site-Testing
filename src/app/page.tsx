import React from "react";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center text-center">
        <div className="w-screen min-h-screen md:h-screen flex flex-col items-center text-center p-20">
          <Image
            src="/orcasat.png"
            alt="ORCASat"
            className="w-96 md:w-1/2 h-auto"
            width={1920}
            height={1080}
            priority // optional: ensures image loads quickly for hero section
          />
          <div>
            <h1 className="text-4xl font-bold">Island born, space bound.</h1>
            <h2 className="text-2xl mt-10">
              Welcome to University of Victoria Satellite Design
            </h2>
            <p className="mt-4">
              UVSD brings together passionate students from across all
              disciplines to design, build, and launch innovative micro
              satellites. Our club provides hands-on experience in aerospace
              engineering, systems design, and project management—skills that
              often cannot be found in the classroom. From flagship missions
              like ORCASat and MarmotSat to experimental projects, we push the
              boundaries of student-led space innovation while fostering a
              collaborative and inclusive environment. Whether you’re a seasoned
              engineer or just starting out, UVSD offers opportunities to
              contribute to real-world space missions and make an impact that
              reaches beyond our campus. Get involved with UVSD and help shape
              the future of student-led space technologies.
            </p>
          </div>
        </div>
        <div className="w-screen h-screen bg-foreground text-background flex flex-col justify-center">
          ORCASat
        </div>
        <div className="w-screen h-screen bg-background text-foreground flex flex-col justify-center">
          MARMOTSat
        </div>
        <div className="w-screen h-screen bg-foreground text-background flex flex-col justify-center">
          SPONSORS
        </div>
      </main>
    </>
  );
}
