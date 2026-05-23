/* Verifica links/assets internos quebrados em todos os .html do site.
   Uso: node .claude/check-links.js */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const htmlFiles = [];

function walk(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(function (e) {
    if (e.name === ".claude" || e.name === "node_modules") return;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.name.endsWith(".html")) htmlFiles.push(full);
  });
}
walk(ROOT);

let broken = 0;
const attrRe = /(?:href|src)\s*=\s*"([^"]+)"/g;

htmlFiles.forEach(function (file) {
  const html = fs.readFileSync(file, "utf8");
  let m;
  while ((m = attrRe.exec(html)) !== null) {
    let target = m[1].trim();
    if (/^(https?:|mailto:|tel:|data:|#|javascript:)/i.test(target) || target === "") continue;
    target = target.split("#")[0].split("?")[0];
    if (!target) continue;
    const resolved = path.resolve(path.dirname(file), target);
    if (!fs.existsSync(resolved)) {
      broken++;
      console.log("✗ " + path.relative(ROOT, file) + "\n    href/src: " + m[1] + "\n    → não encontrado: " + path.relative(ROOT, resolved));
    }
  }
});

console.log("\n=== LINKS ===");
console.log("Arquivos HTML verificados: " + htmlFiles.length);
console.log("Links/assets quebrados: " + broken);
console.log(broken === 0 ? "✅ Nenhum link interno quebrado!" : "⚠️  Corrigir acima.");
