# Componentes Simples com DOM

Um componente simples é uma parte da interface com estrutura, comportamento e estado visual. Nesta fase, não vamos criar sistemas complexos: apenas blocos como card, aviso, aba, contador e painel.

## Exemplo: card favorito

```html
<article class="card-ferramenta">
  <h2>DevTools</h2>
  <button class="favoritar">Favoritar</button>
</article>
```

```js
const cardFerramenta = document.querySelector(".card-ferramenta");
const favoritar = document.querySelector(".favoritar");

if (cardFerramenta && favoritar) {
  favoritar.addEventListener("click", function () {
    cardFerramenta.classList.toggle("card-ferramenta--favorito");

    const estaFavorito = cardFerramenta.classList.contains("card-ferramenta--favorito");
    favoritar.textContent = estaFavorito ? "Remover favorito" : "Favoritar";
  });
}
```

## O que torna isso um componente

- Tem HTML próprio.
- Possui estado visual: favorito ou não.
- Tem evento que altera esse estado.
- Dá retorno ao usuário pelo texto do botão.

## Boa prática

Comece pequeno. Um componente simples bem feito vale mais do que uma tela grande difícil de manter.
