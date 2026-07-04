# Flexbox completo

## Introdução

Flexbox é um modelo de layout do CSS criado para distribuir, alinhar e reorganizar elementos em um eixo principal. Ele é excelente para menus simples, grupos de botões, cards em linha, centralização e componentes que precisam se adaptar ao espaço disponível.

## O que é Flexbox

Ao aplicar `display: flex` em um elemento pai, os filhos diretos passam a ser itens flexíveis. O navegador calcula espaço disponível, tamanho dos itens, quebras e alinhamentos com base nas propriedades do container e dos itens.

## Quando usar Flexbox

Use Flexbox quando o problema principal estiver em uma dimensão: linha ou coluna. Exemplos: alinhar ícone e texto, centralizar conteúdo, distribuir links de navegação, organizar botões, criar cards que quebram linha e alinhar itens em um cabeçalho.

## Eixo principal e eixo cruzado

O eixo principal é definido por `flex-direction`. Com `row`, ele vai da esquerda para a direita. Com `column`, ele vai de cima para baixo. O eixo cruzado é perpendicular ao principal. `justify-content` atua no eixo principal; `align-items` atua no eixo cruzado.

## Propriedades principais

```css
.lista {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
```

- `display: flex`: ativa o contexto flexível.
- `flex-direction`: define linha, linha reversa, coluna ou coluna reversa.
- `justify-content`: distribui itens no eixo principal.
- `align-items`: alinha itens no eixo cruzado.
- `align-content`: distribui linhas quando há múltiplas linhas com `flex-wrap`.
- `gap`: cria espaçamento consistente entre itens.
- `flex-wrap`: permite quebra de linha quando não há espaço.

## Propriedades dos itens

```css
.card {
  flex: 1 1 260px;
}

.card--destaque {
  flex-grow: 2;
  align-self: stretch;
}
```

- `flex-grow`: define quanto o item pode crescer.
- `flex-shrink`: define quanto o item pode encolher.
- `flex-basis`: define o tamanho inicial antes da distribuição.
- `flex`: atalho para grow, shrink e basis.
- `align-self`: altera o alinhamento de um item específico.

## Centralização com Flexbox

```css
.painel-centralizado {
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Use essa técnica quando o conteúdo precisa ficar centralizado horizontal e verticalmente dentro de uma área conhecida.

## Cards com Flexbox

```html
<section class="cards">
  <article class="card">HTML semântico</article>
  <article class="card">CSS organizado</article>
  <article class="card">Layout responsivo</article>
</section>
```

```css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 240px;
  padding: 1.25rem;
  border: 1px solid #ddd;
  border-radius: 12px;
}
```

## Menus simples com Flexbox

```css
.cabecalho {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
```

Sem JavaScript, o menu pode apenas reorganizar links, quebrar linha ou virar uma lista vertical em telas pequenas.

## Erros comuns

- Usar Flexbox para layout de página inteiro quando Grid seria mais claro.
- Confundir `justify-content` com `align-items` sem observar o eixo.
- Esquecer `flex-wrap` e gerar overflow horizontal.
- Usar margens individuais em vez de `gap`.
- Definir `flex: 1` sem entender o tamanho inicial dos itens.

## Boas práticas

- Defina o objetivo do eixo antes de escrever CSS.
- Use `gap` para espaçamento entre itens.
- Combine `flex-wrap` com `flex-basis` para cards fluidos.
- Use `align-self` apenas para exceções pontuais.
- Prefira Flexbox para componentes e Grid para estrutura bidimensional.
