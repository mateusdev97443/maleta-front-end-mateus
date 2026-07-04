# Espaçamento e alinhamento básico

## Margin e padding

`margin` cria espaço externo. `padding` cria espaço interno.

```css
.card {
  padding: 1rem;
  margin-bottom: 1.5rem;
}
```

## Gap como noção básica

`gap` define espaço entre itens em contextos como Flexbox e Grid. Nesta fase, entenda a ideia sem aprofundar layout, pois isso será tratado na Fase 4.

```css
.lista-acoes {
  display: inline-flex;
  gap: 0.5rem;
}
```

## Text-align

`text-align` alinha conteúdo inline e texto.

```css
.cabecalho { text-align: center; }
```

## Vertical-align

`vertical-align` funciona em elementos inline, inline-block e células de tabela. Não é solução universal para centralizar blocos.

```css
.icone { vertical-align: middle; }
```

## Centralização básica

Centralizar bloco com largura definida:

```css
.container {
  width: min(90%, 70rem);
  margin-inline: auto;
}
```

Centralizar texto:

```css
.chamada { text-align: center; }
```

Evite entrar em soluções complexas aqui; Flexbox e Grid serão aprofundados na Fase 4.
