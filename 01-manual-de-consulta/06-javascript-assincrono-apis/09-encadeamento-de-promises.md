# Encadeamento de Promises

Encadear Promises significa criar uma sequência de etapas em que a saída de uma etapa alimenta a próxima.

## Retornar valor no then

```js
Promise.resolve(10)
  .then((numero) => numero * 2)
  .then((dobro) => console.log(dobro)); // 20
```

O valor retornado no primeiro `.then` chega ao próximo.

## Retornar outra Promise

```js
fetch("https://dummyjson.com/users/1")
  .then((response) => response.json())
  .then((usuario) => fetch(`https://dummyjson.com/posts/user/${usuario.id}`))
  .then((response) => response.json())
  .then((posts) => console.log(posts));
```

Quando um `.then` retorna outra Promise, o próximo `.then` espera essa Promise terminar.

## Exemplo progressivo

1. Buscar usuário.
2. Converter resposta em JSON.
3. Usar o `id` do usuário para buscar posts.
4. Converter nova resposta.
5. Renderizar resultado.

Essa progressão precisa de retornos claros para não virar uma sequência confusa.

## Erro comum

Aninhar `.then` dentro de `.then` sem necessidade:

```js
fetch(url).then((response) => {
  response.json().then((dados) => {
    console.log(dados);
  });
});
```

Funciona, mas dificulta leitura e tratamento de erro. Prefira retornar a Promise.

## Boa prática

Cada `.then` deve fazer uma transformação pequena: validar, converter, extrair ou renderizar. Se um `.then` tem muitas responsabilidades, separe uma função.

## Exercício rápido

Crie um encadeamento que começa com um número, soma 5, transforma em texto e mostra no console em três etapas separadas.
