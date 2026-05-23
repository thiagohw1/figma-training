# 🎨 Figma do Zero ao Avançado — Treinamento Completo

Um treinamento **completo e exaustivo de Figma**, em português do Brasil, entregue como um
**site HTML navegável** que funciona 100% offline. Cobre a criação de **interfaces, layouts e
funcionalidades** para **apps mobile, desktop e web** — do absoluto zero ao nível profissional.

## ▶️ Como abrir

**Opção 1 — Mais simples (offline, sem nada instalado):**
Dê **duplo clique em `index.html`**. O site abre no seu navegador padrão e funciona por completo
(navegação, progresso, tema claro/escuro, busca e quizzes) — tudo offline.

**Opção 2 — Com servidor local (opcional):**
Se preferir servir por HTTP (ex.: para testar em outros dispositivos da rede), com o Node.js instalado:

```bash
node .claude/static-server.js
# abra http://localhost:8080
```

## 📚 O que tem dentro

- **10 módulos** + **2 projetos guiados** + **seção de Recursos**
- **79 lições** detalhadas (passo a passo, exemplos reais, diagramas e mockups)
- **225 perguntas de quiz** interativas (com correção e explicação)
- **Exercícios e desafios** ao fim de cada lição
- **Checklists, glossário e tabela completa de atalhos** (Windows + Mac)

### Trilha de aprendizado
| Nível | Módulo |
|------|--------|
| Fundamentos | 0 — Fundamentos e Boas-vindas |
| Iniciante | 1 — Ferramentas e Fundamentos Visuais |
| Intermediário | 2 — Construindo Interfaces Reais (Auto Layout, Components…) |
| Avançado | 3 — Design Systems e Variables |
| Avançado | 4 — Prototipagem e Interação |
| Projeto | 5 — App Mobile completo (**FinView**) |
| Projeto | 6 — Web App / Dashboard SaaS (**TaskFlow**) |
| Profissional | 7 — Colaboração, Handoff e Dev Mode |
| Recursos novos | 8 — Ecossistema Figma 2025/2026 (Sites, Make, Buzz, IA…) |
| Profissional | 9 — Workflow Profissional e Boas Práticas |

## ✨ Recursos do site

- **Progresso salvo** no navegador (botão "Marcar lição como concluída").
- **Tema claro/escuro** (botão 🌙/☀️) — que também é uma demonstração viva do conceito de *modes*.
- **Busca** por lição (atalho `/`).
- **Navegação** por barra lateral e botões Anterior/Próximo (atalho `Alt` + `←`/`→`).
- **Responsivo** (funciona no celular e no desktop) e pronto para impressão.

## 🗂️ Estrutura de pastas

```
figma-training/
├── index.html                 ← comece por aqui
├── assets/
│   ├── css/styles.css         ← design system do site
│   └── js/
│       ├── course-data.js     ← estrutura do curso (módulos e lições)
│       └── main.js            ← navegação, progresso, tema, quizzes, busca
├── modulos/                   ← módulos 0–4 e 7–9
├── projetos/                  ← projetos guiados (mobile e web)
├── recursos/                  ← atalhos, glossário, checklists, templates
└── .claude/                   ← guia de autoria e scripts de validação (uso interno)
```

## 🛠️ Como editar ou expandir

- **Adicionar/reordenar lições:** edite `assets/js/course-data.js` (a sidebar e o prev/next são gerados a partir dele) e crie o `.html` correspondente.
- **Padrão das páginas:** veja `.claude/AUTHORING-GUIDE.md` e a lição-modelo `modulos/02-intermediario/02-01-auto-layout-fundamentos.html`.
- **Validar tudo:** `node .claude/check-site.js` (estrutura), `node .claude/check-links.js` (links) e `node .claude/check-quiz.js` (quizzes).

## ℹ️ Observações

- O curso é **instrucional**: cada passo descreve o que fazer no seu próprio Figma. Não há arquivos
  `.fig` prontos — você aprende construindo. Basta uma conta **gratuita** do Figma.
- Conteúdo atualizado para a interface **UI3** e os recursos de **2025/2026**.
- Recursos novos do Figma evoluem rápido; nomes de menus podem mudar com o tempo.
