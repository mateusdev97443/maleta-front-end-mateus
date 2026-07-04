# Tipografia CSS

Tipografia define leitura, ritmo e hierarquia visual sem alterar a semântica do HTML.

## Propriedades principais

```css
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}
```

## Font-family

Sempre informe fontes de fallback. Se uma fonte customizada falhar, o navegador terá alternativa.

## Font-size e acessibilidade

Use `rem` para tamanhos principais. Isso respeita melhor preferências do usuário no navegador.

## Font-weight

Pesos comuns: `400` para regular, `600` para semibold e `700` para bold. Evite muitos pesos diferentes sem necessidade.

## Line-height

`line-height` melhora legibilidade. Para textos corridos, valores entre `1.4` e `1.7` costumam funcionar bem.

## Letter-spacing

Use com cuidado. Pode ajudar em títulos curtos, mas prejudicar leitura em parágrafos.

## Alinhamento e decoração

```css
.texto-centro { text-align: center; }
.link { text-decoration: underline; }
.etiqueta { text-transform: uppercase; }
```

Não remova sublinhado de links se não houver outro indicador visual claro.

## Hierarquia visual sem quebrar semântica

Não escolha `h1` porque ele é grande. Escolha `h1` porque é o título principal. Se precisar mudar aparência, use CSS.

```css
.titulo-secao {
  font-size: 1.5rem;
}
```
