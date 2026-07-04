# Alterando Conteúdo de Elementos

Alterar conteúdo é mudar o que aparece na tela depois que a página já carregou. A forma mais segura para texto é `textContent`.

## Alterando mensagem de status

```html
<p class="status-compra">Nenhum item selecionado.</p>
<button class="selecionar-item">Selecionar camiseta</button>
```

```js
const statusCompra = document.querySelector(".status-compra");
const selecionarItem = document.querySelector(".selecionar-item");

if (statusCompra && selecionarItem) {
  selecionarItem.addEventListener("click", function () {
    statusCompra.textContent = "Camiseta selecionada.";
  });
}
```

## Quando usar innerHTML

`innerHTML` insere marcação. Só use quando você controla totalmente o conteúdo e realmente precisa criar tags como parte da string. Mesmo assim, muitas vezes `createElement` é mais organizado.

## Forma recomendada

Para mensagens, labels, contadores e feedbacks, use `textContent`. Para estruturas novas, prefira criar elementos com `createElement`.

## Erro comum

Usar `innerHTML` para inserir qualquer texto digitado por usuário. Isso é arriscado e desnecessário para validações simples. Em campo de preview, use `textContent`.
