# Padrão Profissional DOM e Eventos

## Regras de escrita

- Use nomes claros de variáveis, como `botaoEnviar`, `campoNome` e `mensagemErro`.
- Faça a seleção de elementos no começo do script ou do bloco da funcionalidade.
- Verifique a existência antes de manipular.
- Separe lógica e visual: JavaScript decide o estado; CSS desenha o estado.
- Prefira `classList` a muitos comandos de `style`.

## Organização de eventos

Registre eventos com `addEventListener`, mantenha funções pequenas e evite cadastrar o mesmo evento várias vezes sem necessidade.

```js
const botao = document.querySelector(".botao");
const painel = document.querySelector(".painel");

function alternarPainel() {
  painel.classList.toggle("aberto");
}

if (botao && painel) {
  botao.addEventListener("click", alternarPainel);
}
```

## Cuidados profissionais

- Evite duplicação de seletores e mensagens.
- Evite manipulação excessiva de `innerHTML`; prefira `textContent` e `createElement`.
- Comentários devem explicar decisões, não repetir o óbvio.
- Teste manualmente estados vazios, preenchidos e cliques repetidos.

## Checklist antes de considerar pronto

- A interação tem objetivo claro.
- Os elementos existem antes de serem usados.
- O usuário recebe feedback.
- O console não mostra erro.
- O código está simples o suficiente para manutenção.
