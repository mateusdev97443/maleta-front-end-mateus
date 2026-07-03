# 13 — Snippets HTML

## Estrutura HTML base

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Descrição objetiva da página.">
    <title>Título da página</title>
  </head>
  <body>
    <main>
      <h1>Conteúdo principal</h1>
    </main>
  </body>
</html>
```

## Header com nav

```html
<header>
  <a href="/" aria-label="Página inicial">Marca</a>
  <nav aria-label="Navegação principal">
    <a href="/sobre">Sobre</a>
    <a href="/servicos">Serviços</a>
    <a href="/contato">Contato</a>
  </nav>
</header>
```

## Seção hero

```html
<section aria-labelledby="hero-title">
  <h1 id="hero-title">Aprenda Front-end com prática</h1>
  <p>Estude fundamentos e aplique em projetos reais.</p>
  <a href="#conteudos">Ver conteúdos</a>
</section>
```

## Card semântico

```html
<article>
  <h2>HTML semântico</h2>
  <p>Estruture páginas com significado e acessibilidade.</p>
  <a href="/html-semantico">Ler guia</a>
</article>
```

## Lista de recursos

```html
<ul>
  <li>Checklist de revisão</li>
  <li>Snippets reutilizáveis</li>
  <li>Exercícios progressivos</li>
</ul>
```

## Tabela acessível

```html
<table>
  <caption>Agenda de estudos</caption>
  <thead><tr><th scope="col">Dia</th><th scope="col">Tema</th></tr></thead>
  <tbody><tr><th scope="row">Segunda</th><td>HTML</td></tr></tbody>
</table>
```

## Formulário de contato

```html
<form action="/contato" method="post">
  <label for="email">E-mail</label>
  <input id="email" name="email" type="email" autocomplete="email" required>
  <button type="submit">Enviar</button>
</form>
```

## Imagem com figure

```html
<figure>
  <img src="interface.png" alt="Tela inicial de um painel administrativo" width="800" height="450">
  <figcaption>Exemplo de interface para análise semântica.</figcaption>
</figure>
```

## Vídeo incorporado

```html
<iframe src="https://www.youtube.com/embed/ID" title="Aula introdutória de HTML" loading="lazy" allowfullscreen></iframe>
```

## Footer profissional

```html
<footer>
  <p>&copy; 2026 Nome do Projeto.</p>
  <nav aria-label="Links institucionais">
    <a href="/privacidade">Privacidade</a>
    <a href="/termos">Termos</a>
  </nav>
</footer>
```

## Página institucional simples

```html
<header><nav aria-label="Principal"><a href="#sobre">Sobre</a><a href="#contato">Contato</a></nav></header>
<main>
  <section id="sobre" aria-labelledby="sobre-title"><h1 id="sobre-title">Empresa Exemplo</h1><p>Solução simples para negócios locais.</p></section>
  <section id="contato" aria-labelledby="contato-title"><h2 id="contato-title">Contato</h2><p>contato@exemplo.com</p></section>
</main>
<footer><p>&copy; 2026 Empresa Exemplo.</p></footer>
```
