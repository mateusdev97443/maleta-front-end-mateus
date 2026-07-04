# Snippets de layout e responsividade

## Introdução

Estes snippets são pontos de partida reutilizáveis. Ajuste nomes, medidas e cores conforme o projeto, mantendo a intenção profissional: fluidez, legibilidade e responsividade.

## Container centralizado

Quando usar: centralizar conteúdo horizontalmente.

```css
.container {
  width: 100%;
  margin-inline: auto;
}
```

Observação profissional: centralização sem limite de largura pode deixar textos longos demais.

## Container com largura máxima

Quando usar: controlar leitura em páginas largas.

```css
.container {
  width: min(100% - 2rem, 1120px);
  margin-inline: auto;
}
```

Observação profissional: `min()` combina fluidez e limite em uma linha.

## Seção responsiva

Quando usar: criar blocos verticais com respiro.

```css
.secao {
  padding-block: clamp(2rem, 6vw, 5rem);
}
```

Observação profissional: `clamp()` reduz a necessidade de media queries para espaçamento.

## Grid de cards responsivo

Quando usar: cards que aumentam colunas conforme o espaço.

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}
```

Observação profissional: teste textos longos para garantir alturas aceitáveis.

## Card responsivo

Quando usar: bloco reutilizável de conteúdo.

```css
.card {
  display: grid;
  gap: 0.75rem;
  padding: clamp(1rem, 3vw, 1.5rem);
  border: 1px solid #ddd;
  border-radius: 1rem;
}
```

Observação profissional: evite altura fixa em cards com conteúdo variável.

## Centralização com Flexbox

Quando usar: centralizar item em uma área.

```css
.centralizar-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Observação profissional: lembre que `justify-content` segue o eixo principal.

## Centralização com Grid

Quando usar: centralização simples em duas dimensões.

```css
.centralizar-grid {
  display: grid;
  place-items: center;
}
```

Observação profissional: ótimo para cards vazios, estados de carregamento e painéis.

## Layout mobile-first

Quando usar: evoluir de uma coluna para duas.

```css
.layout {
  display: grid;
  gap: 1rem;
}

@media (min-width: 800px) {
  .layout {
    grid-template-columns: 2fr 1fr;
  }
}
```

Observação profissional: o CSS base precisa ser completo e funcional.

## Media query base

Quando usar: criar melhoria para telas maiores.

```css
@media (min-width: 768px) {
  .elemento {
    /* melhoria progressiva */
  }
}
```

Observação profissional: não crie breakpoint sem problema real de layout.

## Imagem responsiva

Quando usar: impedir estouro e distorção.

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

Observação profissional: `display: block` evita espaços indesejados abaixo da imagem.

## Formulário responsivo

Quando usar: campos que viram colunas em telas maiores.

```css
.formulario {
  display: grid;
  gap: 1rem;
}

@media (min-width: 720px) {
  .formulario__linha {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
}
```

Observação profissional: no mobile, prefira campos empilhados.

## Dashboard simples com Grid

Quando usar: sidebar conceitual e conteúdo principal.

```css
.dashboard {
  display: grid;
  gap: 1rem;
}

@media (min-width: 960px) {
  .dashboard {
    grid-template-columns: 240px minmax(0, 1fr);
  }
}
```

Observação profissional: `minmax(0, 1fr)` ajuda a evitar overflow no conteúdo.

## Hero section responsiva

Quando usar: abertura de landing page.

```css
.hero {
  display: grid;
  gap: 2rem;
  align-items: center;
  padding-block: clamp(3rem, 8vw, 6rem);
}

@media (min-width: 900px) {
  .hero {
    grid-template-columns: 1.1fr 0.9fr;
  }
}
```

Observação profissional: priorize título, texto e chamada de ação no mobile.

## Espaçamento responsivo com clamp()

Quando usar: ajustar respiro sem várias media queries.

```css
.bloco {
  padding: clamp(1rem, 4vw, 3rem);
}
```

Observação profissional: escolha mínimo, valor fluido e máximo com intenção visual.

## Tipografia responsiva com clamp()

Quando usar: títulos que crescem com a tela sem exagero.

```css
.titulo {
  font-size: clamp(2rem, 6vw, 4.5rem);
  line-height: 1.05;
}
```

Observação profissional: sempre teste quebra de linha em português.
