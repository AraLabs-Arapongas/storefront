import { ImageResponse } from 'next/og';

export const alt = 'Komyx, o sistema para buffets da AraLabs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const INK = '#c81e55';
const PINK = '#e8356d';
const BLUSH = '#ffd3e1';

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px',
        background: `radial-gradient(circle at 82% 18%, rgba(255,255,255,0.22) 0%, transparent 50%), radial-gradient(circle at 12% 88%, ${PINK} 0%, transparent 55%), ${INK}`,
        color: '#ffffff',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 32, marginBottom: 48 }}>
        {/* Komyx balloon: the K is drawn in the background colour instead of masked out. */}
        <svg width="140" height="148" viewBox="0 0 190 200">
          <path
            fill="#ffffff"
            d="M95 8 C 142 8 174 44 174 90 C 174 130 142 158 95 164 C 48 158 16 130 16 90 C 16 44 48 8 95 8 Z"
          />
          <path fill="#ffffff" d="M86 164 L95 178 L104 164 Z" />
          <path
            fill="none"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            d="M95 178 C 97 186 88 190 94 198"
          />
          <g fill="none" stroke={INK} strokeWidth="26" strokeLinecap="round" strokeLinejoin="round">
            <path d="M68 50 V128" />
            <path d="M80 94 L122 128" />
            <path d="M80 94 L118 54" />
          </g>
        </svg>
        <div style={{ fontSize: 132, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>
          Komyx
        </div>
      </div>

      <div
        style={{
          fontSize: 48,
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: -1,
          color: BLUSH,
          textAlign: 'center',
          maxWidth: 940,
        }}
      >
        Sistema para buffets
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
          color: 'rgba(255,255,255,0.8)',
          letterSpacing: 4,
          textTransform: 'uppercase',
          fontWeight: 600,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: BLUSH }} />
          Um produto AraLabs
        </div>
        <div>komyx.com.br</div>
      </div>
    </div>,
    { ...size },
  );
}
