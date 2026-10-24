/**
 * Vagas de fundador do Arafit que ainda sobram (os 100 primeiros assinantes do Ilimitado).
 * Lê a função pública `founder_seats_left()` do Supabase do Arafit e guarda por 5 minutos.
 * Sem as variáveis de ambiente (antes do lançamento) ou com o servidor fora, mostra as 100 vagas.
 */
export const FOUNDER_SEATS = 100;

export async function founderSeatsLeft(): Promise<number> {
  const url = process.env.ARAFIT_SUPABASE_URL;
  const key = process.env.ARAFIT_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return FOUNDER_SEATS;
  try {
    const res = await fetch(`${url}/rest/v1/rpc/founder_seats_left`, {
      method: 'POST',
      headers: { apikey: key, 'Content-Type': 'application/json' },
      body: '{}',
      next: { revalidate: 300 },
    });
    if (!res.ok) return FOUNDER_SEATS;
    const n = (await res.json()) as unknown;
    return typeof n === 'number' ? Math.max(0, Math.min(FOUNDER_SEATS, n)) : FOUNDER_SEATS;
  } catch {
    return FOUNDER_SEATS;
  }
}
