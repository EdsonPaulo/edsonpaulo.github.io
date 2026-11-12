import type { L } from "./types";

export type Role = {
  company: string;
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
    title: { en: "Frontend Team Lead & Senior Developer", pt: "Frontend Team Lead & Developer Sénior" },
    period: { en: "Dec 2021 – now", pt: "Dez 2021 – hoje" },
    summary: {
      en: "I lead the frontend of a beauty and wellness marketplace used every day in Portugal and Brazil, and own its customer and business apps on iOS, Android and the web, from architecture to store release.",
      pt: "Lidero o frontend de um marketplace de beleza e bem-estar usado todos os dias em Portugal e no Brasil, e sou responsável pelas apps de clientes e de negócios em iOS, Android e web, da arquitetura à publicação nas lojas.",
    },
    stack: "React Native, Expo, React, Next.js, TypeScript, Node.js, Stripe",
    points: [
      {
        en: "#1 contributor of all time on both mobile apps (2,700+ commits). Took them from the first Expo release to Expo SDK 57, React Native 0.86 and React 19 without slowing the release train.",
        pt: "Maior contribuidor de sempre nas duas apps mobile (2.700+ commits). Levei-as do primeiro release Expo até ao Expo SDK 57, React Native 0.86 e React 19 sem travar o ritmo de releases.",
      },
      {
        en: "Started three production frontends from scratch: the business app (2022), the PRO back office (2023) and the new marketplace website (2025).",
        pt: "Criei três frontends de produção do zero: a app de negócios (2022), o back office PRO (2023) e o novo site do marketplace (2025).",
      },
      {
        en: "Built payments on every surface: cards, Apple Pay, Google Pay, Pix, Stripe Connect payouts for salons and in-person Tap to Pay with Stripe Terminal.",
        pt: "Implementei pagamentos em todas as plataformas: cartões, Apple Pay, Google Pay, Pix, pagamentos Stripe Connect para salões e Tap to Pay presencial com Stripe Terminal.",
      },
      {
        en: "Designed and built, alone, a WhatsApp booking assistant that books real appointments against the live calendar and hands off to a human when needed.",
        pt: "Desenhei e construí sozinho um assistente de marcações no WhatsApp que marca horários reais na agenda e passa a conversa para um humano quando é preciso.",
      },
      {
        en: "Every app ships in four languages (pt-PT, pt-BR, en, es), and the business app builds as two white-label brands from one codebase.",
        pt: "Todas as apps saem em quatro idiomas (pt-PT, pt-BR, en, es) e a app de negócios gera duas marcas white-label a partir do mesmo código.",
      },
      {
        en: "Set the architecture and conventions the team builds on; review, mentor and pair with the frontend engineers.",
        pt: "Defino a arquitetura e as convenções em que a equipa trabalha; faço revisão, mentoria e pair programming com os engenheiros frontend.",
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
        note: { en: "Calendar, bookings, clients and in-person payments for salons. Built from day one.", pt: "Agenda, marcações, clientes e pagamentos presenciais para salões. Construída desde o primeiro dia." },
        stack: "Expo, React Native, Stripe Terminal",
      },
      {
        name: "PRO web",
        note: { en: "Back office with calendars, rosters, marketing campaigns and a WhatsApp inbox. Built from day one.", pt: "Back office com agendas, escalas, campanhas de marketing e caixa de entrada WhatsApp. Construído desde o primeiro dia." },
        stack: "Next.js, MUI, React Query, Stripe Connect",
      },
      {
        name: "Marketplace website",
        note: { en: "Search, multi-cart checkout and the loyalty club, rebuilt on the App Router. Built from day one.", pt: "Pesquisa, checkout com vários carrinhos e clube de fidelização, reconstruído no App Router. Construído desde o primeiro dia." },
        stack: "Next.js App Router, next-intl, TanStack Query, Mapbox",
      },
      {
        name: "WhatsApp booking assistant",
        note: { en: "Clients pick a service and time inside WhatsApp; bookings are validated against the real calendar.", pt: "O cliente escolhe serviço e horário no WhatsApp; a marcação é validada na agenda real." },
        stack: "Node, TypeScript, Prisma, PostgreSQL, OpenAI",
      },
    ],
  },
  {
    company: "Fisgar BR",
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
    title: { en: "Project Manager", pt: "Gestor de Projeto" },
    period: { en: "May – Aug 2021", pt: "Mai – Ago 2021" },
    summary: {
      en: "Promoted to run delivery across two client products: planned and split the work, led the team rituals and owned code review.",
      pt: "Promovido para gerir a entrega de dois produtos de clientes: planeei e distribuí o trabalho, conduzi os rituais da equipa e fiquei responsável pela revisão de código.",
    },
  },
  {
    company: "Mochi Noir",
    title: { en: "Mobile Lead & Frontend Developer", pt: "Mobile Lead & Frontend Developer" },
    period: { en: "Sep 2020 – May 2021", pt: "Set 2020 – Mai 2021" },
    summary: {
      en: "Built e-commerce platforms and digital stores. Led mobile development in React Native with a team of 4+ developers, and shipped web storefronts and landing pages in React.",
      pt: "Construí plataformas de e-commerce e lojas digitais. Liderei o desenvolvimento mobile em React Native com uma equipa de 4+ programadores e lancei lojas web e landing pages em React.",
    },
    stack: "React Native, React, TypeScript, Redux, Jest",
  },
  {
    company: "Petabyte",
    title: { en: "Frontend Lead & UI Designer", pt: "Frontend Lead & UI Designer" },
    period: { en: "Feb – Sep 2020", pt: "Fev – Set 2020" },
    summary: {
      en: "Led the frontend of a mid-size project: planned it, designed the UI in Figma and split the work across the frontend team, then built the web and mobile apps.",
      pt: "Liderei o frontend de um projeto de média dimensão: planeei-o, desenhei a UI no Figma e distribuí o trabalho pela equipa de frontend, e depois construí as apps web e mobile.",
    },
    stack: "Angular, React Native, REST APIs, SCSS, Figma",
  },
];
