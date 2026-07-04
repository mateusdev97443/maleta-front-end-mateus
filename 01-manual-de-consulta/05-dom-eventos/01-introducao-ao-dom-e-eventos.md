# Introdução ao DOM e Eventos

Este manual começa quando o JavaScript deixa de trabalhar apenas com valores na memória e passa a conversar com a interface. Na Fase 5, Mateus estudou variáveis, condicionais, laços, funções e objetos. Agora esses recursos serão usados para selecionar elementos, reagir a ações do usuário e alterar partes da tela.

## O que muda nesta fase

Antes, um código podia calcular um desconto e mostrar o resultado no console. Com DOM e eventos, esse mesmo resultado pode aparecer dentro de um parágrafo, ativar uma mensagem visual ou desabilitar um botão.

```html
<section class="resumo-produto">
  <h2 class="produto-nome">Mochila Front-end</h2>
  <p class="produto-status">Aguardando escolha.</p>
  <button class="botao-comprar">Selecionar produto</button>
</section>
```

```js
const botaoComprar = document.querySelector(".botao-comprar");
const produtoStatus = document.querySelector(".produto-status");

if (botaoComprar && produtoStatus) {
  botaoComprar.addEventListener("click", function () {
    produtoStatus.textContent = "Produto selecionado para análise.";
  });
}
```

## Três ideias centrais

1. **Selecionar:** encontrar no DOM o elemento que será lido ou alterado.
2. **Escutar:** registrar qual ação do usuário importa, como clique, digitação ou envio de formulário.
3. **Atualizar:** mudar texto, classe, atributo ou estrutura de forma controlada.

## O que você deve praticar

- Ler o HTML e identificar bons pontos de seleção.
- Criar classes com nomes úteis para comportamento.
- Verificar se o elemento foi encontrado antes de manipular.
- Preferir classes CSS para aparência.
- Testar cada interação no navegador e no console.

## Cuidado inicial

DOM não é sinônimo de bagunçar a página inteira com JavaScript. Uma interação profissional altera apenas o necessário, mantém o HTML compreensível e deixa o CSS cuidar da parte visual sempre que possível.
