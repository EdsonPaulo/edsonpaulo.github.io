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
    en: "I build web and mobile products from concept to production. I lead technical decisions, design the architecture, and write code. My work also includes integrating AI into products. Products I’ve helped build are used daily across Europe and South America.",
    pt: "Desenvolvo produtos web e mobile, da ideia à produção. Assumo a liderança técnica de projetos, defino a arquitetura e participo diretamente na implementação. Também trabalho na integração de IA em produtos. Produtos que ajudei a construir são usados diariamente na Europa e na América do Sul.",
  } as L,
  /** **phrase** marks what a skimming recruiter should catch; keep it to one or two per paragraph. */
  about: [
    {
      en: "I’m a **full-stack engineer** with experience across e-commerce, delivery, fintech, and booking platforms. I work on customer-facing apps and the tools businesses use to run their operations. My work spans architecture, data modelling, implementation, automated testing, and monitoring.",
      pt: "Sou **engenheiro full-stack** e já trabalhei em plataformas de comércio eletrónico, entregas, serviços financeiros e marcações. Desenvolvo aplicações para clientes e ferramentas que as empresas usam no dia a dia. O meu trabalho inclui arquitetura, modelação de dados, implementação, testes automatizados e monitorização.",
    },
    {
      en: "I guide **technical decisions** for products used daily in Portugal, Spain, and Brazil. I’ve helped bring new applications into production. I set engineering standards, review code, mentor developers, and work directly on implementation.",
      pt: "Oriento **decisões técnicas** em produtos usados diariamente em Portugal, Espanha e Brasil. Ajudei a colocar novas aplicações em produção. Defino padrões de engenharia, faço revisão de código, acompanho outros programadores e participo diretamente na implementação.",
    },
    {
      en: "I build **complex integrations for web and mobile products**, from payments that span checkout, partner payouts, and in-person transactions to AI assistants, generative media, and marketing automation. I’ve also built custom map experiences and managed production releases on the **App Store and Google Play**.",
      pt: "Desenvolvo **integrações complexas para produtos web e mobile**, desde fluxos de pagamento que ligam o checkout, as transferências para parceiros e os pagamentos presenciais até assistentes com IA, geração de conteúdos e automação de marketing. Também desenvolvo mapas personalizados e conduzo a publicação de aplicações na **App Store e no Google Play**.",
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
        pt: "produtos lançados, da ideia ao lançamento",
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
