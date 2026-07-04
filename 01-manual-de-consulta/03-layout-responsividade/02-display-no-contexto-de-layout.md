# Display no contexto de layout

## Introdução

`display` define duas coisas importantes: como o próprio elemento se comporta diante dos irmãos e, em alguns valores, como ele organiza os filhos. Por isso, `display` é uma das propriedades mais importantes para layout.

## Comportamento externo e organização dos filhos

Um elemento tem comportamento externo quando decide se ocupa a linha inteira, se fica no meio do texto ou se desaparece. Ele organiza filhos quando vira um contexto de layout, como Flexbox ou Grid.

```css
.caixa {
  display: block; /* comportamento externo */
}

.menu {
  display: flex; /* comportamento externo + organização dos filhos */
}
```

## `display: block`

Elementos block começam em nova linha e ocupam a largura disponível. Use para seções, cards, containers e blocos de conteúdo.

```css
.card {
  display: block;
  padding: 1rem;
  border: 1px solid #ddd;
}
```

## `display: inline`

Elementos inline acompanham o texto. Largura e altura não funcionam da mesma forma que em blocos. Use para trechos pequenos, links dentro de frases e marcações textuais.

```html
<p>Leia o <a href="#">guia completo</a> antes de praticar.</p>
```

## `display: inline-block`

`inline-block` mantém o elemento na linha, mas permite largura, altura, padding vertical e aparência de botão.

```css
.botao {
  display: inline-block;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  background: #222;
  color: #fff;
}
```

## `display: flex`

Flexbox organiza filhos em um eixo principal. Use quando precisa alinhar, distribuir ou quebrar itens em linha/coluna.

```css
.cabecalho {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
```

## `display: grid`

Grid organiza filhos em linhas e colunas. Use para cards, galerias, dashboards e estruturas de página.

```css
.grade {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}
```

## `display: none`

`display: none` remove o elemento do layout e da navegação visual. Use com cuidado. Nesta fase, não será usado para abrir e fechar menus com JavaScript.

```css
.aviso-impressao {
  display: none;
}
```

## Quando alterar `display`

Altere `display` quando o comportamento padrão não atende ao objetivo: transformar link em botão, alinhar itens de cabeçalho, montar grade de cards ou ocultar conteúdo não aplicável a determinado contexto.

## Exemplos de escolha

- Link dentro de parágrafo: `inline`.
- Botão visual dentro de hero: `inline-block`.
- Lista de links no cabeçalho: `flex`.
- Lista de cards: `grid`.
- Bloco de seção: `block`.

## Erros comuns específicos

- Usar `display: inline` em elemento que precisa de largura e padding vertical.
- Usar `display: flex` sem entender que só os filhos diretos viram itens flexíveis.
- Aplicar `display: grid` no item errado em vez do container.
- Usar `display: none` para esconder problema de layout.
- Esperar que `display` sozinho resolva espaçamento, largura e responsividade.

## Boas práticas

- Identifique primeiro quem é o container e quem são os itens.
- Use `inline-block` para links com aparência de botão.
- Use Flexbox para alinhamento em um eixo.
- Use Grid para estruturas em duas dimensões.
- Evite esconder conteúdo importante sem necessidade.
