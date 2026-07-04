# Erros comuns em JavaScript

Este capítulo reúne falhas frequentes, sintomas, causas e correções recomendadas.

## 1 — esquecer aspas em string

### Sintoma

O código falha, retorna valor inesperado ou fica difícil de manter.

### Causa provável

esquecer aspas em string.

### Exemplo ruim

```js
const valor = "10";
if (valor == 10) {
  console.log("passou sem clareza");
}
```

### Correção recomendada

```js
const valor = 10;
if (valor === 10) {
  console.log("comparação clara");
}
```

## 2 — confundir = com ===

### Sintoma

O código falha, retorna valor inesperado ou fica difícil de manter.

### Causa provável

confundir = com ===.

### Exemplo ruim

```js
const valor = "10";
if (valor == 10) {
  console.log("passou sem clareza");
}
```

### Correção recomendada

```js
const valor = 10;
if (valor === 10) {
  console.log("comparação clara");
}
```

## 3 — usar variável antes de declarar

### Sintoma

O código falha, retorna valor inesperado ou fica difícil de manter.

### Causa provável

usar variável antes de declarar.

### Exemplo ruim

```js
const valor = "10";
if (valor == 10) {
  console.log("passou sem clareza");
}
```

### Correção recomendada

```js
const valor = 10;
if (valor === 10) {
  console.log("comparação clara");
}
```

## 4 — esquecer return

### Sintoma

O código falha, retorna valor inesperado ou fica difícil de manter.

### Causa provável

esquecer return.

### Exemplo ruim

```js
const valor = "10";
if (valor == 10) {
  console.log("passou sem clareza");
}
```

### Correção recomendada

```js
const valor = 10;
if (valor === 10) {
  console.log("comparação clara");
}
```

## 5 — criar loop infinito

### Sintoma

O código falha, retorna valor inesperado ou fica difícil de manter.

### Causa provável

criar loop infinito.

### Exemplo ruim

```js
const valor = "10";
if (valor == 10) {
  console.log("passou sem clareza");
}
```

### Correção recomendada

```js
const valor = 10;
if (valor === 10) {
  console.log("comparação clara");
}
```

## 6 — acessar índice inexistente

### Sintoma

O código falha, retorna valor inesperado ou fica difícil de manter.

### Causa provável

acessar índice inexistente.

### Exemplo ruim

```js
const valor = "10";
if (valor == 10) {
  console.log("passou sem clareza");
}
```

### Correção recomendada

```js
const valor = 10;
if (valor === 10) {
  console.log("comparação clara");
}
```

## 7 — confundir array e objeto

### Sintoma

O código falha, retorna valor inesperado ou fica difícil de manter.

### Causa provável

confundir array e objeto.

### Exemplo ruim

```js
const valor = "10";
if (valor == 10) {
  console.log("passou sem clareza");
}
```

### Correção recomendada

```js
const valor = 10;
if (valor === 10) {
  console.log("comparação clara");
}
```

## 8 — alterar const incorretamente

### Sintoma

O código falha, retorna valor inesperado ou fica difícil de manter.

### Causa provável

alterar const incorretamente.

### Exemplo ruim

```js
const valor = "10";
if (valor == 10) {
  console.log("passou sem clareza");
}
```

### Correção recomendada

```js
const valor = 10;
if (valor === 10) {
  console.log("comparação clara");
}
```

## 9 — confiar em coerção automática

### Sintoma

O código falha, retorna valor inesperado ou fica difícil de manter.

### Causa provável

confiar em coerção automática.

### Exemplo ruim

```js
const valor = "10";
if (valor == 10) {
  console.log("passou sem clareza");
}
```

### Correção recomendada

```js
const valor = 10;
if (valor === 10) {
  console.log("comparação clara");
}
```

## 10 — criar nomes ruins

### Sintoma

O código falha, retorna valor inesperado ou fica difícil de manter.

### Causa provável

criar nomes ruins.

### Exemplo ruim

```js
const valor = "10";
if (valor == 10) {
  console.log("passou sem clareza");
}
```

### Correção recomendada

```js
const valor = 10;
if (valor === 10) {
  console.log("comparação clara");
}
```

## 11 — escrever função que faz coisas demais

### Sintoma

O código falha, retorna valor inesperado ou fica difícil de manter.

### Causa provável

escrever função que faz coisas demais.

### Exemplo ruim

```js
const valor = "10";
if (valor == 10) {
  console.log("passou sem clareza");
}
```

### Correção recomendada

```js
const valor = 10;
if (valor === 10) {
  console.log("comparação clara");
}
```
