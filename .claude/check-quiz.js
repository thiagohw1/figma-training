/* Verifica que cada pergunta de quiz tem data-correct válido (índice dentro do nº de opções).
   Uso: node .claude/check-quiz.js */
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

let problems = 0, totalQ = 0;
const qBlockRe = /<div class="quiz-q"[^>]*data-correct="(\d+)"[^>]*>([\s\S]*?)(?=<div class="quiz-q"|<div class="quiz-actions")/g;

htmlFiles.forEach(function (file) {
  const html = fs.readFileSync(file, "utf8");
  let m;
  while ((m = qBlockRe.exec(html)) !== null) {
    totalQ++;
    const correct = parseInt(m[1], 10);
    const block = m[2];
    const optsMatch = block.match(/<li[\s>]/g) || [];
    const n = optsMatch.length;
    if (n < 2) { console.log("✗ " + path.relative(ROOT, file) + " — pergunta com " + n + " opções"); problems++; }
    else if (correct < 0 || correct >= n) {
      console.log("✗ " + path.relative(ROOT, file) + " — data-correct=" + correct + " fora do intervalo (0.." + (n - 1) + ")");
      problems++;
    }
  }
});

console.log("\n=== QUIZZES ===");
console.log("Perguntas verificadas: " + totalQ);
console.log("Problemas: " + problems);
console.log(problems === 0 ? "✅ Todos os data-correct são válidos!" : "⚠️  Corrigir acima.");
