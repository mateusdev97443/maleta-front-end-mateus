# Booleans, comparações e lógica

Boolean representa verdadeiro ou falso. Comparações e operadores lógicos criam decisões.

```js
const idade = 19;
const temIngresso = true;

console.log(idade === 18);
console.log(idade !== 17);
console.log(idade > 18);
console.log(idade >= 18);
console.log(idade < 60);
console.log(idade <= 20);
console.log(idade >= 18 && temIngresso === true);
console.log(idade >= 18 || temIngresso === true);
console.log(!temIngresso);
```

Prefira `===` e `!==` porque comparam valor e tipo. Evite `==`, pois ele tenta converter tipos automaticamente.

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
