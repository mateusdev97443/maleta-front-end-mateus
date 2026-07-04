# async e await

`async` e `await` oferecem uma forma mais linear de escrever código que trabalha com Promises.

## O que async faz

Uma função marcada com `async` sempre retorna uma Promise, mesmo quando você retorna um valor simples.

```js
async function obterNumero() {
  return 7;
}

obterNumero().then((numero) => console.log(numero));
```

## O que await faz

`await` espera a resolução de uma Promise dentro de uma função `async`. Ele pausa a continuação daquela função, mas não trava o navegador inteiro.

```js
async function carregarUsuario() {
  const response = await fetch("https://dummyjson.com/users/1");
  const usuario = await response.json();
  nome.textContent = usuario.firstName;
}
```

Enquanto a resposta não chega, a página ainda pode renderizar e responder a outras interações.

## Erro comum

Usar `await` fora de um contexto adequado:

```js
const response = await fetch(url); // inválido em muitos contextos de script comum
```

Correção:

```js
async function iniciar() {
  const response = await fetch(url);
  return await response.json();
}
```

## Quando usar

Use `async/await` quando o fluxo tiver passos que dependem um do outro: buscar, validar, converter e renderizar.

## Boa prática

Mesmo com aparência síncrona, lembre que o resultado continua sendo assíncrono. Combine `async/await` com `try/catch` para tratar falhas.

## Exercício rápido

Reescreva um exemplo com `.then(response => response.json())` usando uma função `async` e dois `await`.
