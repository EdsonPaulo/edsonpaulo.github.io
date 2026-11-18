// Replace the GitHub Pages HTML with redirects after the static export.
import { readdir, writeFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const destination = "https://edsonpaulo.vercel.app";
const root = "out";

async function redirectPages(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await redirectPages(path);
    } else if (entry.name.endsWith(".html")) {
      const route = "/" + relative(root, path).split(sep).join("/").replace(/index\.html$/, "");
      const target = destination + (route === "/404.html" ? "/" : route);
      await writeFile(path, `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Edson Gregorio</title>
<link rel="canonical" href="${target}">
<script>location.replace(${JSON.stringify(destination)} + location.pathname + location.search + location.hash);</script>
<noscript><meta http-equiv="refresh" content="0;url=${target}"></noscript>
</head>
<body><a href="${target}">Continue to Edson Gregorio’s portfolio</a></body>
</html>
`);
    }
  }
}

await redirectPages(root);
