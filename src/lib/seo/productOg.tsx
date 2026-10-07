import { ImageResponse } from 'next/og';
import type { Product } from '@/lib/products';

export const OG_SIZE = { width: 1200, height: 630 };

/*
 * Share card for a product page, in the root card's layout: the product's accent instead of
 * the gold, its name and tagline in the middle, AraLabs small in the footer.
 */
export function productOgImage(product: Product) {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        background: `radial-gradient(circle at 86% 18%, ${product.color}40 0%, transparent 52%), radial-gradient(circle at 10% 92%, ${product.color}2e 0%, transparent 48%), ${product.colorSoft}`,
        color: '#1f1a14',
        fontFamily: 'sans-serif',
      }}
    >
      {/* The AraLabs triangle, large, in the product's colour. */}
      <svg
        width="300"
        height="260"
        viewBox="0 0 300 260"
        style={{ position: 'absolute', right: 80, top: 150, opacity: 0.9 }}
      >
        <polygon points="150,0 300,260 0,260" fill={product.color} />
      </svg>

      <div
        style={{
          display: 'flex',
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: 4,
          textTransform: 'uppercase',
          color: product.colorInk,
          marginBottom: 28,
        }}
      >
        {product.audience}
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 132,
          fontWeight: 700,
          letterSpacing: -4,
          lineHeight: 1,
          color: product.colorInk,
          maxWidth: 760,
        }}
      >
        {product.name}
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: 32,
          fontSize: 42,
          fontWeight: 500,
          lineHeight: 1.2,
          letterSpacing: -0.5,
          color: '#3a3024',
          maxWidth: 720,
        }}
      >
        {product.tagline}
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 56,
          left: 80,
          right: 80,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 18,
          color: '#7a6f5f',
          letterSpacing: 4,
          textTransform: 'uppercase',
          fontWeight: 600,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <svg width="30" height="28" viewBox="0 0 184 170">
            <g transform="translate(0,170) scale(0.1,-0.1)" fill="#1f1a14" stroke="none">
              <path d="M887 1509 c-20 -35 -72 -131 -116 -214 l-80 -149 71 -136 c39 -74 88 -166 110 -203 21 -38 38 -70 38 -72 0 -2 -30 -8 -67 -15 -292 -50 -549 -244 -687 -518 -15 -30 -26 -55 -24 -57 2 -1 115 0 252 3 l248 5 35 76 c19 42 82 171 140 288 78 157 111 213 127 217 11 3 69 11 127 17 88 9 124 8 214 -5 60 -9 109 -15 110 -13 6 7 -428 802 -450 826 -11 11 -19 2 -48 -50z" />
              <path d="M1276 658 c-92 -48 -216 -146 -216 -170 0 -6 33 -84 73 -174 l72 -164 243 0 c133 0 242 1 242 3 0 15 -292 553 -302 554 -7 2 -57 -21 -112 -49z" />
            </g>
          </svg>
          <span
            style={{
              color: '#1f1a14',
              letterSpacing: 2,
              textTransform: 'none',
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            AraLabs
          </span>
        </div>
        <div>aralabs.com.br</div>
      </div>
    </div>,
    { ...OG_SIZE },
  );
}
