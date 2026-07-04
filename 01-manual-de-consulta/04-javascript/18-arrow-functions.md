# Arrow functions

Arrow function é uma sintaxe moderna para criar funções. Ela é útil em funções curtas e callbacks simples.

## Função tradicional x arrow

```js
function somarTradicional(a, b) {
  return a + b;
}

const somarArrow = (a, b) => {
  return a + b;
};
```

## Retorno explícito

```js
const calcularDesconto = (preco, percentual) => {
  const desconto = preco * percentual;
  return preco - desconto;
};
```

Use quando há mais de uma linha ou variável intermediária.

## Retorno implícito

```js
const dobrar = (numero) => numero * 2;
```

Funciona bem para expressões curtas.

## Quando usar

- Callbacks pequenos em `map`, `filter` e `find`.
- Funções auxiliares muito simples.
- Códigos em que a equipe já usa esse padrão.

## Quando evitar no início

Evite arrow function se ela deixar a leitura pior. Para aprender, função tradicional pode ser mais didática. O comportamento de `this` não será aprofundado nesta fase.
