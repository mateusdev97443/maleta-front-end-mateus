# Parâmetros, retorno e escopo

Parâmetros definem o que uma função precisa receber. Retorno define o que ela entrega. Escopo define onde nomes existem.

## Parâmetro x argumento

```js
function calcularDesconto(preco, percentual) {
  return preco - preco * percentual;
}

const precoFinal = calcularDesconto(100, 0.2);
```

`preco` e `percentual` são parâmetros. `100` e `0.2` são argumentos.

## Retorno previsível

Uma função de cálculo deve retornar resultado em todos os caminhos importantes.

```js
function verificarAprovacao(nota) {
  if (nota >= 7) {
    return "Aprovado";
  }

  return "Revisar conteúdo";
}
```

## Escopos

```js
const limite = 7; // escopo do arquivo

function avaliar(nota) {
  const resultado = nota >= limite ? "Aprovado" : "Reprovado";
  return resultado;
}

if (true) {
  const mensagem = "Existe apenas neste bloco";
  console.log(mensagem);
}
```

## Evitar global desnecessário

Se uma função precisa de um valor, prefira parâmetro. Isso facilita testar com valores diferentes.

## Erros comuns

- Declarar variável dentro da função e tentar usar fora.
- Esquecer `return` e receber `undefined`.
- Usar variável global que poderia ser argumento.
