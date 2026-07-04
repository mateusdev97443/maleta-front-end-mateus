# Modelo de análise de layout

## Introdução

Antes de codar, analise o layout. Essa etapa evita escolhas aleatórias e ajuda a decidir onde usar fluxo normal, Flexbox, Grid, containers e breakpoints.

## Perguntas de análise

- Qual é a estrutura principal?
- Quais são as seções?
- O layout é mais linear ou em grade?
- Onde preciso de Flexbox?
- Onde preciso de Grid?
- Qual é a largura máxima adequada?
- Como o layout deve se comportar no mobile?
- Quais elementos quebram primeiro?
- Onde pode surgir overflow?
- Quais espaçamentos precisam ser consistentes?
- Quais imagens precisam ser fluidas?

## Processo recomendado

1. Liste as seções de cima para baixo.
2. Identifique quais blocos são conteúdo e quais são navegação.
3. Defina o comportamento mobile primeiro.
4. Escolha containers e larguras máximas.
5. Marque áreas de Flexbox e Grid.
6. Teste mentalmente textos longos e imagens grandes.
7. Só depois escreva o CSS.

## Modelo preenchível

```text
Nome do layout:
Objetivo da página:

Seções principais:
1.
2.
3.

Estrutura no mobile:

Estrutura no tablet:

Estrutura no desktop:

Onde usarei Flexbox:

Onde usarei Grid:

Largura máxima do container:

Breakpoints prováveis e motivo:

Elementos com risco de overflow:

Imagens que precisam ser fluidas:

Padrão de espaçamento:

Critérios para considerar pronto:
```

## Exemplo de decisão

Se uma página tem hero, cards e rodapé, o mobile pode ser uma coluna simples. Os cards podem usar Grid com `auto-fit`. O hero pode virar duas colunas apenas quando houver espaço suficiente para texto e imagem respirarem.
