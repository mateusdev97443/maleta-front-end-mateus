# O que é o DOM

DOM significa Document Object Model. Em português prático: é o modelo em forma de objetos que o navegador cria para representar a página. O arquivo HTML é o texto escrito pelo desenvolvedor; o DOM é a estrutura viva que o navegador monta e que o JavaScript consegue acessar.

## HTML escrito e DOM interpretado

Imagine este HTML:

```html
<article class="card">
  <h2>Título do card</h2>
  <p>Descrição do conteúdo.</p>
</article>
```

Depois de carregar a página, o navegador transforma esse texto em objetos internos. O JavaScript não edita diretamente o arquivo `.html` salvo no projeto; ele altera a representação em memória. Por isso, ao recarregar a página, alterações feitas apenas pelo JavaScript somem.

## O DOM como ponte

O DOM permite que o JavaScript faça perguntas e ações como:

- existe um elemento com a classe `.card`?
- qual texto está dentro do parágrafo?
- devo adicionar a classe `.destaque`?
- preciso criar um novo item na lista?

```js
const card = document.querySelector(".card");

if (card) {
  card.classList.add("card--destaque");
}
```

## O que é um elemento no DOM

Um elemento é uma parte da página, como `h1`, `p`, `button`, `input`, `img` ou `form`. Cada elemento possui propriedades e métodos. Por exemplo, um parágrafo tem `textContent`, um link tem `href`, uma imagem tem `src` e todo elemento pode ter `classList`.

## Erro comum

Achar que mudar o DOM altera o arquivo original. Não altera. O JavaScript muda a página carregada naquele momento no navegador. Para mudar o código fonte, você edita os arquivos do projeto.
