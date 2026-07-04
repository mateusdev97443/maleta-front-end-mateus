# Introdução aos Eventos

Evento é algo que acontece no navegador: clique, digitação, envio de formulário, foco em campo, mudança de seleção. O JavaScript pode escutar esses acontecimentos e executar uma função.

## Evento não é ação automática do JavaScript

O JavaScript não adivinha o que fazer quando alguém clica. Você registra uma função para aquele evento.

```js
botao.addEventListener("click", function () {
  console.log("O botão foi clicado.");
});
```

## Eventos comuns nesta fase

- `click`: botões, cards, menus.
- `input`: digitação em campos.
- `submit`: envio de formulário.

## Elemento certo, evento certo

Um erro comum é registrar `click` em tudo. Em formulário, o evento principal costuma ser `submit`. Em campo de texto, `input` costuma ser melhor do que clique.

## Exemplo de escolha correta

```html
<input class="campo-apelido" type="text">
<p class="preview-apelido"></p>
```

```js
const campoApelido = document.querySelector(".campo-apelido");
const previewApelido = document.querySelector(".preview-apelido");

if (campoApelido && previewApelido) {
  campoApelido.addEventListener("input", function () {
    previewApelido.textContent = campoApelido.value;
  });
}
```
