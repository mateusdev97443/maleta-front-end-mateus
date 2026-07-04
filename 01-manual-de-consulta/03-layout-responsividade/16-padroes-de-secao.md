# Padrões de seção

## Introdução

Seções são blocos de construção de páginas. Um projeto profissional reaproveita padrões de seção com variações, em vez de reinventar espaçamento, container e grade a cada bloco.

## Objetivo dos padrões

Padrões ajudam a manter consistência. Eles definem como uma seção respira, como limita conteúdo, como organiza título e como adapta layout em telas diferentes.

## Estrutura base

```html
<section class="secao">
  <div class="container">
    <header class="secao__cabecalho">
      <p class="etiqueta">Aprendizado</p>
      <h2>Layouts que se adaptam</h2>
      <p>Use padrões para criar páginas consistentes.</p>
    </header>

    <div class="secao__conteudo">...</div>
  </div>
</section>
```

```css
.secao {
  padding-block: clamp(2.5rem, 7vw, 6rem);
}

.container {
  width: min(100% - 2rem, 1120px);
  margin-inline: auto;
}

.secao__cabecalho {
  max-width: 70ch;
  margin-bottom: clamp(1.5rem, 4vw, 3rem);
}
```

## Hero

Hero apresenta a mensagem principal. Deve priorizar título, texto e ação.

```css
.hero {
  display: grid;
  gap: 2rem;
  align-items: center;
}

@media (min-width: 900px) {
  .hero {
    grid-template-columns: 1.1fr 0.9fr;
  }
}
```

## Benefícios em cards

Use quando existem vantagens ou recursos repetíveis.

```css
.beneficios {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}
```

## Seção alternada

Boa para explicar um recurso com texto e imagem.

```html
<section class="secao">
  <div class="container secao-alternada">
    <div>Texto explicativo</div>
    <img src="exemplo.png" alt="Exemplo visual">
  </div>
</section>
```

```css
.secao-alternada {
  display: grid;
  gap: 2rem;
  align-items: center;
}

@media (min-width: 880px) {
  .secao-alternada {
    grid-template-columns: 1fr 1fr;
  }
}
```

## Chamada final

A chamada final deve ser curta, centralizada se fizer sentido e com ação clara.

```css
.cta-final {
  max-width: 720px;
  margin-inline: auto;
  text-align: center;
}
```

## Rodapé simples

Rodapé pode usar Flexbox para distribuir informações quando houver espaço.

```css
.rodape {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
}
```

## Comportamento no mobile e desktop

No mobile, quase todos os padrões viram coluna única. No desktop, apenas alguns ganham colunas. Não force duas colunas se o conteúdo fica apertado.

## Problemas comuns

- Cada seção com padding diferente sem motivo.
- Títulos sem largura de leitura.
- Imagens desalinhadas por falta de proporção.
- Seções alternadas quebrando a ordem lógica no mobile.
- Repetir código em vez de criar padrões reutilizáveis.

## Boas práticas

- Use uma classe de seção para espaçamento vertical.
- Use container para largura horizontal.
- Use cabeçalho de seção para título e descrição.
- Varie layout sem quebrar consistência.
- Pense primeiro na sequência mobile.
