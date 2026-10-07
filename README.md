# AraLabs — site institucional

Site da [AraLabs](https://aralabs.com.br): **Tecnologia simples para pequenos negócios.**
Next.js 16 (App Router), Tailwind 4, deploy na Vercel a partir da branch `master`.

## Estrutura

- `/` home: tagline, dois jeitos de trabalhar (produtos prontos / sob medida), destaque Komyx, por que a AraLabs, contato.
- `/produtos` + `/produtos/{komyx,casa-leve,arakids,lumo}` — a lista vem de `src/lib/products.ts` (uma fonte para header, footer, home e sitemap).
- `/sob-medida` — sistemas para terceiros: para quem, peças, três passos, FAQ.
- `/empresa` — quem somos, princípios, onde estamos, contato.
- Páginas legais de Casa Leve e Lumo em `/produtos/<produto>/{privacidade,termos,...}`.

## Rodar

```bash
npm install
npm run dev
```

`npm run lint` e `npm run build` antes de subir. Formatação com `npm run format`.

## Onde mexer

- Textos de SEO e contato: `src/lib/seo/site.ts` (`CONTACT_WHATSAPP` vazio = botões caem no e-mail).
- Produtos, cores, status e links externos: `src/lib/products.ts`.
- Marcas: `src/components/site/Logo.tsx` (AraLabs) e `src/components/site/ProductMarks.tsx` (Komyx e tiles).
- Kit de seção/título/botão: `src/components/site/ui.tsx`.
- Pendências e decisões: `docs/futuro.md`.

## IndexNow

A cada deploy de Production bem-sucedido na Vercel, `.github/workflows/indexnow.yml` avisa o IndexNow (Bing, Yandex, Seznam, Naver; o Google não usa) com todas as URLs de `/sitemap.xml`, numa única requisição.

- Chave: `public/a14800f5d76d46ea51a13cec3d1b9702.txt` (servida em `https://aralabs.com.br/<chave>.txt`). Para trocar, gere outra com `openssl rand -hex 16`, renomeie o arquivo e atualize a chave no script e no workflow.
- Rodar na mão: `node scripts/indexnow.mjs --dry-run` mostra o payload sem enviar; sem `--dry-run` envia. `SITE` e `INDEXNOW_KEY` podem ser sobrescritos por env.
- Pelo GitHub: Actions → IndexNow → Run workflow.
