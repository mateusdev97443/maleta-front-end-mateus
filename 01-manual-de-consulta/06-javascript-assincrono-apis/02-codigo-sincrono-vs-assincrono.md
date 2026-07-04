# Código síncrono vs assíncrono

Código síncrono executa uma instrução após a outra, em sequência direta. Código assíncrono inicia uma tarefa que terminará depois e permite que o restante do programa continue.

## Fluxo síncrono

```js
console.log("1. Separar ingredientes");
console.log("2. Misturar massa");
console.log("3. Colocar no forno");
```

A ordem é previsível: cada linha termina antes da próxima começar.

## Fluxo assíncrono

```js
console.log("1. Pedido enviado");

setTimeout(() => {
  console.log("3. Pedido respondido");
}, 1000);

console.log("2. Interface continua disponível");
```

A tarefa agendada pelo `setTimeout` termina depois. Isso muda a ordem dos logs.

## Por que isso importa no Front-end

Se uma página busca dados de uma API, ela não sabe se a resposta virá em 100 ms ou 3 segundos. O código precisa continuar suficiente para atualizar a tela, mostrar loading e impedir ações duplicadas.

## Iniciar não é terminar

Um erro comum é tratar uma função assíncrona como se ela devolvesse o resultado final na mesma linha.

```js
const resultado = setTimeout(() => "dados", 1000);
console.log(resultado); // não são os dados
```

`setTimeout` agenda uma função; ele não devolve o valor produzido depois.

## Boas práticas

- Use logs numerados para estudar ordem de execução.
- Nomeie funções assíncronas com verbos claros, como `carregar`, `buscar` ou `enviar`.
- Não coloque lógica que depende do resultado fora do ponto em que o resultado é entregue.

## Exercício rápido

Escreva três `console.log` com um `setTimeout` no meio. Antes de executar, anote a ordem que você espera ver no console e compare com o resultado real.
