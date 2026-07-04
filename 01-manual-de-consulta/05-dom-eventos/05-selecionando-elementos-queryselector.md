# Selecionando Elementos com querySelector

`querySelector` seleciona o primeiro elemento que combina com um seletor CSS. Ele recebe uma string, exatamente como você escreveria um seletor no CSS: classe com ponto, id com jogo da velha, tag pelo nome.

## Exemplos de seleção

```html
<h1 id="titulo-principal">Manual DOM</h1>
<p class="descricao">Aprendendo seleção.</p>
<button>Continuar</button>
```

```js
const titulo = document.querySelector("#titulo-principal");
const descricao = document.querySelector(".descricao");
const primeiroBotao = document.querySelector("button");
```

## Retorna apenas um elemento

Se houver cinco botões, `document.querySelector("button")` retorna somente o primeiro encontrado na ordem do documento. Isso é ótimo quando existe um alvo único, mas perigoso quando você precisa mexer em vários itens.

## Pode retornar null

Quando nenhum elemento combina com o seletor, o resultado é `null`. Tentar acessar propriedade em `null` gera erro.

```js
const aviso = document.querySelector(".aviso");

if (aviso) {
  aviso.textContent = "Aviso encontrado.";
}
```

## Erro comum: esquecer o ponto da classe

```js
const cardErrado = document.querySelector("card");
const cardCerto = document.querySelector(".card");
```

`card` procura uma tag chamada `<card>`. `.card` procura uma classe.

## Quando usar

Use `querySelector` para título único, formulário único, botão principal, mensagem de erro específica ou qualquer elemento em que você espera apenas um resultado.
