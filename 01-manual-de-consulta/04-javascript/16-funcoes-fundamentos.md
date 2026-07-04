# Funções: fundamentos

Função é um bloco com nome que executa uma tarefa. Ela evita repetição e dá intenção ao código.

## Declaração e chamada

```js
function exibirBoasVindas() {
  console.log("Bem-vindo aos fundamentos de JavaScript.");
}

exibirBoasVindas();
```

## Parâmetro e argumento

```js
function saudarAluno(nome) {
  console.log(`Olá, ${nome}!`);
}

saudarAluno("Mateus");
```

`nome` é parâmetro. `"Mateus"` é argumento.

## Função sem retorno

```js
function exibirStatus(status) {
  console.log(`Status atual: ${status}`);
}
```

Ela executa uma ação, mas não entrega valor para outra parte do código.

## Função com retorno

```js
function calcularTotal(preco, quantidade) {
  return preco * quantidade;
}

const total = calcularTotal(30, 3);
console.log(total);
```

## Responsabilidade única

Prefira uma função para calcular e outra para exibir, em vez de misturar tudo.

## Nomes com verbo

Use verbos: `calcularTotal`, `validarNome`, `formatarMensagem`, `buscarItemNaLista`.
