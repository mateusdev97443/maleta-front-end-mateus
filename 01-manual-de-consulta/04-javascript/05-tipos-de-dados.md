# Tipos de dados

Tipo de dado define a natureza de um valor. Valor é o conteúdo; tipo é a categoria desse conteúdo.

```js
const nome = "Mateus"; // string
const idade = 22; // number
const estaEstudando = true; // boolean
const endereco = null; // ausência intencional
let telefone; // undefined
const projeto = { nome: "Maleta" }; // object
const tecnologias = ["HTML", "CSS", "JS"]; // array
function saudar() { return "Olá"; } // function

console.log(typeof nome);
console.log(typeof idade);
console.log(Array.isArray(tecnologias));
```

`typeof` ajuda a investigar valores, mas arrays aparecem como `object`; por isso use `Array.isArray` para confirmar listas.

## Quando usar

Use este conhecimento quando precisar transformar uma ideia em passos lógicos claros, testar valores no console e preparar código JavaScript básico para projetos Front-end futuros.

## Erros comuns

- Copiar código sem entender o papel de cada linha.
- Misturar muitos assuntos ao mesmo tempo.
- Ignorar mensagens do console.
- Usar nomes vagos como `x`, `coisa` ou `dados` sem contexto.

## Boas práticas

- Prefira clareza em vez de código curto demais.
- Teste cada pequena parte com valores fixos.
- Use indentação consistente.
- Explique a intenção quando um comentário realmente ajudar.
