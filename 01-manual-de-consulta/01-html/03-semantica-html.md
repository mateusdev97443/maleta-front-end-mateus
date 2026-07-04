# 03 — Semântica HTML

Semântica HTML é a prática de escolher elementos pelo significado do conteúdo, não pela aparência visual. Um HTML semântico informa a navegadores, buscadores, leitores de tela e outros devs qual é o papel de cada parte da página.

## Semântica estrutural versus aparência visual

Semântica estrutural responde: “o que este conteúdo representa?”. Aparência visual responde: “como este conteúdo deve parecer?”.

Exemplo: um bloco pode parecer um card, uma faixa ou uma coluna, mas semanticamente pode ser um `article`, uma `section`, um `aside` ou apenas uma `div`. A decisão não deve ser tomada por borda, cor, tamanho ou posição, e sim pelo papel do conteúdo.

```html
<!-- Ruim: escolha baseada em aparência e nomes genéricos -->
<div class="topo">
  <div class="menu">...</div>
</div>

<!-- Melhor: escolha baseada em significado -->
<header>
  <nav aria-label="Navegação principal">...</nav>
</header>
```

## `header`: página, seção ou artigo

`header` representa conteúdo introdutório. Ele pode aparecer no início da página, mas também dentro de `section` ou `article`.

Use `header` da página para identidade global, logo, chamada inicial e navegação principal:

```html
<header>
  <a href="/" aria-label="Página inicial">Maleta Front-end</a>
  <nav aria-label="Navegação principal">
    <a href="/manual">Manual</a>
    <a href="/projetos">Projetos</a>
  </nav>
</header>
```

Use `header` de artigo quando o conteúdo independente tiver introdução própria, autor, data ou categoria:

```html
<article>
  <header>
    <p>Publicado em 03/07/2026</p>
    <h2>Como estruturar uma landing page em HTML</h2>
  </header>
  <p>Antes de pensar no visual, defina a hierarquia do conteúdo.</p>
</article>
```

## `nav`: quando usar

Use `nav` para blocos importantes de navegação, como menu principal, navegação de rodapé, paginação ou índice de página. Nem toda lista de links precisa ser `nav`; uma lista de referências dentro de um texto pode ser apenas uma `ul`.

```html
<nav aria-label="Índice do artigo">
  <a href="#estrutura">Estrutura</a>
  <a href="#formularios">Formulários</a>
  <a href="#checklist">Checklist</a>
</nav>
```

Regra prática: se a pessoa usa aquele conjunto de links para se orientar ou navegar por áreas relevantes, provavelmente é `nav`.

## Regra prática para `main`

`main` contém o conteúdo principal e único daquela página. Normalmente deve existir apenas um `main` visível por documento. Não coloque cabeçalho global, rodapé global, menus repetidos ou banners puramente complementares dentro dele.

```html
<body>
  <header>...</header>
  <main id="conteudo">
    <h1>Manual HTML Completo</h1>
    <p>Conteúdo principal desta página.</p>
  </main>
  <footer>...</footer>
</body>
```

## `section`, `article`, `aside` e `div`

### `section`

Use `section` para agrupar conteúdo por tema. Uma boa `section` geralmente tem heading.

```html
<section aria-labelledby="beneficios-title">
  <h2 id="beneficios-title">Benefícios do curso</h2>
  <p>Aprenda com exemplos e projetos reais.</p>
</section>
```

### `article`

Use `article` quando o bloco faz sentido isoladamente: post, notícia, depoimento, item de blog, card de produto com conteúdo independente ou comentário.

```html
<article>
  <h3>Checklist de HTML</h3>
  <p>Uma revisão rápida antes do commit.</p>
  <a href="/checklist-html">Ler checklist</a>
</article>
```

### `aside`

Use `aside` para conteúdo complementar ao conteúdo principal: links relacionados, biografia do autor, filtros, observações, propaganda ou resumo lateral.

```html
<aside aria-labelledby="relacionados-title">
  <h2 id="relacionados-title">Conteúdos relacionados</h2>
  <ul>
    <li><a href="/acessibilidade-html">Acessibilidade no HTML</a></li>
  </ul>
</aside>
```

### `div`

Use `div` quando o agrupamento não tiver significado semântico próprio. Ela é útil como contêiner neutro, mas não deve substituir elementos semânticos.

```html
<!-- Aceitável: agrupamento neutro interno -->
<div>
  <img src="avatar.jpg" alt="Foto de Ana Souza" width="96" height="96">
  <p>Ana Souza</p>
</div>
```

## Exemplos bons e ruins

### Exemplo ruim

```html
<div class="pagina">
  <div class="topo">...</div>
  <div class="conteudo">
    <div class="titulo">Curso de HTML</div>
    <div class="bloco">Benefícios</div>
  </div>
  <div class="rodape">...</div>
</div>
```

Problemas: não existe `main`, o título não é heading, a navegação não é identificada e tudo depende de classes visuais.

### Exemplo corrigido

```html
<header>
  <nav aria-label="Navegação principal">...</nav>
</header>

<main>
  <h1>Curso de HTML</h1>
  <section aria-labelledby="beneficios-title">
    <h2 id="beneficios-title">Benefícios</h2>
    <p>Aprenda a estruturar páginas profissionais.</p>
  </section>
</main>

<footer>...</footer>
```

## Estrutura semântica de uma landing page

```html
<body>
  <header>
    <nav aria-label="Navegação principal">...</nav>
  </header>

  <main>
    <section aria-labelledby="hero-title">
      <h1 id="hero-title">Aprenda HTML para projetos reais</h1>
      <p>Domine estrutura, semântica e acessibilidade.</p>
      <a href="#inscricao">Quero me inscrever</a>
    </section>

    <section aria-labelledby="beneficios-title">
      <h2 id="beneficios-title">Benefícios</h2>
      <article>
        <h3>Consulta prática</h3>
        <p>Use o material durante o desenvolvimento.</p>
      </article>
    </section>

    <section id="inscricao" aria-labelledby="inscricao-title">
      <h2 id="inscricao-title">Inscrição</h2>
      <form>...</form>
    </section>
  </main>

  <footer>...</footer>
</body>
```

## Estrutura semântica de artigo ou post

```html
<main>
  <article>
    <header>
      <p>HTML • 8 minutos de leitura</p>
      <h1>Como revisar a semântica de uma página</h1>
      <p>Um roteiro prático para melhorar estrutura e acessibilidade.</p>
    </header>

    <section aria-labelledby="landmarks-title">
      <h2 id="landmarks-title">Confira os landmarks</h2>
      <p>Verifique `header`, `nav`, `main`, `aside` e `footer`.</p>
    </section>

    <aside aria-labelledby="resumo-title">
      <h2 id="resumo-title">Resumo</h2>
      <p>Comece por headings, landmarks e formulários.</p>
    </aside>
  </article>
</main>
```

## Erros comuns e correções

| Erro | Por que prejudica | Correção |
|---|---|---|
| Usar `div` para tudo | Remove significado estrutural | Trocar por `header`, `nav`, `main`, `section`, `article`, `aside` ou `footer` quando houver papel claro |
| Criar `section` sem título | Dificulta entender o tema do bloco | Adicionar heading ou trocar por `div` se for só agrupamento neutro |
| Colocar menu principal fora de `nav` | Perde landmark de navegação | Envolver links principais com `nav` e `aria-label` quando houver mais de um `nav` |
| Ter vários `main` visíveis | Confunde conteúdo principal | Manter apenas um `main` para a página |
| Usar heading por tamanho visual | Quebra hierarquia de conteúdo | Escolher `h1` a `h6` pela estrutura lógica |
