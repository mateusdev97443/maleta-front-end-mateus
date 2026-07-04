# Variáveis: let, const e var

Variável é um nome que aponta para um valor. Ela permite reutilizar dados e dar significado ao código.

## Declaração, atribuição e reatribuição

Declaração cria o nome. Atribuição coloca um valor nesse nome. Reatribuição troca o valor depois.

```js
let pontuacao; // declaração
pontuacao = 10; // atribuição
pontuacao = 15; // reatribuição
```

## `const`

Use `const` quando o identificador não deve receber outro valor.

```js
const nomeDoAluno = "Mateus";
const LIMITE_APROVACAO = 7;
```

Constantes nomeadas, como `LIMITE_APROVACAO`, deixam regras numéricas mais claras do que valores soltos no código.

## `let`

Use `let` quando o valor precisa mudar.

```js
let tentativas = 0;
tentativas = tentativas + 1;
```

## `var`

`var` pertence a um estilo antigo de JavaScript. Ele tem escopo menos previsível para iniciantes e pode causar confusão em blocos. Em código moderno da Maleta, evite `var`.

## Nomes descritivos e camelCase

Use camelCase para variáveis comuns: `precoFinal`, `usuarioAtivo`, `quantidadeEmEstoque`. Um bom nome reduz necessidade de comentário.

## Erros comuns

- Usar `const` e depois tentar reatribuir.
- Usar `let` sem necessidade, escondendo que o valor deveria ser estável.
- Criar nomes genéricos como `a`, `b`, `coisa`.
- Confundir alterar conteúdo de array com reatribuir a variável do array.
