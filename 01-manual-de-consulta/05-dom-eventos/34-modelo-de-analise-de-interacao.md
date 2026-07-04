# Modelo de Análise de Interação

Antes de codar, responda às perguntas abaixo. Esse roteiro evita tentativa e erro sem direção.

## Perguntas do modelo

- Qual elemento dispara a ação?
- Qual evento será escutado?
- Qual elemento será alterado?
- O que muda: texto, classe, atributo, estilo ou estrutura?
- O elemento existe no DOM?
- Preciso impedir comportamento padrão?
- Preciso validar dados?
- Qual feedback o usuário recebe?
- Como evitar código bagunçado?
- Como testar manualmente?

## Exemplo preenchido: botão que altera mensagem

O botão `.botao` dispara um clique. O parágrafo `.mensagem` recebe novo `textContent`. Os dois elementos precisam existir antes do evento ser registrado. O feedback é o texto atualizado na tela.

```js
const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");

if (botao && mensagem) {
  botao.addEventListener("click", function () {
    mensagem.textContent = "A interação funcionou.";
  });
}
```

## Exemplo preenchido: formulário simples

O formulário dispara `submit`. O comportamento padrão é impedido com `preventDefault` para evitar recarregar a página. O campo é validado com `trim` e a mensagem de erro aparece em um elemento separado.

## Teste manual

Clique, digite, envie vazio, envie preenchido, observe o console e confirme se a interface retorna ao estado esperado.
