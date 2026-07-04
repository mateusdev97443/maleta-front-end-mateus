# Padrão profissional para responsividade

## Introdução

Este é o padrão oficial da Maleta para criar layouts responsivos. Ele deve orientar exercícios, projetos e revisões futuras.

## Princípios

- Começar pelo conteúdo.
- Evitar largura fixa desnecessária.
- Usar `max-width` com inteligência.
- Preferir layout fluido.
- Usar mobile-first.
- Criar breakpoints pelo conteúdo.
- Evitar excesso de media queries.
- Evitar overflow horizontal.
- Testar em várias larguras.
- Manter espaçamentos consistentes.
- Usar Flexbox e Grid com intenção.
- Não usar gambiarra para “forçar” layout.
- Não esconder problemas com `overflow: hidden` sem entender a causa.

## Padrão de implementação

```css
.container {
  width: min(100% - 2rem, 1120px);
  margin-inline: auto;
}

.secao {
  padding-block: clamp(2rem, 6vw, 5rem);
}

.grade-responsiva {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}
```

## Como decidir entre Flexbox e Grid

Use Flexbox para alinhar itens em uma linha ou coluna, especialmente dentro de componentes. Use Grid para estruturas com linhas e colunas, como páginas, galerias, dashboards e grupos de cards.

## Como lidar com problemas

Quando algo quebrar, não esconda o problema imediatamente. Identifique o elemento causador, verifique largura fixa, conteúdo longo, imagem sem limite, grid mal definido ou item flexível sem quebra. Corrija a causa.

## Critério profissional

Um layout profissional é previsível, fluido, testável e fácil de explicar. Se você não consegue justificar uma largura, um breakpoint ou uma técnica de alinhamento, revise a decisão.
