# Introdução ao JavaScript assíncrono

JavaScript assíncrono é a forma de escrever código para situações em que a resposta não aparece no mesmo instante em que a ação começa.

No Front-end isso acontece o tempo todo: um clique inicia uma busca, um temporizador espera alguns segundos, uma API demora a responder, uma imagem leva tempo para carregar. A página precisa continuar viva enquanto isso acontece.

## A ideia principal

Código assíncrono separa dois momentos:

- o momento em que a tarefa é iniciada;
- o momento em que o resultado fica disponível.

Essa separação evita que o navegador congele. O usuário ainda consegue rolar a página, clicar em outros elementos e receber feedback visual.

## Exemplo simples com espera

```js
console.log("Antes da espera");

setTimeout(() => {
  console.log("Resultado chegou depois");
}, 1000);

console.log("Depois de iniciar a espera");
```

A mensagem do meio aparece por último porque o temporizador agenda uma tarefa para depois. O JavaScript não fica parado olhando para o relógio.

## Exemplo aplicado ao Front-end

```js
const botao = document.querySelector("#carregar");
const status = document.querySelector("#status");

botao.addEventListener("click", () => {
  status.textContent = "Carregando informações...";

  setTimeout(() => {
    status.textContent = "Informações carregadas.";
  }, 1200);
});
```

Esse exemplo ainda não usa API real, mas já mostra a lógica: uma ação começa agora e termina depois.

## Como pensar

Antes de codar um fluxo assíncrono, pergunte:

- quem inicia a ação?
- o que o usuário vê durante a espera?
- o que acontece quando dá certo?
- o que acontece quando falha?
- a interface precisa bloquear algum botão temporariamente?

## Erros comuns

- Esperar que uma informação assíncrona esteja pronta imediatamente.
- Não mostrar nenhum feedback durante a espera.
- Confundir assíncrono com código sem ordem; existe ordem, mas ela depende do momento em que cada tarefa termina.

## Boa prática

Sempre desenhe o fluxo em três estados: carregando, sucesso e falha. Mesmo em exemplos pequenos, esse hábito evita telas silenciosas.

## Exercício rápido

Crie um botão que muda o texto de um parágrafo para "Preparando..." e, após 1 segundo, muda para "Pronto para continuar".
