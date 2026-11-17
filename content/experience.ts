import type { L } from "./types";

export type Role = {
  company: string;
  /** Company and product links, shown next to the name. */
  urls?: string[];
  title: L;
  period: L;
  summary: L;
  stack?: string;
  points?: L[];
  products?: { name: string; note: L; stack: string }[];
};

export const experience: Role[] = [
  {
    company: "sheerME",
    urls: ["https://sheerme.com"],
    title: {
      en: "Frontend Tech Lead & Senior Developer",
      pt: "Frontend Tech Lead & Developer Sénior",
    },
    period: { en: "Dec 2021 – now", pt: "Dez 2021 – hoje" },
    summary: {
      en: "I **lead frontend engineering** for a beauty and wellness platform used daily in Portugal, Spain and Brazil. Customers discover and book services, while businesses manage schedules, clients and payments. I’m responsible for the web, iOS and Android applications, from architecture to release.",
      pt: "**Lidero a engenharia frontend** de uma plataforma de beleza e bem-estar usada diariamente em Portugal, Espanha e Brasil. Os clientes descobrem e marcam serviços e os negócios gerem agendas, clientes e pagamentos. Sou responsável pelas aplicações web, iOS e Android, da arquitetura ao lançamento.",
    },
    stack: "React Native, Expo, React, Next.js, TypeScript, Node.js, Stripe",
    points: [
      {
        en: "**Top contributor to both mobile apps**, with 2,700+ commits across the two. I upgraded them to Expo SDK 57 and React 19 while maintaining the release schedule.",
        pt: "**Principal contribuidor nas duas aplicações mobile**, com mais de 2.700 commits no total. Atualizei ambas para o Expo SDK 57 e React 19 mantendo o ritmo de publicação.",
      },
      {
        en: "**Three production frontend launches**: the business app (2022), the PRO back office (2023) and the marketplace website (2025).",
        pt: "**Três frontends lançados em produção**: a app de negócios (2022), o back office PRO (2023) e o site do marketplace (2025).",
      },
      {
        en: "**Payments for customers and businesses**: cards, Apple Pay, Google Pay and Pix at checkout, Stripe Connect payouts for businesses, and Tap to Pay for in-person transactions.",
        pt: "**Pagamentos para clientes e negócios** com cartões, Apple Pay, Google Pay e Pix no checkout, transferências para parceiros via Stripe Connect e pagamentos presenciais com Tap to Pay.",
      },
      {
        en: "**One codebase for multiple languages and brands**: the team can release localized and white-label editions of each app from the same codebase.",
        pt: "**Uma base de código para vários idiomas e marcas** permite à equipa publicar versões localizadas e white-label de cada aplicação.",
      },
      {
        en: "**Own the frontend architecture and engineering standards**; code review, mentoring and pairing that level up the whole team.",
        pt: "**Responsável pela arquitetura frontend e pelos padrões de engenharia**; revisão de código, mentoria e pair programming que fazem a equipa toda evoluir.",
      },
    ],
    products: [
      {
        name: "Customer app",
        note: {
          en: "Discover, book and pay for services, packs, gift cards, wallet and loyalty.",
          pt: "Descobrir, marcar e pagar serviços, packs, cartões-presente, carteira e fidelização.",
        },
        stack: "Expo, React Native, React Query, Zustand, Stripe",
      },
      {
        name: "PRO & Salon app",
        note: {
          en: "Calendar, bookings, clients and in-person payments for salons.",
          pt: "Agenda, marcações, clientes e pagamentos presenciais para salões.",
        },
        stack: "Expo, React Native, Stripe Terminal",
      },
      {
        name: "PRO web",
        note: {
          en: "Back office with calendars, rosters, marketing campaigns and a WhatsApp inbox.",
          pt: "Back office com agendas, escalas, campanhas de marketing e caixa de entrada WhatsApp.",
        },
        stack: "Next.js, MUI, React Query, Stripe Connect",
      },
      {
        name: "Marketplace website",
        note: {
          en: "Search, multi-cart checkout and the loyalty club, rebuilt on the App Router.",
          pt: "Pesquisa, checkout com vários carrinhos e clube de fidelização, reconstruído no App Router.",
        },
        stack: "Next.js App Router, next-intl, TanStack Query, Mapbox",
      },
      {
        name: "WhatsApp booking assistant",
        note: {
          en: "Books real appointments inside WhatsApp against the live calendar, with hand-off to a human. **Built alone.**",
          pt: "Marca horários reais no WhatsApp, validados na agenda, com passagem para um humano. **Feito sozinho.**",
        },
        stack: "Node, TypeScript, Prisma, PostgreSQL, OpenAI",
      },
    ],
  },
  {
    company: "Fisgar BR",
    urls: ["https://fisgar.com.br", "https://painel.fisgar.com.br"],
    title: { en: "Frontend Developer", pt: "Frontend Developer" },
    period: { en: "Jul 2021 – Feb 2023", pt: "Jul 2021 – Fev 2023" },
    summary: {
      en: "Developed and maintained the frontend of **Fisgar’s property sourcing dashboard** for the Brazilian real estate market. I worked remotely with a Scrum team using React, TypeScript, and Redux.",
      pt: "Desenvolvi e mantive o frontend do **painel de captação de imóveis da Fisgar** para o mercado imobiliário brasileiro. Trabalhei remotamente numa equipa Scrum com React, TypeScript e Redux.",
    },
    stack: "React, TypeScript, Redux, Scrum",
  },
  {
    company: "Mochi Labs & Met-Care",
    urls: ["https://met-care.com"],
    title: { en: "Project Manager", pt: "Gestor de Projeto" },
    period: { en: "May – Aug 2021", pt: "Mai – Ago 2021" },
    summary: {
      en: "**Promoted** to run delivery across two client products: planned and split the work, led the team rituals and owned code review.",
      pt: "**Promovido** para gerir a entrega de dois produtos de clientes: planeei e distribuí o trabalho, conduzi os rituais da equipa e fiquei responsável pela revisão de código.",
    },
  },
  {
    company: "Mochi Night",
    title: {
      en: "Mobile Lead & Frontend Developer",
      pt: "Mobile Lead & Frontend Developer",
    },
    period: { en: "Sep 2020 – May 2021", pt: "Set 2020 – Mai 2021" },
    summary: {
      en: "I **led a team of 5+ developers** building React Native apps for an on-demand drinks and snacks delivery service. I also built the web storefronts and landing pages in React.",
      pt: "**Liderei uma equipa de cinco ou mais programadores** no desenvolvimento de aplicações em React Native para um serviço de entrega de bebidas e snacks a pedido. Também desenvolvi as lojas online e as páginas de apresentação em React.",
    },
    stack: "React Native, React, TypeScript, Redux, Jest",
  },
  {
    company: "Petabyte",
    title: {
      en: "Frontend Lead & UI Designer",
      pt: "Frontend Lead & UI Designer",
    },
    period: { en: "Feb – Sep 2020", pt: "Fev – Set 2020" },
    summary: {
      en: "**Led the frontend** of a mid-size project: planned it, designed the UI in Figma and split the work across the frontend team, then built the web and mobile apps.",
      pt: "**Liderei o frontend** de um projeto de média dimensão: planeei-o, desenhei a UI no Figma e distribuí o trabalho pela equipa de frontend, e depois construí as apps web e mobile.",
    },
    stack: "Angular, React Native, REST APIs, SCSS, Figma",
  },
];
