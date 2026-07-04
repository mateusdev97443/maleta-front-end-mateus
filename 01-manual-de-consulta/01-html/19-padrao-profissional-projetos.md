# 19 — Padrão profissional para projetos HTML

Um HTML profissional não é apenas “funcionar no navegador”. Ele precisa comunicar estrutura, intenção, conteúdo, acessibilidade e qualidade de manutenção.

## Padrão de organização de arquivo HTML

Ordem recomendada:

1. `<!doctype html>`.
2. `<html lang="pt-BR">`.
3. `head` com metadados essenciais.
4. `body` com estrutura semântica previsível.
5. Fechamentos organizados e indentados.

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Descrição real e objetiva da página.">
    <title>Página específica | Nome do projeto</title>
  </head>
  <body>
    ...
  </body>
</html>
```

## Ordem recomendada do `body`

1. Link de pular para conteúdo, quando a navegação inicial for relevante.
2. `header` global com marca e navegação principal.
3. `main` com o conteúdo único da página.
4. Seções internas com headings claros.
5. `aside`, quando houver conteúdo complementar real.
6. `footer` global com informações institucionais ou complementares.

```html
<body>
  <a href="#conteudo">Ir para o conteúdo</a>
  <header>...</header>
  <main id="conteudo">...</main>
  <footer>...</footer>
</body>
```

## Padrão de nomenclatura

- `id` deve ser único, descritivo e usado somente quando houver motivo: âncora, label, `aria-labelledby` ou referência específica.
- `name` deve representar claramente o dado enviado no formulário: `email`, `telefone`, `mensagem`, `turno`.
- Âncoras devem comunicar destino: `#contato`, `#beneficios`, `#perguntas-frequentes`.
- Evite nomes provisórios ou visuais como `box1`, `coisa`, `teste`, `azul`, `direita`.

```html
<!-- Ruim -->
<section id="secao1">
  <h2>Itens</h2>
</section>

<!-- Melhor -->
<section id="beneficios" aria-labelledby="beneficios-title">
  <h2 id="beneficios-title">Benefícios</h2>
</section>
```

## Uso responsável de comentários

Comentários devem explicar contexto, decisão, limitação ou ponto de manutenção. Eles não devem repetir o que a tag já diz.

```html
<!-- Bom: explica uma decisão de acessibilidade -->
<a href="#conteudo">Ir para o conteúdo</a>

<!-- Ruim: comentário óbvio -->
<!-- título -->
<h1>Manual HTML</h1>
```

## Critérios mínimos antes de commit

- Documento completo com `doctype`, idioma, `charset`, `viewport`, `title` e `description`.
- Estrutura do `body` previsível e semântica.
- Um `main` claro.
- Headings em ordem lógica.
- Links com textos descritivos.
- Imagens com `alt` adequado.
- Formulários com labels, `name`, tipos corretos e validação HTML útil.
- Nenhum uso de tabela para layout.
- Nenhum excesso de `br` para espaçamento.
- Nenhum avanço indevido para CSS ou JavaScript quando a tarefa é apenas HTML.

## O que reprova um HTML profissional

- Página sem `lang`, `viewport`, `title` ou `description`.
- Estrutura baseada apenas em `div` e classes visuais.
- Conteúdo principal fora de `main`.
- Headings fora de ordem por motivo visual.
- Imagens informativas sem `alt`.
- Campos sem labels conectados.
- Links “clique aqui” sem contexto.
- Botões simulados com `div` ou link sem necessidade.
- IDs duplicados.
- Código temporário, duplicado ou comentado sem justificativa.

## Exemplo de estrutura final aceitável

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Página de apresentação de um curso prático de HTML.">
    <link rel="icon" href="/favicon.ico">
    <title>Curso de HTML | Maleta Front-end</title>
  </head>
  <body>
    <a href="#conteudo">Ir para o conteúdo</a>

    <header>
      <a href="/" aria-label="Página inicial da Maleta Front-end">Maleta Front-end</a>
      <nav aria-label="Navegação principal">
        <a href="#beneficios">Benefícios</a>
        <a href="#conteudo-programatico">Conteúdo</a>
        <a href="#inscricao">Inscrição</a>
      </nav>
    </header>

    <main id="conteudo">
      <section aria-labelledby="hero-title">
        <h1 id="hero-title">Curso prático de HTML</h1>
        <p>Aprenda a criar páginas semânticas, acessíveis e fáceis de manter.</p>
        <a href="#inscricao">Quero me inscrever</a>
      </section>

      <section id="beneficios" aria-labelledby="beneficios-title">
        <h2 id="beneficios-title">Benefícios</h2>
        <article>
          <h3>Base sólida</h3>
          <p>Entenda estrutura, headings, links, imagens, tabelas e formulários.</p>
        </article>
      </section>

      <section id="inscricao" aria-labelledby="inscricao-title">
        <h2 id="inscricao-title">Inscrição</h2>
        <form action="/inscricao" method="post">
          <label for="email">E-mail</label>
          <input id="email" name="email" type="email" autocomplete="email" required>
          <button type="submit">Confirmar inscrição</button>
        </form>
      </section>
    </main>

    <footer>
      <p>&copy; 2026 Maleta Front-end.</p>
    </footer>
  </body>
</html>
```

## Padrão mínimo de qualidade

Um arquivo HTML só deve ser considerado pronto quando for compreensível sem CSS, possuir semântica coerente, atender acessibilidade básica, conter metadados essenciais, validar estruturalmente e permitir manutenção por outra pessoa sem adivinhação.
