# 01 — Estrutura base de documento HTML

## Estrutura mínima recomendada

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Descrição clara da página em até 160 caracteres.">
    <title>Título específico da página</title>
  </head>
  <body>
    <!-- Conteúdo visível da página -->
  </body>
</html>
```

## Papel de cada parte

- `<!doctype html>` informa ao navegador que o documento usa HTML moderno.
- `<html lang="pt-BR">` define o idioma principal e ajuda leitores de tela, tradução e busca.
- `<head>` guarda configurações, metadados, título e relações com recursos externos.
- `<body>` contém o conteúdo visível e interativo da página.
- `<meta charset="UTF-8">` permite acentos, cedilha e caracteres especiais corretamente.
- `<meta name="viewport">` prepara a página para telas móveis.
- `<title>` aparece na aba do navegador, favoritos e resultados de busca.
- `meta description` resume a página para mecanismos de busca e compartilhamentos.

## Comentários

Use comentários para explicar decisões, não para narrar o óbvio.

```html
<!-- Navegação principal usada em todas as páginas institucionais -->
<nav aria-label="Navegação principal">
  <a href="/">Início</a>
</nav>
```

## Organização básica

Uma página profissional costuma seguir esta ordem dentro do `body`:

1. Link de pular para conteúdo, quando necessário.
2. `header` com identidade e navegação.
3. `main` com o conteúdo único da página.
4. Seções internas com títulos claros.
5. `footer` com dados complementares.

## Exemplo completo organizado

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Página institucional da Maleta Front-end.">
    <title>Maleta Front-end | Guia de estudos</title>
  </head>
  <body>
    <header>
      <nav aria-label="Navegação principal">
        <a href="#conteudo">Ir para o conteúdo</a>
        <a href="/">Início</a>
      </nav>
    </header>

    <main id="conteudo">
      <h1>Maleta Front-end</h1>
      <p>Guia prático para estudar e construir interfaces.</p>
    </main>

    <footer>
      <p>&copy; 2026 Maleta Front-end.</p>
    </footer>
  </body>
</html>
```

## Checklist rápido

- [ ] Existe `doctype`?
- [ ] O `html` tem `lang="pt-BR"`?
- [ ] O `charset` está no início do `head`?
- [ ] Existe `viewport`?
- [ ] O `title` é específico?
- [ ] A `meta description` descreve a página?
- [ ] O `body` tem estrutura previsível?
