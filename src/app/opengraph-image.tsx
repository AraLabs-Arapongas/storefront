import { ImageResponse } from 'next/og';

export const alt = 'AraLabs — Software próprio para problemas reais do dia a dia';
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
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          background:
            'radial-gradient(circle at 18% 22%, rgba(217,168,74,0.22) 0%, transparent 55%), radial-gradient(circle at 82% 80%, rgba(217,168,74,0.18) 0%, transparent 50%), #f5efe4',
          color: '#1f1a14',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 32,
            marginBottom: 56,
          }}
        >
          <svg width="160" height="148" viewBox="0 0 184 170">
            <g
              transform="translate(0,170) scale(0.1,-0.1)"
              fill="#1f1a14"
              stroke="none"
            >
              <path d="M887 1509 c-20 -35 -72 -131 -116 -214 l-80 -149 71 -136 c39 -74 88 -166 110 -203 21 -38 38 -70 38 -72 0 -2 -30 -8 -67 -15 -292 -50 -549 -244 -687 -518 -15 -30 -26 -55 -24 -57 2 -1 115 0 252 3 l248 5 35 76 c19 42 82 171 140 288 78 157 111 213 127 217 11 3 69 11 127 17 88 9 124 8 214 -5 60 -9 109 -15 110 -13 6 7 -428 802 -450 826 -11 11 -19 2 -48 -50z" />
              <path d="M1276 658 c-92 -48 -216 -146 -216 -170 0 -6 33 -84 73 -174 l72 -164 243 0 c133 0 242 1 242 3 0 15 -292 553 -302 554 -7 2 -57 -21 -112 -49z" />
            </g>
          </svg>
          <div
            style={{
              fontSize: 124,
              fontWeight: 700,
              letterSpacing: -3,
              color: '#1f1a14',
              lineHeight: 1,
            }}
          >
            AraLabs
          </div>
        </div>

        <div
          style={{
            fontSize: 38,
            fontWeight: 500,
            lineHeight: 1.25,
            letterSpacing: -0.5,
            color: '#3a3024',
            textAlign: 'center',
            maxWidth: 940,
          }}
        >
          Software próprio para problemas reais do dia a dia.
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
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: '#d9a84a',
              }}
            />
            Lab brasileiro de produtos digitais
          </div>
          <div>aralabs.com.br</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
