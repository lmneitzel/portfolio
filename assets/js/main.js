/* Renderiza o conteúdo de content.js e controla as interações. Edite o conteúdo em content.js. */
(function () {
  "use strict";
  const C = window.SITE_CONTENT;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  // Ícones em traço (24x24), mesmo estilo em todo o site.
  const PATHS = {
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>',
    headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
    code: '<path d="m8 8-4 4 4 4"/><path d="m16 8 4 4-4 4"/><path d="m13.5 5-3 14"/>',
    server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/>',
    database: '<ellipse cx="12" cy="5.5" rx="8" ry="2.5"/><path d="M4 5.5v13c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-13"/><path d="M4 12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5"/>',
    shield: '<path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>',
    landmark: '<path d="M3 21h18M4 10h16M12 3l8 4H4l8-4Z"/><path d="M6 10v8M10 10v8M14 10v8M18 10v8"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
    github: '<path d="M9 19c-4 1.5-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6.2 0C6.6 2.3 5.6 2.6 5.6 2.6a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 9c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-9 9"/>'
  };
  const icon = (n) => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${PATHS[n] || ""}</svg>`;

  // Escapa HTML e destaca os trechos [Preencher: ...] que ainda faltam.
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const txt = (s) => esc(s).replace(/\[Preencher:[^\]]*\]/g, (m) => `<mark class="todo">${m}</mark>`).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  const STATUS = {
    "concluido": "Concluído",
    "finalizado": "Finalizado",
    "em-desenvolvimento": "Em desenvolvimento",
    "planejado": "Planejado"
  };
  const ORIGEM = { profissional: "Experiência profissional", projetos: "Projetos pessoais" };

  const render = {
    sobre(el) {
      el.innerHTML =
        C.sobre.paragrafos.map((p) => `<p>${txt(p)}</p>`).join("") +
        `<h3 class="mini-title">Interesses técnicos</h3>
         <ul class="tags" role="list">${C.sobre.interesses.map((i) => `<li class="tag">${txt(i)}</li>`).join("")}</ul>`;
    },

    diferenciais(el) {
      el.innerHTML = C.diferenciais.map((d) => `
        <li class="about-card reveal">
          <span class="icon-box">${icon(d.icone)}</span>
          <div><h3>${txt(d.titulo)}</h3><p>${txt(d.texto)}</p></div>
        </li>`).join("");
    },

    experiencias(el) {
      el.innerHTML = C.experiencias.map((e) => `
        <li class="tl-item reveal">
          <div class="tl-when mono">${txt(e.periodo)}</div>
          <article class="tl-card">
            <h3>${txt(e.cargo)}</h3>
            <p class="tl-org">${txt(e.empresa)}${e.local ? ` <span class="muted">· ${txt(e.local)}</span>` : ""}</p>
            ${e.resumo ? `<p class="tl-summary">${txt(e.resumo)}</p>` : ""}
            <ul class="tl-list">${e.atividades.map((a) => `<li>${txt(a)}</li>`).join("")}</ul>
            ${e.tags && e.tags.length ? `<ul class="tags" role="list">${e.tags.map((t) => `<li class="tag">${txt(t)}</li>`).join("")}</ul>` : ""}
          </article>
        </li>`).join("");
    },

    formacao(el) {
      el.innerHTML = C.formacao.map((f) => `
        <li class="tl-item reveal">
          <div class="tl-when mono">${txt(f.periodo)}</div>
          <article class="tl-card">
            <h3>${txt(f.curso)}</h3>
            <p class="tl-org">${txt(f.instituicao)}</p>
          </article>
        </li>`).join("");
    },

    formacaoComplemento(el) {
      el.innerHTML = txt(C.formacaoComplemento);
    },

    projetos(el) {
      el.innerHTML = C.projetos.map((p) => {
        const media = `
          <div class="proj-media">
            <div class="media-fallback">${icon("image")}<span>Captura de tela em breve</span></div>
            ${p.imagem ? `<a class="proj-zoom" href="${esc(p.imagem)}" target="_blank" aria-label="Ampliar captura de tela do projeto ${esc(p.titulo)}"><img src="${esc(p.imagem)}" alt="Captura de tela do projeto ${esc(p.titulo)}" loading="lazy" decoding="async" onerror="this.parentNode.remove()"></a>` : ""}
          </div>`;
        const feats = p.funcionalidades && p.funcionalidades.length ? `
          <h4 class="mini-title">Funcionalidades</h4>
          <ul class="feat-list" role="list">${p.funcionalidades.map((f) => `
            <li><span>${txt(f.nome)}</span><span class="status status-${esc(f.status)}">${STATUS[f.status] || esc(f.status)}</span></li>`).join("")}
          </ul>` : "";
        const links = [
          p.demo && `<a class="btn btn-sm btn-primary" href="${esc(p.demo)}" target="_blank" rel="noopener">${icon("external")}Demonstração</a>`,
          p.repositorio && `<a class="btn btn-sm btn-ghost" href="${esc(p.repositorio)}" target="_blank" rel="noopener">${icon("github")}Repositório</a>`
        ].filter(Boolean).join("");
        return `
          <article class="proj-card reveal${p.destaque ? " is-featured" : ""}">
            ${media}
            <div class="proj-body">
              <div class="proj-top">
                <span class="status status-${esc(p.status)}">${STATUS[p.status] || esc(p.status)}</span>
                ${p.destaque ? '<span class="mono muted">projeto em destaque</span>' : ""}
              </div>
              <h3>${txt(p.titulo)}</h3>
              <p>${txt(p.descricao)}</p>
              ${feats}
              <ul class="tags" role="list" aria-label="Tecnologias">${p.tecnologias.map((t) => `<li class="tag tag-tech">${esc(t)}</li>`).join("")}</ul>
              ${links ? `<div class="proj-links">${links}</div>` : ""}
            </div>
          </article>`;
      }).join("");
    },

    conhecimentos(el) {
      el.innerHTML = C.conhecimentos.map((g) => `
        <section class="skill-group reveal" aria-label="${esc(g.categoria)}">
          <h3><span class="icon-box">${icon(g.icone)}</span>${esc(g.categoria)}</h3>
          <ul role="list">${g.itens.map((i) => `
            <li class="skill" data-origem="${esc(i.origem.join(" "))}">
              <span>${txt(i.nome)}</span>
              <span class="skill-origin">${i.origem.map((o) =>
                `<span class="legend legend-${o === "profissional" ? "pro" : "proj"}" title="${ORIGEM[o]}"></span><span class="sr-only">${ORIGEM[o]}</span>`).join("")}
              </span>
            </li>`).join("")}
          </ul>
        </section>`).join("");
    },

    contato(el) {
      const c = C.contato;
      const items = [
        c.email && `
          <li class="contact-item">
            <a href="mailto:${esc(c.email)}"><span class="icon-box">${icon("mail")}</span>
              <span><span class="contact-label">E-mail</span><span class="contact-value">${esc(c.email)}</span></span></a>
            <button type="button" class="copy-btn" data-copy="${esc(c.email)}" aria-label="Copiar e-mail">${icon("copy")}<span class="copy-msg" aria-live="polite"></span></button>
          </li>`,
        c.linkedin && `
          <li class="contact-item">
            <a href="${esc(c.linkedin)}" target="_blank" rel="noopener"><span class="icon-box">${icon("linkedin")}</span>
              <span><span class="contact-label">LinkedIn</span><span class="contact-value">${esc(c.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""))}</span></span></a>
          </li>`,
        c.github && `
          <li class="contact-item">
            <a href="${esc(c.github)}" target="_blank" rel="noopener"><span class="icon-box">${icon("github")}</span>
              <span><span class="contact-label">GitHub</span><span class="contact-value">${esc(c.github.replace(/^https?:\/\//, ""))}</span></span></a>
          </li>`
      ];
      el.innerHTML = items.filter(Boolean).join("");
    }
  };

  $$("[data-render]").forEach((el) => render[el.dataset.render] && render[el.dataset.render](el));
  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

  /* Menu mobile */
  const toggle = $(".nav-toggle");
  const menu = $("#menu");
  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    document.body.classList.toggle("menu-open", open);
  };
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  menu.addEventListener("click", (e) => e.target.closest("a") && setMenu(false));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) { setMenu(false); toggle.focus(); }
  });

  /* Cabeçalho com fundo ao rolar */
  const header = $(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Link ativo no menu conforme a seção visível */
  const links = $$('.nav-links a[href^="#"]');
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      links.forEach((a) => {
        const on = a.getAttribute("href") === "#" + en.target.id;
        a.classList.toggle("active", on);
        on ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach((s) => spy.observe(s));

  /* Animação de entrada (desativada se o usuário preferir menos movimento) */
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
    document.documentElement.classList.add("js-reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    $$(".reveal").forEach((el) => io.observe(el));
  }

  /* Filtro de conhecimentos */
  const filterBtns = $$("[data-filter]");
  filterBtns.forEach((b) => b.addEventListener("click", () => {
    const f = b.dataset.filter;
    filterBtns.forEach((x) => x.setAttribute("aria-pressed", x === b));
    $$(".skill").forEach((s) => s.classList.toggle("dim", f !== "todos" && !s.dataset.origem.split(" ").includes(f)));
  }));

  /* Ampliar captura de tela do projeto (sem suporte a <dialog>, o link abre a imagem em nova aba) */
  const zoom = document.createElement("dialog");
  zoom.className = "zoom";
  zoom.innerHTML = '<button class="zoom-close" aria-label="Fechar">×</button><img alt="">';
  document.body.append(zoom);
  zoom.addEventListener("click", () => zoom.close());
  document.addEventListener("click", (e) => {
    const a = e.target.closest(".proj-zoom");
    if (!a || !zoom.showModal) return;
    e.preventDefault();
    const img = $("img", zoom);
    img.src = a.href;
    img.alt = $("img", a).alt;
    zoom.showModal();
  });

  /* Copiar e-mail */
  document.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-copy]");
    if (!btn) return;
    const msg = $(".copy-msg", btn);
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      msg.textContent = "Copiado!";
    } catch {
      msg.textContent = "Não foi possível copiar";
    }
    btn.classList.add("copied");
    setTimeout(() => { msg.textContent = ""; btn.classList.remove("copied"); }, 1800);
  });
})();
