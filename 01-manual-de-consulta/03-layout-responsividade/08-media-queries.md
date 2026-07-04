# Media queries

## Introdução

Media queries permitem aplicar CSS apenas quando certas condições de tela, mídia ou recurso são atendidas. Elas são essenciais para adaptar layouts, mas devem complementar uma base fluida, não substituir um CSS bem planejado.

## O que são media queries

Uma media query é uma regra condicional. O navegador verifica a condição e aplica o bloco de estilos quando ela for verdadeira.

```css
@media (min-width: 768px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

## Quando usar

Use media queries quando o conteúdo realmente precisar mudar: uma coluna virar duas, a navegação ganhar distribuição horizontal, o dashboard separar sidebar e conteúdo, ou um espaçamento precisar aumentar em telas maiores.

## Sintaxe básica

```css
.componente {
  padding: 1rem;
}

@media (min-width: 900px) {
  .componente {
    padding: 2rem;
  }
}
```

## min-width

`min-width` é comum em mobile-first. O CSS base atende telas pequenas; a media query adiciona melhorias para telas maiores.

## max-width

`max-width` é comum em desktop-first ou ajustes pontuais para telas menores. Use com cuidado para não criar uma cascata difícil de manter.

```css
@media (max-width: 600px) {
  .menu {
    flex-direction: column;
    align-items: flex-start;
  }
}
```

## Desktop-first e mobile-first

Desktop-first começa pelo layout grande e reduz depois. Mobile-first começa pelo essencial e expande progressivamente. Para a Maleta, o padrão recomendado é mobile-first, porque evita excesso de correções para telas pequenas.

## Como evitar excesso de breakpoints

- Use porcentagem, `max-width`, `minmax()`, `auto-fit` e `clamp()` antes de criar breakpoints.
- Crie breakpoints quando o conteúdo quebrar, não apenas por modelos de aparelho.
- Agrupe mudanças relacionadas no mesmo ponto.

## Exemplo prático

```css
.layout {
  display: grid;
  gap: 1rem;
}

@media (min-width: 720px) {
  .layout {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1080px) {
  .layout {
    grid-template-columns: 2fr 1fr;
  }
}
```

## Erros comuns

- Criar breakpoints para cada aparelho específico.
- Escrever media queries antes de resolver o CSS base.
- Misturar muitos `min-width` e `max-width` sem estratégia.
- Usar media query para corrigir largura fixa desnecessária.

## Boas práticas

- Prefira mobile-first com `min-width`.
- Teste o layout arrastando a largura do navegador.
- Use poucos breakpoints e bem justificados.
- Documente padrões recorrentes no projeto.
