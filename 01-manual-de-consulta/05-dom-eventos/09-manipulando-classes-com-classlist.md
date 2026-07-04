# Manipulando Classes com classList

`classList` controla classes sem sobrescrever todas as classes do elemento. É o caminho profissional para estados visuais como aberto, ativo, inválido, escondido e selecionado.

## add e remove

```js
mensagem.classList.add("mensagem--visivel");
mensagem.classList.remove("mensagem--erro");
```

`add` coloca uma classe. `remove` retira uma classe.

## toggle

`toggle` alterna: se a classe não existe, adiciona; se existe, remove.

```js
botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("menu--aberto");
});
```

## contains

`contains` verifica se a classe existe e retorna verdadeiro ou falso.

```js
if (menu.classList.contains("menu--aberto")) {
  botaoMenu.textContent = "Fechar menu";
}
```

## Classes versus style

Com classe, o CSS concentra a aparência. Com `style`, o JavaScript fica cheio de detalhes visuais. Prefira classes para manter responsabilidades separadas.

## Exemplo completo

```html
<p class="alerta">Preencha os dados.</p>
<button class="mostrar-alerta">Mostrar alerta</button>
```

```js
const alerta = document.querySelector(".alerta");
const mostrarAlerta = document.querySelector(".mostrar-alerta");

if (alerta && mostrarAlerta) {
  mostrarAlerta.addEventListener("click", function () {
    alerta.classList.toggle("alerta--ativo");
  });
}
```
