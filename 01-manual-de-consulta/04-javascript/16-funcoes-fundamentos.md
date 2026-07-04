# Funções: fundamentos

Função é um bloco reutilizável com uma responsabilidade. Ela evita repetição e dá nome a uma ação.

```js
function exibirSaudacao(nome) {
  console.log(`Olá, ${nome}!`);
}

function calcularTotal(preco, quantidade) {
  return preco * quantidade;
}

exibirSaudacao("Mateus");
const total = calcularTotal(50, 2);
console.log(total);
```

Parâmetros são nomes recebidos pela função; argumentos são valores enviados na chamada. Função sem `return` apenas executa uma ação; função com `return` entrega um resultado.

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
