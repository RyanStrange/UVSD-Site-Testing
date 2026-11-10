interface MissionImageProps {
  src?: string;
  alt: string;
  className?: string;
}

export function MissionImage({ src, alt, className = "" }: MissionImageProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex h-full min-h-48 w-full items-center justify-center bg-gradient-to-br from-slate-800 via-slate-700 to-slate-950 text-sm uppercase tracking-[0.2em] text-white/50 ${className}`}
    >
      Image placeholder
    </div>
  );
}
