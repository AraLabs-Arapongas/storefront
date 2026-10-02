import type { CSSProperties } from 'react';
import { Home, Blocks, MessageSquareText } from 'lucide-react';
import type { Product } from '@/lib/products';

/** Komyx mark: a K whose arms are an araponga, the bird in the AraLabs A. Fills with currentColor. */
export function KomyxMark({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg
      viewBox="0 0 184 170"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g fill="currentColor" fillRule="evenodd">
        <path d="M34 14 L72 14 L72 156 L28 156 Z" />
        <path d="M72 86 L122 40 C132 30 148 24 160 30 C170 35 178 44 184 52 L164 56 C158 68 146 76 132 72 L72 128 Z M150 40 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0 Z" />
        <path d="M72 130 L102 104 C128 112 150 130 168 156 L124 156 C116 144 106 136 96 132 L72 152 Z" />
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
