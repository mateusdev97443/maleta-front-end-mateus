# Booleans, comparações e lógica

Boolean é o tipo com apenas dois valores: `true` e `false`. Ele representa respostas de sim ou não.

## Comparação estrita

Use `===` para comparar valor e tipo. Use `!==` para diferente estrito.

```js
const idade = 18;

console.log(idade === 18);
console.log(idade !== 17);
```

`==` tenta converter tipos automaticamente, o que pode esconder erro.

```js
console.log("18" == 18); // true por coerção
console.log("18" === 18); // false porque os tipos diferem
```

## Operadores relacionais

```js
const nota = 7.5;

console.log(nota > 7);
console.log(nota < 10);
console.log(nota >= 7);
console.log(nota <= 10);
```

## Lógica com `&&`, `||` e `!`

```js
const usuarioAtivo = true;
const senhaCorreta = true;
const estoque = 4;
const idade = 20;

console.log(usuarioAtivo && senhaCorreta);
console.log(estoque > 0 || idade >= 18);
console.log(!usuarioAtivo);
```

## Exemplos de regra

```js
const podeComprar = idade >= 18 && estoque > 0;
const precisaRevisarNota = nota < 7;
const acessoConceitualPermitido = usuarioAtivo && senhaCorreta;

console.log(podeComprar);
console.log(precisaRevisarNota);
console.log(acessoConceitualPermitido);
```

## Boas práticas específicas

Nomeie booleans como perguntas ou estados: `estaDisponivel`, `usuarioAtivo`, `temEstoque`, `podeComprar`. Isso deixa o `if` quase uma frase em português.
