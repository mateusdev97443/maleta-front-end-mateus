# Arrow functions

Arrow function é uma forma moderna e curta de escrever funções. Para iniciantes, use quando a função for simples e a leitura continuar clara.

```js
function somarTradicional(a, b) {
  return a + b;
}

const somar = (a, b) => {
  return a + b;
};

const dobrar = (numero) => numero * 2;
```

Retorno implícito funciona quando a função tem apenas uma expressão. Evite arrows longas demais. O comportamento de `this` não será aprofundado nesta fase.

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
