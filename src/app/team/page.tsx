import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function TeamPage() {
  return (
    <main className="flex flex-col items-center mt-10 min-h-screen p-10 text-center">
      <h1 className="text-4xl font-bold">Team</h1>
      <p className="mt-4 text-lg">
        Meet our team of dedicated students and professionals driving our
        satellite missions forward. Our diverse group brings together expertise
        from various fields including aerospace engineering, computer science,
        project management, and more. Each member plays a crucial role in
        designing, building, and launching our innovative micro satellites.
      </p>
      <div className="w-full border-t border-accent mt-10">
        <p className="text-2xl font-bold mt-10">Project Management</p>
      </div>
      <div className="flex flex-col md:flex-row mt-10 gap-10">
        <Card>
          <CardHeader>
            <CardTitle>Spencer Titcomb</CardTitle>
            <CardDescription>Club President</CardDescription>
            {/* <CardAction>
            <Button>Test Button</Button>
          </CardAction> */}
          </CardHeader>
          <CardContent>
            <Image
              src="/spencer-titcomb-uvsd-headshot.png.webp"
              alt="ORCASat"
              className="w-full h-auto rounded-md"
              width={1920}
              height={1080}
            ></Image>
          </CardContent>
          <CardFooter className="justify-center">
            <p>4th Year Mechanical Engineering</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Spencer Titcomb</CardTitle>
            <CardDescription>Club President</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/spencer-titcomb-uvsd-headshot.png.webp"
              alt="ORCASat"
              className="w-full h-auto rounded-md"
              width={1920}
              height={1080}
            ></Image>
          </CardContent>
          <CardFooter className="justify-center">
            <p>4th Year Mechanical Engineering</p>
          </CardFooter>
        </Card>
      </div>
      <div className="w-full border-t border-accent mt-10">
        <p className="text-2xl font-bold mt-10">Computer</p>
      </div>
      <div className="flex flex-col md:flex-row mt-10 gap-10">
        <Card>
          <CardHeader>
            <CardTitle>Spencer Titcomb</CardTitle>
            <CardDescription>Club President</CardDescription>
            {/* <CardAction>
            <Button>Test Button</Button>
          </CardAction> */}
          </CardHeader>
          <CardContent>
            <Image
              src="/spencer-titcomb-uvsd-headshot.png.webp"
              alt="ORCASat"
              className="w-full h-auto rounded-md"
              width={1920}
              height={1080}
            ></Image>
          </CardContent>
          <CardFooter className="justify-center">
            <p>4th Year Mechanical Engineering</p>
          </CardFooter>
        </Card>
      </div>
      <div className="w-full border-t border-accent mt-10">
        <p className="text-2xl font-bold mt-10">Electrical</p>
      </div>
      <div className="flex flex-col md:flex-row mt-10 gap-10">
        <Card>
          <CardHeader>
            <CardTitle>Spencer Titcomb</CardTitle>
            <CardDescription>Club President</CardDescription>
            {/* <CardAction>
            <Button>Test Button</Button>
          </CardAction> */}
          </CardHeader>
          <CardContent>
            <Image
              src="/spencer-titcomb-uvsd-headshot.png.webp"
              alt="ORCASat"
              className="w-full h-auto rounded-md"
              width={1920}
              height={1080}
            ></Image>
          </CardContent>
          <CardFooter className="justify-center">
            <p>4th Year Mechanical Engineering</p>
          </CardFooter>
        </Card>
      </div>
      <div className="w-full border-t border-accent mt-10">
        <p className="text-2xl font-bold mt-10">Mechanical</p>
      </div>
      <div className="flex flex-col md:flex-row mt-10 gap-10">
        <Card>
          <CardHeader>
            <CardTitle>Spencer Titcomb</CardTitle>
            <CardDescription>Club President</CardDescription>
            {/* <CardAction>
            <Button>Test Button</Button>
          </CardAction> */}
          </CardHeader>
          <CardContent>
            <Image
              src="/spencer-titcomb-uvsd-headshot.png.webp"
              alt="ORCASat"
              className="w-full h-auto rounded-md"
              width={1920}
              height={1080}
            ></Image>
          </CardContent>
          <CardFooter className="justify-center">
            <p>4th Year Mechanical Engineering</p>
          </CardFooter>
        </Card>
      </div>
      <div className="w-full border-t border-accent mt-10">
        <p className="text-2xl font-bold mt-10">Research and Development</p>
      </div>
      <div className="flex flex-col md:flex-row mt-10 gap-10">
        <Card>
          <CardHeader>
            <CardTitle>Spencer Titcomb</CardTitle>
            <CardDescription>Club President</CardDescription>
            {/* <CardAction>
            <Button>Test Button</Button>
          </CardAction> */}
          </CardHeader>
          <CardContent>
            <Image
              src="/spencer-titcomb-uvsd-headshot.png.webp"
              alt="ORCASat"
              className="w-full h-auto rounded-md"
              width={1920}
              height={1080}
            ></Image>
          </CardContent>
          <CardFooter className="justify-center">
            <p>4th Year Mechanical Engineering</p>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
