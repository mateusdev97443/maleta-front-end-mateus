# Grid completo

## Introdução

CSS Grid é um modelo de layout bidimensional. Ele trabalha com linhas e colunas ao mesmo tempo, por isso é ideal para páginas, dashboards, galerias, cards responsivos e áreas com distribuição em grade.

## O que é CSS Grid

Ao aplicar `display: grid`, o elemento pai cria uma grade. Os filhos diretos ocupam células, podem atravessar colunas, atravessar linhas e se adaptar ao espaço disponível.

## Quando usar Grid

Use Grid quando precisar controlar linhas e colunas, criar áreas principais de página, montar dashboards, organizar galerias, distribuir cards em grade ou criar layouts que não são apenas uma sequência linear.

## Diferença entre Flexbox e Grid

Flexbox resolve muito bem um eixo por vez. Grid resolve duas dimensões ao mesmo tempo. Se você está alinhando itens em uma linha, Flexbox tende a ser simples. Se está desenhando uma estrutura com colunas e linhas, Grid tende a ser mais claro.

## Propriedades principais

```css
.grade {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
}
```

- `display: grid`: ativa a grade.
- `grid-template-columns`: define colunas.
- `grid-template-rows`: define linhas.
- `gap`: espaça linhas e colunas.
- `fr`: distribui frações do espaço disponível.
- `repeat()`: evita repetição manual.
- `minmax()`: define mínimo e máximo flexível.
- `auto-fit`: cria colunas que se expandem quando há espaço.
- `auto-fill`: reserva trilhas possíveis mesmo quando há espaço vazio.

## Cards responsivos com Grid

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}
```

Esse padrão cria uma grade que cabe em telas pequenas e cresce em telas maiores sem exigir vários breakpoints.

## Controle de posição

```css
.destaque {
  grid-column: span 2;
}

.sidebar {
  grid-row: span 2;
}
```

`grid-column` e `grid-row` permitem que um item ocupe mais de uma trilha. Use com cuidado para não quebrar o mobile.

## Alinhamento com Grid

```css
.caixa {
  display: grid;
  place-items: center;
  min-height: 320px;
}
```

`place-items` é um atalho para alinhar no eixo de bloco e no eixo inline.

## Layout de página

```css
.pagina {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.5rem;
}

@media (min-width: 900px) {
  .pagina {
    grid-template-columns: 260px minmax(0, 1fr);
  }
}
```

## Dashboard simples

```css
.dashboard {
  display: grid;
  gap: 1rem;
}

@media (min-width: 960px) {
  .dashboard {
    grid-template-columns: 240px 1fr;
  }

  .metricas {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}
```

## Erros comuns

- Criar colunas fixas que estouram a tela.
- Usar Grid para alinhar apenas ícone e texto.
- Esquecer `minmax(0, 1fr)` em áreas que podem ter conteúdo largo.
- Usar muitos posicionamentos manuais sem necessidade.
- Confundir `auto-fit` e `auto-fill` sem testar o resultado.

## Boas práticas

- Use Grid para estruturas em duas dimensões.
- Prefira `repeat(auto-fit, minmax())` para grades responsivas simples.
- Combine Grid externo com Flexbox dentro dos componentes.
- Teste itens com textos longos.
- Comece com uma coluna no mobile e expanda quando o conteúdo pedir.
