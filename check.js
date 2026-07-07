const fs = require("fs");
const h = fs.readFileSync("index.html", "utf8");
const m = h.match(/<link rel="icon"[^>]+>/);
if (m) {
  console.log("Favicon OK");
  const href = m[0].match(/href="([^"]+)"/)[1];
  const svg = decodeURIComponent(href.replace("data:image/svg+xml,", ""));
  console.log(svg);
}
