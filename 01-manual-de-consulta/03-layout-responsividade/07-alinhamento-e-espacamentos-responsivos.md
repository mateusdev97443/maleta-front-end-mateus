# Alinhamento e espaçamentos responsivos

## Introdução

Layout profissional não depende apenas de colocar elementos na tela. Ele precisa de alinhamento coerente e espaçamentos proporcionais. Espaçamento define relação; alinhamento define organização visual.

## Alinhamento visual x espaçamento

Alinhamento responde “em qual linha visual os elementos começam, terminam ou se centralizam?”. Espaçamento responde “quanto ar existe entre elementos ou dentro deles?”.

```css
.card {
  padding: 1rem; /* espaço interno */
}

.lista {
  display: grid;
  gap: 1rem; /* espaço entre itens */
}
```

## `gap`

`gap` cria distância entre itens de Flexbox ou Grid sem precisar escolher qual item recebe margem. Ele é previsível e funciona bem em layouts responsivos.

```css
.acoes {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
```

## Margem x padding

Use `padding` para espaço interno de uma caixa. Use `margin` para afastar uma caixa de outra quando não houver um container de layout controlando o intervalo.

```css
.alerta {
  padding: 1rem;
  margin-block: 1rem;
}
```

Evite criar margens diferentes em todos os elementos. Isso torna a página difícil de manter.

## Escala de espaçamento

Uma escala evita decisões aleatórias. Exemplo simples:

```css
:root {
  --espaco-1: 0.5rem;
  --espaco-2: 1rem;
  --espaco-3: 1.5rem;
  --espaco-4: 2rem;
  --espaco-5: 3rem;
}
```

Mesmo sem variáveis, pense em repetição: 8px, 16px, 24px, 32px, 48px.

## `clamp()` para espaçamento fluido

```css
.secao {
  padding-block: clamp(2rem, 6vw, 5rem);
}

.card {
  padding: clamp(1rem, 3vw, 1.5rem);
}
```

`clamp(mínimo, fluido, máximo)` permite que o espaço cresça com a tela sem exagerar.

## Espaçamentos em mobile e desktop

No mobile, espaçamentos grandes podem empurrar conteúdo importante para baixo. No desktop, espaços pequenos podem deixar seções apertadas. Use valores fluidos ou aumente em breakpoints quando fizer sentido.

```css
.grade {
  display: grid;
  gap: 1rem;
}

@media (min-width: 900px) {
  .grade {
    gap: 1.5rem;
  }
}
```

## Alinhamento com Flexbox

```css
.cabecalho {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
```

Use Flexbox para alinhar itens em uma linha, centralizar ícone e texto, distribuir botões ou organizar menus simples.

## Alinhamento com Grid

```css
.hero {
  display: grid;
  gap: 2rem;
  align-items: center;
}

@media (min-width: 900px) {
  .hero {
    grid-template-columns: 1fr 1fr;
  }
}
```

Use Grid quando alinhamento depende de colunas e áreas maiores.

## Exemplos práticos

```css
.card-produto {
  display: grid;
  gap: 0.75rem;
  padding: clamp(1rem, 2vw, 1.5rem);
}

.card-produto__acoes {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}
```

## Erros comuns

- Usar `margin-top` aleatório em cada elemento.
- Confundir centralizar texto com centralizar bloco.
- Aplicar padding grande no mobile e reduzir área útil.
- Criar alinhamentos diferentes em seções semelhantes.
- Usar `justify-content` quando o problema está no eixo cruzado.

## Boas práticas

- Defina uma escala de espaçamento.
- Prefira `gap` para listas, cards e grupos.
- Use `padding` para respiro interno e `margin` para separações externas pontuais.
- Ajuste espaços pelo conteúdo, não por chute.
- Teste alinhamento com textos curtos e longos.
