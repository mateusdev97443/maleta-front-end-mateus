# Por que o navegador não pode travar

Uma página travada passa a sensação de erro, mesmo quando a operação ainda está em andamento. O usuário pode achar que o clique não funcionou, repetir a ação ou abandonar a tela.

## O problema de bloquear a interface

Imagine uma busca de CEP, usuário ou lista de produtos. Se o navegador parasse até a resposta chegar, a página não permitiria rolagem, clique, foco em campos ou atualização visual.

No Front-end, esperar sem travar é parte da experiência do usuário.

## O que fazer durante a espera

A interface deve comunicar estado:

- mostrar uma mensagem de carregamento;
- desabilitar o botão que iniciou a ação, se cliques repetidos forem perigosos;
- manter a área de resultado organizada;
- permitir que a página continue legível.

## Exemplo didático

```js
const botao = document.querySelector("#buscar");
const aviso = document.querySelector("#aviso");

botao.addEventListener("click", () => {
  botao.disabled = true;
  aviso.textContent = "Buscando sem travar a tela...";

  setTimeout(() => {
    aviso.textContent = "Busca concluída.";
    botao.disabled = false;
  }, 1500);
});
```

O usuário recebe resposta imediata no texto do aviso, mesmo antes da tarefa terminar.

## O que evitar

Evite simular espera com laços pesados, como `while` segurando a execução. Isso realmente bloqueia a thread principal e impede a tela de responder.

## Boa prática

Sempre que uma ação passar de alguns instantes, mostre feedback. Loading não é enfeite: é parte da comunicação entre sistema e usuário.

## Exercício rápido

Crie uma ação que desabilita um botão, mostra "Processando..." e reabilita o botão depois de 2 segundos.
