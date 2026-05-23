/* =============================================================================
   COURSE DATA — Estrutura completa do treinamento "Figma do Zero ao Avançado"
   -----------------------------------------------------------------------------
   Este arquivo é a "fonte da verdade" da navegação. O main.js lê estes dados
   para montar a sidebar, o prev/next, o progresso e a busca.

   Cada lição tem:
     - slug:    identificador único (igual ao data-lesson da página)
     - title:   título exibido
     - url:     caminho a partir da RAIZ do site (o main.js prefixa com data-root)
     - summary: descrição curta (usada na busca e nos cards)
   ============================================================================= */

const COURSE = {
  title: "Figma do Zero ao Avançado",
  subtitle: "Treinamento completo de UI/UX para apps mobile, desktop e web",
  modules: [
    {
      id: "m0",
      title: "Módulo 0 — Fundamentos e Boas-vindas",
      icon: "🚀",
      goal: "Entender o que é o Figma, preparar o ambiente e dominar a interface UI3.",
      lessons: [
        { slug: "00-01-como-usar", title: "Como usar este treinamento + roadmap", url: "modulos/00-fundamentos/00-01-como-usar.html", summary: "Como o curso funciona, trilha de aprendizado e como aproveitar ao máximo." },
        { slug: "00-02-o-que-e-figma", title: "O que é o Figma e por que dominá-lo", url: "modulos/00-fundamentos/00-02-o-que-e-figma.html", summary: "O que é o Figma, casos de uso e comparação com outras ferramentas." },
        { slug: "00-03-conta-instalacao", title: "Conta, planos e instalação", url: "modulos/00-fundamentos/00-03-conta-instalacao.html", summary: "Criar conta, escolher plano, Desktop vs navegador e configuração inicial." },
        { slug: "00-04-fundamentos-ux-ui", title: "Fundamentos de UX/UI design", url: "modulos/00-fundamentos/00-04-fundamentos-ux-ui.html", summary: "Conceitos essenciais de UX e UI antes de começar a desenhar." },
        { slug: "00-05-tour-interface-ui3", title: "Tour completo pela interface (UI3)", url: "modulos/00-fundamentos/00-05-tour-interface-ui3.html", summary: "Toolbar, painéis, canvas e a interface UI3 de 2025/2026." },
        { slug: "00-06-arquivos-paginas-teams", title: "Arquivos, páginas, projetos e teams", url: "modulos/00-fundamentos/00-06-arquivos-paginas-teams.html", summary: "Organização do trabalho: drafts, projetos, páginas e times." }
      ]
    },
    {
      id: "m1",
      title: "Módulo 1 — Iniciante: Ferramentas e Fundamentos Visuais",
      icon: "🎨",
      goal: "Dominar as ferramentas básicas e os princípios visuais do design.",
      lessons: [
        { slug: "01-01-frames-vs-groups", title: "Frames vs Groups", url: "modulos/01-iniciante/01-01-frames-vs-groups.html", summary: "A diferença fundamental entre Frames e Groups e quando usar cada um." },
        { slug: "01-02-formas-pen-vetores", title: "Formas básicas, Pen tool e vetores", url: "modulos/01-iniciante/01-02-formas-pen-vetores.html", summary: "Criar e manipular formas, e desenhar com a Pen tool." },
        { slug: "01-03-cor-fills-strokes", title: "Cor: fills, strokes, gradientes e blend modes", url: "modulos/01-iniciante/01-03-cor-fills-strokes.html", summary: "Preenchimentos, contornos, gradientes, opacidade e modos de mesclagem." },
        { slug: "01-04-tipografia-texto", title: "Tipografia e a ferramenta de texto", url: "modulos/01-iniciante/01-04-tipografia-texto.html", summary: "Texto, fontes, espaçamento e fundamentos de tipografia." },
        { slug: "01-05-imagens-mascaras", title: "Imagens, máscaras, crop e exportação", url: "modulos/01-iniciante/01-05-imagens-mascaras.html", summary: "Inserir imagens, preenchimento de imagem, máscaras e exportar assets." },
        { slug: "01-06-camadas-effects", title: "Camadas, organização e effects", url: "modulos/01-iniciante/01-06-camadas-effects.html", summary: "Layers, nomeação, grupos, sombras e desfoques." },
        { slug: "01-07-alinhamento-grids", title: "Alinhamento, distribuição e Layout Grids", url: "modulos/01-iniciante/01-07-alinhamento-grids.html", summary: "Alinhar, distribuir e usar grids de layout para organizar telas." },
        { slug: "01-08-principios-visuais", title: "Princípios de design visual", url: "modulos/01-iniciante/01-08-principios-visuais.html", summary: "Hierarquia, contraste, espaçamento, repetição e cor na prática." }
      ]
    },
    {
      id: "m2",
      title: "Módulo 2 — Intermediário: Construindo Interfaces Reais",
      icon: "🧱",
      goal: "Construir interfaces flexíveis com Auto Layout, components e estilos.",
      lessons: [
        { slug: "02-01-auto-layout-fundamentos", title: "Auto Layout — fundamentos", url: "modulos/02-intermediario/02-01-auto-layout-fundamentos.html", summary: "Direção, padding e gap: a base do layout responsivo no Figma." },
        { slug: "02-02-auto-layout-avancado", title: "Auto Layout — avançado", url: "modulos/02-intermediario/02-02-auto-layout-avancado.html", summary: "Hug/fill/fixed, alinhamento, wrap, min/max e absolute position." },
        { slug: "02-03-constraints-responsividade", title: "Constraints e responsividade", url: "modulos/02-intermediario/02-03-constraints-responsividade.html", summary: "Como elementos se comportam ao redimensionar frames." },
        { slug: "02-04-components-instances", title: "Components e instances", url: "modulos/02-intermediario/02-04-components-instances.html", summary: "Criar componentes reutilizáveis e trabalhar com instâncias." },
        { slug: "02-05-variants", title: "Variants — estados e variações", url: "modulos/02-intermediario/02-05-variants.html", summary: "Agrupar variações de um componente em um único conjunto." },
        { slug: "02-06-component-properties", title: "Component Properties", url: "modulos/02-intermediario/02-06-component-properties.html", summary: "Boolean, instance swap, text e variant properties." },
        { slug: "02-07-estilos", title: "Estilos: color, text, effect e grid", url: "modulos/02-intermediario/02-07-estilos.html", summary: "Criar e reutilizar estilos para consistência visual." },
        { slug: "02-08-booleanas-icones", title: "Operações booleanas e ícones", url: "modulos/02-intermediario/02-08-booleanas-icones.html", summary: "Vector networks, operações booleanas e criação de ícones." },
        { slug: "02-09-grids-mobile-web", title: "Grids e layout: mobile vs web/desktop", url: "modulos/02-intermediario/02-09-grids-mobile-web.html", summary: "Sistemas de grid e padrões de layout por plataforma." }
      ]
    },
    {
      id: "m3",
      title: "Módulo 3 — Avançado: Design Systems e Variables",
      icon: "🏗️",
      goal: "Criar design systems escaláveis com tokens, variables e libraries.",
      lessons: [
        { slug: "03-01-o-que-e-design-system", title: "O que é um Design System", url: "modulos/03-design-systems/03-01-o-que-e-design-system.html", summary: "Anatomia, benefícios e quando criar um design system." },
        { slug: "03-02-design-tokens", title: "Design Tokens — teoria e tiers", url: "modulos/03-design-systems/03-02-design-tokens.html", summary: "Tokens primitive, semantic e component e por que essa hierarquia." },
        { slug: "03-03-variables-fundamentos", title: "Variables — fundamentos", url: "modulos/03-design-systems/03-03-variables-fundamentos.html", summary: "Color, number, string e boolean variables na prática." },
        { slug: "03-04-modes", title: "Modes — light/dark, densidade, marca", url: "modulos/03-design-systems/03-04-modes.html", summary: "Modos multidimensionais para temas e variações." },
        { slug: "03-05-aliases-scoping", title: "Aliases, scoping e organização", url: "modulos/03-design-systems/03-05-aliases-scoping.html", summary: "Referências entre variables, escopos e composite/array." },
        { slug: "03-06-design-system-escalavel", title: "Estruturando um Design System escalável", url: "modulos/03-design-systems/03-06-design-system-escalavel.html", summary: "Montando a arquitetura completa de tokens e componentes." },
        { slug: "03-07-nested-base-slots", title: "Nested components, base components e slots", url: "modulos/03-design-systems/03-07-nested-base-slots.html", summary: "Padrões avançados de composição de componentes." },
        { slug: "03-08-libraries", title: "Libraries: publicar, consumir, versionar", url: "modulos/03-design-systems/03-08-libraries.html", summary: "Compartilhar e manter bibliotecas entre arquivos e times." },
        { slug: "03-09-documentacao-ds", title: "Documentação do Design System", url: "modulos/03-design-systems/03-09-documentacao-ds.html", summary: "Documentar componentes e diretrizes no Figma." }
      ]
    },
    {
      id: "m4",
      title: "Módulo 4 — Prototipagem e Interação",
      icon: "⚡",
      goal: "Criar protótipos interativos realistas com animações e lógica.",
      lessons: [
        { slug: "04-01-prototipagem-fundamentos", title: "Fundamentos de prototipagem", url: "modulos/04-prototipagem/04-01-prototipagem-fundamentos.html", summary: "Flows, connections, triggers e actions." },
        { slug: "04-02-transicoes-animacoes", title: "Transições e animações", url: "modulos/04-prototipagem/04-02-transicoes-animacoes.html", summary: "Instant, dissolve, move, push e slide." },
        { slug: "04-03-smart-animate", title: "Smart Animate e microinterações", url: "modulos/04-prototipagem/04-03-smart-animate.html", summary: "Animar transições suaves entre estados." },
        { slug: "04-04-overlays-scroll", title: "Overlays, scroll e fixed/sticky", url: "modulos/04-prototipagem/04-04-overlays-scroll.html", summary: "Modais, comportamento de rolagem e elementos fixos." },
        { slug: "04-05-componentes-interativos", title: "Componentes interativos", url: "modulos/04-prototipagem/04-05-componentes-interativos.html", summary: "Hover, pressed e while-pressing em componentes." },
        { slug: "04-06-variables-prototipos", title: "Variables em protótipos: lógica e expressões", url: "modulos/04-prototipagem/04-06-variables-prototipos.html", summary: "Conditional logic, expressions, contadores e formulários reais." },
        { slug: "04-07-testar-compartilhar", title: "Testar, compartilhar e coletar feedback", url: "modulos/04-prototipagem/04-07-testar-compartilhar.html", summary: "Apresentar, gravar e validar protótipos com usuários." }
      ]
    },
    {
      id: "m5",
      title: "Módulo 5 — Projeto Guiado 1: App Mobile Completo",
      icon: "📱",
      goal: "Aplicar tudo construindo um app mobile do briefing ao protótipo (FinView).",
      lessons: [
        { slug: "05-01-briefing-planejamento", title: "Briefing, escopo e planejamento", url: "projetos/01-app-mobile/05-01-briefing-planejamento.html", summary: "Definir o produto, público e escopo do app FinView." },
        { slug: "05-02-fluxo-wireframes", title: "Fluxo de usuário e wireframes", url: "projetos/01-app-mobile/05-02-fluxo-wireframes.html", summary: "Mapear o fluxo e desenhar wireframes de baixa fidelidade." },
        { slug: "05-03-fundacao-visual", title: "Fundação visual: cores, tipografia, variables", url: "projetos/01-app-mobile/05-03-fundacao-visual.html", summary: "Definir tokens, grid e estilos do app." },
        { slug: "05-04-telas-principais", title: "Construindo as telas principais", url: "projetos/01-app-mobile/05-04-telas-principais.html", summary: "Onboarding, home, detalhe e perfil em alta fidelidade." },
        { slug: "05-05-componentizacao", title: "Componentização do app", url: "projetos/01-app-mobile/05-05-componentizacao.html", summary: "Nav bar, cards, botões, inputs e listas reutilizáveis." },
        { slug: "05-06-estados-darkmode", title: "Estados, dark mode e responsividade", url: "projetos/01-app-mobile/05-06-estados-darkmode.html", summary: "Modes para tema e variações de telas e estados." },
        { slug: "05-07-prototipagem-app", title: "Prototipagem e microinterações", url: "projetos/01-app-mobile/05-07-prototipagem-app.html", summary: "Tornar o app navegável e vivo com animações." },
        { slug: "05-08-ios-android-guidelines", title: "Diretrizes iOS vs Android", url: "projetos/01-app-mobile/05-08-ios-android-guidelines.html", summary: "Safe areas, gestos e padrões de cada plataforma." }
      ]
    },
    {
      id: "m6",
      title: "Módulo 6 — Projeto Guiado 2: Web App / Dashboard SaaS",
      icon: "🖥️",
      goal: "Construir um dashboard SaaS responsivo do briefing à landing page (TaskFlow).",
      lessons: [
        { slug: "06-01-briefing-arquitetura", title: "Briefing e arquitetura de informação", url: "projetos/02-web-dashboard/06-01-briefing-arquitetura.html", summary: "Definir o produto TaskFlow e organizar a informação." },
        { slug: "06-02-grids-breakpoints", title: "Layout grids e breakpoints para web", url: "projetos/02-web-dashboard/06-02-grids-breakpoints.html", summary: "Grids de 12 colunas e breakpoints para desktop." },
        { slug: "06-03-fundacao-visual-web", title: "Fundação visual e tokens do produto", url: "projetos/02-web-dashboard/06-03-fundacao-visual-web.html", summary: "Cores, tipografia e tokens do produto web." },
        { slug: "06-04-shell-responsivo", title: "Shell responsivo: sidebar e topbar", url: "projetos/02-web-dashboard/06-04-shell-responsivo.html", summary: "Navegação e estrutura base do dashboard." },
        { slug: "06-05-componentes-dados", title: "Componentes de dados", url: "projetos/02-web-dashboard/06-05-componentes-dados.html", summary: "Tabelas, gráficos, cards e filtros." },
        { slug: "06-06-formularios-estados", title: "Formulários e estados", url: "projetos/02-web-dashboard/06-06-formularios-estados.html", summary: "Empty, loading, error e success states." },
        { slug: "06-07-responsividade", title: "Responsividade: desktop → tablet → mobile", url: "projetos/02-web-dashboard/06-07-responsividade.html", summary: "Adaptar o layout entre breakpoints." },
        { slug: "06-08-landing-page", title: "Landing page do produto", url: "projetos/02-web-dashboard/06-08-landing-page.html", summary: "Hero, seções, CTA e footer da landing." }
      ]
    },
    {
      id: "m7",
      title: "Módulo 7 — Colaboração, Handoff e Dev Mode",
      icon: "🤝",
      goal: "Trabalhar em equipe e entregar designs prontos para desenvolvimento.",
      lessons: [
        { slug: "07-01-colaboracao-comentarios", title: "Colaboração em tempo real e comentários", url: "modulos/07-colaboracao-handoff/07-01-colaboracao-comentarios.html", summary: "Trabalhar simultaneamente, comentar e revisar." },
        { slug: "07-02-branching-versoes", title: "Branching e version history", url: "modulos/07-colaboracao-handoff/07-02-branching-versoes.html", summary: "Versionar arquivos e organizar o trabalho em equipe." },
        { slug: "07-03-dev-mode", title: "Dev Mode: inspeção e specs", url: "modulos/07-colaboracao-handoff/07-03-dev-mode.html", summary: "Inspecionar medidas, propriedades e especificações." },
        { slug: "07-04-code-gen-mcp", title: "Code generation e Dev Mode MCP", url: "modulos/07-colaboracao-handoff/07-04-code-gen-mcp.html", summary: "Gerar código e integrar o Figma ao fluxo de dev." },
        { slug: "07-05-handoff-profissional", title: "Handoff profissional", url: "modulos/07-colaboracao-handoff/07-05-handoff-profissional.html", summary: "Annotations, status e entrega ready-for-dev." },
        { slug: "07-06-tokens-codigo", title: "Tokens → código", url: "modulos/07-colaboracao-handoff/07-06-tokens-codigo.html", summary: "Exportar tokens e conectar com o código." }
      ]
    },
    {
      id: "m8",
      title: "Módulo 8 — Ecossistema Figma 2025/2026",
      icon: "✨",
      goal: "Conhecer e usar os novos produtos e recursos de IA do Figma.",
      lessons: [
        { slug: "08-01-figjam", title: "FigJam — ideação e whiteboard", url: "modulos/08-ecossistema-2026/08-01-figjam.html", summary: "Brainstorm, diagramas e workshops colaborativos." },
        { slug: "08-02-figma-slides", title: "Figma Slides — apresentações", url: "modulos/08-ecossistema-2026/08-02-figma-slides.html", summary: "Criar apresentações com a potência do Figma." },
        { slug: "08-03-figma-sites", title: "Figma Sites — publicar sites", url: "modulos/08-ecossistema-2026/08-03-figma-sites.html", summary: "Desenhar e publicar sites responsivos direto do Figma." },
        { slug: "08-04-figma-make", title: "Figma Make — IA prompt-to-code", url: "modulos/08-ecossistema-2026/08-04-figma-make.html", summary: "Transformar ideias e designs em apps funcionais com IA." },
        { slug: "08-05-figma-buzz", title: "Figma Buzz — assets de marca", url: "modulos/08-ecossistema-2026/08-05-figma-buzz.html", summary: "Criar assets de marketing on-brand em escala." },
        { slug: "08-06-figma-draw", title: "Figma Draw — ilustração", url: "modulos/08-ecossistema-2026/08-06-figma-draw.html", summary: "Arte vetorial e ilustração avançada." },
        { slug: "08-07-ia-no-figma", title: "IA no Figma", url: "modulos/08-ecossistema-2026/08-07-ia-no-figma.html", summary: "Busca visual, renomear camadas e gerar conteúdo." },
        { slug: "08-08-plugins-widgets", title: "Plugins e widgets essenciais", url: "modulos/08-ecossistema-2026/08-08-plugins-widgets.html", summary: "Curadoria comentada de plugins que turbinam o fluxo." }
      ]
    },
    {
      id: "m9",
      title: "Módulo 9 — Workflow Profissional e Boas Práticas",
      icon: "🎯",
      goal: "Trabalhar como profissional: organização, acessibilidade e carreira.",
      lessons: [
        { slug: "09-01-organizacao-nomenclatura", title: "Organização e nomenclatura", url: "modulos/09-workflow-profissional/09-01-organizacao-nomenclatura.html", summary: "Convenções de nomes e estrutura de arquivos." },
        { slug: "09-02-acessibilidade", title: "Acessibilidade no design", url: "modulos/09-workflow-profissional/09-02-acessibilidade.html", summary: "Contraste, tamanhos, WCAG e foco." },
        { slug: "09-03-performance-higiene", title: "Performance e higiene de arquivos", url: "modulos/09-workflow-profissional/09-03-performance-higiene.html", summary: "Manter arquivos rápidos e organizados." },
        { slug: "09-04-colaboracao-stakeholders", title: "Colaboração com PMs, devs e stakeholders", url: "modulos/09-workflow-profissional/09-04-colaboracao-stakeholders.html", summary: "Comunicar e trabalhar bem com o time de produto." },
        { slug: "09-05-portfolio-freelance", title: "Portfólio, freelance e carreira", url: "modulos/09-workflow-profissional/09-05-portfolio-freelance.html", summary: "Montar portfólio e atuar profissionalmente." },
        { slug: "09-06-proximos-passos", title: "Próximos passos e recursos", url: "modulos/09-workflow-profissional/09-06-proximos-passos.html", summary: "Como continuar evoluindo depois do curso." }
      ]
    },
    {
      id: "recursos",
      title: "Recursos",
      icon: "📚",
      goal: "Materiais de consulta rápida para usar no dia a dia.",
      lessons: [
        { slug: "rec-atalhos", title: "Atalhos de teclado (Win + Mac)", url: "recursos/atalhos.html", summary: "Tabela completa de atalhos do Figma." },
        { slug: "rec-glossario", title: "Glossário de termos", url: "recursos/glossario.html", summary: "Significado dos principais termos do Figma e de UI/UX." },
        { slug: "rec-checklists", title: "Checklists", url: "recursos/checklists.html", summary: "Listas de verificação para design system, handoff e entrega." },
        { slug: "rec-templates", title: "Templates e kits", url: "recursos/templates.html", summary: "Curadoria de templates e recursos gratuitos da Community." }
      ]
    }
  ]
};

/* Lista linear de todas as lições, na ordem do curso (para prev/next e progresso). */
COURSE.flatLessons = COURSE.modules.flatMap(function (m) {
  return m.lessons.map(function (l) {
    return Object.assign({ moduleId: m.id, moduleTitle: m.title }, l);
  });
});

/* Total de lições "de conteúdo" (exclui a seção Recursos do cálculo de progresso). */
COURSE.totalContentLessons = COURSE.modules
  .filter(function (m) { return m.id !== "recursos"; })
  .reduce(function (sum, m) { return sum + m.lessons.length; }, 0);

if (typeof window !== "undefined") { window.COURSE = COURSE; }
