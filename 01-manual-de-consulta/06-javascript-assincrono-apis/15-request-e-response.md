# Request e response

`Request` é o pedido feito pelo navegador. `Response` é a resposta recebida. Separar esses conceitos evita confundir resposta HTTP com dados prontos.

## Request como pedido

Um pedido contém informações como:

- URL;
- método HTTP;
- parâmetros na URL, quando existirem;
- intenção da ação.

```js
const url = "https://dummyjson.com/users/1";
const response = await fetch(url);
```

## Response como resposta

A resposta contém metadados, como `status` e `ok`, e também pode conter um corpo.

```js
console.log(response.status);
console.log(response.ok);
```

Nesse ponto, você ainda não tem o objeto de usuário pronto.

## Corpo da resposta

Para ler o corpo em JSON, você precisa converter:

```js
const usuario = await response.json();
```

## Diferença essencial

`response` é o envelope da resposta. `usuario` é o dado convertido que a tela pode usar.

## Erros comuns

- Tentar acessar `response.name` em vez de converter o corpo.
- Ignorar `response.status`.
- Misturar URL, validação e renderização sem entender cada etapa.

## Boa prática

Leia o fluxo como quatro passos: montar pedido, receber resposta, validar status e converter corpo.

## Exercício rápido

Faça uma requisição e mostre no console primeiro o `status`; depois converta para JSON e mostre um campo do dado.
