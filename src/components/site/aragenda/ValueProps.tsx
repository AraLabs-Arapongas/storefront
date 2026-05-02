import { VALUE_PROPS } from '@/lib/aragenda/copy';

export function ValueProps() {
  return (
    <section className="border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
        <ul className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          {VALUE_PROPS.map((v) => (
            <li key={v.title}>
              <h3 className="text-[20px] font-semibold text-[color:var(--ink)]">
                <span className="font-serif italic text-[color:var(--gold-soft)]">{v.title}</span>
              </h3>
              <p className="mt-3 text-[15.5px] leading-[1.7] text-[color:var(--ink-muted)]">
                {v.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
