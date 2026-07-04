# Fluxo normal do documento

## Introdução

O fluxo normal é a forma como o navegador organiza os elementos HTML antes de qualquer técnica avançada de layout. Entender esse comportamento evita que você use Flexbox, Grid ou media queries como “remendo” para problemas que poderiam ser resolvidos com uma estrutura HTML melhor.

## Como os elementos aparecem naturalmente

O navegador lê o HTML de cima para baixo. Elementos de bloco, como `header`, `main`, `section`, `article`, `div`, `h1` e `p`, normalmente começam em uma nova linha e ocupam a largura disponível do elemento pai. Elementos em linha, como `a`, `span`, `strong` e `em`, acompanham o texto e ocupam apenas o espaço necessário ao conteúdo.

```html
<h1>Manual de Layout</h1>
<p>Este parágrafo aparece abaixo do título.</p>
<p>Este segundo parágrafo aparece abaixo do primeiro.</p>
<a href="#">Este link acompanha o fluxo do texto</a>
<a href="#">e este link aparece ao lado, se houver espaço.</a>
```

Sem CSS, a página já tem uma ordem visual. Essa ordem deve fazer sentido, especialmente no mobile e para tecnologias assistivas.

## Fluxo normal x layout controlado

Fluxo normal é o comportamento padrão. Layout controlado acontece quando você altera esse comportamento com `display`, `position`, `float`, Flexbox, Grid, margens, larguras ou media queries.

```css
/* Fluxo normal: cada article fica abaixo do anterior. */
.card {
  padding: 1rem;
}

/* Layout controlado: os cards passam a participar de uma grade. */
.lista-cards {
  display: grid;
  gap: 1rem;
}

@media (min-width: 760px) {
  .lista-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

O layout controlado não deve destruir a ordem lógica do conteúdo. Ele deve melhorar a apresentação mantendo leitura coerente.

## Empilhamento vertical

A maior parte das páginas mobile é uma sequência vertical: cabeçalho, hero, seções, cards, formulário e rodapé. Isso combina com o fluxo normal. Por isso, muitas vezes o CSS inicial precisa apenas ajustar espaçamentos, largura máxima e legibilidade.

```html
<main>
  <section class="hero">...</section>
  <section class="beneficios">...</section>
  <section class="contato">...</section>
</main>
```

Essa estrutura já funciona sem layout complexo. O desktop pode melhorar a disposição com colunas, mas o conteúdo base deve continuar compreensível.

## Impacto da ordem do HTML

A ordem do HTML define a ordem natural de leitura. Evite escrever um HTML fora de ordem e tentar corrigir tudo com CSS. Se o botão principal deve aparecer depois do texto no mobile, ele deve estar depois do texto no HTML.

```html
<!-- Bom: ordem lógica. -->
<section class="hero">
  <h1>Aprenda layout responsivo</h1>
  <p>Comece pelo conteúdo e evolua para o layout.</p>
  <a href="#exercicios">Praticar agora</a>
</section>
```

## Por que não começar por Flexbox ou Grid

Flexbox e Grid são ferramentas excelentes, mas elas devem responder a uma necessidade. Antes de usá-las, pergunte: “o fluxo normal já resolve?”. Se a resposta for sim, mantenha simples. Se os itens precisam alinhar em linha, use Flexbox. Se precisam formar linhas e colunas, use Grid.

## Antes e depois

```html
<!-- Antes: divs sem sentido e ordem confusa. -->
<div class="caixa">Botão</div>
<div class="caixa">Texto principal</div>
<div class="caixa">Título</div>

<!-- Depois: ordem semântica e fluxo natural. -->
<section class="chamada">
  <h2>Título</h2>
  <p>Texto principal.</p>
  <a href="#">Botão</a>
</section>
```

```css
.chamada {
  display: grid;
  gap: 1rem;
}
```

No exemplo corrigido, o CSS apenas melhora o espaçamento. A estrutura já está correta.

## Quando usar este conhecimento

Use ao montar qualquer página do zero, revisar a ordem de uma landing page, corrigir um layout que parece “brigando” com o CSS ou decidir se uma seção realmente precisa de Flexbox/Grid.

## Erros comuns específicos

- Colocar elementos no HTML em ordem visual de desktop e prejudicar o mobile.
- Usar `display: flex` no `body` inteiro sem necessidade.
- Criar wrappers extras para corrigir falta de planejamento.
- Achar que todo espaçamento precisa de Grid ou Flexbox.
- Trocar a ordem visual com CSS sem avaliar leitura e acessibilidade.

## Boas práticas

- Escreva o HTML na ordem em que o conteúdo deve ser lido.
- Deixe o fluxo normal resolver o que ele já resolve bem.
- Use CSS de layout apenas quando houver ganho real.
- Comece pelo mobile como sequência vertical.
- Teste a página sem estilos complexos para verificar se a estrutura faz sentido.
