# Snippets CSS

Use estes snippets como ponto de partida. Eles devem ser adaptados ao projeto, à identidade visual e aos requisitos de acessibilidade.

## Reset básico comentado

Remove diferenças comuns de espaçamento e torna o cálculo de caixas mais previsível.

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
```

## Variáveis em `:root`

Centraliza decisões visuais para evitar repetição e facilitar manutenção.

```css
:root {
  --cor-texto: #111827;
  --cor-texto-suave: #4b5563;
  --cor-fundo: #ffffff;
  --cor-superficie: #f9fafb;
  --cor-primaria: #2563eb;
  --cor-primaria-hover: #1d4ed8;
  --cor-borda: #e5e7eb;
  --espaco-1: 0.25rem;
  --espaco-2: 0.5rem;
  --espaco-3: 1rem;
  --espaco-4: 1.5rem;
  --raio-base: 0.5rem;
}
```

## Base de `body`

Define leitura, cor e fundo padrão para a página inteira.

```css
body {
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--cor-texto);
  background-color: var(--cor-fundo);
}
```

## Container simples

Limita largura máxima e mantém respiro lateral sem aprofundar estratégias de layout.

```css
.container {
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
}
```

## Botão base com `hover` e `focus-visible`

Cria uma base reutilizável com estados visuais para mouse e teclado.

```css
.botao {
  display: inline-block;
  padding: 0.75rem 1rem;
  border: 0;
  border-radius: var(--raio-base);
  color: #ffffff;
  background-color: var(--cor-primaria);
  font: inherit;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}

.botao:hover,
.botao:focus-visible {
  background-color: var(--cor-primaria-hover);
}

.botao:focus-visible {
  outline: 3px solid #f59e0b;
  outline-offset: 3px;
}
```

## Card base

Serve para agrupar conteúdo com borda, fundo e espaçamento interno consistentes.

```css
.card {
  padding: var(--espaco-4);
  border: 1px solid var(--cor-borda);
  border-radius: 0.75rem;
  background-color: var(--cor-fundo);
  box-shadow: 0 8px 20px rgb(0 0 0 / 0.06);
}
```

## Imagem responsiva simples

Evita que imagens ultrapassem o tamanho do container.

```css
.imagem-fluid {
  display: block;
  max-width: 100%;
  height: auto;
}
```

## Link com foco visível

Mantém links reconhecíveis e acessíveis para navegação por teclado.

```css
.link {
  color: var(--cor-primaria);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

.link:hover,
.link:focus-visible {
  color: var(--cor-primaria-hover);
}

.link:focus-visible {
  outline: 3px solid #f59e0b;
  outline-offset: 3px;
}
```

## Formulário base

Padroniza campos sem remover o vínculo semântico entre label e input.

```css
.campo-grupo {
  margin-bottom: var(--espaco-3);
}

.label {
  display: block;
  margin-bottom: var(--espaco-2);
  font-weight: 700;
}

.campo {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: var(--raio-base);
  font: inherit;
}

.campo:focus-visible {
  border-color: var(--cor-primaria);
  outline: 3px solid #bfdbfe;
}
```

## Tabela base

Melhora leitura de dados tabulares com espaçamento e divisórias leves.

```css
.tabela {
  width: 100%;
  border-collapse: collapse;
}

.tabela th,
.tabela td {
  padding: 0.75rem;
  border-bottom: 1px solid var(--cor-borda);
  text-align: left;
}

.tabela th {
  color: var(--cor-texto);
  background-color: var(--cor-superficie);
}
```

## Classe `sr-only`

Esconde visualmente um conteúdo, mantendo-o disponível para tecnologias assistivas quando essa for a intenção.

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
```

## Utilitários simples

Utilitários pequenos resolvem ajustes recorrentes sem criar componentes novos.

```css
.texto-centro {
  text-align: center;
}

.texto-suave {
  color: var(--cor-texto-suave);
}

.mt-0 {
  margin-top: 0;
}

.mb-3 {
  margin-bottom: var(--espaco-3);
}
```

## Estados `hover`, `focus` e `disabled`

Estados deixam componentes mais claros e evitam interações confusas.

```css
.botao:hover,
.botao:focus-visible {
  background-color: var(--cor-primaria-hover);
}

.botao:disabled,
.botao[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.campo:disabled {
  color: #6b7280;
  background-color: #f3f4f6;
  cursor: not-allowed;
}
```
