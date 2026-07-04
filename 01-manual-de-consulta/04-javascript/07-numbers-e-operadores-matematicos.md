# Numbers e operadores matemáticos

JavaScript usa `number` para inteiros e decimais. Decimal usa ponto, não vírgula.

```js
const preco = 99.90;
const quantidade = 3;

const soma = preco + 10;
const subtracao = preco - 20;
const multiplicacao = preco * quantidade;
const divisao = preco / 2;
const resto = quantidade % 2;
const total = (preco + 10) * quantidade;

let contador = 0;
contador++;
contador--;
```

A precedência matemática importa: multiplicação e divisão vêm antes de soma e subtração. Use parênteses para deixar a intenção clara.

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
