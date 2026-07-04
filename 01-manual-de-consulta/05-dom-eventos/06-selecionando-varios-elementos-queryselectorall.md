# Selecionando Vários Elementos com querySelectorAll

`querySelectorAll` seleciona todos os elementos que combinam com o seletor e retorna uma `NodeList`. Essa lista pode ser percorrida com `forEach`, mas ela não é um elemento único.

## Exemplo com cards

```html
<article class="card">HTML</article>
<article class="card">CSS</article>
<article class="card">JavaScript</article>
```

```js
const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
  card.classList.add("card--preparado");
});
```

## Aplicando evento em vários botões

```html
<button class="filtro" data-categoria="html">HTML</button>
<button class="filtro" data-categoria="css">CSS</button>
<button class="filtro" data-categoria="js">JS</button>
<p class="resultado-filtro">Escolha uma categoria.</p>
```

```js
const botoesFiltro = document.querySelectorAll(".filtro");
const resultadoFiltro = document.querySelector(".resultado-filtro");

if (resultadoFiltro) {
  botoesFiltro.forEach(function (botao) {
    botao.addEventListener("click", function () {
      resultadoFiltro.textContent = `Categoria: ${botao.textContent}`;
    });
  });
}
```

## Erro comum

```js
const botoes = document.querySelectorAll(".filtro");
botoes.addEventListener("click", function () {});
```

Isso falha porque `botoes` é uma lista. O evento deve ser registrado em cada item da lista.

## Quando usar

Use quando a página tem vários itens equivalentes: cards, botões de filtro, links de menu, perguntas de FAQ ou itens de lista.
