# Snippets JavaScript fundamentos

Snippets são modelos curtos para consulta rápida. Use como ponto de partida, trocando nomes, valores e regras conforme o problema real.

## Snippet 1 — Variável com `const`

### Quando usar

Quando o identificador não precisa receber outro valor depois da declaração.

### Código

```js
const nomeDoAluno = "Mateus";
console.log(nomeDoAluno);
```

### Observação profissional

Comece com `const` por padrão; isso comunica que aquele nome não deve ser reatribuído.

## Snippet 2 — Variável com `let`

### Quando usar

Quando o valor precisa mudar durante o fluxo do código, como contador ou pontuação.

### Código

```js
let pontos = 0;
pontos = pontos + 10;
console.log(pontos);
```

### Observação profissional

Use `let` apenas quando existir reatribuição real; se não mudar, prefira `const`.

## Snippet 3 — Template literal

### Quando usar

Quando precisar montar texto com variáveis de forma legível.

### Código

```js
const nome = "Mateus";
const tecnologia = "JavaScript";
const mensagem = `${nome} está estudando ${tecnologia}.`;

console.log(mensagem);
```

### Observação profissional

Template literal reduz concatenações longas e facilita manutenção de frases.

## Snippet 4 — Condicional simples

### Quando usar

Quando existe apenas uma regra a verificar.

### Código

```js
const idade = 18;

if (idade >= 18) {
  console.log("Pode acessar o conteúdo.");
}
```

### Observação profissional

A condição deve ser lida como uma pergunta objetiva: “idade é maior ou igual a 18?”.

## Snippet 5 — Condicional composta

### Quando usar

Quando existem caminhos diferentes para aprovado, recuperação ou reprovado.

### Código

```js
const nota = 6.5;

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
```

### Observação profissional

Ordene as condições da mais específica para a mais geral quando isso facilitar a leitura.

## Snippet 6 — `switch`

### Quando usar

Quando um mesmo valor pode assumir categorias conhecidas.

### Código

```js
const status = "pago";

switch (status) {
  case "pendente":
    console.log("Aguardando pagamento.");
    break;
  case "pago":
    console.log("Separar pedido.");
    break;
  default:
    console.log("Status não reconhecido.");
}
```

### Observação profissional

Não esqueça o `break` para evitar execução acidental dos próximos casos.

## Snippet 7 — Loop `for`

### Quando usar

Quando precisar de contador e quantidade conhecida de repetições.

### Código

```js
for (let contador = 1; contador <= 5; contador++) {
  console.log(`Rodada ${contador}`);
}
```

### Observação profissional

Confira inicialização, condição e incremento para evitar loop infinito.

## Snippet 8 — Loop `for...of`

### Quando usar

Quando quiser percorrer todos os itens de uma lista sem lidar diretamente com índices.

### Código

```js
const tecnologias = ["HTML", "CSS", "JavaScript"];

for (const tecnologia of tecnologias) {
  console.log(tecnologia);
}
```

### Observação profissional

É uma opção legível para leitura de arrays quando o índice não é necessário.

## Snippet 9 — Array básico

### Quando usar

Quando precisar guardar vários valores relacionados.

### Código

```js
const etapas = ["HTML", "CSS", "JavaScript"];
console.log(etapas[0]);
console.log(etapas.length);
```

### Observação profissional

Lembre que o primeiro índice é `0`, não `1`.

## Snippet 10 — Adicionar item em array

### Quando usar

Quando um novo valor precisa entrar no final da lista.

### Código

```js
const tarefas = ["estudar HTML", "revisar CSS"];
tarefas.push("praticar JavaScript");

console.log(tarefas);
```

### Observação profissional

`push` altera o array original; isso é esperado em listas simples de estudo.

## Snippet 11 — Percorrer array

### Quando usar

Quando cada item precisa ser exibido ou analisado.

### Código

```js
const notas = [8, 7, 9];

for (const nota of notas) {
  console.log(`Nota registrada: ${nota}`);
}
```

### Observação profissional

Use nomes no singular para cada item (`nota`) e plural para a lista (`notas`).

## Snippet 12 — Objeto básico

### Quando usar

Quando um valor real possui várias características.

### Código

