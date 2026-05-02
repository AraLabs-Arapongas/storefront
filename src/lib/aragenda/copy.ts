/**
 * Toda copy da landing /ara-agenda em um lugar só.
 * Facilita revisão de texto sem mexer em markup e abre porta pra A/B
 * test ou i18n no futuro.
 */

export const HERO = {
  eyebrow: 'Aragenda',
  title: {
    pre: 'Sua agenda online,',
    accent: 'do jeito do seu negócio',
    post: '.',
  },
  sub: 'Página pública, agendamento 24/7 e operação no celular — para quem vende tempo por horário.',
  ctaPrimary: 'Falar com a gente',
  ctaSecondary: 'Ver como funciona',
};

export const VERTICALS = [
  'salões de beleza',
  'barbearias',
  'esmalterias',
  'estética',
  'clínicas',
  'fisioterapia',
  'consultórios',
  'oficinas',
  'lava-jato',
  'estúdios',
];

export const PERSONAS = [
  {
    title: 'Dono solo',
    text: 'Você atende, agenda e faz tudo. Aragenda libera seu tempo do WhatsApp.',
  },
  {
    title: 'Equipe pequena (2–5)',
    text: 'Cada profissional tem sua própria agenda. Você vê tudo no painel.',
  },
  {
    title: 'Recepção dedicada',
    text: 'Telões, encaixe rápido, confirmação em um toque. Pensado pra fluxo.',
  },
  {
    title: 'Profissional autônomo',
    text: 'Dentro de um coletivo ou solo, sua agenda é sua. Cliente marca direto.',
  },
];

export const FEATURES = [
  {
    title: 'Agenda online 24/7',
    text: 'Cliente marca a qualquer hora pelo seu link próprio.',
    icon: 'calendar',
  },
  {
    title: 'PWA app-like',
    text: 'Funciona como app no celular sem baixar nada da loja.',
    icon: 'smartphone',
  },
  {
    title: 'Lembretes automáticos',
    text: 'Mensagens 24h e 2h antes pra reduzir falta. (WhatsApp em breve.)',
    icon: 'bell',
  },
  {
    title: 'Múltiplos profissionais',
    text: 'Cada um com agenda própria, regras próprias e serviços próprios.',
    icon: 'users',
  },
  {
    title: 'Personalização de marca',
    text: 'Cores, logo e nome do seu jeito. Cliente sente que é seu.',
    icon: 'palette',
  },
  {
    title: 'Painel mobile-first',
    text: 'Tudo desenhado pra rodar bem no celular do balcão.',
    icon: 'layout',
  },
];

export const HOW_IT_WORKS = [
  {
    n: '1',
    title: 'Configure em 5 minutos',
    text: 'Cadastre serviços, profissionais e horários. Onboarding guiado.',
  },
  {
    n: '2',
    title: 'Compartilhe o link ou QR',
    text: 'Coloque no WhatsApp, Instagram, balcão. Cliente acessa direto.',
  },
  {
    n: '3',
    title: 'Receba agendamentos',
    text: 'Confirme, remarque ou cancele em um toque. Tudo no celular.',
  },
];

export const DEMOS = [
  {
    name: 'Studio Pilar',
    vertical: 'Salão de beleza',
    color: '#9d4d6e',
  },
  {
    name: 'Garagem 47',
    vertical: 'Oficina mecânica',
    color: '#1a1a1a',
  },
  {
    name: 'Clínica Sereno',
    vertical: 'Estética',
    color: '#2d5447',
  },
];

export const VALUE_PROPS = [
  {
    title: 'Feito no Brasil',
    text: 'Empresa brasileira pensada pro SMB local. Não é tradução de gringo.',
  },
  {
    title: 'Suporte humano',
    text: 'Você fala com gente, não com robô. Resposta direta, sem ticket genérico.',
  },
  {
    title: 'Sem fee por agendamento',
    text: 'Mensalidade fixa. Você não paga taxa por cliente que marca.',
  },
];

export const PRICING = {
  badge: 'Pioneiros até 31/07/2026',
  badgeDetail: '60 dias grátis + selo de Pioneiro permanente no perfil',
  price: 'R$ 79',
  period: '/mês',
  priceDetail: 'inclui até 10 profissionais · +R$ 19,90 por profissional adicional',
  bullets: [
    'Até 10 profissionais inclusos',
    'Agendamentos, clientes e serviços ilimitados',
    'PWA app-like (web + celular)',
    'Lembretes automáticos',
    'Personalização de marca',
    'Suporte humano via WhatsApp',
  ],
  cta: 'Falar com a gente',
  comparison: {
    title: 'Compare',
    note: '*valores públicos consultados em mai/2026, sujeitos a mudança.',
    rows: [
      { name: 'Aragenda', price: 'R$ 79/mês', highlight: true, note: 'Sem fee por agendamento' },
      { name: 'Trinks', price: 'a partir de R$ 150/mês', highlight: false, note: '' },
      { name: 'Booksy', price: 'a partir de R$ 200/mês', highlight: false, note: '' },
    ],
  },
};

export const FAQ = [
  {
    q: 'Posso testar antes de pagar?',
    a: 'Sim. Negócios que aderirem até 31 de julho de 2026 entram como pioneiros: 60 dias grátis pra usar o produto inteiro (sem cartão) e selo de Pioneiro permanente no perfil. Depois disso, R$ 79/mês.',
  },
  {
    q: 'Preciso instalar alguma coisa?',
    a: 'Não. Aragenda é web + PWA. Funciona em qualquer celular ou computador moderno, sem download da loja de aplicativos.',
  },
  {
    q: 'Meus clientes precisam baixar app?',
    a: 'Não. Eles agendam pelo seu link próprio (ex: seu-negocio.aralabs.com.br) ou QR code. Sem fricção.',
  },
  {
    q: 'Funciona se eu já uso WhatsApp pra agendar?',
    a: 'Sim, complementa. Cliente marca pelo link, e os lembretes saem por WhatsApp também — dispatch automático em breve.',
  },
  {
    q: 'E se eu tiver mais de um profissional?',
    a: 'R$ 79/mês inclui até 10 profissionais — cada um com agenda separada, serviços e regras próprias. Acima de 10, R$ 19,90 por profissional adicional.',
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Sim, sem fidelidade. Cancele no painel a qualquer momento.',
  },
  {
    q: 'Vocês cobram taxa por agendamento?',
    a: 'Não. Só a mensalidade fixa. Cliente que marca não paga fee, e você não paga fee por cliente.',
  },
  {
    q: 'Meus dados ficam seguros?',
    a: 'Sim. LGPD, isolamento por negócio (cada conta vê só os próprios dados) e backup diário.',
  },
];

export const FINAL_CTA = {
  title: 'Pronto pra começar?',
  sub: 'Conversa rápida no WhatsApp. Sem formulário, sem demo agendada — direto com a gente.',
  cta: 'Falar agora',
};

export const META = {
  title: 'Aragenda — Agenda online para salões, barbearias, clínicas e mais',
  titleSuffix: ' | AraLabs',
  description:
    'Agenda online completa para pequenos negócios que vendem por horário. PWA, lembretes, link próprio. R$ 79/mês com até 10 profissionais. Pioneiros até 31/07/2026 ganham 60 dias grátis e selo permanente.',
};
