# Containers, largura máxima e centralização

## Introdução

Container é o elemento que controla a largura útil do conteúdo. Ele impede que textos fiquem longos demais no desktop e garante respiro lateral no mobile.

## `width`, `max-width` e `min-width`

`width` define uma largura desejada. `max-width` define um limite máximo. `min-width` define um limite mínimo. Em responsividade, `max-width` costuma ser mais seguro que largura fixa.

```css
/* Ruim: pode estourar telas menores. */
.container-ruim {
  width: 1200px;
}

/* Melhor: ocupa a tela pequena e limita no desktop. */
.container {
  width: 100%;
  max-width: 1120px;
  margin-inline: auto;
}
```

## Centralização com `margin-inline: auto`

Quando um bloco tem largura menor que o pai, `margin-inline: auto` divide o espaço lateral e centraliza o elemento.

```css
.texto {
  max-width: 68ch;
  margin-inline: auto;
}
```

`ch` é útil para largura de leitura porque se relaciona ao tamanho dos caracteres.

## Container moderno com `min()`

```css
.container {
  width: min(100% - 2rem, 1120px);
  margin-inline: auto;
}
```

Esse padrão significa: use no máximo `1120px`, mas em telas pequenas deixe `1rem` de respiro de cada lado.

## Por que evitar `width: 1200px`

Uma largura fixa ignora telas menores. Em um celular de 390px, um elemento de 1200px cria rolagem horizontal. Responsividade exige que a largura possa encolher.

```css
/* Problema clássico */
.banner {
  width: 1200px;
}

/* Correção */
.banner {
  width: min(100%, 1200px);
}
```

## Containers para texto

Textos longos precisam de largura menor que layouts de cards. Um container de página pode ter 1120px, mas um artigo pode ter 65ch a 75ch.

```css
.artigo {
  width: min(100% - 2rem, 70ch);
  margin-inline: auto;
}
```

## Containers para seções

Uma seção controla o espaçamento vertical. O container interno controla a largura.

```html
<section class="secao">
  <div class="container">
    <h2>Benefícios</h2>
    <p>Conteúdo com largura controlada.</p>
  </div>
</section>
```

```css
.secao {
  padding-block: clamp(2rem, 6vw, 5rem);
}
```

## Containers aninhados

Evite aninhar containers sem motivo. Um container dentro de outro pode reduzir demais a largura e criar alinhamentos estranhos. Use container menor apenas quando o conteúdo realmente pedir, como texto de artigo dentro de uma página ampla.

## Exemplos bons e ruins

```css
/* Bom para página */
.container-pagina {
  width: min(100% - 2rem, 1120px);
  margin-inline: auto;
}

/* Bom para texto */
.container-texto {
  width: min(100% - 2rem, 68ch);
  margin-inline: auto;
}

/* Ruim para responsividade */
.container-fixo {
  width: 1180px;
}
```

## Quando usar

Use containers em páginas, seções, artigos, dashboards e formulários. Sempre que a tela puder ficar maior que a largura confortável do conteúdo, use um limite.

## Erros comuns

- Usar largura fixa em pixels sem limite fluido.
- Centralizar com `text-align: center` achando que isso centraliza o bloco.
- Aplicar container em cada card individual e perder alinhamento geral.
- Não deixar respiro lateral no mobile.
- Usar o mesmo limite para texto longo e grade de cards.

## Boas práticas

- Use `width: min(100% - 2rem, valor)` para containers principais.
- Use `ch` para limitar textos extensos.
- Separe responsabilidade: seção espaça, container limita.
- Evite containers aninhados sem necessidade.
