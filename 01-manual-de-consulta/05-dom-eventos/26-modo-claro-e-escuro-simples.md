# Modo Claro e Escuro Simples

O modo claro/escuro é um bom exemplo de estado visual global controlado por classe. Nesta fase, a troca acontece apenas enquanto a página está aberta.

## HTML

```html
<button class="alternar-tema" type="button">Ativar tema escuro</button>
<main class="pagina">
  <h1>Manual Front-end</h1>
</main>
```

## CSS

```css
body {
  background: #ffffff;
  color: #222222;
}

body.tema-escuro {
  background: #181818;
  color: #f5f5f5;
}
```

## JavaScript

```js
const alternarTema = document.querySelector(".alternar-tema");

if (alternarTema) {
  alternarTema.addEventListener("click", function () {
    document.body.classList.toggle("tema-escuro");

    const escuroAtivo = document.body.classList.contains("tema-escuro");
    alternarTema.textContent = escuroAtivo ? "Ativar tema claro" : "Ativar tema escuro";
  });
}
```

## Boa prática

A classe fica no `body` porque o tema afeta a página inteira. Elementos internos podem receber estilos a partir desse estado global.
