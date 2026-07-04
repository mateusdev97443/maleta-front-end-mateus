# Layout de landing page

## Introdução

Landing page é uma página focada em apresentar uma oferta, explicar valor e conduzir o visitante para uma ação. O layout precisa guiar a leitura: promessa, contexto, benefícios, prova e chamada final.

## Objetivo do layout

O objetivo não é “encher a página”. É criar uma sequência clara. Cada seção deve responder uma pergunta do visitante: o que é, por que importa, como funciona e qual é o próximo passo.

## Estrutura HTML recomendada

```html
<header class="topo container">
  <a href="/" class="logo">Maleta</a>
  <nav aria-label="Navegação principal">
    <ul class="menu">
      <li><a href="#beneficios">Benefícios</a></li>
      <li><a href="#projetos">Projetos</a></li>
      <li><a href="#contato">Contato</a></li>
    </ul>
  </nav>
</header>

<main>
  <section class="hero container">
    <div class="hero__conteudo">
      <p class="etiqueta">Fase 4</p>
      <h1>Aprenda layout responsivo com base profissional</h1>
      <p>Domine containers, Flexbox, Grid e mobile-first praticando com exemplos reais.</p>
      <a class="botao" href="#beneficios">Ver benefícios</a>
    </div>
    <img src="hero.png" alt="Interface organizada em layout responsivo">
  </section>

  <section id="beneficios" class="secao">
    <div class="container">
      <h2>Benefícios</h2>
      <div class="cards">...</div>
    </div>
  </section>
</main>
```

## Comportamento no mobile

No mobile, a landing page deve ser linear. O hero aparece em uma coluna, o menu pode empilhar ou quebrar linha, cards ficam em uma coluna e a chamada de ação precisa aparecer cedo.

## Comportamento no desktop

No desktop, o hero pode virar duas colunas, os benefícios podem formar uma grade e seções alternadas podem usar texto e imagem lado a lado.

## Onde usar Flexbox

Use Flexbox no topo para alinhar logo e menu, em grupos de botões e em pequenos componentes internos.

```css
.topo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
```

## Onde usar Grid

Use Grid no hero e nas listas de cards.

```css
.hero {
  display: grid;
  gap: 2rem;
  align-items: center;
  padding-block: clamp(3rem, 8vw, 6rem);
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}

@media (min-width: 900px) {
  .hero {
    grid-template-columns: 1.1fr 0.9fr;
  }
}
```

## Onde usar container

Use container no topo, hero e conteúdo interno das seções. A seção controla o espaço vertical; o container limita a largura.

```css
.container {
  width: min(100% - 2rem, 1120px);
  margin-inline: auto;
}

.secao {
  padding-block: clamp(2.5rem, 7vw, 6rem);
}
```

## Problemas comuns

- Hero com título longo estourando no mobile.
- Imagem do hero com largura fixa.
- Cards com altura fixa e textos cortados.
- CTA principal escondido muito abaixo.
- Espaçamento grande demais em telas pequenas.

## Exemplo semicompleto de CSS

```css
.hero__conteudo {
  display: grid;
  gap: 1rem;
}

.hero img {
  width: 100%;
  height: auto;
}

.botao {
  display: inline-block;
  justify-self: start;
  padding: 0.85rem 1.1rem;
  border-radius: 0.5rem;
  background: #111827;
  color: #fff;
  text-decoration: none;
}
```

## Boas práticas

- Escreva uma promessa clara no hero.
- Mantenha ordem de leitura coerente no HTML.
- Use uma CTA principal por seção importante.
- Prefira mobile-first.
- Teste se a landing page continua compreensível sem efeitos.
