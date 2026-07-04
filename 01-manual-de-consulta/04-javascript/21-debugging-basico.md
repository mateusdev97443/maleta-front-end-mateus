# Debugging básico

Debugging é investigar o motivo de um resultado inesperado. O objetivo não é adivinhar, mas coletar pistas.

## Leia a mensagem de erro

Uma mensagem geralmente informa o tipo do erro, o nome envolvido e a linha aproximada. Não ignore esses dados.

## Variável não definida

```js
const nome = "Mateus";
console.log(nome);
```

Se você escrever `console.log(nme)`, a linguagem indicará que `nme` não existe. Isso costuma ser erro de digitação.

## Tipo inesperado

```js
const preco = "100";
const desconto = 20;

console.log(typeof preco);
console.log(typeof desconto);
```

Se o cálculo ficar estranho, confira tipos antes de mudar a fórmula.

## Função sem retorno

```js
function calcularTotal(preco, quantidade) {
  preco * quantidade;
}

const total = calcularTotal(10, 3);
console.log(total); // undefined
```

A correção é usar `return`.

## Testar valores intermediários

```js
const preco = 100;
const percentual = 0.15;
const desconto = preco * percentual;

console.log("preco", preco);
console.log("percentual", percentual);
console.log("desconto", desconto);
console.log("final", preco - desconto);
```

## Método de investigação

Isole o menor trecho possível. Altere uma coisa por vez. Depois que entender a causa, limpe logs temporários.
