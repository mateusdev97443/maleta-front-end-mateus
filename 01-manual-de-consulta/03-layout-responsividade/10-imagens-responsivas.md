# Imagens responsivas

## Introdução

Imagens são uma das causas mais comuns de layout quebrado. Uma imagem sem limite pode ultrapassar o container; uma imagem com largura e altura mal definidas pode distorcer; uma imagem de card sem proporção pode desalinhá-lo.

## Base segura para imagens fluidas

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

`max-width: 100%` impede que a imagem seja maior que o container. `height: auto` mantém a proporção original. `display: block` remove o espaço inferior típico de imagens inline.

## Exemplo ruim: imagem causando overflow

```css
.imagem-ruim {
  width: 900px;
}
```

Em telas menores, essa largura fixa cria rolagem horizontal.

```css
.imagem-correta {
  width: 100%;
  max-width: 900px;
  height: auto;
}
```

## Evitar distorção

Não defina largura e altura arbitrárias sem controlar proporção.

```css
/* Ruim: pode deformar a imagem. */
.foto {
  width: 300px;
  height: 300px;
}

/* Melhor para recorte controlado. */
.foto {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
```

## `object-fit`

`object-fit: cover` preenche a área e corta o excesso sem distorcer. `object-fit: contain` mostra a imagem inteira, podendo sobrar espaço.

```css
.card__imagem {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
```

## `aspect-ratio`

`aspect-ratio` reserva proporção para a área da imagem. Ele ajuda cards a manterem consistência visual mesmo com imagens de tamanhos diferentes.

```css
.avatar {
  width: 5rem;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
}
```

## Imagens dentro de cards

```html
<article class="card">
  <img class="card__imagem" src="projeto.jpg" alt="Tela de projeto responsivo">
  <div class="card__conteudo">
    <h2>Projeto responsivo</h2>
    <p>Card com imagem proporcional e texto flexível.</p>
  </div>
</article>
```

```css
.card {
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 1rem;
}

.card__imagem {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.card__conteudo {
  padding: 1rem;
}
```

## Imagens em hero section

No hero, a imagem precisa acompanhar o texto. No mobile, normalmente ela aparece abaixo ou acima do texto; no desktop, pode ficar em coluna lateral.

```css
.hero {
  display: grid;
  gap: 2rem;
}

.hero img {
  width: 100%;
  height: auto;
}

@media (min-width: 900px) {
  .hero {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
}
```

## Quando usar

Use essas técnicas em cards, banners, galerias, avatars, imagens editoriais, hero sections e qualquer área em que a imagem possa ficar maior que o espaço disponível.

## Erros comuns

- Usar imagem com `width` fixa sem limite.
- Definir `height` sem `object-fit` e distorcer.
- Esquecer `display: block` e ver espaços estranhos.
- Colocar imagem grande dentro de grid sem `max-width`.
- Aplicar `overflow: hidden` sem entender se o corte é desejado.

## Boas práticas

- Defina regra global segura para `img`.
- Use `aspect-ratio` em cards e galerias.
- Use `object-fit` para recorte controlado.
- Teste imagens horizontais, verticais e quadradas.
- Escreva `alt` útil no HTML.
