import type { L } from "./types";

export type Role = {
  company: string;
  /** company website, shown next to the name */
  url?: string;
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
    url: "https://sheerme.com",
    title: { en: "Frontend Team Lead & Senior Developer", pt: "Frontend Team Lead & Developer Sénior" },
    period: { en: "Dec 2021 – now", pt: "Dez 2021 – hoje" },
    summary: {
      en: "I **lead frontend engineering** for a beauty and wellness platform used daily in Portugal, Spain and Brazil. Customers discover and book services, while businesses manage schedules, clients and payments. I’m responsible for the web, iOS and Android applications, from architecture to release.",
      pt: "**Lidero a engenharia frontend** de uma plataforma de beleza e bem-estar usada diariamente em Portugal, Espanha e Brasil. Os clientes descobrem e marcam serviços e os negócios gerem agendas, clientes e pagamentos. Sou responsável pelas aplicações web, iOS e Android, da arquitetura ao lançamento.",
    },
    stack: "React Native, Expo, React, Next.js, TypeScript, Node.js, Stripe",
    points: [
      {
        en: "**#1 contributor of all time** on both mobile apps (2,700+ commits), upgraded through to Expo SDK 57 and React 19 without slowing releases.",
        pt: "**Maior contribuidor de sempre** nas duas apps mobile (2.700+ commits); atualizei-as até ao Expo SDK 57 e React 19 sem travar os releases.",
      },
      {
        en: "**Three production frontends from scratch**: the business app (2022), the PRO back office (2023) and the marketplace website (2025).",
        pt: "**Três frontends de produção criados do zero**: a app de negócios (2022), o back office PRO (2023) e o site do marketplace (2025).",
      },
      {
        en: "**Payments for customers and businesses**: cards, Apple Pay, Google Pay and Pix at checkout, Stripe Connect payouts for businesses, and Tap to Pay for in-person transactions.",
        pt: "**Pagamentos para clientes e negócios** com cartões, Apple Pay, Google Pay e Pix no checkout, repasses via Stripe Connect e pagamentos presenciais com Tap to Pay.",
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
        note: { en: "Discover, book and pay for services, packs, gift cards, wallet and loyalty.", pt: "Descobrir, marcar e pagar serviços, packs, cartões-presente, carteira e fidelização." },
        stack: "Expo, React Native, React Query, Zustand, Stripe",
      },
      {
        name: "PRO & Salon app",
        note: { en: "Calendar, bookings, clients and in-person payments for salons.", pt: "Agenda, marcações, clientes e pagamentos presenciais para salões." },
        stack: "Expo, React Native, Stripe Terminal",
      },
      {
        name: "PRO web",
        note: { en: "Back office with calendars, rosters, marketing campaigns and a WhatsApp inbox.", pt: "Back office com agendas, escalas, campanhas de marketing e caixa de entrada WhatsApp." },
        stack: "Next.js, MUI, React Query, Stripe Connect",
      },
      {
        name: "Marketplace website",
        note: { en: "Search, multi-cart checkout and the loyalty club, rebuilt on the App Router.", pt: "Pesquisa, checkout com vários carrinhos e clube de fidelização, reconstruído no App Router." },
        stack: "Next.js App Router, next-intl, TanStack Query, Mapbox",
      },
      {
        name: "WhatsApp booking assistant",
        note: { en: "Books real appointments inside WhatsApp against the live calendar, with hand-off to a human. **Built alone.**", pt: "Marca horários reais no WhatsApp, validados na agenda, com passagem para um humano. **Feito sozinho.**" },
        stack: "Node, TypeScript, Prisma, PostgreSQL, OpenAI",
      },
    ],
  },
  {
    company: "Fisgar BR",
    url: "https://fisgar.com.br",
    title: { en: "Frontend Developer", pt: "Frontend Developer" },
    period: { en: "Jul 2021 – Feb 2023", pt: "Jul 2021 – Fev 2023" },
    summary: {
      en: "Built and maintained web apps for a Brazilian product company, working remotely in a Scrum team alongside my other roles.",
      pt: "Desenvolvi e mantive aplicações web para uma empresa de produto brasileira, em regime remoto numa equipa Scrum, em paralelo com as minhas outras funções.",
    },
    stack: "React, TypeScript, Redux, Scrum",
  },
  {
    company: "Mochi Noir & Met-Care",
    url: "https://met-care.com",
    title: { en: "Project Manager", pt: "Gestor de Projeto" },
    period: { en: "May – Aug 2021", pt: "Mai – Ago 2021" },
    summary: {
      en: "**Promoted** to run delivery across two client products: planned and split the work, led the team rituals and owned code review.",
      pt: "**Promovido** para gerir a entrega de dois produtos de clientes: planeei e distribuí o trabalho, conduzi os rituais da equipa e fiquei responsável pela revisão de código.",
    },
  },
  {
    company: "Mochi Noir",
    title: { en: "Mobile Lead & Frontend Developer", pt: "Mobile Lead & Frontend Developer" },
    period: { en: "Sep 2020 – May 2021", pt: "Set 2020 – Mai 2021" },
    summary: {
      en: "I **led a team of 5+ developers** building React Native apps for e-commerce projects. I also shipped the web storefronts where customers shopped and landing pages in React.",
      pt: "**Liderei uma equipa de 5+ desenvolvedores** na construção de apps em React Native para projetos de e-commerce. Também lancei as lojas online e as landing pages em React.",
    },
    stack: "React Native, React, TypeScript, Redux, Jest",
  },
  {
    company: "Petabyte",
    title: { en: "Frontend Lead & UI Designer", pt: "Frontend Lead & UI Designer" },
    period: { en: "Feb – Sep 2020", pt: "Fev – Set 2020" },
    summary: {
      en: "**Led the frontend** of a mid-size project: planned it, designed the UI in Figma and split the work across the frontend team, then built the web and mobile apps.",
      pt: "**Liderei o frontend** de um projeto de média dimensão: planeei-o, desenhei a UI no Figma e distribuí o trabalho pela equipa de frontend, e depois construí as apps web e mobile.",
    },
    stack: "Angular, React Native, REST APIs, SCSS, Figma",
  },
];
