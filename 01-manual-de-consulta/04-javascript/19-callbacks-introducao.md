# Callbacks: introdução

Callback é uma função passada como argumento para outra função. A ideia é permitir que uma função execute uma ação recebida de fora.

```js
function executarOperacao(numero, operacao) {
  return operacao(numero);
}

function dobrar(numero) {
  return numero * 2;
}

console.log(executarOperacao(5, dobrar));

const nomes = ["Mateus", "Ana"];
const nomesFormatados = nomes.map((nome) => nome.toUpperCase());
console.log(nomesFormatados);
```

Aqui o foco é a ideia básica. Assincronicidade, promises e recursos de rede ficam para uma fase posterior.

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
