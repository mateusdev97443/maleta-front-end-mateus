# Mensagens de Erro e Feedback Visual

Feedback visual explica o que aconteceu. Sem feedback, o usuário clica, digita ou envia e fica sem saber se a ação funcionou.

## Mensagem clara

Uma boa mensagem diz o problema e sugere correção.

- Ruim: “Erro”.
- Melhor: “Digite seu nome antes de continuar.”

## Exemplo com classe visual

```html
<input class="campo-usuario" type="text">
<p class="feedback-usuario" aria-live="polite"></p>
```

```js
const campoUsuario = document.querySelector(".campo-usuario");
const feedbackUsuario = document.querySelector(".feedback-usuario");

function mostrarErroUsuario() {
  feedbackUsuario.textContent = "Digite um usuário.";
  feedbackUsuario.classList.add("feedback--erro");
  campoUsuario.classList.add("campo--erro");
}
```

## Limpar feedback

```js
function limparErroUsuario() {
  feedbackUsuario.textContent = "";
  feedbackUsuario.classList.remove("feedback--erro");
  campoUsuario.classList.remove("campo--erro");
}
```

## Boa prática

Não dependa apenas de cor. Texto claro ajuda mais pessoas e facilita depuração manual.
