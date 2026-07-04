# Numbers e operadores matemáticos

JavaScript usa o tipo `number` para números inteiros e decimais. Decimais usam ponto, não vírgula.

## Operações básicas

```js
const preco = 80;
const quantidade = 3;

console.log(preco + 10); // soma
console.log(preco - 5); // subtração
console.log(preco * quantidade); // multiplicação
console.log(preco / 2); // divisão
console.log(quantidade % 2); // resto
```

## Precedência e parênteses

Multiplicação e divisão são resolvidas antes de soma e subtração. Use parênteses para mostrar intenção.

```js
const resultadoConfuso = 10 + 5 * 2;
const resultadoClaro = (10 + 5) * 2;

console.log(resultadoConfuso);
console.log(resultadoClaro);
```

## Incremento e decremento

```js
let contador = 0;
contador++;
contador--;
```

Use com cuidado: para iniciantes, `contador = contador + 1` pode ser mais explícito.

## Cálculo de desconto

```js
const precoOriginal = 200;
const percentualDesconto = 0.15;
const valorDesconto = precoOriginal * percentualDesconto;
const precoFinal = precoOriginal - valorDesconto;

console.log(precoFinal);
```

## Cálculo de total

```js
const precoUnitario = 35;
const quantidadeComprada = 4;
const total = precoUnitario * quantidadeComprada;

console.log(total);
```

## Erros comuns

- Escrever `10,5` pensando em decimal; em JavaScript use `10.5`.
- Misturar string numérica com number.
- Esquecer parênteses em fórmulas com várias etapas.
