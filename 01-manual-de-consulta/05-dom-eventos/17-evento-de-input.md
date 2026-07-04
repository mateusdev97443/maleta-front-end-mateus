# Evento de Input

O evento `input` acontece sempre que o valor de um campo muda por digitação, colagem ou limpeza. Ele é ideal para previews e validações simples enquanto o usuário escreve.

## Preview de nome

```html
<label for="nome">Nome</label>
<input id="nome" class="campo-nome" type="text">
<p class="preview-nome">Seu nome aparecerá aqui.</p>
```

```js
const campoNome = document.querySelector(".campo-nome");
const previewNome = document.querySelector(".preview-nome");

if (campoNome && previewNome) {
  campoNome.addEventListener("input", function () {
    const nomeDigitado = campoNome.value.trim();
    previewNome.textContent = nomeDigitado || "Seu nome aparecerá aqui.";
  });
}
```

## Por que trim

`trim` remove espaços no começo e no fim. Assim, um campo com apenas espaços pode ser tratado como vazio.

## Erro comum

Usar `textContent` para ler campo de formulário. Campos usam `value`; elementos de texto usam `textContent`.
