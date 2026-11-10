import type { StudentRole } from "@/data/opportunities/types";
import RoleCard from "./RoleCard";

interface Props {
  roles: StudentRole[];
}

export default function StudentRoles({ roles }: Props) {
  const sortedRoles = [...roles].sort((a, b) => a.order - b.order);

  return (
    <section id="roles" className="scroll-mt-24 py-24">
      <div className="container mx-auto space-y-12 px-6">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Find your place
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">Find Your Team</h2>

          <p className="text-lg text-muted-foreground">
            There are many ways to contribute to UVSD. Whether you're interested
            in engineering, software, research, or outreach, there's a place for
            you.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedRoles.map((role) => (
            <RoleCard key={role.slug} role={role} />
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          You don't need to be an expert to get started. We're here to learn and
          build together.
        </p>
      </div>
    </section>
  );
}
