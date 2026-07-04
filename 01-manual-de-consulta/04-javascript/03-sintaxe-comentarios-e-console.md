# Sintaxe, comentários e console

Sintaxe é o conjunto de regras que torna o código compreensível para a linguagem. Pequenos detalhes como chaves, parênteses e aspas mudam completamente o resultado.

## Instruções e blocos

Uma instrução é uma ordem executável. Um bloco agrupa instruções entre chaves.

```js
const idade = 20;

if (idade >= 18) {
  console.log("Maior de idade");
  console.log("Pode continuar o cadastro");
}
```

## Ponto e vírgula

JavaScript consegue inserir ponto e vírgula em muitos casos, mas usá-lo ajuda o iniciante a enxergar onde uma instrução termina.

```js
const curso = "Front-end";
const fase = 5;
```

## Comentários úteis e comentários ruins

Comentário útil explica intenção ou uma regra de negócio.

```js
// Frete grátis apenas para compras a partir de 200 reais.
const compraTemFreteGratis = totalCompra >= 200;
```

Comentário ruim repete o óbvio.

```js
// Cria uma variável nome
const nome = "Mateus";
```

## Console como ferramenta de estudo

`console.log` mostra valores comuns. `console.warn` destaca um alerta. `console.error` simula ou destaca erro.

```js
const estoque = 2;

console.log("Estoque atual:", estoque);
console.warn("Estoque baixo");
console.error("Produto sem cadastro de preço");
```

## Exercício mental

Antes de rodar um código, responda: quais linhas criam valores? quais linhas decidem algo? quais linhas apenas mostram resultado?
