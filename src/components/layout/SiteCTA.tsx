export function SiteCTA() {
  return (
    <section className="bg-slate-100 px-6 py-20 dark:bg-slate-900 md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-400">
            Get involved
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
            Help build what comes next.
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-slate-600 dark:text-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Join our
            student team and contribute to future space technology projects.
          </p>
        </div>
        <a
          href="/opportunities"
          className="inline-flex shrink-0 items-center gap-3 bg-slate-950 px-7 py-4 text-sm font-semibold text-white transition hover:bg-sky-800 dark:bg-white dark:text-slate-950 dark:hover:bg-sky-200"
        >
          Join UVSD <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
