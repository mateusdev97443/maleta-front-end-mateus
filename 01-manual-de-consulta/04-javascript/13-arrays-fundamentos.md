# Arrays: fundamentos

Array é uma lista ordenada. Ele serve para guardar vários valores relacionados.

## Índice começa em zero

```js
const tecnologias = ["HTML", "CSS", "JavaScript"];

console.log(tecnologias[0]);
console.log(tecnologias[1]);
console.log(tecnologias[2]);
```

## Acessar, alterar e medir

```js
tecnologias[1] = "CSS moderno";
console.log(tecnologias.length);
```

## Adicionar e remover

```js
tecnologias.push("Git");
const ultima = tecnologias.pop();

console.log(tecnologias);
console.log(ultima);
```

## Arrays de tipos diferentes de estudo

```js
const notas = [8, 7.5, 9];
const projetos = [
  { nome: "Landing page", concluido: true },
  { nome: "Portfólio", concluido: false }
];
```

## Percorrer

```js
for (const nota of notas) {
  console.log(`Nota: ${nota}`);
}
```

## Erros comuns

- Tentar acessar `lista[lista.length]`, que está fora da lista.
- Confundir posição visual “primeiro item” com índice `0`.
- Guardar dados sem relação no mesmo array.
