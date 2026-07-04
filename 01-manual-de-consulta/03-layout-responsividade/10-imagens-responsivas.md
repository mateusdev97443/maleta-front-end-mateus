# Imagens responsivas

## Introdução

Imagens precisam acompanhar o espaço disponível sem distorcer, quebrar cards ou criar rolagem horizontal. O objetivo deste capítulo é transformar o assunto em decisões práticas: o que usar, quando usar e quais cuidados tomar.

## Explicação conceitual

Todo layout começa pelo conteúdo. Antes de aplicar Flexbox, Grid ou media queries, observe a ordem dos elementos, a largura disponível, a relação entre blocos e a prioridade da informação. Um bom layout não tenta forçar a tela; ele distribui o conteúdo de forma fluida, com limites claros e espaçamentos consistentes.

Pense sempre em três perguntas:

- O elemento precisa ocupar a linha inteira ou apenas o espaço do conteúdo?
- Os filhos precisam ficar em linha, coluna ou grade?
- Em qual largura o conteúdo começa a perder legibilidade?

## Exemplo prático

```html
<section class="secao">
  <div class="container">
    <h2>Título da seção</h2>
    <p>Conteúdo organizado com largura controlada e espaçamento previsível.</p>
  </div>
</section>
```

```css
.container {
  width: min(100% - 2rem, 1120px);
  margin-inline: auto;
}

.secao {
  padding-block: clamp(2rem, 6vw, 5rem);
}
```

Esse padrão já resolve grande parte das páginas: a seção controla o respiro vertical e o container controla a leitura horizontal.

## Quando usar

Use este padrão quando precisar organizar blocos de conteúdo, criar seções de página, limitar linhas muito longas, alinhar elementos com consistência ou preparar a estrutura para evoluir em diferentes tamanhos de tela.

## Erros comuns

- Definir `width: 1200px` sem alternativa fluida.
- Resolver todo problema com media query antes de ajustar o layout base.
- Usar `margin` aleatório em cada elemento sem padrão.
- Esquecer que o mobile deve funcionar antes do desktop.
- Esconder overflow sem investigar qual elemento está causando a quebra.

## Boas práticas

- Comece simples e deixe o conteúdo respirar.
- Use `max-width`, `min()`, `clamp()` e porcentagens com intenção.
- Prefira espaçamentos reutilizáveis.
- Teste larguras intermediárias, não apenas celular e notebook.
- Escolha Flexbox para alinhamento em um eixo e Grid para estruturas em duas dimensões.

## Técnicas essenciais para imagens

A base mais segura para imagens fluidas é:

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

`max-width: 100%` impede que a imagem ultrapasse o container. `height: auto` preserva a proporção original e evita distorção. Em cards, pode ser necessário controlar recorte visual:

```css
.card__imagem {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 0.75rem;
}
```

Use `object-fit: cover` quando a imagem deve preencher uma área sem deformar, aceitando corte. Use `object-fit: contain` quando a imagem inteira precisa aparecer, aceitando sobras.
