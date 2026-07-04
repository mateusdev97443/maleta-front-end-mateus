# Boas práticas de layout e responsividade

## Introdução

Boas práticas tornam o layout mais previsível, sustentável e fácil de auditar. O objetivo não é usar a propriedade mais avançada, mas resolver o problema com clareza.

## Comece pelo conteúdo

Leia o conteúdo antes de escolher layout. Um texto longo pede largura de leitura. Uma lista de itens pede repetição. Um dashboard pede hierarquia de dados.

## Use HTML bem estruturado

HTML semântico reduz complexidade do CSS. Prefira `header`, `main`, `section`, `article`, `aside`, `nav`, listas e títulos em ordem lógica.

```html
<section class="secao-beneficios">
  <header>
    <h2>Benefícios</h2>
    <p>Por que estudar responsividade.</p>
  </header>
  <div class="cards">...</div>
</section>
```

## Mobile-first

O CSS base deve funcionar em telas pequenas. Depois, aumente complexidade com `min-width`.

```css
.layout {
  display: grid;
  gap: 1rem;
}

@media (min-width: 900px) {
  .layout {
    grid-template-columns: 1fr 1fr;
  }
}
```

## Layout fluido

Prefira medidas que se adaptem: porcentagem, `max-width`, `min()`, `minmax()`, `auto-fit` e `clamp()`.

```css
.container {
  width: min(100% - 2rem, 1120px);
  margin-inline: auto;
}
```

## Poucos breakpoints

Breakpoints devem existir porque o conteúdo pediu, não porque um aparelho famoso tem determinada largura. Se `auto-fit` resolve, talvez a media query seja desnecessária.

## Containers consistentes

Use o mesmo padrão de container para manter alinhamento entre seções. Crie variações apenas quando houver motivo, como artigo estreito.

```css
.container-texto {
  width: min(100% - 2rem, 70ch);
  margin-inline: auto;
}
```

## Imagens fluidas

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

Em cards e galerias, combine com `aspect-ratio` e `object-fit`.

## Teste larguras intermediárias

Não teste apenas “celular” e “desktop”. Muitos problemas aparecem entre 600px e 1000px, especialmente menus, dashboards e grades de cards.

## Combine Flexbox e Grid com intenção

Use Grid para estrutura de página e listas em grade. Use Flexbox para alinhamentos internos, menus simples e grupos de ações.

## Revise overflow

Se apareceu rolagem horizontal, descubra a causa. Possíveis culpados: imagem sem limite, largura fixa, texto longo, grid rígido ou flex sem wrap.

## Mantenha código simples

Código responsivo bom costuma ter poucas regras bem escolhidas. Se uma seção exige muitas exceções, reveja HTML, container, largura e estratégia mobile-first.

## Checklist profissional

- O conteúdo faz sentido sem layout complexo?
- O HTML está em ordem lógica?
- O mobile funciona antes do desktop?
- As imagens têm limites?
- Os containers são consistentes?
- Os breakpoints têm motivo?
- O layout foi testado entre larguras?
- Flexbox e Grid foram usados com intenção?
