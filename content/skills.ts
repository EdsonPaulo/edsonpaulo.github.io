import type { L } from "./types";

/** Shown first, with logos: the most valued technologies I work with (icons are mapped in components/Skills.tsx). */
export const coreStack = ["TypeScript", "React", "Next.js", "React Native", "Node.js", "Java", "Spring Boot", "PostgreSQL", "Docker", "Tailwind CSS", "Stripe", "AI / LLMs"];

/**
 * Order matters: the first 3 items of each group are highlighted on the site (and the first 7 go on the CV),
 * so lead with the technologies the market values most, not just the ones in recent projects.
 */
export const skills: { group: L; items: string[] }[] = [
  { group: { en: "Languages", pt: "Linguagens" }, items: ["TypeScript", "Java", "Python", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3 / Sass", "Dart", "C"] },
  { group: { en: "Frontend", pt: "Frontend" }, items: ["React", "Next.js", "Angular", "Vue.js", "Redux & Redux Saga", "TanStack Query", "Zustand", "Context API", "React Hook Form", "Formik", "Zod", "Yup", "next-intl", "i18next"] },
  { group: { en: "UI & styling", pt: "UI & estilos" }, items: ["Tailwind CSS", "Material UI", "Framer Motion", "styled-components", "Three.js / React Three Fiber", "GSAP", "Radix UI", "Chakra UI", "Ant Design", "Emotion", "PrimeReact / PrimeFaces", "Bootstrap"] },
  { group: { en: "Mobile", pt: "Mobile" }, items: ["React Native", "Expo & EAS", "Flutter", "App Store & Play Store releases", "Expo Router", "React Navigation", "Reanimated", "Push notifications", "Android"] },
  { group: { en: "Backend & APIs", pt: "Backend & APIs" }, items: ["Spring Boot", "Node.js", "FastAPI", "Spring Security & JPA", "Express", "REST & RESTful APIs", "Prisma", "Socket.IO", "Flask", "Ruby on Rails", "Drizzle", "Sequelize", "Mongoose", "JSP & Servlets", "Inngest", "Upstash QStash"] },
  { group: { en: "Databases & storage", pt: "Bases de dados" }, items: ["PostgreSQL", "MongoDB / NoSQL", "Redis", "MySQL", "Supabase", "Firebase", "SQLite", "pgvector", "Realm", "Cloudflare R2"] },
  { group: { en: "AI", pt: "IA" }, items: ["OpenAI", "Anthropic Claude", "Embeddings & RAG", "AI agents", "Vercel AI SDK", "Spring AI", "Whisper", "Text-to-speech", "Replicate"] },
  { group: { en: "Payments", pt: "Pagamentos" }, items: ["Stripe", "Stripe Connect", "Apple Pay", "Google Pay", "Stripe Terminal (Tap to Pay)", "Pix", "RevenueCat"] },
  { group: { en: "Integrations", pt: "Integrações" }, items: ["WhatsApp Cloud API", "Twilio", "Firebase Cloud Messaging", "Google Maps", "Mapbox", "Resend", "Web Push", "Leaflet", "Amadeus", "Chart.js", "Recharts", "ApexCharts"] },
  { group: { en: "Quality & monitoring", pt: "Qualidade & monitorização" }, items: ["Jest", "Cypress", "Playwright", "Unit, integration & e2e testing", "Selenium", "Sentry", "Google Analytics", "Amplitude", "Segment", "PostHog"] },
  { group: { en: "DevOps & cloud", pt: "DevOps & cloud" }, items: ["Docker", "AWS (EC2, S3)", "GitHub Actions", "Git", "Linux", "Vercel", "Turborepo", "Monorepos", "npm / yarn / pnpm"] },
  { group: { en: "Leadership & process", pt: "Liderança & processo" }, items: ["Technical leadership", "Scrum", "Figma", "Code review", "Mentoring", "Kanban", "UI design", "Clean, reusable code", "Adobe XD", "Photoshop"] },
];
