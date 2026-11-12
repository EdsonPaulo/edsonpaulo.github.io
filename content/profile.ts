import type { L } from "./types";

export const profile = {
  name: "Edson Paulo Gregório",
  shortName: "Edson Gregório",
  role: { en: "Senior Frontend Engineer & Team Lead, web & mobile", pt: "Engenheiro Frontend Sénior & Team Lead, web & mobile" } as L,
  location: { en: "Luanda, Angola", pt: "Luanda, Angola" } as L,
  email: "edsonpaulo24@gmail.com",
  phone: "+244 942 682 194",
  whatsapp: "244942682194",
  site: "https://edsonpaulo.github.io",
  socials: {
    github: "https://github.com/EdsonPaulo",
    linkedin: "https://www.linkedin.com/in/edsonpaulo1",
    instagram: "https://instagram.com/edsonpaulo24",
  },
  intro: {
    en: "Senior engineer and team lead who ships web and mobile products end to end: from the first commit to the App Store, with payments, four languages and AI built in. I've done it for marketplaces used every day in Europe and South America, and for my own AI products.",
    pt: "Engenheiro sénior e team lead que lança produtos web e mobile de ponta a ponta: do primeiro commit à App Store, com pagamentos, quatro idiomas e IA de raiz. Já o fiz em marketplaces usados todos os dias na Europa e na América do Sul, e nos meus próprios produtos com IA.",
  } as L,
  about: [
    {
      en: "I'm a product-minded engineer with an obsession for clean, organised, reusable code. For six years I've been taking products from an empty repository to the App Store and Play Store: booking marketplaces, e-commerce, delivery apps, finance tools and AI products.",
      pt: "Sou um engenheiro com mentalidade de produto e obcecado por código limpo, organizado e reutilizável. Há seis anos que levo produtos de um repositório vazio até à App Store e à Play Store: marketplaces de marcações, e-commerce, apps de entregas, ferramentas financeiras e produtos com IA.",
    },
    {
      en: "I've been leading teams since 2020. I've led frontend and mobile teams, run delivery as a project manager, and today I set the architecture, review the code and mentor the engineers building a marketplace used daily in Portugal and Brazil.",
      pt: "Lidero equipas desde 2020. Já liderei equipas de frontend e mobile, geri entregas como gestor de projeto, e hoje defino a arquitetura, reviso o código e oriento os engenheiros que constroem um marketplace usado diariamente em Portugal e no Brasil.",
    },
    {
      en: "The results speak for themselves: three production frontends started from scratch, more than 4,000 commits on apps people use every day, and payments on every surface, from cards, Apple Pay, Google Pay and Pix to marketplace payouts and Tap to Pay on the phone.",
      pt: "Os resultados falam por si: três frontends de produção criados do zero, mais de 4.000 commits em apps que as pessoas usam todos os dias, e pagamentos em todas as plataformas, de cartões, Apple Pay, Google Pay e Pix a pagamentos a parceiros de marketplace e Tap to Pay no telemóvel.",
    },
    {
      en: "I also build my own AI products, from idea to launch: personalised children's books, a travel copilot, whole books turned into audio episodes. I move across the whole stack: React, React Native and Next.js on the front; Node, Prisma, Spring Boot or Flask behind it; OpenAI and Claude when the product needs intelligence.",
      pt: "Também crio os meus próprios produtos com IA, da ideia ao lançamento: livros infantis personalizados, um copiloto de viagens, livros inteiros transformados em episódios áudio. Domino todo o stack: React, React Native e Next.js no frontend; Node, Prisma, Spring Boot ou Flask por trás; OpenAI e Claude quando o produto precisa de inteligência.",
    },
    {
      en: "If you need someone who can own a product, lead the people building it and still care about the last pixel, I'm the person to talk to.",
      pt: "Se precisas de alguém capaz de assumir um produto, liderar quem o constrói e ainda cuidar do último pixel, sou a pessoa certa.",
    },
  ] as L[],
  stats: [
    { value: "6+", label: { en: "years shipping production software", pt: "anos a lançar software em produção" } },
    { value: "5+", label: { en: "years leading frontend and mobile teams", pt: "anos a liderar equipas de frontend e mobile" } },
    { value: "9k+", label: { en: "contributions on GitHub", pt: "contribuições no GitHub" } },
    { value: "10+", label: { en: "products launched, from idea to release", pt: "produtos lançados, da ideia ao release" } },
    { value: "4", label: { en: "languages in every product: pt-PT, pt-BR, en, es", pt: "idiomas em cada produto: pt-PT, pt-BR, en, es" } },
  ] as { value: string; label: L }[],
  education: {
    school: { en: "Catholic University of Angola", pt: "Universidade Católica de Angola" } as L,
    degree: { en: "BSc in Computer Science, 2023", pt: "Licenciatura em Engenharia Informática, 2023" } as L,
  },
  languages: [
    { en: "Portuguese, native", pt: "Português, nativo" },
    { en: "English, professional", pt: "Inglês, profissional" },
  ] as L[],
};
