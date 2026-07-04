# Layout de dashboard simples

## Introdução

Dashboard organiza dados, navegação e ações rápidas. Mesmo em versão simples, ele precisa evitar poluição visual e funcionar bem em telas estreitas.

## Objetivo do layout

O objetivo de um dashboard é permitir leitura rápida: navegação, métricas principais, área de conteúdo e detalhes. A hierarquia deve mostrar o que é mais importante primeiro.

## Estrutura HTML recomendada

```html
<div class="dashboard">
  <aside class="sidebar">
    <h1>Maleta</h1>
    <nav aria-label="Navegação do painel">
      <ul>
        <li><a href="#">Resumo</a></li>
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Estudos</a></li>
      </ul>
    </nav>
  </aside>

  <main class="painel">
    <header class="painel__topo">
      <h2>Resumo</h2>
      <a href="#">Novo projeto</a>
    </header>

    <section class="metricas" aria-label="Métricas principais">
      <article class="metrica">...</article>
      <article class="metrica">...</article>
      <article class="metrica">...</article>
    </section>

    <section class="conteudo">...</section>
  </main>
</div>
```

## Comportamento no mobile

No mobile, a sidebar conceitual fica acima do conteúdo como bloco de navegação. Métricas aparecem empilhadas. Tabelas ou listas largas precisam ser simplificadas ou envolvidas por uma área rolável consciente.

## Comportamento no desktop

No desktop, a sidebar pode ocupar coluna fixa e o conteúdo principal usa o restante do espaço. Métricas podem virar três colunas.

## Onde usar Grid

Grid é ideal para a estrutura principal e para métricas.

```css
.dashboard {
  display: grid;
  gap: 1rem;
}

.metricas {
  display: grid;
  gap: 1rem;
}

@media (min-width: 960px) {
  .dashboard {
    grid-template-columns: 240px minmax(0, 1fr);
    align-items: start;
  }

  .metricas {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Onde usar Flexbox

Use Flexbox em cabeçalhos internos para alinhar título e ação.

```css
.painel__topo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
```

## Onde usar container

Dashboards nem sempre usam container centralizado como landing pages. Em painéis, é comum usar padding interno no shell e limitar áreas de texto dentro do conteúdo. Ainda assim, evite conteúdo colado nas bordas.

```css
.dashboard {
  min-height: 100vh;
  padding: clamp(1rem, 3vw, 2rem);
}
```

## Problemas comuns

- Sidebar fixa larga demais para mobile.
- Coluna principal com `1fr` estourando por conteúdo longo; use `minmax(0, 1fr)`.
- Métricas pequenas demais por excesso de colunas.
- Tabelas causando overflow sem tratamento.
- Dashboard tentando mostrar tudo ao mesmo tempo.

## Exemplo de card de métrica

```css
.metrica {
  display: grid;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 1rem;
}

.metrica strong {
  font-size: clamp(1.5rem, 4vw, 2.25rem);
}
```

## Boas práticas

- Comece com informação essencial.
- Use Grid para estrutura geral.
- Use Flexbox para pequenos alinhamentos.
- Teste textos longos em métricas e menus.
- Não esconda problemas de overflow sem entender a causa.
