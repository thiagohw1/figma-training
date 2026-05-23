# Guia de Autoria — Treinamento "Figma do Zero ao Avançado"

Você está escrevendo páginas de um **treinamento exaustivo de Figma ("mega-bootcamp")**, em
**português do Brasil**, entregue como **site HTML estático**. O framework do site já existe.
Sua tarefa: escrever as páginas HTML de um módulo seguindo **exatamente** este padrão.

## Leia ANTES de escrever (use Read)
1. `D:\App\figma-training\modulos\02-intermediario\02-01-auto-layout-fundamentos.html` — **MODELO OURO**. Copie a estrutura, as classes e o nível de profundidade.
2. `D:\App\figma-training\assets\css\styles.css` — todas as classes disponíveis.
3. `D:\App\figma-training\assets\js\course-data.js` — os **slugs, títulos e caminhos exatos**. Nunca invente nomes de arquivo nem slugs.

## Regras de arquivo (navegação quebra se errar)
- Cada lição é um arquivo HTML **completo e independente**.
- `<body data-lesson="SLUG-EXATO" data-root="...">`.
  - Páginas em `modulos/**` e `projetos/**` → `data-root="../../"` e assets em `../../assets/...`.
  - Páginas em `recursos/` → `data-root="../"` e assets em `../assets/...`.
- **Não** escreva sidebar, topbar ou prev/next no HTML — o `main.js` injeta. Inclua só os contêineres vazios.
- **Não** adicione blocos `<style>`. Use apenas classes do `styles.css`. Estilo inline só dentro de `.figma-mock` e `.diagram` (como no modelo).
- No `<head>`: o mesmo `<script>` anti-flash de tema do modelo.
- Fim do `<body>`: `course-data.js` e depois `main.js` (com o caminho correto conforme a pasta).

## Esqueleto exato (páginas em modulos/** ou projetos/**)
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TÍTULO DA LIÇÃO | Figma do Zero ao Avançado</title>
  <link rel="stylesheet" href="../../assets/css/styles.css">
  <script>try{var t=localStorage.getItem('figma-course-theme');if(!t){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}</script>
</head>
<body data-lesson="SLUG-EXATO" data-root="../../">
  <a class="skip-link" href="#content">Pular para o conteúdo</a>
  <div class="layout">
    <aside id="sidebar" class="sidebar"></aside>
    <main class="content" id="content">
      <article class="lesson">
        <!-- CONTEÚDO DA LIÇÃO (ver estrutura obrigatória) -->
      </article>
      <nav id="prevnext" class="prevnext"></nav>
    </main>
  </div>
  <script src="../../assets/js/course-data.js"></script>
  <script src="../../assets/js/main.js"></script>
</body>
</html>
```
> Para `recursos/`, troque os 3 caminhos de `../../` por `../`.

## Estrutura obrigatória de cada lição (dentro de `<article class="lesson">`)
1. `<div class="lesson-eyebrow">ÍCONE Módulo X · NÍVEL · Lição N de TOTAL</div>`
2. `<h1>Título</h1>`
3. `<p class="lead">Abertura cativante (1–2 frases).</p>`
4. `<div class="lesson-meta"><span>⏱️ Leitura: ~N min</span><span>🎯 Nível: ...</span><span>🛠️ Pratique no Figma</span></div>`
5. `<div class="objectives"><h2>Ao final desta lição você será capaz de</h2><ul>...</ul></div>` (3–5 itens)
6. Várias seções `<h2>`/`<h3>` com explicação **didática e profunda** — analogias, o "porquê", contexto de uso real, comparações com web/CSS quando ajudar.
7. Pelo menos **um passo a passo** `<ol class="steps">` com `<kbd>` nos atalhos. Cada `<li>` começa com `<strong>Ação.</strong>`.
8. **2 a 4 callouts** variados: `.callout.tip`, `.info`, `.warning`, `.danger`, `.example`, `.pro`, `.note` (cada um com `<span class="callout-title">`).
9. Pelo menos **um** elemento visual onde ajudar: tabela (`.table-wrap` > `table`), diagrama SVG inline (`.diagram`, usando `var(--...)` nas cores para funcionar nos dois temas) ou mockup de UI (`.figma-mock`).
10. Uma seção **"Exemplo de uso real"**.
11. Quando houver atalhos, uma tabela **"Atalhos desta lição"** com colunas Ação / Windows / Mac (use `<kbd>`; classe `shortcut-table`).
12. Seção **"Resumo"** com bullets.
13. Um `<div class="exercise">` → `<span class="tag">✍️ Exercício</span>`, `<h3>`, passos, e `<div class="success-criteria"><strong>Critério de sucesso:</strong> ...</div>`.
14. Um `<div class="challenge">` → `<span class="tag">🏆 Desafio</span>`, `<h3>`, descrição.
15. Um `<div class="quiz">` com:
```html
<div class="quiz">
  <div class="quiz-head"><span class="tag">Quiz</span><strong>Teste seu conhecimento</strong></div>
  <div class="quiz-q" data-correct="ÍNDICE_0BASED_DA_CORRETA">
    <p class="q-text">1. Pergunta?</p>
    <ul class="quiz-options"><li>Opção A</li><li>Opção B</li><li>Opção C</li><li>Opção D</li></ul>
    <div class="quiz-explain">Explicação da resposta certa.</div>
  </div>
  <!-- 3 perguntas no total -->
  <div class="quiz-actions"><button class="btn primary quiz-check">Verificar respostas</button><span class="quiz-score"></span></div>
</div>
```
> `data-correct` é o índice **base-0** do `<li>` correto (0 = primeiro). Confira que está certo.

## Qualidade e precisão
- Profundidade de **mega-bootcamp**: exaustivo, mas claro e prático.
- Preciso para o **Figma real de 2025/2026 (UI3)**. Não invente recursos nem atalhos.
- Exemplos reais (apps mobile, sites, dashboards). Tom didático e encorajador.
- Termos da interface em inglês (Auto Layout, Frame, Components, Variants, Variables, Constraints, Dev Mode...), explicados em português.
- HTML válido; aspas e acentos corretos; nada de Lorem Ipsum.

## Entrega
Escreva **todos** os arquivos do seu módulo (ferramenta Write), cada um no caminho exato indicado.
Ao terminar, responda apenas com um resumo curto: quantos arquivos criou e qualquer observação.
