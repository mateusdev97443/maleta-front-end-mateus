# Arrays: fundamentos

Array é uma lista ordenada. Cada item tem um índice que começa em zero.

```js
const tecnologias = ["HTML", "CSS", "JavaScript"];

console.log(tecnologias[0]);
tecnologias[1] = "CSS3";
console.log(tecnologias.length);

tecnologias.push("Git");
tecnologias.pop();

for (const tecnologia of tecnologias) {
  console.log(tecnologia);
}

const projetos = [
  { nome: "Landing page", concluido: true },
  { nome: "Portfólio", concluido: false }
];
```

Use arrays quando houver vários valores da mesma natureza: tecnologias, notas, produtos ou tarefas.

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
