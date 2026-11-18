import type { L } from "./types";

export type Tag = "web" | "mobile" | "ai" | "backend";

export type Project = {
  slug: string;
  name: string;
  year: string;
  /** product: my own product · freelance: client/org work · archive: older public repos */
  kind: "product" | "freelance" | "archive";
  pitch: L;
  stack: string[];
  tags: Tag[];
  status?: L;
  liveUrl?: string;
  extraLink?: { url: string; label: L };
  repoUrl?: string;
  /** path under /public, e.g. /projects/storyroo.jpg */
  image?: string;
  /** Included in the CV project selection. */
  featured?: boolean;
  caseStudy?: { challenge: L; role: L; decision: L; result: L };
  /** set to false to hide a project from the site */
  visible: boolean;
  /** why it is hidden by default — for your eyes only, never rendered */
  note?: string;
};

const gh = (repo: string) => `https://github.com/EdsonPaulo/${repo}`;
const wip: L = { en: "In progress", pt: "Em desenvolvimento" };
const prototype: L = { en: "Prototype", pt: "Protótipo" };

export const projects: Project[] = [
  {
    slug: "sheerme",
    name: "sheerME",
    year: "2021–",
    kind: "freelance",
    visible: true,
    pitch: {
      en: "A beauty and wellness platform for customers and businesses.",
      pt: "Uma plataforma de beleza e bem-estar para clientes e negócios.",
    },
    stack: ["React Native", "Expo", "Next.js", "Stripe Connect", "Bitrise", "AWS", "Twilio", "OpenAI GPT"],
    tags: ["web", "mobile"],
    liveUrl: "https://sheerme.com/",
    image: "/projects/sheerme.png",
    caseStudy: {
      challenge: { en: "Customers need to find and book services. Businesses need to manage schedules, clients, and payments.", pt: "Os clientes precisam de encontrar e marcar serviços. Os negócios precisam de gerir agendas, clientes e pagamentos." },
      role: { en: "I lead frontend engineering across web and mobile, from architecture and code review to release.", pt: "Lidero a engenharia frontend na web e em mobile, da arquitetura e revisão de código ao lançamento." },
      decision: { en: "We used a shared codebase to publish localized and white-label editions of each app.", pt: "Usámos uma base de código partilhada para publicar versões localizadas e white-label de cada aplicação." },
      result: { en: "The business app, PRO back office, and marketplace site went live. The platform is used daily in Portugal, Spain, and Brazil.", pt: "A aplicação para negócios, o back office PRO e o site do marketplace entraram em produção. A plataforma é usada diariamente em Portugal, Espanha e Brasil." },
    },
  },
  {
    slug: "storyroo",
    name: "Storyroo",
    year: "2026",
    kind: "product",
    featured: true,
    visible: true,
    pitch: {
      en: "Turns a child's name, age and interests into a personalised illustrated book, audiobook and song, ready to print.",
      pt: "Transforma o nome, a idade e os interesses de uma criança num livro ilustrado, audiolivro e canção personalizados, prontos a imprimir.",
    },
    stack: ["Next.js 16", "AI SDK", "OpenAI", "Anthropic", "Supabase", "QStash", "Resend", "Cloudflare"],
    tags: ["web", "ai"],
    liveUrl: "https://storyroo-app.vercel.app",
    extraLink: {
      url: "https://www.storyroo.app/songs",
      label: { en: "Explore Storyroo Songs", pt: "Explorar Storyroo Songs" },
    },
    image: "/projects/storyroo.jpg",
    caseStudy: {
      challenge: { en: "Create a personalized story from a few details about a child and make it available in print and audio.", pt: "Criar uma história personalizada a partir de alguns dados sobre a criança e disponibilizá-la em papel e áudio." },
      role: { en: "I built the product and its content generation workflow.", pt: "Desenvolvi o produto e o fluxo de geração de conteúdos." },
      decision: { en: "I combined story generation, illustrations, narration, and music in one workflow so they could use the same brief.", pt: "Reuni a geração da história, as ilustrações, a narração e a música num fluxo que usa os mesmos dados de partida." },
      result: { en: "The live product creates personalized illustrated books and audiobooks. Storyroo Songs also lets families create a song with their child’s name.", pt: "O produto cria livros ilustrados e audiolivros personalizados. No Storyroo Songs, as famílias também podem criar uma canção com o nome da criança." },
    },
  },
  {
    slug: "auravoy",
    name: "Auravoy",
    year: "2026",
    kind: "product",
    featured: true,
    visible: true,
    status: wip,
    pitch: {
      en: "An AI travel companion whose home screen changes with each stage of the trip: plan, budget with receipt scanning, keep documents and memories.",
      pt: "Um companheiro de viagem com IA cujo ecrã principal muda a cada fase da viagem: planear, orçamento com leitura de recibos, documentos e memórias.",
    },
    stack: ["Next.js 16", "React 19", "Expo", "Supabase", "TanStack Query", "Tailwind 4"],
    tags: ["web", "mobile", "ai"],
    image: "/projects/auravoy.jpg",
  },
  {
    slug: "traviro",
    name: "Traviro",
    year: "2026",
    kind: "product",
    featured: true,
    visible: false,
    note: "Hidden at your request: Auravoy is the main product in use.",
    pitch: {
      en: "Swipe through very cheap real flight deals, then let an AI agent plan the whole trip around the fare you picked.",
      pt: "Passa por voos reais muito baratos em formato swipe e deixa um agente de IA planear a viagem à volta da tarifa escolhida.",
    },
    stack: ["Next.js", "Amadeus API", "OpenAI", "Supabase", "Upstash", "Leaflet"],
    tags: ["web", "ai"],
    image: "/projects/traviro.jpg",
  },
  {
    slug: "pageryn",
    name: "Pageryn",
    year: "2026",
    kind: "product",
    featured: true,
    visible: true,
    status: wip,
    pitch: {
      en: "Splits whole books into 3–8 minute episodes with cliffhangers, to read or listen to like a series.",
      pt: "Divide livros inteiros em episódios de 3 a 8 minutos com suspense no fim, para ler ou ouvir como uma série.",
    },
    stack: ["Next.js 15", "Claude", "OpenAI TTS", "Supabase", "epub.js", "Expo"],
    tags: ["web", "mobile", "ai"],
    image: "/projects/pageryn.jpg",
  },
  {
    slug: "senvyra",
    status: { en: "Internal tool", pt: "Ferramenta interna" },
    name: "Senvyra",
    year: "2026",
    kind: "product",
    featured: true,
    visible: true,
    pitch: {
      en: "Send WhatsApp template campaigns safely: import a CSV, pick a template, test, confirm consent and track every recipient.",
      pt: "Envia campanhas WhatsApp com templates em segurança: importa um CSV, escolhe o template, testa, confirma o consentimento e acompanha cada destinatário.",
    },
    stack: ["Next.js", "Drizzle", "PostgreSQL", "Supabase", "WhatsApp Cloud API", "Twilio"],
    tags: ["web", "backend"],
  },
  {
    slug: "efinance",
    name: "eFinanceOS",
    year: "2026",
    kind: "product",
    featured: true,
    visible: true,
    status: wip,
    pitch: {
      en: "A personal finance copilot that sorts spending, spots money leaks, forecasts cash flow and lets you test a decision before making it.",
      pt: "Um copiloto de finanças pessoais que organiza gastos, encontra fugas de dinheiro, prevê o fluxo de caixa e simula decisões antes de as tomares.",
    },
    stack: ["Turborepo", "Next.js 15", "AI SDK", "pgvector", "Inngest", "FastAPI", "Stripe"],
    tags: ["web", "ai", "backend"],
  },
  {
    slug: "fila-livre",
    name: "Fila Livre",
    year: "2024–25",
    kind: "product",
    featured: true,
    visible: true,
    pitch: {
      en: "Appointment booking and queue management for service businesses, with maps and dashboards. Full stack, built solo.",
      pt: "Marcações e gestão de filas para negócios de serviços, com mapas e dashboards. Full stack, feito a solo.",
    },
    stack: ["Next.js", "PrimeReact", "Spring Boot", "Spring Security", "MySQL", "Spring AI"],
    tags: ["web", "backend"],
  },
  {
    slug: "zapvendas",
    name: "ZapVendas",
    year: "2025",
    kind: "product",
    featured: true,
    visible: true,
    pitch: {
      en: "A store builder for selling through WhatsApp, with Pix QR checkout and a sales dashboard.",
      pt: "Um criador de lojas para vender pelo WhatsApp, com checkout Pix por QR code e painel de vendas.",
    },
    stack: ["Next.js", "Supabase", "React Hook Form", "Recharts"],
    tags: ["web"],
    image: "/projects/zapvendas.jpg",
  },

  // ── More products & freelance work ───────────────────────────────────
  {
    slug: "songsforge",
    name: "SongsForge",
    year: "2025–26",
    kind: "freelance",
    visible: true,
    pitch: {
      en: "Personalised AI-generated songs, with versions for Brazil and Spanish-speaking markets. I worked on the web app as part of HT Innovation Labs.",
      pt: "Canções personalizadas geradas por IA, com versões para o Brasil e mercados de língua espanhola. Trabalhei na app web como parte da HT Innovation Labs.",
    },
    stack: ["Next.js 16", "Supabase", "OpenAI", "Stripe", "Resend"],
    tags: ["web", "ai"],
  },
  {
    slug: "phos-bot",
    name: "Phos WhatsApp assistant",
    year: "2024",
    kind: "freelance",
    visible: true,
    pitch: {
      en: "A GPT-powered WhatsApp assistant for a business, with an admin dashboard to manage conversations. Sole developer.",
      pt: "Um assistente WhatsApp com GPT para uma empresa, com painel de administração das conversas. Único programador.",
    },
    stack: ["Node.js", "OpenAI", "Twilio", "React", "TypeScript"],
    tags: ["backend", "ai"],
  },
  {
    slug: "nobiva",
    name: "No Biva",
    year: "2020–21",
    kind: "freelance",
    visible: true,
    pitch: {
      en: "Water ordering and delivery in Luanda: customer app, admin panel and API. Sole developer.",
      pt: "Encomenda e entrega de água em Luanda: app de clientes, painel de administração e API. Único programador.",
    },
    stack: ["React Native", "Node.js", "Express"],
    tags: ["mobile", "backend"],
  },
  {
    slug: "adaptive-fit",
    name: "Adaptive Fit",
    year: "2026",
    kind: "product",
    visible: true,
    status: prototype,
    pitch: {
      en: "A gym log that works offline, fits sessions to the time you have and explains your progress.",
      pt: "Um registo de treino que funciona offline, ajusta as sessões ao tempo que tens e explica a tua evolução.",
    },
    stack: ["Expo", "expo-sqlite", "RevenueCat", "Supabase", "Next.js"],
    tags: ["mobile"],
  },
  {
    slug: "atlas-fit",
    name: "Atlas Fit",
    year: "2026",
    kind: "product",
    visible: false,
    note: "Hidden at your request.",
    status: prototype,
    pitch: {
      en: "AI-generated training plans that adapt progression to performance and recovery.",
      pt: "Planos de treino gerados por IA que ajustam a progressão ao desempenho e à recuperação.",
    },
    stack: ["Turborepo", "Next.js", "AI SDK", "Drizzle", "Inngest"],
    tags: ["web", "ai"],
  },
  {
    slug: "filmoteca",
    name: "Filmoteca",
    year: "2023",
    kind: "product",
    visible: true,
    pitch: {
      en: "Browse, rate and review movies on Android and iOS, backed by a JWT-secured Flask API.",
      pt: "Explorar, avaliar e comentar filmes em Android e iOS, com uma API Flask protegida por JWT.",
    },
    stack: ["Flutter", "RxDart", "Flask", "SQLAlchemy", "PostgreSQL"],
    tags: ["mobile", "backend"],
    repoUrl: gh("filmoteca_app"),
  },
  {
    slug: "before-after",
    name: "Before & After",
    year: "2023",
    kind: "product",
    visible: false,
    note: "Hidden at your request.",
    pitch: {
      en: "Drop two photos and get a side-by-side comparison image, rendered entirely in the browser.",
      pt: "Larga duas fotos e recebe uma imagem de comparação lado a lado, gerada no próprio browser.",
    },
    stack: ["Next.js", "styled-components", "html2canvas"],
    tags: ["web"],
  },

  // ── Archive: older public repos ──────────────────────────────────────
  {
    slug: "pharmacy",
    name: "Pharmacy web app",
    year: "2022",
    kind: "archive",
    visible: true,
    pitch: { en: "Pharmacy storefront with catalogue and cart, plus a Node/PostgreSQL API.", pt: "Loja online de farmácia com catálogo e carrinho, mais uma API Node/PostgreSQL." },
    stack: ["React", "TypeScript", "Chakra UI", "Express", "Sequelize"],
    tags: ["web"],
    repoUrl: gh("pharmacy-react-app"),
  },
  {
    slug: "lp-sports",
    name: "LP Sports",
    year: "2021",
    kind: "archive",
    visible: true,
    pitch: { en: "Notifications for the sporting events you follow.", pt: "Notificações dos eventos desportivos que segues." },
    stack: ["React Native", "Expo", "TypeScript"],
    tags: ["mobile"],
    repoUrl: gh("lp-sports-app"),
  },
  {
    slug: "como-fazer",
    name: "Como Fazer?",
    year: "2021",
    kind: "archive",
    visible: true,
    pitch: { en: "How-to blog designed in Figma, with its own REST API, auth and uploads.", pt: "Blog de tutoriais desenhado no Figma, com API REST própria, autenticação e uploads." },
    stack: ["React", "TypeScript", "Express", "MongoDB", "JWT"],
    tags: ["web", "backend"],
    repoUrl: gh("como-fazer-blog-frontend"),
  },
  {
    slug: "open-map",
    name: "EPG Open Map",
    year: "2021",
    kind: "archive",
    visible: true,
    pitch: { en: "Interactive map explorer.", pt: "Explorador de mapas interativo." },
    stack: ["React", "Redux", "Material UI", "Leaflet"],
    tags: ["web"],
    repoUrl: gh("epg-open-map"),
  },
  {
    slug: "gasnobre",
    name: "Gás Nobre",
    year: "2020",
    kind: "archive",
    visible: true,
    pitch: { en: "On-demand water and gas delivery app for a client in Luanda.", pt: "App de entrega de água e gás ao domicílio para um cliente em Luanda." },
    stack: ["React Native", "Expo", "Node.js"],
    tags: ["mobile"],
    repoUrl: gh("gasnobre-app"),
  },
  {
    slug: "kussoma",
    name: "Kussoma Freight",
    year: "2020",
    kind: "archive",
    visible: true,
    pitch: { en: "Two-sided freight marketplace: one app for shippers, one for carriers.", pt: "Marketplace de fretes com duas apps: uma para expedidores, outra para transportadores." },
    stack: ["React Native", "Expo"],
    tags: ["mobile"],
    repoUrl: gh("kussoma-shipper"),
    caseStudy: {
      challenge: { en: "Connect businesses that need to ship goods with carriers looking for loads.", pt: "Ligar empresas que precisam de enviar mercadorias a transportadores à procura de cargas." },
      role: { en: "At Petabyte, I led frontend development, designed interfaces in Figma, and contributed to implementation.", pt: "Na Petabyte, liderei o desenvolvimento frontend, desenhei interfaces no Figma e participei na implementação." },
      decision: { en: "We built separate React Native apps so shippers could request freight and carriers could find loads.", pt: "Criámos aplicações separadas em React Native para os expedidores pedirem fretes e os transportadores encontrarem cargas." },
      result: { en: "The shipper app has a public repository.", pt: "O repositório da aplicação para expedidores está disponível publicamente." },
    },
  },
  {
    slug: "epg-news",
    name: "EPG News",
    year: "2020",
    kind: "archive",
    visible: true,
    pitch: { en: "Portuguese-language news reader for tech, science and sport.", pt: "Leitor de notícias em português sobre tecnologia, ciência e desporto." },
    stack: ["React Native", "Realm"],
    tags: ["mobile"],
    repoUrl: gh("epg-news-app"),
  },
  {
    slug: "epg-auth",
    name: "EPG Auth",
    year: "2020",
    kind: "archive",
    visible: true,
    pitch: { en: "React Native starter with a complete Firebase sign-in and sign-up flow.", pt: "Base React Native com fluxo completo de login e registo Firebase." },
    stack: ["Expo", "Firebase Auth", "styled-components"],
    tags: ["mobile"],
    repoUrl: gh("epg-auth-app"),
  },
  {
    slug: "books-java",
    name: "Library manager",
    year: "2021",
    kind: "archive",
    visible: true,
    pitch: { en: "Book library management web app.", pt: "Aplicação web de gestão de biblioteca." },
    stack: ["Java", "JSP", "Servlets", "PostgreSQL"],
    tags: ["web", "backend"],
    repoUrl: gh("books-management-webapp-java-jsp-servlets-postgresql"),
  },
  {
    slug: "pi-parallel",
    name: "π in parallel",
    year: "2019",
    kind: "archive",
    visible: true,
    pitch: { en: "Approximates π three ways and compares sequential, multi-process and multi-thread runs.", pt: "Aproxima π de três formas e compara execução sequencial, multiprocesso e multithread." },
    stack: ["C", "pthreads"],
    tags: ["backend"],
    repoUrl: gh("Calculo-do-numero-PI---Programacao-paralela"),
  },
  {
    slug: "minesweeper-c",
    name: "Minesweeper in C",
    year: "2019",
    kind: "archive",
    visible: true,
    pitch: { en: "Terminal Minesweeper using structs, matrices and recursion.", pt: "Campo minado no terminal com estruturas, matrizes e recursão." },
    stack: ["C"],
    tags: [],
    repoUrl: gh("Campo-MInado-em-C"),
  },
  {
    slug: "flappy",
    name: "Flappy game",
    year: "2023",
    kind: "archive",
    visible: true,
    pitch: { en: "Side-scrolling flappy game in plain HTML, CSS and JavaScript.", pt: "Jogo flappy em HTML, CSS e JavaScript puros." },
    stack: ["JavaScript", "HTML", "CSS"],
    tags: ["web"],
    repoUrl: gh("flappy-bird-game"),
  },

  // ── Hidden by default — flip `visible` to show ───────────────────────
  { slug: "wedding-album", name: "QR wedding photo drop", year: "2026", kind: "freelance", visible: false, note: "Built for a named couple (gerson-and-rosene); anonymise before showing.", pitch: { en: "Guests scan a QR code to upload photos to a shared album.", pt: "Os convidados leem um QR code para enviar fotos para um álbum partilhado." }, stack: ["Next.js", "Supabase", "Cloudflare R2"], tags: ["web"] },
  { slug: "edson-tv", name: "EPG TV", year: "2026", kind: "product", visible: false, note: "Aggregates third-party streams — copyright risk.", pitch: { en: "TV, film and series catalogue.", pt: "Catálogo de TV, filmes e séries." }, stack: ["Next.js", "TMDB API"], tags: ["web"] },
  { slug: "duel-3d", name: "Card duel 3D", year: "2026", kind: "product", visible: false, status: prototype, note: "Uses a trademarked franchise; rename before showing.", pitch: { en: "3D card duel in the browser with holographic summons.", pt: "Duelo de cartas 3D no browser com invocações holográficas." }, stack: ["React Three Fiber", "GSAP"], tags: ["web"] },
  { slug: "browser-gta", name: "Open-world browser game", year: "2026", kind: "product", visible: false, status: prototype, note: "Trademarked name; experiment only.", pitch: { en: "Single-file browser game experiment.", pt: "Experiência de jogo num único ficheiro." }, stack: ["JavaScript"], tags: ["web"] },
  { slug: "nossapagina", name: "NossaPágina", year: "2026", kind: "product", visible: false, status: prototype, note: "Spec describes it as a clone of another product.", pitch: { en: "Drag-and-drop love page builder with AI portraits.", pt: "Editor de páginas de amor com arrastar e largar e retratos por IA." }, stack: ["Next.js", "Supabase", "Replicate"], tags: ["web", "ai"] },
  { slug: "bemine", name: "BeMine Mag", year: "2026", kind: "product", visible: false, status: prototype, note: "Similar couples product; describe in your own words first.", pitch: { en: "Couples build a flipbook magazine with AI-styled photos.", pt: "Casais criam uma revista flipbook com fotos estilizadas por IA." }, stack: ["Next.js", "Supabase", "OpenAI"], tags: ["web", "ai"] },
  { slug: "eventegra", name: "Eventegra", year: "2026", kind: "product", visible: false, status: wip, note: "May be client work; check before showing.", pitch: { en: "SaaS for event planners: plan, quote, coordinate and check guests in by QR.", pt: "SaaS para organizadores de eventos: planear, orçamentar, coordenar e fazer check-in por QR." }, stack: ["Next.js", "Zustand", "dnd-kit"], tags: ["web"] },
  { slug: "luxofast", name: "Luxofast", year: "2026", kind: "product", visible: false, status: prototype, note: "Mock data only.", pitch: { en: "Car rental marketplace with trust scores.", pt: "Marketplace de aluguer de carros com pontuações de confiança." }, stack: ["Next.js", "Zustand"], tags: ["web"] },
];

export const visibleProjects = projects.filter((p) => p.visible);
