# Unidades de medida

Unidades de medida definem tamanhos, espaçamentos e limites. A escolha correta influencia manutenção, acessibilidade, zoom, leitura e adaptação a diferentes telas.

## Tabela de referência

| Unidade | Relativa a quê? | Bons usos | Cuidados |
|---|---|---|---|
| `px` | Valor fixo de pixel CSS | bordas, sombras, detalhes finos | excesso prejudica adaptação e zoom de fonte |
| `%` | tamanho do elemento pai | larguras fluidas | depende do contexto do pai |
| `em` | fonte do próprio elemento | espaçamentos ligados ao componente | pode acumular em aninhamentos |
| `rem` | fonte raiz do documento | fontes e espaçamentos globais | depende da configuração raiz |
| `vw` | largura da viewport | efeitos pontuais ligados à tela | pode ficar exagerado em telas grandes |
| `vh` | altura da viewport | seções com altura mínima | cuidado com barras do navegador em mobile |
| `ch` | largura aproximada do caractere `0` | limitar linhas de texto | varia conforme a fonte |

## `px`

Use `px` quando um detalhe deve ser estável.

```css
.card {
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);
}
```

Evite usar `px` como padrão para tudo, especialmente fontes e grandes larguras fixas.

```css
/* Ruim */
body {
  font-size: 14px;
}

/* Melhor */
body {
  font-size: 1rem;
}
```

## `%`

Percentual depende do tamanho do elemento pai.

```css
.imagem {
  width: 100%;
  height: auto;
}

.container {
  width: 90%;
}
```

É útil para larguras fluidas, mas pode ser imprevisível se o pai não tiver tamanho claro.

## `em`

`em` é relativo ao tamanho da fonte do próprio elemento.

```css
.botao {
  font-size: 1rem;
  padding: 0.75em 1em;
}
```

Nesse exemplo, se o botão tiver fonte maior, o padding cresce junto. Isso é útil para componentes escaláveis.

Cuidado com aninhamento:

```css
.lista {
  font-size: 1.2em;
}
```

Listas dentro de listas podem crescer progressivamente.

## `rem`

`rem` é relativo à fonte raiz (`html`). É previsível para sistemas de tamanho.

```css
body {
  font-size: 1rem;
}

.titulo {
  font-size: 2rem;
}

.card {
  padding: 1.5rem;
}
```

É uma ótima unidade para tipografia e espaçamento global, pois respeita melhor ajustes do navegador.

## `vw` e `vh`

`vw` representa porcentagem da largura da viewport. `vh` representa porcentagem da altura.

```css
.hero {
  min-height: 60vh;
}

.titulo-impacto {
  font-size: clamp(2rem, 5vw, 4rem);
}
```

Use com moderação. Um texto em `vw` puro pode ficar pequeno demais em telas estreitas ou enorme em telas largas.

## `ch`

`ch` ajuda a limitar comprimento de linha.

```css
.artigo {
  max-width: 65ch;
}
```

Linhas muito longas cansam a leitura. `ch` é especialmente útil para conteúdo textual.

## Exemplos práticos

### Fonte

```css
body {
  font-size: 1rem;
  line-height: 1.5;
}

h1 {
  font-size: 2.5rem;
}
```

### Container

```css
.container {
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
}
```

### Texto

```css
.texto-longo {
  max-width: 65ch;
}
```

### Espaçamento

```css
.secao {
  padding-block: 3rem;
}

.card {
  padding: 1rem;
}
```

### Viewport

```css
.chamada {
  min-height: 50vh;
}
```

## Relação com zoom e acessibilidade

Usuários podem aumentar zoom ou tamanho padrão da fonte no navegador. Unidades relativas, como `rem`, `em`, `%` e `ch`, tendem a respeitar melhor essas preferências.

Evite travar layout com combinações como:

```css
/* Ruim */
.container {
  width: 1200px;
}

.card {
  height: 180px;
}
```

Prefira limites flexíveis:

```css
.container {
  width: min(100% - 2rem, 75rem);
}

.card {
  min-height: 11rem;
}
```

## Erros comuns

| Erro | Problema | Melhor caminho |
|---|---|---|
| Usar `px` em todo lugar | Interface rígida. | Usar `rem`, `%` e limites flexíveis. |
| Definir largura fixa grande | Quebra em telas menores. | Usar `width` fluido e `max-width`. |
| Usar `vh` para tudo | Pode cortar conteúdo. | Preferir `min-height` e testar conteúdo real. |
| Usar `em` sem entender herança | Tamanhos acumulam. | Usar `rem` para escala global. |
| Texto sem limite de linha | Leitura cansativa. | Usar `max-width` em `ch`. |
