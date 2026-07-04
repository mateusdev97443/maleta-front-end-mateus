# Accordion Simples

Accordion é um bloco em que uma pergunta revela ou esconde uma resposta. É comum em FAQ, dúvidas frequentes e detalhes de produto.

## HTML

```html
<div class="faq-item">
  <button class="faq-pergunta" type="button">O que é DOM?</button>
  <p class="faq-resposta">É a representação da página criada pelo navegador.</p>
</div>
```

## JavaScript

```js
const perguntas = document.querySelectorAll(".faq-pergunta");

perguntas.forEach(function (pergunta) {
  pergunta.addEventListener("click", function () {
    const item = pergunta.closest(".faq-item");

    if (item) {
      item.classList.toggle("faq-item--aberto");
    }
  });
});
```

## CSS simples

```css
.faq-resposta { display: none; }
.faq-item--aberto .faq-resposta { display: block; }
```

## Por que usar closest

`closest` procura o ancestral mais próximo que combina com o seletor. Assim, a pergunta altera apenas o item de FAQ ao qual pertence.

## Cuidado

Não selecione uma única `.faq-resposta` global se existem várias respostas. Cada pergunta precisa controlar seu próprio bloco.
