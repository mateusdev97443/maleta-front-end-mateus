# 13 — Snippets HTML

Use estes snippets como ponto de partida. Ajuste textos, caminhos, atributos e hierarquia ao contexto real da página.

## 1. Estrutura base completa

Base mínima profissional para iniciar uma página HTML em português do Brasil.

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Descrição objetiva da página para busca e compartilhamento.">
    <link rel="icon" href="/favicon.ico">
    <title>Título específico da página</title>
  </head>
  <body>
    <main id="conteudo">
      <h1>Título principal</h1>
      <p>Conteúdo inicial da página.</p>
    </main>
  </body>
</html>
```

## 2. Header com navegação principal

Use quando a página precisa de identidade e links principais de navegação.

```html
<header>
  <a href="/" aria-label="Página inicial da Maleta Front-end">
    Maleta Front-end
  </a>

  <nav aria-label="Navegação principal">
    <a href="/manual">Manual</a>
    <a href="/projetos">Projetos</a>
    <a href="/contato">Contato</a>
  </nav>
</header>
```

## 3. Hero semântico

Use para a primeira chamada de uma landing page ou página institucional.

```html
<section aria-labelledby="hero-title">
  <h1 id="hero-title">Aprenda HTML para projetos reais</h1>
  <p>Estude estrutura, semântica e acessibilidade com exemplos práticos.</p>
  <a href="#inscricao">Começar agora</a>
</section>
```

## 4. Card semântico

Use `article` quando o card representa um conteúdo independente.

```html
<article>
  <h2>Checklist de HTML</h2>
  <p>Revise estrutura, acessibilidade, SEO básico e manutenção antes do commit.</p>
  <a href="/checklist-html">Abrir checklist de HTML</a>
</article>
```

## 5. Lista de recursos

Use lista quando os itens pertencem a um mesmo conjunto.

```html
<section aria-labelledby="recursos-title">
  <h2 id="recursos-title">Recursos do manual</h2>
  <ul>
    <li>Explicações diretas para consulta rápida.</li>
    <li>Exemplos aplicáveis em projetos reais.</li>
    <li>Checklists para revisão antes da entrega.</li>
  </ul>
</section>
```

## 6. Tabela acessível

Use tabela apenas para dados tabulares. Inclua `caption` e `scope`.

```html
<table>
  <caption>Comparativo de planos do curso</caption>
  <thead>
    <tr>
      <th scope="col">Plano</th>
      <th scope="col">Recursos</th>
      <th scope="col">Preço</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Básico</th>
      <td>Acesso às aulas gravadas</td>
      <td>R$ 29/mês</td>
    </tr>
    <tr>
      <th scope="row">Pro</th>
      <td>Aulas, exercícios e revisão de projeto</td>
      <td>R$ 79/mês</td>
    </tr>
  </tbody>
</table>
```

## 7. Formulário de contato completo

Inclui `fieldset`, `legend`, labels conectados, validação HTML e botão específico.

```html
<form action="/contato" method="post">
  <fieldset>
    <legend>Fale com a equipe</legend>

    <label for="nome">Nome</label>
    <input id="nome" name="nome" type="text" autocomplete="name" required minlength="2">

    <label for="email">E-mail</label>
    <input id="email" name="email" type="email" autocomplete="email" required>

    <label for="mensagem">Mensagem</label>
    <textarea id="mensagem" name="mensagem" rows="6" required minlength="10"></textarea>

    <button type="submit">Enviar mensagem</button>
  </fieldset>
</form>
```

## 8. Login simples

Use `autocomplete` adequado para melhorar preenchimento e acessibilidade.

```html
<form action="/login" method="post">
  <fieldset>
    <legend>Entrar na conta</legend>

    <label for="login-email">E-mail</label>
    <input id="login-email" name="email" type="email" autocomplete="username" required>

    <label for="login-senha">Senha</label>
    <input id="login-senha" name="senha" type="password" autocomplete="current-password" required>

    <button type="submit">Entrar</button>
  </fieldset>
</form>
```

## 9. Imagem com `figure`

Use quando a imagem precisa de legenda associada.

```html
<figure>
  <img
    src="dashboard-html.png"
    alt="Painel com indicadores de validação HTML e acessibilidade"
    width="960"
    height="540"
  >
  <figcaption>Exemplo de painel usado para revisão de qualidade.</figcaption>
</figure>
```

## 10. Iframe acessível

Sempre forneça `title` para explicar o conteúdo incorporado.

```html
<iframe
  src="https://www.youtube.com/embed/ID_DO_VIDEO"
  title="Aula introdutória sobre HTML semântico"
  loading="lazy"
  allowfullscreen
></iframe>
```

## 11. Footer profissional

Use para informações complementares, direitos e links institucionais.

```html
<footer>
  <p>&copy; 2026 Maleta Front-end.</p>

  <nav aria-label="Links institucionais">
    <a href="/privacidade">Política de privacidade</a>
    <a href="/termos">Termos de uso</a>
    <a href="/contato">Contato</a>
  </nav>
</footer>
```

## 12. Página institucional simples

Exemplo completo e bem formatado para uma página pequena sem avançar para CSS.

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Consultoria fictícia para organização de estudos Front-end.">
    <title>Estudo Front-end | Consultoria</title>
  </head>
  <body>
    <header>
      <a href="/" aria-label="Página inicial">Estudo Front-end</a>
      <nav aria-label="Navegação principal">
        <a href="#sobre">Sobre</a>
        <a href="#servicos">Serviços</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>

    <main id="conteudo">
      <section id="sobre" aria-labelledby="sobre-title">
        <h1 id="sobre-title">Consultoria para estudos Front-end</h1>
        <p>Organize sua rotina de estudos com fundamentos, prática e revisão.</p>
      </section>

      <section id="servicos" aria-labelledby="servicos-title">
        <h2 id="servicos-title">Serviços</h2>
        <article>
          <h3>Plano de estudos</h3>
          <p>Roteiro semanal com exercícios e projetos guiados.</p>
        </article>
      </section>

      <section id="contato" aria-labelledby="contato-title">
        <h2 id="contato-title">Contato</h2>
        <p>Envie uma mensagem para contato@exemplo.com.</p>
      </section>
    </main>

    <footer>
      <p>&copy; 2026 Estudo Front-end.</p>
    </footer>
  </body>
</html>
```
