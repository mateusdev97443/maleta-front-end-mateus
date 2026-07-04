# Métodos básicos de array

Métodos de array ajudam a adicionar, remover, procurar e transformar itens.

```js
const tecnologias = ["HTML", "CSS"];
tecnologias.push("JavaScript");
tecnologias.pop();
tecnologias.unshift("Git");
tecnologias.shift();

console.log(tecnologias.includes("CSS"));
console.log(tecnologias.indexOf("HTML"));
console.log(tecnologias.join(" | "));
console.log(tecnologias.slice(0, 1));

const numeros = [1, 2, 3];
const dobrados = numeros.map((numero) => numero * 2);
const maioresQueUm = numeros.filter((numero) => numero > 1);
const encontrado = numeros.find((numero) => numero === 2);
```

`push`, `pop`, `shift` e `unshift` alteram o array original. `slice`, `map`, `filter` e `find` retornam resultado sem precisar alterar a lista original.

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
