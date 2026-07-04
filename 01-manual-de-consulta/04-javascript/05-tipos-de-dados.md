# Tipos de dados

Tipo de dado é a categoria de um valor. Entender tipos evita comparações erradas e decisões confusas.

## Tipos principais

```js
const nome = "Mateus"; // string
const idade = 22; // number
const estaEstudando = true; // boolean
const complemento = null; // ausência intencional
let telefone; // undefined
const aluno = { nome: "Mateus", fase: 5 }; // object
const tecnologias = ["HTML", "CSS", "JavaScript"]; // array
function saudar() { return "Olá"; } // function
```

## Valor x tipo

`"22"` e `22` parecem parecidos, mas têm tipos diferentes. O primeiro é texto; o segundo é número.

```js
console.log(typeof "22");
console.log(typeof 22);
```

## `typeof` e `Array.isArray`

`typeof` ajuda a investigar. Arrays, porém, são uma estrutura do tipo object por baixo; por isso use `Array.isArray`.

```js
console.log(typeof aluno);
console.log(typeof tecnologias);
console.log(Array.isArray(tecnologias));
```

## Exemplos práticos

- Nome do usuário: string.
- Preço do produto: number.
- Produto disponível: boolean.
- Endereço complementar não informado por decisão: null.
- Lista de notas: array.
- Projeto com várias propriedades: object.

## Cuidado específico

Não trate número digitado como número real sem verificar. Em muitos contextos, dados chegam como string e precisam ser compreendidos antes de cálculo.
