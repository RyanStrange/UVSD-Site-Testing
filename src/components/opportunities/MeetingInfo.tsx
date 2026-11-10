import Link from "next/link";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import type { MeetingInformation } from "@/data/opportunities/types";
import { Button } from "@/components/ui/button";

interface Props {
  data: MeetingInformation;
}

export default function MeetingInfo({ data }: Props) {
  const details = [
    {
      label: "Schedule",
      value: data.schedule,
      icon: Clock,
    },
    {
      label: "Location",
      value: data.location,
      icon: MapPin,
    },
  ];

  return (
    <section id="meetings" className="scroll-mt-24 py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Get involved
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">Meet the Team</h2>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Come meet fellow students, learn about our projects, and discover
              how you can contribute to UVSD.
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-8">
            <div className="space-y-6">
              {details.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex gap-4">
                  <Icon className="mt-1 size-5 shrink-0 text-primary" />

                  <div>
                    <h3 className="font-semibold">{label}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value || "Details coming soon"}
                    </p>
                  </div>
                </div>
              ))}

              {data.calendarUrl && (
                <Button asChild className="w-full">
                  <Link
                    href={data.calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CalendarDays className="mr-2 size-4" />
                    View Calendar
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
