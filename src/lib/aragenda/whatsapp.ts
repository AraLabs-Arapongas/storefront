/**
 * WhatsApp deep link builder. Centraliza o número e a mensagem default
 * pra que toda CTA da landing aponte pro mesmo destino.
 *
 * Em prod, configurar `NEXT_PUBLIC_WHATSAPP_NUMBER` no Vercel
 * (formato internacional sem `+`, ex: `5544999999999`).
 */
const FALLBACK_NUMBER = '5544999999999';

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || FALLBACK_NUMBER;

export const DEFAULT_MESSAGE =
  'Olá! Quero conhecer o Aragenda e entrar como um dos primeiros negócios.';

export function whatsappUrl(message: string = DEFAULT_MESSAGE): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
