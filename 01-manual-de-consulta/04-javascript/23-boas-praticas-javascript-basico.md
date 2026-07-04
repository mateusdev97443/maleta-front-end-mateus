# Boas práticas de JavaScript básico

Boas práticas são decisões pequenas que deixam o código mais previsível, legível e fácil de corrigir.

## Use nomes claros

Um nome deve revelar intenção.

```js
const precoFinal = 120;
const usuarioAtivo = true;
```

Evite nomes que exigem adivinhação, como `x`, `temp`, `coisa` ou `valor1`.

## Prefira `const`

Se o identificador não será reatribuído, use `const`.

```js
const tecnologiaPrincipal = "JavaScript";
```

Isso reduz mudanças acidentais.

## Use `let` apenas com reatribuição

```js
let tentativas = 0;
tentativas++;
```

Se não houver mudança de valor, `let` comunica a intenção errada.

## Evite `var`

`var` tem comportamento antigo de escopo. Para a Maleta, o padrão moderno é `const` e `let`.

## Use comparação estrita

```js
const fase = 5;
console.log(fase === 5);
```

Comparação estrita evita conversões invisíveis.

## Crie funções pequenas

Uma função pequena é mais fácil de testar.

```js
function calcularSubtotal(preco, quantidade) {
  return preco * quantidade;
}
```

## Uma função deve ter uma responsabilidade principal

Calcular, validar e exibir são responsabilidades diferentes. Separar facilita manutenção.

## Evite números mágicos

```js
const NOTA_MINIMA_APROVACAO = 7;
const nota = 8;

console.log(nota >= NOTA_MINIMA_APROVACAO);
```

O nome explica a regra.

## Evite repetição

Se três trechos fazem a mesma coisa com valores diferentes, considere criar função.

## Comente intenção, não o óbvio

Bom comentário explica regra de negócio. Comentário ruim narra a sintaxe.

## Teste em partes

Calcule valores intermediários e confira com `console.log` antes de montar a solução inteira.

## Organize antes de codar

Escreva entrada, processamento e saída. Depois transforme isso em variáveis, condições, loops e funções.
