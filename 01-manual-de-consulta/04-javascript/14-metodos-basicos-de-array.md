# Métodos básicos de array

Métodos de array são ferramentas prontas para adicionar, remover, procurar e transformar itens.

## Métodos que alteram o original

```js
const tarefas = ["estudar HTML", "revisar CSS"];

tarefas.push("praticar JS");
tarefas.unshift("abrir editor");
tarefas.pop();
tarefas.shift();

console.log(tarefas);
```

`push`, `pop`, `shift` e `unshift` modificam o array original.

## Procurar e juntar

```js
const tecnologias = ["HTML", "CSS", "JavaScript"];

console.log(tecnologias.includes("CSS"));
console.log(tecnologias.indexOf("JavaScript"));
console.log(tecnologias.join(" -> "));
```

## Recortar sem alterar

```js
const primeiras = tecnologias.slice(0, 2);
console.log(primeiras);
console.log(tecnologias);
```

## `map`, `filter` e `find` introdutórios

```js
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map((numero) => numero * 2);
const pares = numeros.filter((numero) => numero % 2 === 0);
const primeiroMaiorQueDois = numeros.find((numero) => numero > 2);
```

`map` cria lista transformada, `filter` cria lista filtrada e `find` retorna um item.

## Cuidado

Não use `map` apenas para imprimir; se a intenção é percorrer sem criar novo array, um loop pode ser mais honesto para iniciante.
