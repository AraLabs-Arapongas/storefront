export function OwnLink() {
  return (
    <section className="border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
              Seu link próprio
            </p>
            <h2 className="mt-4 text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
              Seu <span className="font-serif italic text-[color:var(--gold-soft)]">endereço</span>{' '}
              digital, pronto.
            </h2>
            <p className="mt-6 max-w-xl text-[16.5px] leading-[1.7] text-[color:var(--ink-muted)]">
              Cada negócio recebe um endereço próprio do tipo{' '}
              <span className="font-mono text-[color:var(--ink)]">seu-negocio.aralabs.com.br</span>.
              Coloca no Instagram, WhatsApp, balcão. Cliente acessa sem instalar nada.
            </p>
          </div>

          <div className="rounded-[28px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-8">
            <div className="flex items-center gap-2 text-[12px] text-[color:var(--ink-dim)]">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--gold)]/70" />
              aralabs.com.br
            </div>
            <div className="mt-4 rounded-xl border border-[color:var(--line)] bg-[color:var(--bg)] px-4 py-3 font-mono text-[15px] text-[color:var(--ink)]">
              https://<span className="text-[color:var(--gold-soft)]">studio-pilar</span>
              .aralabs.com.br
            </div>
            <div className="mt-6 flex items-center gap-4">
              <div
                className="h-24 w-24 shrink-0 rounded-xl border border-[color:var(--line-strong)] bg-[color:var(--ink)] p-2"
                aria-label="QR code ilustrativo"
                role="img"
              >
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, var(--bg) 1px, transparent 1.5px), radial-gradient(circle, var(--bg) 1px, transparent 1.5px)',
                    backgroundSize: '6px 6px, 6px 6px',
                    backgroundPosition: '0 0, 3px 3px',
                  }}
                />
              </div>
              <div className="text-[14px] leading-[1.55] text-[color:var(--ink-muted)]">
                Compartilhe o QR code no balcão. Cliente escaneia e marca em segundos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
