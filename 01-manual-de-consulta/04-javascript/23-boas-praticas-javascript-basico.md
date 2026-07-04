# Boas práticas de JavaScript básico

Boas práticas reduzem erro e aumentam legibilidade.

```js
const TAXA_DESCONTO_PADRAO = 0.1;

function calcularPrecoComDesconto(preco) {
  return preco - preco * TAXA_DESCONTO_PADRAO;
}
```

Use nomes claros, `const` por padrão, `let` quando precisar reatribuir e evite `var`. Prefira comparação estrita, funções pequenas, responsabilidade única e testes em partes. Evite números mágicos criando constantes nomeadas. Comente intenção, não o óbvio. Organize raciocínio antes do código.

## Quando usar

Use este conhecimento quando precisar transformar uma ideia em passos lógicos claros, testar valores no console e preparar código JavaScript básico para projetos Front-end futuros.

## Erros comuns

- Copiar código sem entender o papel de cada linha.
- Misturar muitos assuntos ao mesmo tempo.
- Ignorar mensagens do console.
- Usar nomes vagos como `x`, `coisa` ou `dados` sem contexto.

## Boas práticas

- Prefira clareza em vez de código curto demais.
- Teste cada pequena parte com valores fixos.
- Use indentação consistente.
- Explique a intenção quando um comentário realmente ajudar.
