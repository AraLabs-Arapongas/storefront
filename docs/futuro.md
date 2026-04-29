# Futuro do aralabs-storefront

> Site institucional + admin AraLabs. Doc de pensamento de produto:
> decisões adiadas, backlog priorizado, tech debt.
>
> **Não confundir com:**
> - `docs/superpowers/plans/` — planos executáveis.
> - `docs/superpowers/specs/` — design técnico de feature.

---

## Tech debt

- **SEO local pra Arapongas/PR.**
  Site não aparece em buscas tipo "software em arapongas",
  "programas em arapongas", "aplicativos em arapongas". Três causas
  sobrepostas:
  1. **Sem Google Business Profile.** Buscas com cidade disparam
     Map Pack antes de qualquer orgânico — sem GBP, fora da primeira
     tela por design. Cadastrar com categoria "Empresa de software" /
     "Desenvolvedora de software", endereço Rua Guarauna 288 - Jardim
     Primavera, Arapongas/PR, telefone, horário.
  2. **Sitemap não submetido no Google Search Console** (verificar).
     Sem submissão, indexação depende de discovery passivo — mais lento.
  3. **Conteúdo não menciona Arapongas em copy visível.** Endereço só
     aparece em JSON-LD (metadado). Adicionar 2-3 menções naturais em
     `/empresa` e home: "lab brasileiro sediado em Arapongas/PR", etc.
     Sem keyword stuffing — só presença natural.

  **Ordem de execução quando virar prioridade:**
  (1) GBP — 1 hora, grátis, maior impacto.
  (2) GSC + sitemap submission + monitoring.
  (3) Copy local em `/empresa` + home.
  (4) Backlinks locais (Acian, portais regionais) — longo prazo.

---

## Backlog priorizado

_(Vazio por enquanto — popular conforme aparecer.)_

---

## Ideias em aberto

_(Vazio.)_

---

## Não vamos fazer

_(Vazio.)_
