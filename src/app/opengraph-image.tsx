import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'AraLabs — Produtos digitais para problemas reais';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background:
            'radial-gradient(circle at 20% 20%, #2a1f38 0%, transparent 45%), radial-gradient(circle at 85% 90%, #3a2618 0%, transparent 50%), #0d0c10',
          color: '#f5f0e6',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <svg width="72" height="66" viewBox="0 0 184 170">
            <g
              transform="translate(0,170) scale(0.1,-0.1)"
              fill="#e6c58a"
              stroke="none"
            >
              <path d="M887 1509 c-20 -35 -72 -131 -116 -214 l-80 -149 71 -136 c39 -74 88 -166 110 -203 21 -38 38 -70 38 -72 0 -2 -30 -8 -67 -15 -292 -50 -549 -244 -687 -518 -15 -30 -26 -55 -24 -57 2 -1 115 0 252 3 l248 5 35 76 c19 42 82 171 140 288 78 157 111 213 127 217 11 3 69 11 127 17 88 9 124 8 214 -5 60 -9 109 -15 110 -13 6 7 -428 802 -450 826 -11 11 -19 2 -48 -50z" />
              <path d="M1276 658 c-92 -48 -216 -146 -216 -170 0 -6 33 -84 73 -174 l72 -164 243 0 c133 0 242 1 242 3 0 15 -292 553 -302 554 -7 2 -57 -21 -112 -49z" />
            </g>
          </svg>
          <div
            style={{
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: -0.5,
              color: '#f5f0e6',
            }}
          >
            AraLabs
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 18,
              textTransform: 'uppercase',
              letterSpacing: 6,
              color: '#e6c58a',
              fontWeight: 600,
            }}
          >
            — Empresa-mãe de produtos digitais
          </div>
          <div
            style={{
              fontSize: 76,
              lineHeight: 1.05,
              fontWeight: 600,
              letterSpacing: -2,
              color: '#f5f0e6',
              maxWidth: 980,
            }}
          >
            Produtos digitais para problemas reais do cotidiano.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(243, 238, 228, 0.16)',
            paddingTop: 28,
          }}
        >
          <div style={{ fontSize: 20, color: '#b9b1a3' }}>aralabs.com.br</div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 18,
              color: '#e6c58a',
              letterSpacing: 3,
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: '#d9a84a',
              }}
            />
            Arapongas · Brasil
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
