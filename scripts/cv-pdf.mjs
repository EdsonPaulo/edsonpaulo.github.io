// Prints /en/cv/ and /pt/cv/ from the static build (out/) to public/cv/*.pdf with headless Chrome.
// Run via `npm run cv` after editing content/, then commit the PDFs. Set CHROME=/path/to/chrome if not found.
import { execFile } from "node:child_process";
import { existsSync, readFileSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join } from "node:path";
import { promisify } from "node:util";

const root = "out";
const chrome =
  process.env.CHROME ??
  ["/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", "/usr/bin/google-chrome", "/usr/bin/chromium"].find(existsSync);
if (!chrome) throw new Error("Chrome not found; set CHROME=/path/to/chrome");
if (!existsSync(join(root, "en/cv/index.html"))) throw new Error("Run `next build` first: out/en/cv/ is missing");

const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".woff2": "font/woff2", ".jpg": "image/jpeg", ".svg": "image/svg+xml" };
const server = createServer((req, res) => {
  let file = join(root, decodeURIComponent(new URL(req.url, "http://x").pathname));
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");
  if (!file.startsWith(root) || !existsSync(file)) return res.writeHead(404).end();
  res.writeHead(200, { "content-type": types[extname(file)] ?? "application/octet-stream" }).end(readFileSync(file));
});
await new Promise((r) => server.listen(0, r));
const { port } = server.address();

try {
  for (const locale of ["en", "pt"]) {
    const pdf = `public/cv/edson-gregorio-cv-${locale}.pdf`;
    // Async on purpose: a sync call would block this process's static server while Chrome loads the page.
    await promisify(execFile)(chrome, [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      "--virtual-time-budget=5000",
      `--print-to-pdf=${pdf}`,
      `http://localhost:${port}/${locale}/cv/`,
    ]);
    console.log(`✓ ${pdf} (${(statSync(pdf).size / 1024).toFixed(0)} KB)`);
  }
} finally {
  server.close();
}
