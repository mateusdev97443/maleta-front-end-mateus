# Introdução ao fetch

`fetch` é uma API nativa do navegador para fazer requisições HTTP. Ela dispensa bibliotecas externas para os casos básicos desta fase.

## fetch retorna Promise

```js
const promessa = fetch("https://dummyjson.com/users/1");
console.log(promessa);
```

O retorno não é o usuário. É uma Promise que resolverá com um objeto `Response`.

## Exemplo básico

```js
fetch("https://dummyjson.com/users/1")
  .then((response) => response.json())
  .then((usuario) => {
    console.log(usuario.firstName);
  });
```

## Por que converter a resposta

A resposta HTTP vem como um objeto `Response`. Para acessar os dados em JSON, você chama `response.json()`.

## Aplicação no DOM

```js
async function carregarNome() {
  const response = await fetch("https://dummyjson.com/users/1");
  const usuario = await response.json();
  nome.textContent = usuario.firstName;
}
```

## Erro comum

```js
const usuario = await fetch(url);
console.log(usuario.firstName); // errado
```

O correto é aguardar o `fetch`, converter o corpo e só depois acessar os campos.

## Boa prática

Mesmo no primeiro exemplo, já pense em validar status e tratar erro. O fetch básico ensina o caminho, mas o código profissional precisa de proteção.

## Exercício rápido

Use `fetch` para buscar um usuário público, converta com `response.json()` e exiba o primeiro nome em um parágrafo.
