# Loops: for, while e for...of

Loops existem para repetir uma ação sem copiar linhas. Todo loop precisa ter começo, avanço e parada.

## `for`

Use quando há contador ou quantidade conhecida.

```js
for (let contador = 1; contador <= 5; contador++) {
  console.log(`Item ${contador}`);
}
```

## `while`

Use quando a repetição depende de uma condição que pode mudar durante o processo.

```js
let tentativas = 0;

while (tentativas < 3) {
  console.log(`Tentativa ${tentativas + 1}`);
  tentativas++;
}
```

## `for...of`

Use para percorrer arrays de forma legível.

```js
const tecnologias = ["HTML", "CSS", "JavaScript"];

for (const tecnologia of tecnologias) {
  console.log(tecnologia);
}
```

## Loop infinito

```js
let contador = 1;

while (contador <= 3) {
  console.log(contador);
  contador++;
}
```

Sem `contador++`, a condição nunca mudaria.

## Erros comuns

- Usar `<=` quando deveria usar `<` ao percorrer índices.
- Esquecer incremento.
- Alterar o array enquanto percorre sem necessidade.
