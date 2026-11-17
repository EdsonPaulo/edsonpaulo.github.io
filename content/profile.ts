import type { L } from "./types";

export const profile = {
  name: "Edson Paulo Gregorio",
  shortName: "Edson Gregorio",
  role: {
    en: "Senior Software Engineer & Tech Lead, web, mobile & AI",
    pt: "Engenheiro de Software Sénior & Tech Lead, web, mobile & IA",
  } as L,
  location: { en: "Luanda, Angola", pt: "Luanda, Angola" } as L,
  email: "edsonpaulo24@gmail.com",
  phone: "+244 942 682 194",
  whatsapp: "244942682194",
  site: "https://edsonpaulo.github.io",
  socials: {
    github: "https://github.com/EdsonPaulo",
    linkedin: "https://www.linkedin.com/in/edsonpaulo1",
  },
  intro: {
    en: "I plan, architect and build web and mobile products from zero to production: requirements, architecture, code, testing and release, with payments, multi-language and AI built in. Marketplaces used daily across Europe and South America run on my work, and I ship my own AI products too.",
    pt: "Planeio, defino a arquitetura e construo produtos web e mobile do zero à produção: requisitos, arquitetura, código, testes e lançamento, com pagamentos, multi-idioma e IA de raiz. Marketplaces usados diariamente na Europa e na América do Sul correm sobre o meu trabalho, e também lanço os meus próprios produtos com IA.",
  } as L,
  /** **phrase** marks what a skimming recruiter should catch; keep it to one or two per paragraph. */
  about: [
    {
      en: "I'm a product-minded, full-stack engineer who takes products **from requirements to production** on the App Store, Play Store and the web: architecture and data modelling, implementation, automated testing and monitoring. For six years I've shipped booking marketplaces, e-commerce, delivery apps, fintech and AI products, with **scalable architecture and clean, reusable code** as the standard.",
      pt: "Sou um engenheiro full-stack com mentalidade de produto que leva produtos **dos requisitos à produção** na App Store, na Play Store e na web: arquitetura e modelação de dados, implementação, testes automatizados e monitorização. Há seis anos que lanço marketplaces de marcações, e-commerce, apps de entregas, fintech e produtos com IA, com **arquitetura escalável e código limpo e reutilizável** como padrão.",
    },
    {
      en: "I've **led teams since 2020**: frontend and mobile squads, delivery as a project manager, and today the architecture, code review and mentoring behind a marketplace used daily in Portugal and Brazil. Track record: **three production frontends built from scratch**, 4,000+ commits on apps people use every day, and **end-to-end payments on every platform**, from Apple Pay and Pix to marketplace payouts and Tap to Pay.",
      pt: "**Lidero equipas desde 2020**: squads de frontend e mobile, entregas como gestor de projeto e, hoje, a arquitetura, a revisão de código e a mentoria por trás de um marketplace usado diariamente em Portugal, Espanha e no Brasil. Resultados: **três frontends de produção criados do zero**, 4.000+ commits em apps que as pessoas usam todos os dias e **pagamentos de ponta a ponta em todas as plataformas**, de Apple Pay e Pix a pagamentos a parceiros e Tap to Pay.",
    },
    {
      en: "Beyond the day job, I **plan, build and launch my own AI products**: LLM agents, generative media and RAG, from idea to production. If you need someone who can own a product end to end, lead the people building it and still care about the last pixel, **let's talk**.",
      pt: "Para além do dia a dia, **planeio, construo e lanço os meus próprios produtos com IA**: agentes LLM, media generativa e RAG, da ideia à produção. Se precisas de alguém capaz de assumir um produto de ponta a ponta, liderar quem o constrói e ainda cuidar do último pixel, **vamos falar**.",
    },
  ] as L[],
  stats: [
    {
      value: "6+",
      label: {
        en: "years shipping production software",
        pt: "anos a lançar software em produção",
      },
    },
    {
      value: "5+",
      label: {
        en: "years leading frontend and mobile teams",
        pt: "anos a liderar equipas de frontend e mobile",
      },
    },
    {
      value: "9k+",
      label: { en: "contributions on GitHub", pt: "contribuições no GitHub" },
    },
    {
      value: "10+",
      label: {
        en: "products launched, from idea to release",
        pt: "produtos lançados, da ideia ao release",
      },
    },
    {
      value: "3",
      label: {
        en: "platforms in production: iOS, Android and web",
        pt: "plataformas em produção: iOS, Android e web",
      },
    },
  ] as { value: string; label: L }[],
  education: {
    school: {
      en: "Catholic University of Angola",
      pt: "Universidade Católica de Angola",
    } as L,
    degree: {
      en: "Bachelor’s degree in Computer Engineering, 2023",
      pt: "Licenciatura em Engenharia Informática, 2023",
    } as L,
    /** Final-year project, summarised from the thesis table of contents. */
    project: {
      en: "Final project: a B2C and B2B booking platform with predictive analytics, taken from requirements, benchmark and UML through layered architecture and build to automated E2E, performance and security testing.",
      pt: "Projeto final: plataforma de agendamentos B2C e B2B com análise preditiva, dos requisitos, benchmark e UML à arquitetura em camadas, desenvolvimento e testes automatizados E2E, de desempenho e de segurança.",
    } as L,
  },
  languages: [
    { en: "Portuguese, native", pt: "Português, nativo" },
    { en: "English, professional", pt: "Inglês, profissional" },
  ] as L[],
};
