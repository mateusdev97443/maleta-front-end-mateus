# addEventListener

`addEventListener` registra uma função para ser executada quando um evento acontece em um elemento. É a forma recomendada nesta fase porque mantém HTML e JavaScript separados.

## Estrutura

```js
elemento.addEventListener("nomeDoEvento", function () {
  // ação
});
```

## Exemplo com função nomeada

```js
const botaoAjuda = document.querySelector(".botao-ajuda");
const caixaAjuda = document.querySelector(".caixa-ajuda");

function alternarAjuda() {
  caixaAjuda.classList.toggle("caixa-ajuda--aberta");
}

if (botaoAjuda && caixaAjuda) {
  botaoAjuda.addEventListener("click", alternarAjuda);
}
```

## Função anônima ou nomeada?

Função anônima é boa para ações pequenas. Função nomeada é melhor quando a ação tem nome claro ou será reutilizada.

## Erros comuns

- Chamar a função na hora errada: `addEventListener("click", alternarAjuda())`. Isso executa imediatamente.
- Registrar evento antes de selecionar o elemento.
- Registrar eventos duplicados sem perceber.
