# Estados de uma Promise

Uma Promise possui três estados principais: `pending`, `fulfilled` e `rejected`. Entender esses estados ajuda a prever quando o código entra no sucesso ou no erro.

## pending

É o estado inicial. A operação começou, mas ainda não terminou.

```js
const promessa = new Promise((resolve) => {
  setTimeout(() => resolve("pronto"), 1000);
});
```

Durante o primeiro segundo, a Promise está pendente.

## fulfilled

A Promise fica `fulfilled` quando `resolve` é chamado. A partir daí, os callbacks do `.then` podem receber o valor.

## rejected

A Promise fica `rejected` quando `reject` é chamado ou quando um erro ocorre dentro do fluxo. A partir daí, o `.catch` pode tratar a falha.

## Transição de estado

Uma Promise muda de `pending` para `fulfilled` ou de `pending` para `rejected`. Depois disso, ela não volta para `pending` e não troca para outro resultado.

```js
const exemplo = new Promise((resolve, reject) => {
  resolve("primeiro resultado");
  reject("tentativa ignorada");
});

exemplo.then(console.log); // primeiro resultado
```

A primeira finalização vence. Isso evita que uma mesma operação entregue sucesso e falha ao mesmo tempo.

## Aplicação no Front-end

Uma tela pode estar em estado de carregamento enquanto a Promise está pendente, mostrar dados quando ela resolve e mostrar mensagem amigável quando ela rejeita.

## Erros comuns

- Achar que a Promise pode resolver várias vezes.
- Não preparar visual para o estado pendente.
- Tratar falha como se fosse lista vazia; são situações diferentes.

## Exercício rápido

Simule uma Promise que fica pendente por 2 segundos e depois resolve. Mostre no DOM "Aguardando" antes e "Resolvida" depois.
