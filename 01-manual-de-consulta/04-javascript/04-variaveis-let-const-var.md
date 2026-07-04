# Variáveis: let, const e var

Variável é um nome que guarda um valor para uso posterior. Use `const` por padrão quando o valor não será reatribuído; use `let` quando precisar mudar o valor; evite `var` em código moderno por ter regras de escopo menos previsíveis.

```js
const nomeCompleto = "Mateus Ernandes";
let pontos = 0;

pontos = pontos + 10;

var codigoAntigo = "evite em código novo";
```

Reatribuição é trocar o valor guardado. `const` impede reatribuição do identificador, mas objetos e arrays guardados em `const` ainda podem ter conteúdo interno alterado. Use camelCase e nomes descritivos: `precoFinal`, `usuarioLogado`, `listaDeCursos`.

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
