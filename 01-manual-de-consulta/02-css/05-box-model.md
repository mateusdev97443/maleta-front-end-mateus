# Box Model

Todo elemento renderizado no navegador pode ser entendido como uma caixa. O Box Model explica como conteúdo, espaçamento interno, borda e margem formam o tamanho e o comportamento visual de um elemento.

## As quatro partes da caixa

```text
margin
└── border
    └── padding
        └── content
```

## Content

`content` é a área onde o conteúdo aparece: texto, imagem, ícone ou outros elementos.

```css
.card__titulo {
  width: 100%;
}
```

A largura e altura padrão se aplicam à área de conteúdo quando o elemento usa `box-sizing: content-box`.

## Padding

`padding` é o espaço interno entre conteúdo e borda.

```css
.card {
  padding: 1rem;
}
```

Use padding quando o espaço faz parte do componente. Um botão, por exemplo, precisa de padding para ter área clicável confortável.

## Border

`border` é a linha ao redor do padding e do conteúdo.

```css
.card {
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
}
```

Borda aumenta o tamanho total da caixa quando `box-sizing` está em `content-box`.

## Margin

`margin` é o espaço externo entre uma caixa e outras caixas.

```css
.card {
  margin-bottom: 1.5rem;
}
```

Use margin para separar componentes entre si. Não use margin para criar espaço interno.

## Width, min-width e max-width

```css
.container {
  width: 90%;
  max-width: 70rem;
  margin-inline: auto;
}
```

- `width`: define largura preferencial.
- `min-width`: impede que o elemento fique menor que um limite.
- `max-width`: impede que o elemento fique largo demais.

Para textos longos, `max-width` melhora leitura.

```css
.artigo {
  max-width: 65ch;
}
```

## Height, min-height e max-height

```css
.banner {
  min-height: 16rem;
}
```

- `height`: altura fixa; use com cautela.
- `min-height`: garante altura mínima e permite crescimento.
- `max-height`: limita altura e pode exigir controle de overflow.

Evite `height` fixa em cards com texto, porque conteúdo real pode ser maior que o exemplo do layout.

## Box-sizing

O padrão histórico é `content-box`: `width` representa apenas o conteúdo. Padding e border somam no tamanho final.

```css
.caixa {
  width: 300px;
  padding: 20px;
  border: 2px solid #000;
}
```

Com `content-box`, a largura final será maior que `300px`. Com `border-box`, a largura total fica dentro dos `300px`.

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

`border-box` torna medidas mais previsíveis e é uma base comum em projetos profissionais.

## Margin x padding

| Necessidade | Propriedade |
|---|---|
| Aumentar área interna de um botão | `padding` |
| Separar um card do próximo | `margin` |
| Dar respiro entre texto e borda | `padding` |
| Empurrar uma seção para longe de outra | `margin` |

```css
/* Bom */
.botao {
  padding: 0.75rem 1rem;
}

.secao {
  margin-bottom: 3rem;
}
```

## Margin collapse

Margens verticais de blocos podem colapsar. Isso significa que duas margens verticais podem se combinar em vez de somar.

```css
.titulo {
  margin-bottom: 2rem;
}

.paragrafo {
  margin-top: 1rem;
}
```

Entre esses elementos, o espaço pode ser `2rem`, não `3rem`. Para reduzir confusão:

- use espaçamento em uma direção, como `margin-bottom`;
- use padding no elemento pai quando o espaço pertence ao container;
- mantenha uma escala consistente de espaçamentos.

## Overflow ligado ao Box Model

Quando o conteúdo é maior que a caixa, ocorre overflow.

```css
.caixa {
  max-height: 12rem;
  overflow: auto;
}
```

Valores comuns:

- `visible`: conteúdo aparece fora da caixa;
- `hidden`: conteúdo excedente é cortado;
- `auto`: cria rolagem quando necessário;
- `scroll`: mostra rolagem mesmo quando talvez não precise.

Cuidado com `overflow: hidden`; ele pode esconder texto, foco de teclado ou elementos importantes.

## Exemplos bons e ruins

```css
/* Ruim: altura fixa pode cortar conteúdo. */
.card {
  height: 180px;
  overflow: hidden;
}

/* Melhor: altura mínima permite crescimento. */
.card {
  min-height: 180px;
  padding: 1rem;
}
```

```css
/* Ruim: espaço interno feito com margin em filhos. */
.card p {
  margin-left: 1rem;
  margin-right: 1rem;
}

/* Melhor: o espaço pertence ao card. */
.card {
  padding: 1rem;
}
```

## Checklist rápido de Box Model

- [ ] `box-sizing: border-box` está definido na base?
- [ ] Padding foi usado para espaço interno?
- [ ] Margin foi usada para espaço externo?
- [ ] Alturas fixas foram evitadas em conteúdo dinâmico?
- [ ] `max-width` foi usado para limitar leitura e containers?
- [ ] `overflow` não está escondendo conteúdo importante?
- [ ] Espaçamentos seguem uma escala consistente?
