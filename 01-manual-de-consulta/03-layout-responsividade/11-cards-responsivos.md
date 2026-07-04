# Cards responsivos

## Introdução

Cards agrupam informações relacionadas em blocos reutilizáveis. Um card responsivo precisa funcionar com pouco ou muito texto, com ou sem imagem, em uma coluna no mobile e em grade quando houver espaço.

## Estrutura HTML de card

```html
<article class="card">
  <img class="card__imagem" src="layout.jpg" alt="Exemplo de layout responsivo">
  <div class="card__corpo">
    <p class="card__categoria">Layout</p>
    <h2 class="card__titulo">Cards responsivos</h2>
    <p class="card__texto">Um card deve se adaptar ao conteúdo sem depender de altura fixa.</p>
    <a class="card__acao" href="#">Ler mais</a>
  </div>
</article>
```

Use `article` quando o card representa conteúdo independente, como projeto, post, produto ou aula.

## Card com imagem

```css
.card {
  display: grid;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 1rem;
  background: #fff;
}

.card__imagem {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.card__corpo {
  display: grid;
  gap: 0.75rem;
  padding: 1rem;
}
```

A imagem usa proporção fixa, mas o corpo do card cresce conforme o conteúdo.

## Card sem imagem

```html
<article class="card card--simples">
  <h2>Checklist de responsividade</h2>
  <p>Revise largura, imagens, espaçamentos e breakpoints.</p>
</article>
```

```css
.card--simples {
  padding: clamp(1rem, 3vw, 1.5rem);
  gap: 0.75rem;
}
```

Cards sem imagem dependem mais de hierarquia tipográfica e espaçamento.

## Card com botão

```css
.card__acao {
  display: inline-block;
  justify-self: start;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background: #111827;
  color: #fff;
  text-decoration: none;
}
```

Use `justify-self: start` para impedir que o botão ocupe largura total quando isso não for desejado.

## Cards em Flexbox

Flexbox funciona bem quando os cards precisam quebrar linha e ter largura mínima.

```css
.cards-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.cards-flex > .card {
  flex: 1 1 260px;
}
```

## Cards em Grid

Grid é a opção mais direta para grade responsiva.

```css
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}
```

Esse padrão cria colunas quando couber e mantém uma coluna no mobile.

## Altura variável

Evite forçar `height` em cards com texto real. Títulos podem ter duas linhas, descrições podem variar e botões podem quebrar.

```css
/* Frágil */
.card-ruim {
  height: 320px;
}

/* Mais seguro */
.card-bom {
  min-height: 100%;
}
```

Se precisar alinhar botões no final, use grid interno:

```css
.card__corpo {
  display: grid;
  grid-template-rows: auto auto 1fr auto;
}
```

## Quando usar

Use cards para listas de projetos, benefícios, posts, planos, produtos, recursos e métricas. Não use card para tudo: se o conteúdo é apenas texto corrido, uma seção simples pode ser melhor.

## Erros comuns

- Altura fixa que quebra com texto maior.
- Imagem sem proporção, deixando cards desalinhados.
- Botão esticado sem intenção.
- Grade com colunas fixas que estouram o mobile.
- Cards com informações demais e pouca hierarquia.

## Boas práticas

- Use `article` quando o card for conteúdo independente.
- Controle imagem com `aspect-ratio` e `object-fit`.
- Prefira Grid para listas de cards.
- Use `gap` dentro do card.
- Teste com títulos longos e sem imagem.
