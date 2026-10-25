/**
 * Vagas de fundador do Arafit que ainda sobram (números #1 a #100 do Ilimitado; #1 a #21 são
 * reservados e quem assina recebe a partir do #22, então abrem 79).
 * Lê a função pública `founder_seats_left()` do Supabase do Arafit e guarda por 5 minutos.
 * Sem as variáveis de ambiente (antes do lançamento) ou com o servidor fora, mostra as 79 vagas abertas.
 */
export const FOUNDER_SEATS = 100;
const FOUNDER_OPEN = 79;

export async function founderSeatsLeft(): Promise<number> {
  const url = process.env.ARAFIT_SUPABASE_URL;
  const key = process.env.ARAFIT_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return FOUNDER_OPEN;
  try {
    const res = await fetch(`${url}/rest/v1/rpc/founder_seats_left`, {
      method: 'POST',
      headers: { apikey: key, 'Content-Type': 'application/json' },
      body: '{}',
      next: { revalidate: 300 },
    });
    if (!res.ok) return FOUNDER_OPEN;
    const n = (await res.json()) as unknown;
    return typeof n === 'number' ? Math.max(0, Math.min(FOUNDER_OPEN, n)) : FOUNDER_OPEN;
  } catch {
    return FOUNDER_OPEN;
  }
}
