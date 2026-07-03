# 05 — Links, imagens e mídias

## Links

Use `a` para navegação ou referência. O atributo `href` define o destino.

```html
<a href="/contato">Fale conosco</a>
<a href="#precos">Ver preços</a>
<a href="https://exemplo.com" target="_blank" rel="noopener noreferrer">Site externo</a>
```

- `target="_blank"` abre em nova aba.
- `rel="noopener noreferrer"` protege links externos em nova aba.
- Âncoras internas apontam para um `id` da mesma página.

## Imagens

```html
<img src="produto.jpg" alt="Mochila preta com bolso frontal" width="800" height="600">
```

- `src`: caminho do arquivo.
- `alt`: alternativa textual; descreva a informação da imagem.
- `width` e `height`: ajudam o navegador a reservar espaço e reduzem deslocamento visual.

## `figure` e `figcaption`

```html
<figure>
  <img src="grafico-vendas.png" alt="Gráfico de vendas crescendo entre janeiro e março" width="900" height="500">
  <figcaption>Evolução de vendas no primeiro trimestre.</figcaption>
</figure>
```

## Vídeo, áudio e iframe

```html
<video controls width="640">
  <source src="aula-html.mp4" type="video/mp4">
  Seu navegador não suporta vídeo HTML.
</video>

<audio controls>
  <source src="podcast.mp3" type="audio/mpeg">
</audio>

<iframe src="https://www.youtube.com/embed/ID" title="Aula de HTML" loading="lazy" allowfullscreen></iframe>
```

## Boas práticas

- Nunca deixe imagem informativa sem `alt`.
- Use `alt=""` apenas para imagem decorativa.
- Não use link como botão quando a ação não navega.
- Use `loading="lazy"` em iframes e imagens fora da dobra quando apropriado.
