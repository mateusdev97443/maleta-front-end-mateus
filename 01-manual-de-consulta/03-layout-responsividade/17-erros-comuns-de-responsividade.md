# Erros comuns de responsividade

## Introdução

Este capítulo é um guia de diagnóstico. Para cada erro, observe o sintoma, identifique a causa provável, veja um exemplo ruim e aplique uma correção recomendada.

## 1. Largura fixa

### Sintoma

A página cria rolagem horizontal em telas pequenas.

### Causa provável

Algum elemento usa `width` fixo maior que a tela.

### Exemplo ruim

```css
.container {
  width: 1200px;
}
```

### Correção recomendada

```css
.container {
  width: min(100% - 2rem, 1200px);
  margin-inline: auto;
}
```

## 2. Imagem sem limite

### Sintoma

A imagem ultrapassa o card ou a seção.

### Causa provável

A imagem mantém seu tamanho original sem `max-width`.

### Exemplo ruim

```css
.card img {
  width: auto;
}
```

### Correção recomendada

```css
.card img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

## 3. Grid com coluna fixa

### Sintoma

Cards ficam espremidos ou estouram no mobile.

### Causa provável

A grade usa colunas fixas demais.

### Exemplo ruim

```css
.cards {
  display: grid;
  grid-template-columns: 300px 300px 300px;
}
```

### Correção recomendada

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}
```

## 4. Flex sem wrap

### Sintoma

Itens de menu ou cards saem da tela.

### Causa provável

O container flexível não permite quebra de linha.

### Exemplo ruim

```css
.menu {
  display: flex;
  gap: 1rem;
}
```

### Correção recomendada

```css
.menu {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
```

## 5. Texto longo causando overflow

### Sintoma

Uma palavra, URL ou código ultrapassa o card.

### Causa provável

Conteúdo longo não tem regra de quebra.

### Exemplo ruim

```html
<p>https://exemplo.com/caminho-muito-muito-muito-longo-sem-quebra</p>
```

### Correção recomendada

```css
.card {
  overflow-wrap: break-word;
}
```

## 6. Padding exagerado no mobile

### Sintoma

O conteúdo fica apertado ou quase sem espaço útil.

### Causa provável

O mesmo padding grande do desktop foi usado no mobile.

### Exemplo ruim

```css
.secao {
  padding: 6rem 4rem;
}
```

### Correção recomendada

```css
.secao {
  padding: clamp(2rem, 6vw, 6rem) clamp(1rem, 4vw, 4rem);
}
```

## 7. Breakpoint copiado sem necessidade

### Sintoma

O layout muda em pontos estranhos ou antes de precisar.

### Causa provável

Breakpoints foram copiados de aparelhos ou frameworks, não do conteúdo.

### Exemplo ruim

```css
@media (min-width: 768px) {
  .cards {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### Correção recomendada

Use `auto-fit` ou crie breakpoint quando a largura realmente comportar a mudança.

```css
.cards {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
```

## 8. Excesso de media queries

### Sintoma

O CSS fica difícil de prever e uma regra corrige a anterior.

### Causa provável

A base não é fluida e depende de muitos remendos.

### Exemplo ruim

```css
.caixa { width: 320px; }
@media (min-width: 500px) { .caixa { width: 460px; } }
@media (min-width: 700px) { .caixa { width: 680px; } }
```

### Correção recomendada

```css
.caixa {
  width: min(100%, 680px);
}
```

## 9. Esconder problema com `overflow: hidden`

### Sintoma

O conteúdo é cortado, mas o problema “some”.

### Causa provável

`overflow: hidden` foi usado sem entender qual elemento estourava.

### Exemplo ruim

```css
body {
  overflow-x: hidden;
}
```

### Correção recomendada

Inspecione o elemento causador e corrija largura fixa, imagem sem limite, grid mal definido ou texto longo.

## 10. Testar só em uma largura

### Sintoma

Funciona no notebook do desenvolvedor, mas quebra em tablets ou celulares.

### Causa provável

O layout não foi testado em larguras intermediárias.

### Correção recomendada

Redimensione o navegador manualmente e teste faixas como 360px, 480px, 768px, 1024px e larguras intermediárias.

## 11. Pensar primeiro no desktop

### Sintoma

O CSS mobile vira uma coleção de correções com `max-width`.

### Causa provável

O layout grande foi criado antes da experiência mínima.

### Correção recomendada

Escreva a base para mobile e use `min-width` para melhorar em telas maiores.

## Checklist de diagnóstico rápido

- Existe largura fixa maior que a tela?
- Alguma imagem não tem limite?
- Algum flex precisa de `flex-wrap`?
- Algum grid usa colunas rígidas?
- Algum texto longo precisa quebrar?
- O layout foi testado entre os breakpoints?
