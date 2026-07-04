# Parâmetros, retorno e escopo

Parâmetros tornam funções flexíveis. `return` define a saída. Escopo define onde uma variável existe.

```js
const taxaPadrao = 0.1; // escopo global deste arquivo

function calcularDesconto(preco, taxa) {
  const desconto = preco * taxa; // variável local
  return preco - desconto;
}

if (true) {
  const mensagem = "Escopo de bloco";
  console.log(mensagem);
}

console.log(calcularDesconto(100, taxaPadrao));
```

Evite variáveis globais desnecessárias porque qualquer parte do arquivo pode alterá-las. Prefira receber dados por parâmetro e devolver resultado previsível.

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
