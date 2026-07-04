# Erros comuns CSS

## Usar ID para estilização comum

IDs têm alta especificidade e dificultam reaproveitamento. Prefira classes para estilos.

## Usar `!important` para resolver tudo

Isso cria uma disputa de prioridades e torna o CSS imprevisível.

## Repetir código demais

Repetição aumenta chance de inconsistência. Use variáveis, classes base e componentes.

## Criar seletor longo e frágil

Seletores dependentes da estrutura quebram quando o HTML muda.

## Valores mágicos

```css
.card { margin-top: 37px; }
```

Se o valor não segue padrão, documente o motivo ou ajuste para uma escala.

## Confundir margin e padding

Padding é espaço interno; margin é espaço externo.

## Remover outline sem alternativa

```css
button:focus { outline: none; }
```

Isso prejudica teclado. Forneça foco visível customizado.

## Usar display none sem pensar em acessibilidade

`display: none` remove conteúdo de muitas tecnologias assistivas. Avalie se a informação deve continuar disponível.

## Misturar responsabilidades

Evite HTML cheio de `style`, CSS controlando conteúdo essencial e JavaScript alterando aparência sem classes claras.
