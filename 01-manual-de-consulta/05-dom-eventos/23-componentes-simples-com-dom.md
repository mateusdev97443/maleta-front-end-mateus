# Componentes Simples com DOM

## Ideia principal

Componentes simples são blocos de interface com elementos, estado visual e eventos bem definidos. Nesta fase, o JavaScript passa a conversar com a página que o navegador já montou. O objetivo não é decorar comandos, mas entender qual elemento será lido, qual elemento será alterado e qual ação do usuário dispara a mudança.

## Exemplo base

```html
<button class="botao">Clique aqui</button>
<p class="mensagem">Mensagem inicial</p>
```

```js
const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");

if (botao && mensagem) {
  botao.addEventListener("click", function () {
    mensagem.textContent = "Mensagem alterada com JavaScript.";
  });
}
```

O botão é o elemento que dispara a interação. A mensagem é o elemento que recebe a alteração. A verificação com `if` evita erro quando o seletor não encontra nada no DOM.

## Como pensar antes de codar

1. Identifique o elemento no HTML.
2. Escolha um seletor claro, de preferência uma classe criada para esse comportamento.
3. Selecione com `document.querySelector` quando precisar de um elemento.
4. Verifique se o elemento existe antes de acessar propriedades.
5. Faça uma alteração pequena e previsível.
6. Teste manualmente no navegador.

## Erros comuns

- Tentar manipular um elemento antes de ele existir no DOM.
- Usar seletor diferente da classe escrita no HTML.
- Misturar muitas responsabilidades dentro do mesmo evento.
- Alterar aparência diretamente com muitos estilos inline, quando uma classe CSS resolveria melhor.

## Boa prática

Prefira código explícito: nomes de variáveis claros, funções pequenas e classes CSS para mudanças visuais. DOM bem organizado é aquele que outra pessoa consegue ler e prever sem executar mentalmente vinte passos.

## Exercício rápido

Crie um botão e um parágrafo. Ao clicar no botão, altere o texto do parágrafo. Depois, teste o que acontece quando a classe do botão está escrita errada e corrija o problema.
