'use client';

import { useEffect, useRef, useState } from 'react';

export type TocItem = {
  id: string;
  n?: string;
  title: string;
  sub?: { id: string; title: string }[];
};

/** Id of the last heading that has scrolled past the sticky header (the last one at the bottom). */
function useActiveHeading(items: TocItem[]) {
  const key = items.flatMap((it) => [it.id, ...(it.sub ?? []).map((s) => s.id)]).join('|');
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = key
      .split('|')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;
    let frame = 0;
    const measure = () => {
      frame = 0;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current: string | null = null;
      for (const el of els) {
        if (el.getBoundingClientRect().top <= 140) current = el.id;
        else break;
      }
      setActive(atBottom ? els[els.length - 1].id : current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [key]);

  return active;
}

function TocList({
  items,
  active,
  onPick,
}: {
  items: TocItem[];
  active: string | null;
  onPick?: () => void;
}) {
  return (
    <ol>
      {items.map((it) => {
        const inside = it.id === active || (it.sub ?? []).some((s) => s.id === active);
        return (
          <li key={it.id}>
            <a href={`#${it.id}`} aria-current={inside ? 'true' : undefined} onClick={onPick}>
              {it.n ? <span className="lg-toc-n">{it.n}</span> : null}
              <span>{it.title}</span>
            </a>
            {it.sub?.length ? (
              <ol>
                {it.sub.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      aria-current={s.id === active ? 'true' : undefined}
                      onClick={onPick}
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

/** Desktop: sticky list with the current section highlighted, plus print. */
export function LegalToc({ items }: { items: TocItem[] }) {
  const active = useActiveHeading(items);
  return (
    <nav aria-label="Sumário" className="lg-toc">
      <p className="lg-toc-label">
        <span className="tri text-[7px]" aria-hidden="true" />
        Nesta página
      </p>
      <div className="lg-toc-scroll">
        <TocList items={items} active={active} />
      </div>
      <button type="button" className="lg-print mt-7" onClick={() => window.print()}>
        <span className="tri tri-r text-[7px]" aria-hidden="true" />
        Imprimir ou salvar em PDF
      </button>
    </nav>
  );
}

/** Mobile: a collapsed "Nesta página" that closes itself after a jump. */
export function LegalTocMobile({ items }: { items: TocItem[] }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const count = items.length;
  return (
    <details ref={ref} className="lg-toc-m lg-noprint lg:hidden" data-legal-extra>
      <summary>
        Nesta página · {count} {count === 1 ? 'seção' : 'seções'}
      </summary>
      <nav aria-label="Sumário recolhível" className="lg-toc">
        <TocList
          items={items}
          active={null}
          onPick={() => {
            if (ref.current) ref.current.open = false;
          }}
        />
      </nav>
    </details>
  );
}
