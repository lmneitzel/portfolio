/* Monta o currículo a partir de content.js. Nada é editado aqui: atualize content.js. */
(function () {
  "use strict";
  const C = window.SITE_CONTENT;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const txt = (s) => esc(s).replace(/\[Preencher:[^\]]*\]/g, (m) => `<mark class="todo">${m}</mark>`);
  const list = (arr, fn) => (arr || []).map(fn).join("");
  const section = (title, body) => (body ? `<section class="cv-sec"><h2>${title}</h2>${body}</section>` : "");
  const STATUS = { "concluido": "Concluído", "em-desenvolvimento": "Em desenvolvimento", "planejado": "Planejado" };
  const ct = C.contato;
  let site = C.perfil.site || location.href.replace(/curriculo\.html.*$/, "");
  if (!/^https?:/.test(site) || /localhost|127\.0\.0\.1/.test(site)) site = ""; // sem endereço local ou file:// no PDF
  const siteLabel = site.replace(/^https?:\/\//, "").replace(/\/$/, "");

  const contatos = [
    ct.email && `<li><a href="mailto:${esc(ct.email)}">${esc(ct.email)}</a></li>`,
    ct.telefone && `<li>${esc(ct.telefone)}</li>`,
    C.perfil.local && `<li>${txt(C.perfil.local)}</li>`,
    ct.linkedin && `<li><a href="${esc(ct.linkedin)}">${esc(ct.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""))}</a></li>`,
    ct.github && `<li><a href="${esc(ct.github)}">${esc(ct.github.replace(/^https?:\/\//, ""))}</a></li>`,
    site && `<li><a href="${esc(site)}">${esc(siteLabel)}</a></li>`
  ].filter(Boolean).join("");

  document.getElementById("cv").innerHTML = `
    <header class="cv-head">
      <h1>${esc(C.perfil.nome)}</h1>
      <p class="cv-role">${txt(C.perfil.titulo)}</p>
      <ul class="cv-contact">${contatos}</ul>
    </header>

    ${section("Resumo profissional", `<p>${txt(C.perfil.resumo)}</p>`)}

    ${section("Diferenciais", `<ul class="cv-diffs">${list(C.diferenciais, (d) => `<li><strong>${txt(d.titulo)}:</strong> ${txt(d.texto)}</li>`)}</ul>`)}

    ${section("Experiência profissional", list(C.experiencias, (e) => `
      <article class="cv-item">
        <div class="cv-item-head">
          <h3>${txt(e.cargo)} <span class="cv-org">· ${txt(e.empresa)}</span></h3>
          <span class="cv-date">${txt(e.periodo)}</span>
        </div>
        ${e.local ? `<p class="cv-meta">${txt(e.local)}</p>` : ""}
        ${e.resumo ? `<p>${txt(e.resumo)}</p>` : ""}
        <ul>${list(e.atividades, (a) => `<li>${txt(a)}</li>`)}</ul>
      </article>`))}

    ${section("Formação", list(C.formacao, (f) => `
      <article class="cv-item">
        <div class="cv-item-head">
          <h3>${txt(f.curso)} <span class="cv-org">· ${txt(f.instituicao)}</span></h3>
          <span class="cv-date">${txt(f.periodo)}</span>
        </div>
      </article>`))}

    ${section("Conhecimentos técnicos", `<dl class="cv-skills">${list(C.conhecimentos, (g) => `
      <div><dt>${esc(g.categoria)}</dt><dd>${g.itens.map((i) => txt(i.nome)).join(", ")}</dd></div>`)}</dl>`)}

    ${section("Projetos pessoais", list(C.projetos, (p) => `
      <article class="cv-item">
        <div class="cv-item-head">
          <h3>${txt(p.titulo)}</h3>
          <span class="cv-date">${STATUS[p.status] || esc(p.status)}</span>
        </div>
        <p>${txt(p.descricao)}</p>
        <p class="cv-meta">${p.tecnologias.map(esc).join(" · ")}${p.repositorio ? ` · <a href="${esc(p.repositorio)}">${esc(p.repositorio.replace(/^https?:\/\//, ""))}</a>` : ""}</p>
      </article>`))}

    <footer class="cv-foot">Gerado a partir de ${site ? esc(siteLabel) : "meu portfólio"} em ${new Date().toLocaleDateString("pt-BR")}.</footer>`;

  document.title = "Curriculo - " + C.perfil.nome; // vira o nome sugerido do arquivo PDF
  const print = () => window.print();
  document.querySelector("[data-print]").addEventListener("click", print);
  // curriculo.html?imprimir=1 abre direto a janela de impressão / salvar PDF
  if (new URLSearchParams(location.search).has("imprimir")) {
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => setTimeout(print, 150));
  }
})();
