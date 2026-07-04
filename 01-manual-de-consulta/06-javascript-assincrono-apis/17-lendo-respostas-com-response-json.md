# Lendo respostas com response.json()

`response.json()` lê o corpo da resposta e tenta convertê-lo de JSON para um valor JavaScript, como objeto ou array.

## Ele também retorna Promise

A leitura do corpo pode levar um tempo, por isso `response.json()` também é assíncrono.

```js
const response = await fetch("https://dummyjson.com/users/1");
const usuario = await response.json();
```

Sem o segundo `await`, você terá uma Promise pendente em vez dos dados.

## Response não é dado final

```js
const response = await fetch(url);
console.log(response.ok); // metadado HTTP

const dados = await response.json();
console.log(dados); // corpo convertido
```

## Cuidado ao ler duas vezes

O corpo da resposta é um fluxo de leitura. Depois de consumido, não deve ser lido novamente.

```js
const dados = await response.json();
const outraLeitura = await response.json(); // problema
```

Guarde o resultado em uma variável e use essa variável.

## Erros comuns

- Esquecer `await` antes de `response.json()`.
- Chamar `response.json()` antes de verificar `response.ok` quando precisa tratar status.
- Tentar ler o corpo duas vezes.

## Boa prática

Use nomes diferentes: `response` para a resposta HTTP e `dados`, `usuario` ou `posts` para o corpo convertido.

## Exercício rápido

Busque um usuário, salve a resposta em `response`, converta para `usuario` e explique no comentário a diferença entre as duas variáveis.
