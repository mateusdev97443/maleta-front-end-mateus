# Mobile-first e breakpoints

## Introdução

Mobile-first é a estratégia de escrever primeiro o layout para telas pequenas e depois adicionar melhorias para telas maiores. Isso força clareza, priorização de conteúdo e menos dependência de correções.

## O que é mobile-first

No mobile-first, o CSS fora de media queries representa a experiência mínima e funcional. As media queries com `min-width` entram para aumentar colunas, espaçamentos, tamanho de fonte e complexidade visual.

## Por que começar pelo menor layout

Telas pequenas revelam rapidamente excesso de conteúdo, larguras fixas, espaçamentos exagerados e hierarquia confusa. Se o layout funciona bem no pequeno, crescer costuma ser mais simples.

## Como crescer por etapas

```css
.cards {
  display: grid;
  gap: 1rem;
}

@media (min-width: 700px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1040px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Breakpoints comuns sem regra absoluta

Valores como 480px, 768px, 1024px e 1200px podem servir como referência inicial, mas não são obrigação. O breakpoint correto é onde o conteúdo começa a ficar ruim.

## Como escolher breakpoints pelo conteúdo

Abra a página no menor tamanho, aumente lentamente a largura e observe quando existe espaço suficiente para uma nova coluna ou quando uma linha fica longa demais. Esse ponto é mais importante do que o nome de um dispositivo.

## Exemplo completo mobile → tablet → desktop

```css
.hero {
  display: grid;
  gap: 1.5rem;
  padding-block: 2rem;
}

.hero__titulo {
  font-size: clamp(2rem, 8vw, 4rem);
}

@media (min-width: 760px) {
  .hero {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
}

@media (min-width: 1120px) {
  .hero {
    gap: 4rem;
    padding-block: 5rem;
  }
}
```

## Erros comuns

- Copiar breakpoints de outro projeto sem testar o conteúdo.
- Escrever todo o layout desktop e tentar “apertar” no mobile.
- Criar muitas exceções para compensar largura fixa.
- Ignorar telas intermediárias.

## Boas práticas

- CSS base deve funcionar em telas pequenas.
- Use breakpoints pelo conteúdo.
- Expanda layout gradualmente.
- Combine layout fluido e poucos breakpoints.
- Valide com textos reais e imagens reais.
