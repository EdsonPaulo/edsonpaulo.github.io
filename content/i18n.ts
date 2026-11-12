import type { Locale } from "./types";

const en = {
  meta: {
    title: "Edson Gregório — Senior Software Engineer & Tech Lead",
    description:
      "Edson Paulo Gregório is a senior software engineer and tech lead. 6+ years designing, building and scaling web and mobile products with React, React Native, Next.js, payments and AI, for teams around the world.",
  },
  nav: { about: "About", work: "Experience", projects: "Projects", skills: "Skills", contact: "Contact", switchTo: "Ver em português", menu: "Open menu", close: "Close menu" },
  hero: {
    hello: "Hi, I'm",
    available: "Working remotely with companies and teams around the world.",
  },
  about: { title: "About" },
  work: { title: "Experience", builtHere: "What I build there" },
  projects: {
    title: "Projects",
    intro: "Products I've designed, built and launched on my own, plus client and freelance work. Most code is private, so links go straight to the live product.",
    filters: { all: "All", web: "Web", mobile: "Mobile", ai: "AI", backend: "Backend" },
    live: "Open live site",
    code: "View code",
    more: "More products and freelance work",
    archive: "Earlier work, 2019–2023",
    archiveIntro: "University and early-career projects, all open source.",
    empty: "No projects in this category yet.",
  },
  skills: { title: "Skills", core: "Core stack", education: "Education", languages: "Languages" },
  contact: {
    title: "Contact",
    intro: "Hiring for a senior or lead role, or have a product to build? Let's talk. The form opens your email app with the message ready to send, and I usually reply within a day.",
    name: "Your name",
    subject: "Subject",
    message: "Message",
    send: "Open in email app",
    whatsapp: "Message on WhatsApp",
    or: "Or reach me directly",
  },
  cv: { file: "CV (PDF)", old: "Previous CV, 2023 (PDF)", projects: "Selected products", profile: "Profile" },
  footer: { top: "Back to top" },
};

export type Dict = typeof en;

const pt: Dict = {
  meta: {
    title: "Edson Gregório — Engenheiro de Software Sénior & Tech Lead",
    description:
      "Edson Paulo Gregório é engenheiro de software sénior e tech lead. Mais de 6 anos a desenhar, construir e escalar produtos web e mobile com React, React Native, Next.js, pagamentos e IA, para equipas de todo o mundo.",
  },
  nav: { about: "Sobre", work: "Experiência", projects: "Projetos", skills: "Competências", contact: "Contato", switchTo: "View in English", menu: "Abrir menu", close: "Fechar menu" },
  hero: {
    hello: "Olá, sou o",
    available: "A trabalhar remotamente com empresas e equipas de todo o mundo.",
  },
  about: { title: "Sobre" },
  work: { title: "Experiência", builtHere: "O que construo lá" },
  projects: {
    title: "Projetos",
    intro: "Produtos que desenhei, construí e lancei por conta própria, mais trabalho para clientes e freelance. A maior parte do código é privado, por isso os links levam diretamente ao produto ao vivo.",
    filters: { all: "Todos", web: "Web", mobile: "Mobile", ai: "IA", backend: "Backend" },
    live: "Abrir site",
    code: "Ver código",
    more: "Mais produtos e trabalho freelance",
    archive: "Trabalho anterior, 2019–2023",
    archiveIntro: "Projetos da universidade e do início de carreira, todos open source.",
    empty: "Ainda não há projetos nesta categoria.",
  },
  skills: { title: "Competências", core: "Stack principal", education: "Formação", languages: "Idiomas" },
  contact: {
    title: "Contato",
    intro: "Estás a contratar para uma função sénior ou de liderança, ou tens um produto para construir? Vamos falar. O formulário abre a tua app de email com a mensagem pronta a enviar, e normalmente respondo em menos de 24 horas.",
    name: "O teu nome",
    subject: "Assunto",
    message: "Mensagem",
    send: "Abrir na app de email",
    whatsapp: "Enviar mensagem no WhatsApp",
    or: "Ou contacta-me diretamente",
  },
  cv: { file: "CV (PDF)", old: "CV anterior, 2023 (PDF)", projects: "Produtos em destaque", profile: "Perfil" },
  footer: { top: "Voltar ao topo" },
};

export const dict: Record<Locale, Dict> = { en, pt };
