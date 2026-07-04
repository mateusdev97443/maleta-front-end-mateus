# Event Object, target e preventDefault

Quando um evento acontece, o navegador entrega informações para a função. Esse objeto costuma ser chamado de `event`.

## event

```js
botao.addEventListener("click", function (event) {
  console.log(event);
});
```

Ele contém dados sobre o tipo de evento, elemento de origem e métodos úteis.

## event.target

`event.target` aponta para o elemento que originou o evento.

```html
<div class="opcoes">
  <button>Pequeno</button>
  <button>Médio</button>
  <button>Grande</button>
</div>
<p class="tamanho-escolhido"></p>
```

```js
const opcoes = document.querySelector(".opcoes");
const tamanhoEscolhido = document.querySelector(".tamanho-escolhido");

if (opcoes && tamanhoEscolhido) {
  opcoes.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      tamanhoEscolhido.textContent = `Tamanho: ${event.target.textContent}`;
    }
  });
}
```

## preventDefault

`preventDefault` impede o comportamento padrão. Em formulários simples, isso evita recarregamento enquanto validamos e mostramos feedback.

## Cuidado

Não use `preventDefault` sem motivo. Ele deve resolver um comportamento padrão que atrapalha a interação planejada.
