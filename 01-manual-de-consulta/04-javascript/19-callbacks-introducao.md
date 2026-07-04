# Callbacks: introdução

Callback é uma função passada como argumento para outra função. A função principal decide quando chamar o comportamento recebido.

## Callback próprio simples

```js
function executarComNumero(numero, callback) {
  return callback(numero);
}

function dobrar(numero) {
  return numero * 2;
}

console.log(executarComNumero(5, dobrar));
```

## Callback em `map`

```js
const nomes = ["mateus", "ana"];
const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());

console.log(nomesMaiusculos);
```

## Callback em `filter`

```js
const produtos = [
  { nome: "Caderno", disponivel: true },
  { nome: "Caneta", disponivel: false }
];

const disponiveis = produtos.filter((produto) => produto.disponivel === true);
console.log(disponiveis);
```

## Limite desta fase

Aqui callback é apenas função passada como argumento. Assuntos de execução em outro momento da aplicação ficam para depois.

## Erros comuns

- Chamar a função antes de passar como callback sem querer.
- Usar nomes genéricos que escondem o que o callback recebe.
- Escrever callback grande demais dentro de `map` ou `filter`.
