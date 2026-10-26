import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { productBySlug } from '@/lib/products';

const product = productBySlug('arafit');

export const alt = `${product.name}: o personal orienta, o aluno realiza, o Fito acompanha`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/*
 * The Arafit card in the app's light theme: the warm wash, the wordmark and the headline in Bebas,
 * the Fito waving. Red only for the brand, purple only for the Fito.
 */
export default async function OpengraphImage() {
  const dir = join(process.cwd(), 'src/app/produtos/arafit/og');
  const [bebas, fito] = await Promise.all([
    readFile(join(dir, 'BebasNeue-Regular.ttf')),
    readFile(join(dir, 'fito.png')),
  ]);
  const fitoSrc = `data:image/png;base64,${fito.toString('base64')}`;

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '64px 80px',
        background:
          'radial-gradient(circle at 84% 40%, #EDE7FE 0%, rgba(243, 238, 255, 0) 40%), linear-gradient(180deg, #FFEDE7 0%, #F4F4F6 85%)',
        color: '#121214',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <div style={{ display: 'flex', fontFamily: 'Bebas', fontSize: 64, lineHeight: 1 }}>
          ARA<span style={{ color: '#E10600' }}>FIT</span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px 16px',
            borderRadius: 999,
            background: '#F3EEFF',
            border: '2px solid #DDD0FB',
            color: '#6D28D9',
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
            <path
              d="M10 4.5Q11.71 12.29 19.5 14Q11.71 15.71 10 23.5Q8.29 15.71 0.5 14Q8.29 12.29 10 4.5Z"
              fill="#7C3AED"
            />
            <path
              d="M19.4 0.4Q20.24 3.76 23.6 4.6Q20.24 5.44 19.4 8.8Q18.56 5.44 15.2 4.6Q18.56 3.76 19.4 0.4Z"
              fill="#D946EF"
            />
          </svg>
          Com IA
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 26,
          fontFamily: 'Bebas',
          fontSize: 104,
          lineHeight: 0.95,
          maxWidth: 700,
        }}
      >
        <span>O personal orienta.</span>
        <span>O aluno realiza.</span>
        <span style={{ color: '#6D28D9' }}>O Fito acompanha.</span>
      </div>

      <div style={{ display: 'flex', gap: 14, marginTop: 34 }}>
        <div
          style={{
            display: 'flex',
            padding: '10px 18px',
            borderRadius: 18,
            background: '#E8F1FE',
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          Para o personal
        </div>
        <div
          style={{
            display: 'flex',
            padding: '10px 18px',
            borderRadius: 18,
            background: '#E6F6EC',
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          Para quem treina
        </div>
      </div>

      <img
        src={fitoSrc}
        width={400}
        height={400}
        alt=""
        style={{ position: 'absolute', right: 70, top: 110 }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 44,
          right: 80,
          display: 'flex',
          fontSize: 18,
          color: '#5F5F68',
          letterSpacing: 4,
          textTransform: 'uppercase',
          fontWeight: 600,
        }}
      >
        AraLabs · aralabs.com.br
      </div>
    </div>,
    {
      ...size,
      fonts: [{ name: 'Bebas', data: bebas, style: 'normal', weight: 400 }],
    },
  );
}