```js
const projeto = {
  nome: "Maleta Front-end",
  fase: 5,
  concluido: false
};

console.log(projeto);
```

### Observação profissional

Objetos deixam entidades mais claras do que várias variáveis soltas.

## Snippet 13 — Acessar propriedade

### Quando usar

Quando precisar ler um dado específico dentro de um objeto.

### Código

```js
const aluno = {
  nome: "Mateus",
  area: "Front-end"
};

console.log(aluno.nome);
console.log(aluno["area"]);
```

### Observação profissional

Use ponto na maioria dos casos; colchetes ajudam quando o nome da propriedade vem de uma variável.

## Snippet 14 — Função com parâmetro

### Quando usar

Quando a ação precisa receber um valor externo.

### Código

```js
function exibirSaudacao(nome) {
  console.log(`Olá, ${nome}!`);
}

exibirSaudacao("Mateus");
```

### Observação profissional

Nomeie parâmetros pelo significado, não pelo tipo genérico.

## Snippet 15 — Função com retorno

### Quando usar

Quando a função precisa entregar um resultado para uso posterior.

### Código

```js
function calcularTotal(preco, quantidade) {
  return preco * quantidade;
}

const total = calcularTotal(25, 4);
console.log(total);
```

### Observação profissional

Funções de cálculo normalmente devem retornar valor, não apenas imprimir no console.

## Snippet 16 — Arrow function simples

### Quando usar

Quando a função é curta e continua fácil de entender.

### Código

```js
const dobrar = (numero) => numero * 2;

console.log(dobrar(6));
```

### Observação profissional

Se a regra crescer, prefira bloco com `return` explícito ou função tradicional.

## Snippet 17 — Callback simples

### Quando usar

Quando uma função precisa receber outra função como comportamento.

### Código

```js
function aplicarOperacao(numero, operacao) {
  return operacao(numero);
}

function triplicar(numero) {
  return numero * 3;
}

console.log(aplicarOperacao(4, triplicar));
```

### Observação profissional

Callback é uma ideia importante; mantenha exemplos simples antes de avançar.

## Snippet 18 — Uso básico de `map`

### Quando usar

Quando quiser criar um novo array transformando cada item.

### Código

```js
const numeros = [1, 2, 3];
const dobrados = numeros.map((numero) => numero * 2);

console.log(dobrados);
```

### Observação profissional

`map` retorna uma nova lista; não use quando a intenção for apenas procurar um item.

## Snippet 19 — Uso básico de `filter`

### Quando usar

Quando quiser criar uma nova lista apenas com itens que passam em uma condição.

### Código

```js
const produtos = [
  { nome: "Caderno", disponivel: true },
  { nome: "Caneta", disponivel: false }
];

const disponiveis = produtos.filter((produto) => produto.disponivel === true);
console.log(disponiveis);
```

### Observação profissional

A condição do `filter` deve retornar verdadeiro ou falso para cada item.

## Snippet 20 — Uso básico de `find`

### Quando usar

Quando precisar encontrar o primeiro item que atende a uma regra.

### Código

```js
const tecnologias = ["HTML", "CSS", "JavaScript"];
const encontrada = tecnologias.find((tecnologia) => tecnologia === "CSS");

console.log(encontrada);
```

### Observação profissional

`find` retorna um único item ou `undefined` se nada for encontrado.

## Snippet 21 — Tratamento simples de string

### Quando usar

Quando precisar padronizar texto antes de comparar ou validar.

### Código

```js
const emailDigitado = "  MATEUS@email.com  ";
const emailTratado = emailDigitado.trim().toLowerCase();

console.log(emailTratado);
```

### Observação profissional

Tratar string antes da comparação evita erros causados por espaços e letras maiúsculas.

## Snippet 22 — Debugging com `console.log`

### Quando usar

Quando precisar descobrir em qual etapa o valor ficou diferente do esperado.

### Código

```js
const preco = 100;
const desconto = 0.15;

console.log("preco inicial", preco);
console.log("desconto aplicado", desconto);

const precoFinal = preco - preco * desconto;
console.log("preco final", precoFinal);
```

### Observação profissional

Use logs temporários para investigar e remova ou justifique antes de finalizar o código.
