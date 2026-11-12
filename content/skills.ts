import type { L } from "./types";

/** Shown first, with logos, as the stack I'm strongest in (icons are mapped in components/Skills.tsx). */
export const coreStack = ["TypeScript", "React", "Next.js", "React Native", "Expo", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS", "Stripe", "AI / LLMs", "Figma"];

/** First items in each group are the ones I use most; keep that order when editing. */
export const skills: { group: L; items: string[] }[] = [
  { group: { en: "Languages", pt: "Linguagens" }, items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3 / Sass", "Java", "Python", "Dart", "SQL", "C"] },
  { group: { en: "Frontend", pt: "Frontend" }, items: ["React", "Next.js", "Angular", "Vue.js", "Redux & Redux Saga", "TanStack Query", "Zustand", "Context API", "React Hook Form", "Formik", "Zod", "Yup", "next-intl", "i18next"] },
  { group: { en: "UI & styling", pt: "UI & estilos" }, items: ["Tailwind CSS", "styled-components", "Emotion", "Material UI", "Chakra UI", "Ant Design", "PrimeReact / PrimeFaces", "Bootstrap", "Radix UI", "Framer Motion", "GSAP", "Three.js / React Three Fiber"] },
  { group: { en: "Mobile", pt: "Mobile" }, items: ["React Native", "Expo & EAS", "Expo Router", "React Navigation", "Reanimated", "Push notifications", "App Store & Play Store releases", "Flutter", "Android"] },
  { group: { en: "Backend & APIs", pt: "Backend & APIs" }, items: ["Node.js", "Express", "REST & RESTful APIs", "Socket.IO", "Prisma", "Drizzle", "Sequelize", "Mongoose", "Spring Boot", "Spring Security & JPA", "Flask", "FastAPI", "Ruby on Rails", "JSP & Servlets", "Inngest", "Upstash QStash"] },
  { group: { en: "Databases & storage", pt: "Bases de dados" }, items: ["PostgreSQL", "Supabase", "MySQL", "MongoDB / NoSQL", "Redis", "SQLite", "pgvector", "Firebase", "Realm", "AWS (EC2, S3)", "Cloudflare R2"] },
  { group: { en: "AI", pt: "IA" }, items: ["OpenAI", "Anthropic Claude", "Vercel AI SDK", "Spring AI", "Replicate", "Whisper", "Text-to-speech", "Embeddings & RAG", "AI agents"] },
  { group: { en: "Payments", pt: "Pagamentos" }, items: ["Stripe", "Stripe Connect", "Stripe Terminal (Tap to Pay)", "Apple Pay", "Google Pay", "Pix", "RevenueCat"] },
  { group: { en: "Integrations", pt: "Integrações" }, items: ["WhatsApp Cloud API", "Twilio", "Resend", "Web Push", "Firebase Cloud Messaging", "Mapbox", "Google Maps", "Leaflet", "Amadeus", "Chart.js", "Recharts", "ApexCharts"] },
  { group: { en: "Quality & monitoring", pt: "Qualidade & monitorização" }, items: ["Unit, integration & e2e testing", "Jest", "Cypress", "Playwright", "Selenium", "Sentry", "Amplitude", "Segment", "Google Analytics", "PostHog"] },
  { group: { en: "DevOps & tools", pt: "DevOps & ferramentas" }, items: ["Git", "GitHub", "GitHub Actions", "Docker", "Linux", "Vercel", "Turborepo", "Monorepos", "npm / yarn / pnpm"] },
  { group: { en: "Design & process", pt: "Design & processo" }, items: ["Figma", "Adobe XD", "Photoshop", "UI design", "Scrum", "Kanban", "Code review", "Mentoring", "Technical leadership", "Clean, reusable code"] },
];
