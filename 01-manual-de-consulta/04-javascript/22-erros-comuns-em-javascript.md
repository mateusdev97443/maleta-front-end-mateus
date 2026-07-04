# Erros comuns em JavaScript

Este capítulo mostra erros frequentes com sintoma, causa, exemplo ruim, correção e prevenção. A ideia é treinar diagnóstico, não decorar mensagens.

## 1 — Esquecer aspas em string

### Sintoma

O console indica que um nome não foi definido ou que há erro de sintaxe.

### Causa provável

O texto foi escrito como se fosse variável.

### Exemplo ruim

```js
const linguagem = JavaScript;
console.log(linguagem);
```

### Correção recomendada

```js
const linguagem = "JavaScript";
console.log(linguagem);
```

### Como evitar

Sempre coloque textos entre aspas simples, aspas duplas ou crase.

## 2 — Confundir `=` com `===`

### Sintoma

A condição altera valor sem querer ou sempre se comporta de forma inesperada.

### Causa provável

`=` atribui valor; `===` compara valor e tipo.

### Exemplo ruim

```js
let statusPedido = "pendente";

if (statusPedido = "pago") {
  console.log("Pedido pago");
}
```

### Correção recomendada

```js
const statusPedido = "pendente";

if (statusPedido === "pago") {
  console.log("Pedido pago");
} else {
  console.log("Pedido ainda não foi pago");
}
```

### Como evitar

Leia a condição como pergunta. Se for pergunta, provavelmente precisa de comparação, não atribuição.

## 3 — Usar variável antes de declarar

### Sintoma

A linguagem informa que a variável não pode ser acessada ou não existe.

### Causa provável

A variável foi usada antes da linha em que foi criada.

### Exemplo ruim

```js
console.log(nomeAluno);
const nomeAluno = "Mateus";
```

### Correção recomendada

```js
const nomeAluno = "Mateus";
console.log(nomeAluno);
```

### Como evitar

Declare dados no topo do bloco em que serão usados.

## 4 — Esquecer `return`

### Sintoma

A função parece calcular, mas quem chama recebe `undefined`.

### Causa provável

A expressão foi escrita, mas não foi devolvida pela função.

### Exemplo ruim

```js
function calcularTotal(preco, quantidade) {
  preco * quantidade;
}

const total = calcularTotal(20, 3);
console.log(total);
```

### Correção recomendada

```js
function calcularTotal(preco, quantidade) {
  return preco * quantidade;
}

const total = calcularTotal(20, 3);
console.log(total);
```

### Como evitar

Funções de cálculo, validação e formatação normalmente precisam retornar valor.

## 5 — Criar loop infinito

### Sintoma

O navegador trava ou o console imprime sem parar.

### Causa provável

A condição de parada nunca se torna falsa.

### Exemplo ruim

```js
let contador = 1;

while (contador <= 5) {
  console.log(contador);
}
```

### Correção recomendada

```js
let contador = 1;

while (contador <= 5) {
  console.log(contador);
  contador++;
}
```

### Como evitar

Confira se existe avanço real em direção ao fim do loop.

## 6 — Acessar índice inexistente

### Sintoma

O resultado é `undefined` ao buscar um item da lista.

### Causa provável

O índice solicitado não existe, lembrando que arrays começam em zero.

### Exemplo ruim

```js
const tecnologias = ["HTML", "CSS", "JavaScript"];
console.log(tecnologias[3]);
```

### Correção recomendada

```js
const tecnologias = ["HTML", "CSS", "JavaScript"];
console.log(tecnologias[2]);
console.log(tecnologias[tecnologias.length - 1]);
```

### Como evitar

Para o último item, use `array.length - 1`.

## 7 — Confundir array e objeto

### Sintoma

O código tenta acessar propriedade em lista ou índice em objeto sem sentido.

### Causa provável

A estrutura escolhida não combina com o dado.

### Exemplo ruim

```js
const aluno = ["Mateus", "Front-end", 5];
console.log(aluno.nome);
```

### Correção recomendada

```js
const aluno = {
  nome: "Mateus",
  trilha: "Front-end",
  fase: 5
};

console.log(aluno.nome);
```

### Como evitar

Use objeto para entidade com propriedades; use array para lista de itens semelhantes.

## 8 — Alterar `const` incorretamente

### Sintoma

A linguagem informa que uma constante recebeu nova atribuição.

### Causa provável

`const` impede reatribuir o identificador.

### Exemplo ruim

```js
const pontos = 10;
pontos = 20;
```

### Correção recomendada

```js
let pontos = 10;
pontos = 20;
```

### Como evitar

Se o valor precisa mudar, declare com `let`. Se não precisa, mantenha `const`.

## 9 — Confiar em coerção automática

### Sintoma

Comparações passam quando deveriam falhar ou cálculos viram concatenação.

### Causa provável

JavaScript tentou converter tipos automaticamente.

### Exemplo ruim

```js
const idade = "18";

if (idade == 18) {
  console.log("Maioridade aceita sem verificar tipo");
}
```

### Correção recomendada

```js
const idade = 18;

if (idade === 18) {
  console.log("Maioridade comparada com tipo correto");
}
```

### Como evitar

Prefira `===` e mantenha dados no tipo esperado antes de comparar.

## 10 — Criar nomes ruins

### Sintoma

O código funciona, mas ninguém entende rapidamente o que cada valor representa.

### Causa provável

Variáveis foram nomeadas pelo impulso, não pelo significado.

### Exemplo ruim

```js
const x = 100;
const y = 0.15;
const z = x - x * y;
```

### Correção recomendada

```js
const precoOriginal = 100;
const percentualDesconto = 0.15;
const precoFinal = precoOriginal - precoOriginal * percentualDesconto;
```

### Como evitar

Nomeie pelo papel no problema: preço, nota, estoque, aluno, tecnologia, total.

## 11 — Escrever função que faz coisas demais

### Sintoma

A função fica longa, difícil de testar e mistura cálculo, validação e exibição.

### Causa provável

Várias responsabilidades foram colocadas no mesmo bloco.

### Exemplo ruim

```js
function processarCompra(preco, quantidade, usuarioAtivo) {
  if (!usuarioAtivo) {
    console.log("Usuário bloqueado");
    return;
  }

  const total = preco * quantidade;
  const desconto = total * 0.1;
  console.log(`Total final: ${total - desconto}`);
}
```

### Correção recomendada

```js
function calcularTotal(preco, quantidade) {
  return preco * quantidade;
}

function aplicarDesconto(total, percentual) {
  return total - total * percentual;
}

function verificarUsuarioAtivo(usuarioAtivo) {
  return usuarioAtivo === true;
}
```

### Como evitar

Se a função precisa de “e” para ser explicada, talvez ela tenha mais de uma responsabilidade.
