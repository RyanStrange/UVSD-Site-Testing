import React from "react";
import Header from "@/components/Header";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Car } from "lucide-react";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center text-center ">
        <div className="bg-[url('/ORCASat-Hero-Image.jpg')] bg-cover bg-center bg-no-repeat relative overflow-hidden w-screen h-screen text-foreground flex flex-col justify-start items-center pt-[15vh] md:pt-[20vh] md:px-60">
          <div className="z-10 w-screen">
            <p className="text-4xl sm:text-5xl md:text-7xl text-white font-extrabold py-5 mx-20 border-b border-uvic-dark-blue inline-block">
              UVic Satellite Design
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl text-white font-bold py-5 mx-20 inline-block">
              Student Space Technologies at the University of Victoria
            </p>
          </div>
        </div>
        <div
          className="bg-[url('/MARMOTSat-Homepage.jpg')]
        bg-cover bg-center bg-no-repeat relative w-screen h-screen min-h-screen
        flex flex-col items-center text-center p-20"
        >
          {/* <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-destructive -z-10" /> */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-uvic-dark-blue font-bold">
              MARMOTSat
            </h1>
          </div>
        </div>
        <div
          className="bg-[url('/ORCASat-Homepage.jpg')]
        bg-cover bg-center bg-no-repeat relative w-screen h-screen min-h-screen md:h-screen 
        flex flex-col items-center text-center p-20"
        >
          {/* <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-destructive -z-10" /> */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-uvic-dark-blue font-bold">
              ORCASat
            </h1>
          </div>
        </div>
        <div
          className="bg-[url('/ORCASat-Homepage.jpg')]
        bg-cover bg-center bg-no-repeat relative w-screen h-screen min-h-screen md:h-screen 
        flex flex-col items-center text-center p-20"
        >
          {/* <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-destructive -z-10" /> */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-uvic-dark-blue font-bold">
              DOOMBalloon
            </h1>
          </div>
        </div>
        <div
          className="bg-[url('/ORCASat-Homepage.jpg')] 
        bg-cover bg-center bg-no-repeat relative w-screen h-screen min-h-screen md:h-screen 
        flex flex-col items-center text-center p-20"
        >
          {/* <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-destructive -z-10" /> */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-uvic-dark-blue font-bold">
              Ground Stations
            </h1>
          </div>
        </div>
        <div
          className="bg-[url('/ORCASat-Homepage.jpg')] bg-[length:100%_auto] 
        bg-cover bg-center bg-no-repeat relative w-screen h-screen min-h-screen md:h-screen 
        flex flex-col items-center text-center p-20"
        >
          {/* <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-destructive -z-10" /> */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-uvic-dark-blue font-bold">
              Other Projects
            </h1>
          </div>
        </div>
        <div
          className="bg-[url('/ORCASat-Homepage.jpg')] bg-[length:100%_auto] 
        bg-cover bg-center bg-no-repeat relative w-screen h-screen min-h-screen md:h-screen 
        flex flex-col items-center text-center p-20"
        >
          {/* <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-destructive -z-10" /> */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-uvic-dark-blue font-bold">
              Sponsors and Donations
            </h1>
          </div>
        </div>
        <div
          className="bg-[url('/ORCASat-Homepage.jpg')] bg-[length:100%_auto] 
        bg-cover bg-center bg-no-repeat relative w-screen h-screen min-h-screen md:h-screen 
        flex flex-col items-center text-center p-20"
        >
          {/* <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-destructive -z-10" /> */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-uvic-dark-blue font-bold">
              Join UVSD
            </h1>
          </div>
        </div>
      </main>
    </>
  );
}
