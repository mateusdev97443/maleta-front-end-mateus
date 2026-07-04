# Formulários com JavaScript

Formulários conectam campos, botões e mensagens. Com JavaScript, você pode ler valores, validar entradas simples e mostrar feedback sem sair da página.

## Estrutura recomendada

```html
<form class="form-cadastro">
  <label>Nome
    <input class="campo-nome" type="text">
  </label>
  <p class="erro-nome"></p>
  <button type="submit">Cadastrar</button>
</form>
```

```js
const formCadastro = document.querySelector(".form-cadastro");
const campoNome = document.querySelector(".campo-nome");
const erroNome = document.querySelector(".erro-nome");

if (formCadastro && campoNome && erroNome) {
  formCadastro.addEventListener("submit", function (event) {
    event.preventDefault();

    if (campoNome.value.trim() === "") {
      erroNome.textContent = "Digite seu nome.";
      campoNome.classList.add("campo--erro");
      return;
    }

    erroNome.textContent = "Cadastro conferido.";
    campoNome.classList.remove("campo--erro");
  });
}
```

## Limpar erro ao corrigir

```js
campoNome.addEventListener("input", function () {
  if (campoNome.value.trim() !== "") {
    erroNome.textContent = "";
    campoNome.classList.remove("campo--erro");
  }
});
```

## Boa prática

Validação visual ajuda o usuário, mas não deve ser vista como proteção completa. Nesta fase, o foco é experiência na interface.
