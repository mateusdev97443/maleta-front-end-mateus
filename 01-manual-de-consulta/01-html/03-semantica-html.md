# 03 — Semântica HTML

Semântica é usar cada tag pelo significado, não pela aparência. Isso melhora acessibilidade, SEO, manutenção e leitura do código.

## Tags estruturais

- `header`: introdução de uma página ou seção; pode conter logo, título e navegação.
- `nav`: conjunto de links de navegação importante.
- `main`: conteúdo principal e único da página; normalmente existe apenas um por página.
- `section`: agrupamento temático de conteúdo, geralmente com título.
- `article`: conteúdo independente, como post, notícia, card de artigo ou item que faria sentido isolado.
- `aside`: conteúdo complementar, como filtros, links relacionados ou observações laterais.
- `footer`: rodapé da página ou de uma seção/artigo.

## `div` versus tags semânticas

Use `div` quando não existir significado semântico específico e você precisar apenas agrupar conteúdo. Se o bloco representa navegação, conteúdo principal, artigo, seção ou rodapé, prefira a tag semântica correspondente.

## Padrão profissional

```html
<body>
  <header>
    <nav aria-label="Navegação principal">...</nav>
  </header>
  <main>
    <section aria-labelledby="titulo-hero">
      <h1 id="titulo-hero">Título da página</h1>
    </section>
    <section aria-labelledby="titulo-recursos">
      <h2 id="titulo-recursos">Recursos</h2>
      <article>...</article>
    </section>
  </main>
  <footer>...</footer>
</body>
```

## Erros comuns

- Usar `div` para tudo.
- Criar `section` sem título ou sem tema claro.
- Colocar navegação principal fora de `nav` sem necessidade.
- Usar vários `main` na mesma página.
- Escolher tag pela aparência padrão do navegador.
