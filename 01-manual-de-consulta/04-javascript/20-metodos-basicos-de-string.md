# Métodos básicos de string

Métodos de string ajudam a consultar e ajustar textos.

```js
const email = "  MATEUS@email.com  ";
const nome = "Mateus Ernandes";

console.log(nome.length);
console.log(email.trim().toLowerCase());
console.log(nome.toUpperCase());
console.log(nome.includes("Ernandes"));
console.log(nome.startsWith("Mateus"));
console.log(nome.endsWith("Ribeiro"));
console.log(nome.replace("Ernandes", "Turet"));
console.log(nome.slice(0, 6));

const emailValido = email.trim().includes("@");
```

Use esses métodos para validações simples e padronização de texto antes de comparar valores.

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
