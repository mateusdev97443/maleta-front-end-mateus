# Layout de landing page

## Introdução

Uma landing page combina hierarquia, seções, chamadas de ação e ritmo visual para guiar o visitante. O objetivo deste capítulo é transformar o assunto em decisões práticas: o que usar, quando usar e quais cuidados tomar.

## Explicação conceitual

Todo layout começa pelo conteúdo. Antes de aplicar Flexbox, Grid ou media queries, observe a ordem dos elementos, a largura disponível, a relação entre blocos e a prioridade da informação. Um bom layout não tenta forçar a tela; ele distribui o conteúdo de forma fluida, com limites claros e espaçamentos consistentes.

Pense sempre em três perguntas:

- O elemento precisa ocupar a linha inteira ou apenas o espaço do conteúdo?
- Os filhos precisam ficar em linha, coluna ou grade?
- Em qual largura o conteúdo começa a perder legibilidade?

## Exemplo prático

```html
<section class="secao">
  <div class="container">
    <h2>Título da seção</h2>
    <p>Conteúdo organizado com largura controlada e espaçamento previsível.</p>
  </div>
</section>
```

```css
.container {
  width: min(100% - 2rem, 1120px);
  margin-inline: auto;
}

.secao {
  padding-block: clamp(2rem, 6vw, 5rem);
}
```

Esse padrão já resolve grande parte das páginas: a seção controla o respiro vertical e o container controla a leitura horizontal.

## Quando usar

Use este padrão quando precisar organizar blocos de conteúdo, criar seções de página, limitar linhas muito longas, alinhar elementos com consistência ou preparar a estrutura para evoluir em diferentes tamanhos de tela.

## Erros comuns

- Definir `width: 1200px` sem alternativa fluida.
- Resolver todo problema com media query antes de ajustar o layout base.
- Usar `margin` aleatório em cada elemento sem padrão.
- Esquecer que o mobile deve funcionar antes do desktop.
- Esconder overflow sem investigar qual elemento está causando a quebra.

## Boas práticas

- Comece simples e deixe o conteúdo respirar.
- Use `max-width`, `min()`, `clamp()` e porcentagens com intenção.
- Prefira espaçamentos reutilizáveis.
- Teste larguras intermediárias, não apenas celular e notebook.
- Escolha Flexbox para alinhamento em um eixo e Grid para estruturas em duas dimensões.

## Raciocínio estrutural

Uma landing page normalmente começa com uma promessa clara, apresenta benefícios, mostra prova ou detalhes e termina com uma chamada de ação. No mobile, essa ordem deve ser linear. No desktop, algumas seções podem ganhar duas colunas.

```html
<header class="hero container">
  <div>
    <p class="etiqueta">Maleta Front-end</p>
    <h1>Construa páginas responsivas com base sólida</h1>
    <p>Aprenda a organizar seções, cards e chamadas de ação.</p>
    <a href="#beneficios">Começar estudo</a>
  </div>
  <img src="hero.png" alt="Interface organizada em cards">
</header>
```

```css
.hero {
  display: grid;
  gap: 2rem;
  padding-block: clamp(3rem, 8vw, 6rem);
}

@media (min-width: 900px) {
  .hero {
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
  }
}
```
