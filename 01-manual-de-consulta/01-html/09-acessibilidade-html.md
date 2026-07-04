# 09 — Acessibilidade no HTML

Acessibilidade no HTML significa criar uma estrutura que possa ser compreendida e operada por pessoas com diferentes formas de navegação, leitura e interação. A base é usar elementos nativos corretamente antes de adicionar soluções complexas.

## Landmarks

Landmarks são regiões importantes da página que ajudam usuários de leitores de tela a navegar rapidamente.

- `header`: cabeçalho da página ou de uma seção.
- `nav`: navegação importante.
- `main`: conteúdo principal da página.
- `aside`: conteúdo complementar.
- `footer`: rodapé da página ou seção.

```html
<header>...</header>
<nav aria-label="Navegação principal">...</nav>
<main id="conteudo">...</main>
<footer>...</footer>
```

Se houver mais de um `nav`, diferencie com `aria-label`, como “Navegação principal” e “Links do rodapé”.

## Headings

Headings formam o mapa do conteúdo. Eles devem seguir hierarquia lógica, não tamanho visual.

```html
<h1>Guia de HTML</h1>
<h2>Formulários</h2>
<h3>Labels</h3>
<h2>Acessibilidade</h2>
```

Evite pular de `h1` para `h4` apenas porque o visual parece adequado. Ajuste visual pertence ao CSS, não à escolha da tag.

## Texto alternativo de imagens

### Alt bom

```html
<img src="produto.jpg" alt="Mochila preta com bolso frontal e alças acolchoadas" width="800" height="600">
```

Descreve a informação relevante da imagem.

### Alt ruim

```html
<img src="produto.jpg" alt="imagem" width="800" height="600">
```

“Imagem” não informa nada útil.

### Imagem decorativa

```html
<img src="linha-decorativa.svg" alt="" width="120" height="8">
```

Use `alt=""` quando a imagem for puramente decorativa e não acrescentar informação.

## Labels em formulários

Todo campo deve ter nome acessível. O padrão recomendado é `label` conectado por `for` e `id`.

```html
<label for="email">E-mail</label>
<input id="email" name="email" type="email" autocomplete="email" required>
```

Não dependa de `placeholder`, porque ele desaparece durante a digitação e pode não ser suficiente para tecnologias assistivas.

## Links descritivos

O texto do link deve fazer sentido fora do contexto imediato.

```html
<!-- Ruim -->
<a href="/manual-html">Clique aqui</a>

<!-- Melhor -->
<a href="/manual-html">Ler o manual completo de HTML</a>
```

## Botões reais

Use `button` para ações e `a` para navegação. Não transforme `div` em botão.

```html
<button type="button">Abrir menu</button>
<a href="/contato">Ir para contato</a>
```

## Ordem do HTML e navegação por teclado

A ordem do HTML deve seguir a ordem lógica de leitura e foco. Pessoas que navegam por teclado percorrem links, botões e campos na sequência em que aparecem no documento.

Boas práticas:

- Coloque navegação antes do conteúdo principal.
- Use link de pular para conteúdo em páginas com menus longos.
- Evite `tabindex` positivo, pois cria uma ordem artificial difícil de manter.
- Não esconda conteúdo focável fora da tela sem controle adequado.

```html
<a href="#conteudo">Ir para o conteúdo</a>
<header>...</header>
<main id="conteudo">...</main>
```

## Uso correto e cauteloso de ARIA

ARIA deve complementar HTML, não substituir HTML correto.

Use com cautela:

```html
<nav aria-label="Navegação principal">...</nav>
<section aria-labelledby="recursos-title">
  <h2 id="recursos-title">Recursos</h2>
</section>
```

Evite adicionar `role` desnecessário a elementos que já têm papel nativo:

```html
<!-- Desnecessário -->
<button role="button" type="button">Abrir</button>
```

Regra prática: se existe elemento HTML nativo para a função, use o elemento nativo.

## Exemplo de HTML acessível

```html
<header>
  <a href="#conteudo">Ir para o conteúdo</a>
  <nav aria-label="Navegação principal">
    <a href="/">Início</a>
    <a href="/cursos">Cursos</a>
    <a href="/contato">Contato</a>
  </nav>
</header>

<main id="conteudo">
  <section aria-labelledby="curso-title">
    <h1 id="curso-title">Curso de HTML semântico</h1>
    <p>Aprenda a criar páginas com estrutura clara e acessível.</p>
    <a href="/inscricao">Fazer inscrição no curso de HTML</a>
  </section>

  <form action="/newsletter" method="post">
    <label for="newsletter-email">Receba novidades por e-mail</label>
    <input id="newsletter-email" name="email" type="email" autocomplete="email" required>
    <button type="submit">Assinar newsletter</button>
  </form>
</main>
```

## Checklist forte de acessibilidade

- [ ] Existe um `main` único e claro?
- [ ] Landmarks importantes estão presentes e bem nomeados?
- [ ] Headings seguem uma hierarquia lógica?
- [ ] O `h1` comunica o assunto principal da página?
- [ ] Imagens informativas têm `alt` específico?
- [ ] Imagens decorativas usam `alt=""`?
- [ ] Campos de formulário têm labels conectados?
- [ ] Grupos de radio/checkbox usam `fieldset` e `legend`?
- [ ] Links têm textos descritivos?
- [ ] Ações usam `button` real?
- [ ] Navegação por teclado segue ordem previsível?
- [ ] Não há `tabindex` positivo sem justificativa muito forte?
- [ ] ARIA foi usada apenas para complementar, não para mascarar HTML incorreto?
