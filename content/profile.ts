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
  },
  intro: {
    en: "Senior engineer and team lead who ships web and mobile products end to end: from the first commit to the App Store, with payments, four languages and AI built in. I've done it for marketplaces used every day in Europe and South America, and for my own AI products.",
    pt: "Engenheiro sénior e team lead que lança produtos web e mobile de ponta a ponta: do primeiro commit à App Store, com pagamentos, quatro idiomas e IA de raiz. Já o fiz em marketplaces usados todos os dias na Europa e na América do Sul, e nos meus próprios produtos com IA.",
  } as L,
  /** **phrase** marks what a skimming recruiter should catch; keep it to one or two per paragraph. */
  about: [
    {
      en: "I'm a product-minded engineer who takes products **from an empty repo to the App Store and Play Store**. For six years I've shipped booking marketplaces, e-commerce, delivery apps, finance tools and AI products, always with **clean, reusable code**.",
      pt: "Sou um engenheiro com mentalidade de produto que leva produtos **de um repositório vazio até à App Store e à Play Store**. Há seis anos que lanço marketplaces de marcações, e-commerce, apps de entregas, ferramentas financeiras e produtos com IA, sempre com **código limpo e reutilizável**.",
    },
    {
      en: "I've **led teams since 2020**: frontend and mobile teams, delivery as a project manager, and today the architecture, code review and mentoring behind a marketplace used daily in Portugal and Brazil. Along the way: **three production frontends from scratch**, 4,000+ commits and **payments on every surface**, from Apple Pay and Pix to Tap to Pay.",
      pt: "**Lidero equipas desde 2020**: frontend e mobile, entregas como gestor de projeto e, hoje, a arquitetura, a revisão de código e a mentoria por trás de um marketplace usado diariamente em Portugal e no Brasil. Pelo caminho: **três frontends de produção criados do zero**, 4.000+ commits e **pagamentos em todas as plataformas**, de Apple Pay e Pix a Tap to Pay.",
    },
    {
      en: "I also build **my own AI products**, from idea to launch. If you need someone who can own a product, lead the people building it and still care about the last pixel, **let's talk**.",
      pt: "Também crio **os meus próprios produtos com IA**, da ideia ao lançamento. Se precisas de alguém capaz de assumir um produto, liderar quem o constrói e ainda cuidar do último pixel, **vamos falar**.",
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
