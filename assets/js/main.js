/* =============================================================================
   MAIN.JS — Motor do site do treinamento
   -----------------------------------------------------------------------------
   Responsável por: montar a topbar e a sidebar a partir do COURSE (course-data.js),
   navegação prev/next, progresso (localStorage), tema claro/escuro, motor de
   quizzes, busca e menu mobile. Tudo funciona offline (file://), sem servidor.
   ============================================================================= */
(function () {
  "use strict";

  var PROGRESS_KEY = "figma-course-progress";
  var THEME_KEY = "figma-course-theme";
  var body = document.body;
  var ROOT = body.getAttribute("data-root") || "";
  var CURRENT = body.getAttribute("data-lesson") || "";

  /* ---------- Utilidades ---------- */
  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    if (attrs) { for (var k in attrs) { if (k === "class") n.className = attrs[k]; else n.setAttribute(k, attrs[k]); } }
    if (html != null) n.innerHTML = html;
    return n;
  }
  function url(u) { return ROOT + u; }

  function getProgress() {
    try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveProgress(p) {
    try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch (e) {}
  }
  function isDone(slug) { return !!getProgress()[slug]; }
  function setDone(slug, done) {
    var p = getProgress();
    if (done) p[slug] = true; else delete p[slug];
    saveProgress(p);
  }
  function countDone() {
    var p = getProgress(), c = 0;
    COURSE.flatLessons.forEach(function (l) {
      if (l.moduleId !== "recursos" && p[l.slug]) c++;
    });
    return c;
  }

  /* ---------- Tema ---------- */
  function currentTheme() { return document.documentElement.getAttribute("data-theme") || "light"; }
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem(THEME_KEY, t); } catch (e) {}
    var btn = document.getElementById("theme-toggle");
    if (btn) { btn.textContent = t === "dark" ? "☀️" : "🌙"; btn.setAttribute("aria-label", t === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"); }
  }
  function toggleTheme() { applyTheme(currentTheme() === "dark" ? "light" : "dark"); }

  /* ---------- Topbar ---------- */
  function buildTopbar() {
    var bar = el("header", { class: "topbar", role: "banner" });

    var menuBtn = el("button", { id: "menu-toggle", class: "icon-btn", "aria-label": "Abrir menu" }, "☰");
    menuBtn.addEventListener("click", function () { toggleSidebar(); });

    var brand = el("a", { class: "brand", href: url("index.html") },
      '<span class="logo">Fi</span><span>Figma do Zero ao Avançado<small>Treinamento UI/UX completo</small></span>');

    var spacer = el("div", { class: "spacer" });

    // Busca
    var searchWrap = el("div", { class: "search-wrap" });
    var input = el("input", { id: "search-input", type: "search", placeholder: "Buscar lição...", "aria-label": "Buscar lição", autocomplete: "off" });
    var results = el("div", { id: "search-results", class: "search-results" });
    searchWrap.appendChild(input);
    searchWrap.appendChild(results);

    // Progresso
    var prog = el("a", { class: "topbar-progress", href: url("index.html"), title: "Seu progresso" },
      '<span id="prog-text">0%</span><span class="bar"><i id="prog-bar"></i></span>');

    // Tema
    var themeBtn = el("button", { id: "theme-toggle", class: "icon-btn", "aria-label": "Alternar tema" }, "🌙");
    themeBtn.addEventListener("click", toggleTheme);

    bar.appendChild(menuBtn);
    bar.appendChild(brand);
    bar.appendChild(spacer);
    bar.appendChild(searchWrap);
    bar.appendChild(prog);
    bar.appendChild(themeBtn);
    body.insertBefore(bar, body.firstChild);

    // Backdrop do menu mobile
    var backdrop = el("div", { id: "sidebar-backdrop", class: "sidebar-backdrop" });
    backdrop.addEventListener("click", function () { toggleSidebar(false); });
    body.appendChild(backdrop);

    initSearch(input, results);
  }

  /* ---------- Sidebar ---------- */
  function buildSidebar() {
    var sb = document.getElementById("sidebar");
    if (!sb) return;
    sb.innerHTML = "";
    sb.setAttribute("aria-label", "Sumário do curso");

    sb.appendChild(el("a", { class: "nav-home", href: url("index.html") }, "🏠 Início / Visão geral"));

    var progress = getProgress();

    COURSE.modules.forEach(function (m) {
      var hasActive = m.lessons.some(function (l) { return l.slug === CURRENT; });
      var wrap = el("div", { class: "nav-module" + (hasActive ? "" : " collapsed") });

      var doneInModule = m.lessons.filter(function (l) { return progress[l.slug]; }).length;
      var btn = el("button", { type: "button", "aria-expanded": hasActive ? "true" : "false" },
        '<span class="ico">' + (m.icon || "📘") + '</span>' +
        '<span>' + m.title + '<br><span class="count">' + doneInModule + "/" + m.lessons.length + ' concluídas</span></span>' +
        '<span class="chevron">▾</span>');
      btn.addEventListener("click", function () {
        wrap.classList.toggle("collapsed");
        btn.setAttribute("aria-expanded", wrap.classList.contains("collapsed") ? "false" : "true");
      });
      wrap.appendChild(btn);

      var ul = el("ul", { class: "nav-lessons" });
      m.lessons.forEach(function (l, i) {
        var li = el("li");
        var a = el("a", { href: url(l.url) },
          '<span class="num">' + (m.id === "recursos" ? "•" : (i + 1)) + '</span>' +
          '<span class="check">✓</span>' +
          '<span>' + l.title + '</span>');
        if (l.slug === CURRENT) a.classList.add("active");
        if (progress[l.slug]) a.classList.add("done");
        li.appendChild(a);
        ul.appendChild(li);
      });
      wrap.appendChild(ul);
      sb.appendChild(wrap);
    });
  }

  function toggleSidebar(force) {
    var sb = document.getElementById("sidebar");
    var bd = document.getElementById("sidebar-backdrop");
    var open = force != null ? force : !sb.classList.contains("open");
    sb.classList.toggle("open", open);
    bd.classList.toggle("open", open);
  }

  /* ---------- Prev / Next ---------- */
  function buildPrevNext() {
    var nav = document.getElementById("prevnext");
    if (!nav || !CURRENT) return;
    var list = COURSE.flatLessons;
    var idx = list.findIndex(function (l) { return l.slug === CURRENT; });
    if (idx === -1) return;
    var prev = list[idx - 1], next = list[idx + 1];

    if (prev) nav.appendChild(el("a", { class: "prev", href: url(prev.url) }, '<small>← Anterior</small><strong>' + prev.title + "</strong>"));
    else nav.appendChild(el("a", { class: "prev disabled", href: "#" }, ""));

    if (next) nav.appendChild(el("a", { class: "next", href: url(next.url) }, '<small>Próximo →</small><strong>' + next.title + "</strong>"));
    else nav.appendChild(el("a", { class: "next", href: url("index.html") }, '<small>Fim do conteúdo →</small><strong>Voltar ao início</strong>'));
  }

  /* ---------- Botão "marcar como concluída" ---------- */
  function buildMarkComplete() {
    if (!CURRENT || CURRENT === "home") return;
    var article = document.querySelector(".lesson");
    var nav = document.getElementById("prevnext");
    if (!article || !nav) return;

    var holder = el("div", { class: "lesson-footer-actions" });
    var btn = el("button", { id: "mark-complete", class: "btn primary" });
    function render() {
      var done = isDone(CURRENT);
      btn.classList.toggle("done-state", done);
      btn.innerHTML = done ? "✓ Lição concluída — clique para desmarcar" : "Marcar lição como concluída";
    }
    btn.addEventListener("click", function () {
      setDone(CURRENT, !isDone(CURRENT));
      render();
      updateProgressUI();
      buildSidebar();
    });
    render();
    holder.appendChild(btn);
    nav.parentNode.insertBefore(holder, nav);
  }

  /* ---------- Barra de progresso (topbar + home) ---------- */
  function updateProgressUI() {
    var done = countDone();
    var total = COURSE.totalContentLessons;
    var pct = total ? Math.round((done / total) * 100) : 0;
    var t = document.getElementById("prog-text");
    var b = document.getElementById("prog-bar");
    if (t) t.textContent = pct + "%";
    if (b) b.style.width = pct + "%";

    // Home: cartões e estatística
    var homeDone = document.getElementById("home-done-count");
    if (homeDone) homeDone.textContent = done;
    var homePct = document.getElementById("home-pct");
    if (homePct) homePct.textContent = pct + "%";

    document.querySelectorAll(".module-card[data-module]").forEach(function (card) {
      var mid = card.getAttribute("data-module");
      var mod = COURSE.modules.find(function (m) { return m.id === mid; });
      if (!mod) return;
      var p = getProgress();
      var d = mod.lessons.filter(function (l) { return p[l.slug]; }).length;
      var bar = card.querySelector(".mc-bar > i");
      var lbl = card.querySelector(".mc-count");
      if (bar) bar.style.width = Math.round((d / mod.lessons.length) * 100) + "%";
      if (lbl) lbl.textContent = d + "/" + mod.lessons.length;
    });
  }

  /* ---------- Busca ---------- */
  function initSearch(input, results) {
    function close() { results.classList.remove("open"); }
    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase();
      if (q.length < 2) { close(); return; }
      var hits = COURSE.flatLessons.filter(function (l) {
        return (l.title + " " + (l.summary || "") + " " + l.moduleTitle).toLowerCase().indexOf(q) !== -1;
      }).slice(0, 12);
      results.innerHTML = "";
      if (!hits.length) { results.innerHTML = '<div class="empty">Nenhum resultado para "' + input.value + '".</div>'; }
      else hits.forEach(function (l) {
        results.appendChild(el("a", { href: url(l.url) }, l.title + "<small>" + l.moduleTitle + "</small>"));
      });
      results.classList.add("open");
    });
    input.addEventListener("focus", function () { if (input.value.trim().length >= 2) results.classList.add("open"); });
    document.addEventListener("click", function (e) {
      if (!results.contains(e.target) && e.target !== input) close();
    });
    input.addEventListener("keydown", function (e) { if (e.key === "Escape") { input.blur(); close(); } });
  }

  /* ---------- Motor de Quiz ----------
     Marcação esperada:
     <div class="quiz">
       <div class="quiz-head"><span class="tag">Quiz</span><strong>Teste seu conhecimento</strong></div>
       <div class="quiz-q" data-correct="1">
         <p class="q-text">Pergunta?</p>
         <ul class="quiz-options">
           <li>Opção A</li>
           <li>Opção B (correta, índice 1)</li>
           ...
         </ul>
         <div class="quiz-explain">Explicação da resposta.</div>
       </div>
       ... (mais .quiz-q) ...
       <div class="quiz-actions"><button class="btn primary quiz-check">Verificar respostas</button>
            <span class="quiz-score"></span></div>
     </div>
  */
  function initQuizzes() {
    document.querySelectorAll(".quiz").forEach(function (quiz) {
      var questions = Array.prototype.slice.call(quiz.querySelectorAll(".quiz-q"));
      var letters = ["A", "B", "C", "D", "E", "F"];

      questions.forEach(function (q) {
        var opts = Array.prototype.slice.call(q.querySelectorAll(".quiz-options li"));
        opts.forEach(function (li, i) {
          li.setAttribute("data-i", i);
          if (!li.querySelector(".opt-marker")) {
            var m = el("span", { class: "opt-marker" }, letters[i] || "");
            li.insertBefore(m, li.firstChild);
          }
          li.addEventListener("click", function () {
            if (q.querySelector(".quiz-options").classList.contains("answered")) return;
            opts.forEach(function (o) { o.classList.remove("selected"); });
            li.classList.add("selected");
          });
        });
      });

      var checkBtn = quiz.querySelector(".quiz-check");
      var score = quiz.querySelector(".quiz-score");
      if (!checkBtn) return;
      checkBtn.addEventListener("click", function () {
        var correct = 0;
        questions.forEach(function (q) {
          var correctIdx = parseInt(q.getAttribute("data-correct"), 10);
          var olist = q.querySelector(".quiz-options");
          olist.classList.add("answered");
          var opts = q.querySelectorAll(".quiz-options li");
          var chosen = q.querySelector(".quiz-options li.selected");
          opts.forEach(function (li) {
            var i = parseInt(li.getAttribute("data-i"), 10);
            if (i === correctIdx) li.classList.add("correct");
            else if (li.classList.contains("selected")) li.classList.add("incorrect");
          });
          if (chosen && parseInt(chosen.getAttribute("data-i"), 10) === correctIdx) correct++;
          var ex = q.querySelector(".quiz-explain");
          if (ex) ex.classList.add("show");
        });
        if (score) score.textContent = "Você acertou " + correct + " de " + questions.length + ".";
        checkBtn.textContent = "Respostas verificadas";
        checkBtn.disabled = true;
        checkBtn.classList.remove("primary");
        checkBtn.classList.add("ghost");
      });
    });
  }

  /* ---------- Atalhos de teclado do site ---------- */
  function initShortcuts() {
    document.addEventListener("keydown", function (e) {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if ((e.key === "/" ) && !e.ctrlKey && !e.metaKey) {
        var s = document.getElementById("search-input");
        if (s) { e.preventDefault(); s.focus(); }
      }
      var list = COURSE.flatLessons;
      var idx = list.findIndex(function (l) { return l.slug === CURRENT; });
      if (idx === -1) return;
      if (e.key === "ArrowRight" && e.altKey && list[idx + 1]) location.href = url(list[idx + 1].url);
      if (e.key === "ArrowLeft" && e.altKey && list[idx - 1]) location.href = url(list[idx - 1].url);
    });
  }

  /* ---------- Init ---------- */
  function init() {
    // Garante que o tema salvo esteja aplicado e o botão sincronizado.
    applyTheme(currentTheme());
    buildTopbar();
    buildSidebar();
    buildPrevNext();
    buildMarkComplete();
    initQuizzes();
    initShortcuts();
    updateProgressUI();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
