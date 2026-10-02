import { useId, type CSSProperties } from 'react';
import { Home, Blocks, MessageSquareText } from 'lucide-react';
import type { Product } from '@/lib/products';

/** Komyx mark: a balloon with the K knocked out, knot and string. Fills with currentColor. */
export function KomyxMark({ className, style }: { className?: string; style?: CSSProperties }) {
  const id = useId();
  const maskId = `komyx-k-${id.replace(/[^a-zA-Z0-9]/g, '')}`;
  return (
    <svg
      viewBox="0 0 190 200"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <mask id={maskId}>
          <rect width="190" height="200" fill="#fff" />
          <g
            fill="none"
            stroke="#000"
            strokeWidth="26"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M68 50 V128" />
            <path d="M80 94 L122 128" />
            <path d="M80 94 L118 54" />
          </g>
        </mask>
      </defs>
      <g fill="currentColor">
        <path
          mask={`url(#${maskId})`}
          d="M95 8 C 142 8 174 44 174 90 C 174 130 142 158 95 164 C 48 158 16 130 16 90 C 16 44 48 8 95 8 Z"
        />
        <path d="M86 164 L95 178 L104 164 Z" />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          d="M95 178 C 97 186 88 190 94 198"
        />
      </g>
    </svg>
  );
}

/** Square tile with the product's symbol on its accent color. */
export function ProductTile({
  product,
  size = 56,
  className = '',
}: {
  product: Product;
  size?: number;
  className?: string;
}) {
  const icon = size * 0.5;
  const inner =
    product.slug === 'komyx' ? (
      <KomyxMark style={{ width: icon * 1.1, height: icon * 1.1 }} />
    ) : product.slug === 'casa-leve' ? (
      <Home style={{ width: icon, height: icon }} strokeWidth={2.2} />
    ) : product.slug === 'arakids' ? (
      <Blocks style={{ width: icon, height: icon }} strokeWidth={2.2} />
    ) : (
      <MessageSquareText style={{ width: icon, height: icon }} strokeWidth={2.2} />
    );
  return (
    <span
      className={`inline-grid shrink-0 place-items-center text-white ${className}`}
      style={{ width: size, height: size, borderRadius: size * 0.28, background: product.color }}
      aria-hidden="true"
    >
      {inner}
    </span>
  );
}
