# Document e Window

No navegador, `window` representa a janela e o ambiente geral. Dentro dele existe `document`, que representa a página carregada. Na maior parte das interações desta fase, o objeto mais usado será `document`.

## O papel de document

`document` é a porta de entrada para encontrar elementos da página.

```js
const titulo = document.querySelector("h1");
const cards = document.querySelectorAll(".card");
```

Com ele você seleciona, cria elementos e consulta informações do documento.

## O papel de window

`window` guarda informações do ambiente da janela, como tamanho visível e alguns eventos globais. Para iniciante, é importante saber que ele existe, mas não transformar tudo em evento global.

```js
console.log(window.innerWidth);
```

## Diferença prática

- Use `document` quando o assunto for a estrutura da página.
- Use `window` quando o assunto for a janela do navegador.

## Exemplo simples

```html
<p class="largura"></p>
```

```js
const largura = document.querySelector(".largura");

if (largura) {
  largura.textContent = `Largura visível: ${window.innerWidth}px`;
}
```

## Boa prática

Não use `window` como solução para tudo. Se a interação é em um botão, campo ou formulário, registre o evento no elemento correto. Isso deixa o código mais previsível.
