type ImagePlaceholderProps = {
  description: string;
  width: number;
  height: number;
  label?: string;
  className?: string;
  aspect?: 'preserve' | 'fill';
};

export function ImagePlaceholder({
  description,
  width,
  height,
  label,
  className = '',
  aspect = 'fill',
}: ImagePlaceholderProps) {
  const style =
    aspect === 'preserve' ? { aspectRatio: `${width} / ${height}` } : undefined;

  return (
    <div
      className={`group relative overflow-hidden rounded-[24px] border border-dashed border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] ${className}`}
      style={style}
      role="img"
      aria-label={`Placeholder: ${description}`}
    >
      {/* diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, var(--ink) 0 1px, transparent 1px 14px)',
        }}
      />

      <div className="relative flex h-full w-full flex-col justify-between p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg)] text-[color:var(--gold-soft)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-4 w-4"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </span>
            <span className="font-serif text-[11px] italic uppercase tracking-[0.22em] text-[color:var(--gold-soft)]">
              {label ?? 'Imagem a gerar'}
            </span>
          </div>
          <span className="rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg)] px-2.5 py-1 text-[10px] font-medium tabular-nums text-[color:var(--ink-muted)]">
            {width} × {height}
          </span>
        </div>

        <div className="max-w-md">
          <p className="font-serif text-[20px] italic leading-[1.35] text-[color:var(--ink)]">
            {description}
          </p>
          <div className="mt-4 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink-dim)]">
            <span className="h-px w-10 bg-[color:var(--line-strong)]" />
            <span>aralabs · art direction</span>
          </div>
        </div>
      </div>
    </div>
  );
}
