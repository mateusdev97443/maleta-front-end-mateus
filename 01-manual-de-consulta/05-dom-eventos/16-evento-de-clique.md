# Evento de Clique

O evento `click` acontece quando o usuário ativa um elemento com clique ou ação equivalente. É muito usado em botões, cards, abas e menus.

## Exemplo: card selecionável

```html
<article class="card-plano">Plano básico</article>
<article class="card-plano">Plano avançado</article>
<article class="card-plano">Plano profissional</article>
```

```js
const cardsPlano = document.querySelectorAll(".card-plano");

cardsPlano.forEach(function (cardClicado) {
  cardClicado.addEventListener("click", function () {
    cardsPlano.forEach(function (card) {
      card.classList.remove("card-plano--ativo");
    });

    cardClicado.classList.add("card-plano--ativo");
  });
});
```

## Raciocínio

Primeiro todos os cards perdem a classe ativa. Depois apenas o card clicado recebe a classe. Isso cria seleção única.

## Boa prática

Para clique, use elementos naturalmente interativos quando possível, como `button`. Se um card inteiro for clicável, deixe pistas visuais e cuide da acessibilidade em estudos futuros.
