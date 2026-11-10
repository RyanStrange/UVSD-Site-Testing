type ImagePlaceholderProps = {
  label?: string;
  className?: string;
};

export default function ImagePlaceholder({
  label = "Project photography",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex min-h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-black ${className}`}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full border border-white/30" />
        <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full border border-white/20" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      </div>

      <span className="relative text-xs font-medium uppercase tracking-[0.25em] text-white/40">
        {label}
      </span>
    </div>
  );
}
