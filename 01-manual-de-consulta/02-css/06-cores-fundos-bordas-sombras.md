# Cores, fundos, bordas e sombras

## Propriedades essenciais

```css
.exemplo {
  color: #111827;
  background-color: #f9fafb;
  background-image: url("../img/padrao.png");
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
  box-shadow: 0 10px 25px rgb(0 0 0 / 0.08);
  text-shadow: 0 1px 2px rgb(0 0 0 / 0.2);
}
```

## Cores

Use nomes de cores apenas em exemplos rápidos. Em projetos, prefira hexadecimal, `rgb()`, `hsl()` ou variáveis CSS.

```css
:root {
  --cor-texto: #111827;
  --cor-primaria: #2563eb;
}
```

## Fundos

`background-color` define uma cor sólida. `background-image` adiciona imagem ou gradiente. `background-repeat` controla repetição. `background-size: cover` faz a imagem cobrir a área, podendo cortar partes.

## Bordas e arredondamento

Bordas ajudam a separar áreas, mas excesso de linhas deixa a interface pesada. `border-radius` suaviza cantos e deve seguir um padrão visual.

## Sombras

Sombras devem sugerir profundidade com sutileza. Evite sombras muito escuras, grandes e sem padrão.

## Transparência

Prefira transparência com `rgb(0 0 0 / 0.12)` ou `hsl(220 10% 10% / 0.12)`, pois fica mais legível que misturar muitos hexadecimais com alfa.

## Contraste básico

Texto precisa contrastar com o fundo. Evite cinza claro sobre branco, azul claro sobre branco ou texto sobre imagem sem camada de proteção.

```css
.hero {
  background: linear-gradient(rgb(0 0 0 / 0.55), rgb(0 0 0 / 0.55)), url("hero.jpg");
  color: #ffffff;
}
```
