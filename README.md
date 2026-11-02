# Portfólio — Luis Miguel Neitzel

Site pessoal estático (HTML, CSS e JavaScript puros), sem frameworks, sem backend e pronto para o GitHub Pages.

## Estrutura

```
meu-curriculo-online/
├── index.html              # Estrutura da página e metadados (SEO / redes sociais)
├── curriculo.html          # Currículo gerado a partir do content.js (para PDF)
├── README.md
└── assets/
    ├── css/style.css       # Visual do site
    ├── css/curriculo.css   # Visual do currículo (claro, formato A4)
    ├── js/content.js       # ★ TODO O CONTEÚDO EDITÁVEL fica aqui
    ├── js/main.js          # Monta as seções do site a partir do content.js
    ├── js/curriculo.js     # Monta o currículo a partir do content.js
    └── img/
        ├── favicon.svg
        ├── FOTO_PERFIL.png # Sua foto (adicione — enquanto não existir, aparecem as iniciais "LN")
        └── projetos/       # Capturas de tela dos projetos
```

## Como editar o conteúdo

Quase tudo se edita em **`assets/js/content.js`**. Abra o arquivo em qualquer editor de texto.

| O que mudar | Onde |
|---|---|
| Foto profissional | Salve como `assets/img/FOTO_PERFIL.png` (quadrada, ~800×800 px, até ~150 KB). |
| Nome, cargo, cidade, resumo | `perfil` (o resumo abre o currículo) |
| Textos do "Sobre mim" | `sobre.paragrafos`, `sobre.interesses` |
| Diferenciais | `diferenciais` (cartões do "Sobre mim" e bloco do currículo) |
| Trajetória / experiências | `experiencias` — copie um bloco `{ ... }` para adicionar uma etapa (a mais recente primeiro). |
| Formação | `formacao` (seção "Formação acadêmica" do site e currículo) |
| Projetos | `projetos` — título, `status`, descrição, funcionalidades, tecnologias, imagem e links. |
| Conhecimentos | `conhecimentos` — cada item tem `origem`: `"profissional"` e/ou `"projetos"`. |
| LinkedIn, GitHub, e-mail | `contato`. Deixe `github: ""` para ocultar o link. |
| Cores | Variáveis no topo de `assets/css/style.css` (`--accent`, `--bg`, ...). |
| Título e descrição para buscadores | `<head>` do `index.html`. |

### Currículo em PDF (gerado pelo próprio site)

Não existe um PDF para manter. O `curriculo.html` monta o currículo com as mesmas informações do `content.js`. Basta atualizar o site e o currículo já sai atualizado.

- **Visualizar:** abra `curriculo.html` (botão "Visualizar currículo" no site).
- **Baixar:** use o botão "Baixar PDF". Ele abre a janela de impressão do navegador; em *Destino*, escolha **Salvar como PDF**. O layout já vem ajustado para folha A4, com fundo branco.
- Telefone e cidade aparecem só no currículo: preencha `contato.telefone` e `perfil.local`.
- Depois de publicar, preencha `perfil.site` com o endereço do site para que ele apareça no currículo.

### Conteúdo pendente

Todo trecho escrito como `[Preencher: ...]` aparece no site com contorno tracejado amarelo. Isso indica informação que ainda precisa ser escrita por você. Substitua o trecho inteiro, inclusive os colchetes. Antes de divulgar o site, procure por `Preencher` no `content.js` para ver o que ainda falta.

### Status dos projetos

Use `"em-desenvolvimento"`, `"planejado"` ou `"concluido"`, tanto no projeto quanto em cada funcionalidade. Só marque como concluído o que realmente estiver pronto.

### Imagens dos projetos

1. Salve a captura em `assets/img/projetos/` (prefira `.webp` ou `.jpg`, cerca de 1280×800 px e até ~200 KB).
2. No projeto, preencha `imagem: "assets/img/projetos/nome-do-arquivo.webp"`.

Sem imagem, o cartão mostra "Captura de tela em breve".

### Links de demonstração e repositório

Preencha `demo` e `repositorio` com URLs completas (`https://...`). Os botões só aparecem quando o link existe.

## Executar localmente

Abra o `index.html` com dois cliques no navegador. Funciona direto, sem servidor.

Para testar em condições parecidas com as do GitHub Pages, use um servidor local:

```bash
npx serve .
```

(ou `python -m http.server 8000`, se tiver Python instalado) e acesse o endereço exibido no terminal.

## Publicar gratuitamente no GitHub Pages

1. Crie uma conta em <https://github.com>, caso ainda não tenha.
2. Crie um repositório público (ex.: `portfolio`, ou `SEU-USUARIO.github.io` para que o site fique na raiz do domínio).
3. Envie os arquivos desta pasta para o repositório:
   - **Pelo site:** *Add file → Upload files*, arraste todo o conteúdo da pasta e clique em *Commit changes*.
   - **Pelo terminal:**
     ```bash
     git init
     git add .
     git commit -m "Primeira versão do portfólio"
     git branch -M main
     git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
     git push -u origin main
     ```
4. No repositório: *Settings → Pages → Build and deployment → Source: Deploy from a branch*, escolha `main` e a pasta `/ (root)` e clique em *Save*.
5. Em alguns minutos o site estará em `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`.

Para atualizar depois, basta editar os arquivos no repositório (normalmente só o `content.js`). O GitHub Pages publica a nova versão automaticamente, e o currículo gerado acompanha a mudança.

### Depois de publicar

- No `index.html`, descomente e preencha `<link rel="canonical">` e `og:url` com o endereço real.
- Para que apareça uma imagem ao compartilhar o link (LinkedIn, WhatsApp), crie uma imagem de 1200×630 px em `assets/img/og-image.png` e descomente a tag `og:image` usando a URL **absoluta**.
- Adicione o link do site ao seu LinkedIn e ao currículo.

## Boas práticas já incluídas

- Layout responsivo (celular, tablet e desktop) e sem rolagem horizontal.
- Navegação por teclado, link "Pular para o conteúdo", foco visível, menu móvel acessível (fecha com Esc) e textos alternativos nas imagens.
- As animações são desativadas automaticamente para quem ativou "reduzir movimento" no sistema.
- Metadados para buscadores (descrição e dados estruturados `Person`) e para redes sociais (Open Graph).
- Caminhos relativos, que funcionam em qualquer endereço do GitHub Pages.
- Nenhuma chave de API, senha ou serviço pago.
