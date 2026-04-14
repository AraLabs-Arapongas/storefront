# Design System Inicial — Aralabs

## Princípios visuais

Este design system foi criado para transmitir:

- clareza
- sofisticação
- calma
- estrutura
- contemporaneidade
- confiança
- leveza com profundidade

### O que evitar

- preto absoluto demais
- roxo neon
- excesso de contraste duro
- interfaces chapadas demais
- visual genérico de SaaS
- excesso de efeitos decorativos

## Paleta de cores

### Neutros base

- `bg.canvas` → `#F7F3EE`
- `bg.surface` → `#FCFBF8`
- `bg.muted` → `#F3EDE4`
- `bg.strong` → `#222633`
- `bg.strong-soft` → `#2A3040`

### Texto

- `text.primary` → `#181519`
- `text.secondary` → `#59535B`
- `text.muted` → `#7C757D`
- `text.on-dark` → `#F7F4EF`
- `text.on-dark-muted` → `rgba(247, 244, 239, 0.72)`

### Roxos da marca

- `brand.purple.500` → `#7A4CFF`
- `brand.purple.400` → `#9370FF`
- `brand.purple.200` → `#DCCEFF`
- `brand.purple.100` → `#F1EBFF`

### Dourado / areia de apoio

- `brand.gold.500` → `#D7C29A`
- `brand.gold.400` → `#E6C58A`
- `brand.gold.200` → `#F3E7D2`
- `brand.gold.100` → `#FAF3E8`

### Bordas

- `border.default` → `rgba(24, 21, 25, 0.08)`
- `border.soft` → `rgba(24, 21, 25, 0.05)`
- `border.on-dark` → `rgba(255, 255, 255, 0.10)`
- `border.brand` → `rgba(122, 76, 255, 0.28)`

### Estados

- `state.success` → `#3FA56D`
- `state.warning` → `#C38A2E`
- `state.error` → `#C85C5C`
- `state.info` → `#6A74D9`

## Gradientes

- `gradient.hero.soft` → `linear-gradient(135deg, #F7F3EE 0%, #F4ECFF 45%, #F2E7D8 100%)`
- `gradient.brand.soft` → `linear-gradient(135deg, #F1EBFF 0%, #DCCEFF 100%)`
- `gradient.dark.lux` → `linear-gradient(135deg, #1D202B 0%, #2A3040 55%, #3A3352 100%)`
- `gradient.glow.purple-gold` → `radial-gradient(circle, rgba(122,76,255,0.18) 0%, rgba(215,194,154,0.10) 45%, rgba(247,243,238,0) 70%)`

## Tipografia

A tipografia deve parecer:

- editorial
- moderna
- institucional
- com personalidade
- sem cara de dashboard genérico

### Família sugerida

Primária

- Plus Jakarta Sans

### Escala tipográfica

- `display.xl` → 72px / 0.95 / 600
- `display.l` → 56px / 1.0 / 600
- `heading.xl` → 40px / 1.1 / 600
- `heading.l` → 32px / 1.15 / 600
- `heading.m` → 24px / 1.2 / 600
- `body.l` → 20px / 1.7 / 400
- `body.m` → 18px / 1.7 / 400
- `body.s` → 16px / 1.65 / 400
- `label` → 12px / 1.4 / 600 / 0.28em / uppercase

## Espaçamento

Usar escala de 4px.

- `space.1` → 4px
- `space.2` → 8px
- `space.3` → 12px
- `space.4` → 16px
- `space.5` → 20px
- `space.6` → 24px
- `space.8` → 32px
- `space.10` → 40px
- `space.12` → 48px
- `space.14` → 56px
- `space.16` → 64px
- `space.20` → 80px
- `space.24` → 96px
- `space.28` → 112px
- `space.32` → 128px

### Aplicação prática

- padding interno de card grande: 32px
- padding de section: 96px desktop / 64px tablet / 48px mobile
- gap entre cards: 20px ou 24px
- gap entre blocos grandes: 64px a 96px

## Raio de borda

A direção visual pede cantos suaves, premium, contemporâneos.

- `radius.sm` → 12px
- `radius.md` → 16px
- `radius.lg` → 24px
- `radius.xl` → 32px
- `radius.pill` → 999px

### Aplicação

- botões: 999px
- cards pequenos: 24px
- painéis grandes: 32px
- inputs: 16px

## Sombras

As sombras devem ser suaves, profundas e elegantes. Nada de drop shadow agressiva.

- `shadow.soft` → 0 8px 24px rgba(32, 24, 48, 0.06)
- `shadow.medium` → 0 18px 40px rgba(32, 24, 48, 0.10)
- `shadow.large` → 0 30px 80px rgba(32, 24, 48, 0.16)
- `shadow.brand` → 0 12px 40px rgba(122, 76, 255, 0.18)

## Containers e layout

- `container.max` → 1280px
- `container.content` → 1200px
- `container.narrow` → 880px

### Grid

- usar grid de 12 colunas
- gap horizontal desktop: 24px
- gap vertical entre seções: 96px+

### Breakpoints sugeridos

- `sm` → 640px
- `md` → 768px
- `lg` → 1024px
- `xl` → 1280px
- `2xl` → 1440px

## Botões

### Botão primário

- fundo: #222633
- texto: #FFFFFF
- hover: #2A3040
- radius: 999px
- padding: 14px 24px
- peso: 600

### Botão secundário

- fundo: rgba(255,255,255,0.72)
- texto: #1F2230
- borda: rgba(24,21,25,0.08)
- hover: fundo mais branco e borda com roxo suave

### Botão brand

- fundo: #7A4CFF
- texto: #FFFFFF
- hover: #6B3FFF

### Botão gold

- fundo: #D7C29A
- texto: #22190D
- hover: #CDB586

## Cards

### Card padrão

- fundo: #FCFBF8
- borda: rgba(24, 21, 25, 0.06)
- sombra: `shadow.soft`
- radius: 24px
- padding: 24px

### Card premium

- fundo: rgba(255,255,255,0.78)
- backdrop blur opcional
- borda suave
- sombra média
- radius: 32px

### Card dark

- fundo: #222633
- texto: branco
- borda: rgba(255,255,255,0.08)
- radius: 32px

## Regras de consistência

### Sempre fazer

- usar fundo quente, não branco duro
- usar preto substituído por dark blue-charcoal
- usar roxo como acento, não como overdose
- usar dourado/areia para sofisticação
- manter bastante respiro
- usar tipografia com hierarquia forte

### Evitar

- contrastes agressivos demais
- excesso de roxo em áreas grandes
- cinza frio demais
- cards muito quadrados
- sombras pesadas
- layout chapado
- excesso de bordas visíveis

## Direção final recomendada

Aralabs deve parecer uma empresa de produtos digitais premium, clara e contemporânea, com base quente, dark suave, roxo elegante e dourado discreto, equilibrando sofisticação institucional com leveza visual.
