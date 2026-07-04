# O que são Promises

Promise é um objeto que representa uma operação futura. Ela não guarda necessariamente o dado final no momento em que nasce; ela guarda a promessa de que algum resultado será entregue depois.

## Criar Promise e consumir Promise

Criar uma Promise é definir como a operação termina. Consumir uma Promise é reagir ao resultado dela.

```js
const promessa = new Promise((resolve, reject) => {
  const encontrouDados = true;

  setTimeout(() => {
    if (encontrouDados) {
      resolve("Usuário encontrado");
    } else {
      reject("Usuário não encontrado");
    }
  }, 1000);
});

promessa
  .then((mensagem) => console.log(mensagem))
  .catch((erro) => console.log(erro));
```

`resolve` representa sucesso. `reject` representa falha. `.then` consome o sucesso. `.catch` consome a falha.

## Por que fetch usa Promise

Uma requisição HTTP depende de rede. A resposta pode chegar rápido, demorar ou falhar. Por isso `fetch` retorna uma Promise: o navegador inicia o pedido agora e entrega a resposta quando ela estiver disponível.

## Como pensar

Quando vir uma Promise, leia assim: "ainda não tenho o valor, mas posso preparar o que fazer quando ele chegar ou falhar".

## Erros comuns

- Criar Promise sem chamar `resolve` ou `reject`, deixando-a pendente para sempre.
- Confundir a Promise com o valor resolvido.
- Tratar apenas sucesso e esquecer falha.

## Boa prática

Em código didático, crie Promises manuais apenas para aprender. Em telas reais, na maioria das vezes você vai consumir Promises retornadas por APIs como `fetch`.

## Exercício rápido

Crie uma Promise que resolve com "Arquivo simulado carregado" e outra versão que rejeita com "Falha ao carregar arquivo".
