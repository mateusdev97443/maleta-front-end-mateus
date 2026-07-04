# Padrão profissional JavaScript básico

Este é o padrão oficial da Maleta para JavaScript básico. Ele deve guiar exercícios, desafios e futuros projetos antes de avançar para assuntos mais complexos.

## Clareza antes de esperteza

Código básico profissional deve ser lido sem adivinhação. Uma solução de três linhas claras é melhor do que uma linha “esperta” que Mateus não consegue explicar.

## Nomes descritivos

Use nomes que indiquem papel no problema.

```js
const quantidadeEmEstoque = 12;
const produtoDisponivel = quantidadeEmEstoque > 0;
```

## `const` por padrão

Declare com `const` quando não houver reatribuição. Isso protege a intenção do código.

## `let` quando necessário

Use `let` para contadores, acumuladores ou valores que mudam.

```js
let total = 0;
```

## Evitar `var`

`var` não é o padrão da Maleta. O aluno deve dominar `const` e `let` antes de ler código legado.

## Comparação estrita

Use `===` e `!==` para evitar coerção automática.

## Funções pequenas

Funções devem receber entradas claras e produzir resultado compreensível.

```js
function calcularSubtotal(preco, quantidade) {
  return preco * quantidade;
}
```

## Retorno previsível

Uma função que calcula ou valida deve retornar valor. Evite depender apenas de `console.log` dentro da função.

## Evitar repetição

Quando a mesma regra aparece em vários lugares, extraia para função com nome claro.

## Testar em partes

Teste variáveis, depois condições, depois loops e só então a função completa.

## Ler erros

Mensagem de erro é pista. Leia tipo do erro, linha indicada e nome citado antes de alterar código.

## Não misturar lógica com tela nesta fase

Nesta fase, lógica deve funcionar com valores fixos e console. A conexão com interface será estudada depois.

## Não usar recursos avançados antes da base

A Maleta prioriza fundamentos: valores, tipos, decisões, repetições, listas, objetos e funções. Avançar sem isso cria dependência de cópia e dificulta manutenção.
