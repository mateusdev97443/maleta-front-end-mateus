# Debugging básico

Debugging é investigar por que o código não fez o esperado. Comece lendo a mensagem de erro, a linha indicada e o nome da variável envolvida.

```js
const preco = 100;
const desconto = 0.2;

console.log("preco", preco);
console.log("desconto", desconto);

const precoFinal = preco - preco * desconto;
console.log("precoFinal", precoFinal);
```

Teste valores intermediários, isole um problema pequeno e não altere tudo ao mesmo tempo. Erros comuns incluem digitação, variável não definida, tipo inesperado e `return` ausente.

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
