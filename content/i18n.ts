import type { Locale } from "./types";

const en = {
  meta: {
    title: "Edson Gregorio — Senior Software Engineer & Tech Lead",
    description:
      "Edson Paulo Gregorio is a senior software engineer and tech lead. He builds web and mobile products, guides technical decisions, and integrates AI into products.",
  },
  nav: {
    about: "About",
    work: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    switchTo: "Ver em português",
    menu: "Open menu",
    close: "Close menu",
  },
  hero: {
    hello: "Hi, I'm",
    available: "Working remotely with companies and teams around the world.",
  },
  about: { title: "About" },
  work: { title: "Experience", builtHere: "What I build there" },
  projects: {
    title: "Projects",
    intro:
      "A selection of products, client work, and prototypes. Open the live sites or public repositories where available.",
    cases: "Selected case studies",
    enlarge: "Enlarge image",
    caseLabels: { challenge: "Challenge", role: "My role", decision: "Technical decision", result: "What shipped" },
    filters: {
      all: "All",
      web: "Web",
      mobile: "Mobile",
      ai: "AI",
      backend: "Backend",
    },
    live: "Open live site",
    code: "View code",
    more: "Project gallery",
    archive: "Earlier work, 2019–2023",
    archiveIntro: "University and early-career projects, all open source.",
    empty: "No projects in this category yet.",
  },
  skills: {
    title: "Skills",
    core: "Core stack",
    education: "Education",
    languages: "Languages",
  },
  contact: {
    title: "Contact",
    intro:
      "Hiring for a senior or lead role, or have a product to build? Let's talk. The form opens your email app with the message ready to send, and I usually reply within a day.",
    name: "Your name",
    subject: "Subject",
    message: "Message",
    send: "Open in email app",
    whatsapp: "Message on WhatsApp",
    or: "Or reach me directly",
  },
  cv: {
    file: "CV (PDF)",
    old: "Previous CV, 2023 (PDF)",
    projects: "Selected products",
    profile: "Profile",
  },
  footer: { top: "Back to top" },
};

export type Dict = typeof en;

const pt: Dict = {
  meta: {
    title: "Edson Gregorio — Engenheiro de Software Sénior & Tech Lead",
    description:
      "Edson Paulo Gregorio é engenheiro de software sénior e tech lead. Desenvolve produtos web e mobile, orienta decisões técnicas e integra IA em produtos.",
  },
  nav: {
    about: "Sobre",
    work: "Experiência",
    projects: "Projetos",
    skills: "Competências",
    contact: "Contato",
    switchTo: "View in English",
    menu: "Abrir menu",
    close: "Fechar menu",
  },
  hero: {
    hello: "Olá, sou o",
    available:
      "A trabalhar remotamente com empresas e equipas de todo o mundo.",
  },
  about: { title: "Sobre" },
  work: { title: "Experiência", builtHere: "O que construo lá" },
  projects: {
    title: "Projetos",
    intro:
      "Uma seleção de produtos, trabalhos para clientes e protótipos, com links para os sites ou repositórios públicos quando disponíveis.",
    cases: "Casos em destaque",
    enlarge: "Ampliar imagem",
    caseLabels: { challenge: "Desafio", role: "O meu papel", decision: "Decisão técnica", result: "Resultado" },
    filters: {
      all: "Todos",
      web: "Web",
      mobile: "Mobile",
      ai: "IA",
      backend: "Backend",
    },
    live: "Abrir site",
    code: "Ver código",
    more: "Galeria de projetos",
    archive: "Trabalho anterior, 2019–2023",
    archiveIntro:
      "Projetos da universidade e do início de carreira, todos open source.",
    empty: "Ainda não há projetos nesta categoria.",
  },
  skills: {
    title: "Competências",
    core: "Stack principal",
    education: "Formação",
    languages: "Idiomas",
  },
  contact: {
    title: "Contato",
    intro:
      "Estás a contratar para uma função sénior ou de liderança, ou tens um produto para construir? Vamos falar. O formulário abre a tua app de email com a mensagem pronta a enviar, e normalmente respondo em menos de 24 horas.",
    name: "O teu nome",
    subject: "Assunto",
    message: "Mensagem",
    send: "Abrir na app de email",
    whatsapp: "Enviar mensagem no WhatsApp",
    or: "Ou contacta-me diretamente",
  },
  cv: {
    file: "CV (PDF)",
    old: "CV anterior, 2023 (PDF)",
    projects: "Produtos em destaque",
    profile: "Perfil",
  },
  footer: { top: "Voltar ao topo" },
};

export const dict: Record<Locale, Dict> = { en, pt };
