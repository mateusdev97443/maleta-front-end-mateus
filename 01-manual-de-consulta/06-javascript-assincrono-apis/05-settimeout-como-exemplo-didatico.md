# setTimeout como exemplo didático

`setTimeout` agenda a execução de uma função após um intervalo. Ele é útil para estudar assincronismo porque cria uma espera controlada sem depender de internet ou API externa.

## O que ele ensina

Com `setTimeout`, você percebe que:

- agendar uma tarefa não é o mesmo que executá-la imediatamente;
- o código após o temporizador continua rodando;
- a função interna executa somente depois do tempo indicado;
- o resultado deve ser tratado dentro do callback ou em um fluxo preparado para isso.

## Exemplo de ordem

```js
console.log("Abrir tela");

setTimeout(() => {
  console.log("Mostrar aviso depois de 2 segundos");
}, 2000);

console.log("Tela continua pronta");
```

## Exemplo com feedback visual

```js
const status = document.querySelector("#status");
const botao = document.querySelector("#iniciar");

botao.addEventListener("click", () => {
  status.textContent = "Aguarde um instante...";

  setTimeout(() => {
    status.textContent = "Você pode continuar.";
  }, 1000);
});
```

## Quando usar no aprendizado

Use `setTimeout` para simular carregamento antes de consumir APIs reais. Assim você pratica loading, mensagens e botão desabilitado sem depender de rede.

## Erros comuns

- Passar `minhaFuncao()` em vez de `minhaFuncao`, executando a função cedo demais.
- Esperar que `setTimeout` devolva o valor produzido pelo callback.
- Usar temporizadores para esconder problemas de organização do código.

## Boa prática

Em exemplos didáticos, mantenha tempos curtos e mensagens claras. O objetivo é entender o fluxo, não fazer o usuário esperar sem motivo.

## Exercício rápido

Faça um botão exibir "Salvando..." e depois "Salvo localmente para estudo" usando apenas `setTimeout`.
