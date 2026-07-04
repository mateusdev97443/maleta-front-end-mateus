# Menus responsivos como conceito estrutural

## Introdução

Nesta fase, menus responsivos são estudados apenas como estrutura HTML e organização visual com CSS. Não haverá botão hambúrguer funcional, abrir/fechar menu ou manipulação de estado com JavaScript.

## Estrutura semântica

Um menu simples deve usar `header`, `nav`, `ul`, `li` e `a`. Essa estrutura é clara, acessível e fácil de evoluir depois.

```html
<header class="cabecalho">
  <a class="logo" href="/">Maleta Front-end</a>

  <nav class="navegacao" aria-label="Navegação principal">
    <ul class="menu">
      <li><a href="#html">HTML</a></li>
      <li><a href="#css">CSS</a></li>
      <li><a href="#layout">Layout</a></li>
    </ul>
  </nav>
</header>
```

## Menu horizontal simples

```css
.cabecalho {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.menu {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}
```

Esse padrão funciona quando há poucos links e largura suficiente.

## Menu que quebra linha

```css
.cabecalho {
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

Quando os links não cabem, eles descem para outra linha sem gerar overflow.

## Menu vertical no mobile

```css
.cabecalho {
  display: grid;
  gap: 1rem;
}

.menu {
  display: grid;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

@media (min-width: 760px) {
  .cabecalho {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .menu {
    display: flex;
    gap: 1rem;
  }
}
```

No mobile, links empilhados são simples e legíveis. No desktop, a navegação fica horizontal.

## Limite desta fase

Não será feito nesta fase:

- botão hambúrguer funcional;
- abrir e fechar menu;
- manipulação de estado;
- animação controlada por clique;
- lógica de acessibilidade dinâmica.

Esses assuntos dependem de JavaScript e pertencem a uma fase posterior.

## Como preparar para evoluir depois

Mantenha HTML semântico, nomes de classes claros e `nav` com `aria-label`. Assim, quando o projeto avançar para JavaScript, a estrutura já estará pronta para receber comportamento sem reescrita completa.

## Quando usar

Use menu horizontal para poucos links. Use menu que quebra linha quando os links podem variar. Use menu vertical no mobile quando a navegação precisa de máxima legibilidade sem interação.

## Erros comuns

- Criar menu com várias `div` sem lista de links.
- Forçar todos os links em uma linha e gerar overflow.
- Simular hambúrguer sem funcionalidade real nesta fase.
- Esconder links importantes em telas pequenas.
- Esquecer `aria-label` quando há mais de uma navegação.

## Boas práticas

- Use estrutura semântica.
- Permita quebra de linha quando necessário.
- Mantenha links legíveis no mobile.
- Não implemente interação que dependa de JavaScript nesta fase.
- Planeje a evolução sem comprometer a estrutura atual.
