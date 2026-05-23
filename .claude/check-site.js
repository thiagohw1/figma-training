/* Validador do site do treinamento.
   Lê course-data.js e confere que cada lição existe e segue o padrão obrigatório.
   Uso: node .claude/check-site.js */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const code = fs.readFileSync(path.join(ROOT, "assets/js/course-data.js"), "utf8");
const sandbox = { window: {}, console };
vm.runInNewContext(code, sandbox);
const COURSE = sandbox.window.COURSE;

let problems = 0;
let checked = 0;
const missing = [];

function expectRoot(url) {
  // profundidade = nº de "/" no caminho relativo à raiz
  const depth = url.split("/").length - 1;
  return depth >= 2 ? "../../" : "../";
}

const REQUIRED = [
  ['id="sidebar"', "container da sidebar"],
  ['id="prevnext"', "container prev/next"],
  ['class="lesson-eyebrow"', "eyebrow"],
  ['class="objectives"', "objetivos"],
  ['class="quiz"', "quiz"],
  ["quiz-check", "botão verificar quiz"],
  ['class="exercise"', "exercício"],
  ['class="challenge"', "desafio"],
  ["course-data.js", "script course-data"],
  ["main.js", "script main"]
];

// Páginas de referência (Recursos) não precisam de quiz/exercício/desafio.
const BASE_REQUIRED = [
  ['id="sidebar"', "container da sidebar"],
  ['id="prevnext"', "container prev/next"],
  ["course-data.js", "script course-data"],
  ["main.js", "script main"]
];

COURSE.modules.forEach(function (m) {
  const isResource = m.id === "recursos";
  m.lessons.forEach(function (l) {
    const file = path.join(ROOT, l.url.replace(/\//g, path.sep));
    checked++;
    if (!fs.existsSync(file)) { missing.push(l.url + "  (slug " + l.slug + ")"); problems++; return; }
    const html = fs.readFileSync(file, "utf8");
    const errs = [];
    if (html.indexOf('data-lesson="' + l.slug + '"') === -1) errs.push("data-lesson != " + l.slug);
    const wantRoot = expectRoot(l.url);
    if (html.indexOf('data-root="' + wantRoot + '"') === -1) errs.push("data-root esperado " + wantRoot);
    (isResource ? BASE_REQUIRED : REQUIRED).forEach(function (r) { if (html.indexOf(r[0]) === -1) errs.push("falta " + r[1]); });
    if (!isResource) {
      const correctCount = (html.match(/data-correct=/g) || []).length;
      if (correctCount < 3) errs.push("quiz com " + correctCount + " perguntas (esperado >=3)");
    }
    if (/<style[\s>]/.test(html)) errs.push("contém bloco <style> (proibido)");
    if (errs.length) { console.log("✗ " + l.url + "\n    - " + errs.join("\n    - ")); problems += errs.length; }
  });
});

console.log("\n=== RESUMO ===");
console.log("Lições no course-data: " + checked);
console.log("Arquivos ausentes: " + missing.length);
if (missing.length) missing.forEach(function (x) { console.log("   ⨯ " + x); });
console.log("Total de problemas: " + problems);
console.log(problems === 0 && missing.length === 0 ? "✅ Tudo certo!" : "⚠️  Revisar acima.");
