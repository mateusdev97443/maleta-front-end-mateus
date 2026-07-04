# Menu Simples com JavaScript

Um menu simples geralmente alterna uma classe para abrir e fechar a navegação. O JavaScript não precisa controlar cada detalhe visual; o CSS faz isso a partir da classe.

## Estrutura

```html
<button class="menu-botao" type="button">Abrir menu</button>
<nav class="menu-navegacao">
  <a href="#html">HTML</a>
  <a href="#css">CSS</a>
  <a href="#js">JavaScript</a>
</nav>
```

```js
const menuBotao = document.querySelector(".menu-botao");
const menuNavegacao = document.querySelector(".menu-navegacao");

if (menuBotao && menuNavegacao) {
  menuBotao.addEventListener("click", function () {
    menuNavegacao.classList.toggle("menu-navegacao--aberta");

    const menuAberto = menuNavegacao.classList.contains("menu-navegacao--aberta");
    menuBotao.textContent = menuAberto ? "Fechar menu" : "Abrir menu";
  });
}
```

## CSS simples

```css
.menu-navegacao { display: none; }
.menu-navegacao--aberta { display: block; }
```

## Erro comum

Alterar `display` direto no JavaScript em vários pontos. Uma classe deixa o estado do menu mais claro.
