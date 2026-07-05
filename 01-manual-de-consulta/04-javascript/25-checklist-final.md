# Checklist final de JavaScript

Este checklist serve para revisar um código JavaScript antes de considerar a entrega pronta. A meta é garantir clareza, previsibilidade, organização e comportamento correto.

JavaScript profissional não é apenas “funcionar”. O código precisa ser legível, testável, fácil de manter e seguro contra erros comuns.

## Entendimento do problema

Antes de escrever ou aprovar o código, confirme:

- O objetivo do script está claro.
- A entrada de dados foi identificada.
- O processamento principal foi definido.
- A saída esperada foi testada.
- Os casos simples funcionam.
- Os casos extremos foram considerados.
- O código resolve o problema sem criar comportamento inesperado.
- Você consegue explicar o fluxo com suas próprias palavras.

Um dev profissional não começa pelo código. Ele começa entendendo o problema.

## Variáveis e dados

Verifique:

- `const` foi usado quando o valor não muda.
- `let` foi usado apenas quando o valor precisa mudar.
- `var` foi evitado.
- Os nomes das variáveis explicam o que guardam.
- Strings, números, booleans, arrays e objetos foram usados de forma coerente.
- Não existem valores mágicos difíceis de entender.
- Conversões de tipo foram feitas de forma intencional.

Exemplo melhor:

```javascript
const precoProduto = 120;
const descontoPercentual = 10;
const valorFinal = precoProduto - (precoProduto * descontoPercentual / 100);

console.log(valorFinal);
```

Evite:

```javascript
let x = 120;
let y = 10;

console.log(x - x * y / 100);
```

O segundo exemplo até funciona, mas é menos profissional porque os nomes não explicam o contexto.

## Condicionais

Confira:

- As condições são fáceis de ler.
- Comparações usam `===` e `!==` quando possível.
- O código evita condicionais enormes sem necessidade.
- Casos alternativos foram tratados com `else`, `else if` ou `switch`.
- Não existem regras duplicadas em vários lugares.
- Condições negativas complexas foram evitadas.

Exemplo claro:

```javascript
const idade = 18;

if (idade >= 18) {
  console.log("Acesso permitido");
} else {
  console.log("Acesso negado");
}
```

Cuidado: uma condição confusa pode até funcionar hoje, mas dificulta manutenção amanhã.

## Loops e arrays

Verifique:

- O loop tem começo, condição e atualização corretos.
- Não existe risco de loop infinito.
- Arrays usam métodos adequados quando isso melhora a leitura.
- `for`, `for...of`, `map`, `filter` e `find` foram escolhidos com intenção.
- O código não altera dados sem necessidade.
- Listas vazias foram consideradas.

Exemplo:

```javascript
const produtos = ["Mouse", "Teclado", "Monitor"];

for (const produto of produtos) {
  console.log(produto);
}
```

Exemplo com `filter`:

```javascript
const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter((numero) => numero % 2 === 0);

console.log(pares);
```

## Funções

Confira:

- Cada função tem uma responsabilidade clara.
- O nome da função começa com verbo quando executa ação.
- Parâmetros têm nomes explicativos.
- A função retorna valor quando precisa retornar.
- A função não depende de variáveis globais sem necessidade.
- Funções grandes foram divididas.
- O retorno da função é previsível.

Exemplo profissional:

```javascript
function calcularTotal(preco, quantidade) {
  return preco * quantidade;
}

const total = calcularTotal(50, 3);
console.log(total);
```

Evite função que faz tudo ao mesmo tempo: calcular, alterar tela, validar, buscar dados e exibir mensagem. Isso dificulta manutenção.

## Objetos e organização de dados

Verifique:

- Objetos representam entidades reais do problema.
- Propriedades têm nomes claros.
- Arrays de objetos foram usados quando existem listas de dados estruturados.
- O código evita repetição desnecessária.
- Dados e ações estão separados quando isso melhora a manutenção.

Exemplo:

```javascript
const usuario = {
  nome: "Mateus",
  perfil: "Front-end",
  ativo: true
};

console.log(usuario.nome);
```

Exemplo com lista de objetos:

```javascript
const tarefas = [
  { titulo: "Estudar HTML", concluida: true },
  { titulo: "Praticar JavaScript", concluida: false }
];

const pendentes = tarefas.filter((tarefa) => !tarefa.concluida);
console.log(pendentes);
```

## Strings e números

Antes de aprovar:

- Textos dinâmicos usam template literals quando melhora a leitura.
- Números foram tratados como números, não como strings.
- Entrada do usuário foi convertida quando necessário.
- Cálculos têm nomes claros.
- O código evita concatenação confusa.

Exemplo:

```javascript
const nome = "Mateus";
const pontos = 95;

const mensagem = `${nome} fez ${pontos} pontos.`;
console.log(mensagem);
```

## Debugging e testes manuais

Antes de finalizar:

- Teste o caminho principal.
- Teste campos vazios.
- Teste valores inválidos.
- Teste valores mínimos e máximos.
- Use `console.log` com intenção, não espalhado sem controle.
- Remova logs desnecessários antes da entrega.
- Leia as mensagens de erro do console.
- Verifique se o navegador não mostra erro vermelho.

Exemplo de teste simples:

```javascript
function ehMaiorDeIdade(idade) {
  return idade >= 18;
}

console.log(ehMaiorDeIdade(18)); // true
console.log(ehMaiorDeIdade(15)); // false
```

## Boas práticas profissionais

Um código JavaScript de qualidade deve:

- ter nomes claros;
- evitar repetição;
- separar responsabilidades;
- ser fácil de ler de cima para baixo;
- evitar lógica escondida;
- tratar erros previsíveis;
- não depender de gambiarras;
- ser simples antes de ser “esperto”;
- funcionar em mais de um cenário;
- ser compreensível para outro dev.

Cuidado: código muito “esperto” pode parecer avançado, mas se ninguém entende, vira dívida técnica.

## Erros que reprovam um JavaScript básico

Evite:

- nomes como `x`, `y`, `abc` sem contexto;
- `var` sem necessidade;
- funções que fazem muitas coisas;
- código duplicado;
- condicionais confusas;
- comparação fraca sem intenção;
- código que só funciona em um caso específico;
- logs esquecidos;
- ausência de validação;
- alterar HTML sem conferir se o elemento existe;
- copiar código sem entender.

Exemplo seguro ao lidar com DOM:

```javascript
const botao = document.querySelector(".botao");

if (botao) {
  botao.addEventListener("click", () => {
    console.log("Botão clicado");
  });
}
```

## Checklist de aprovação

Considere o JavaScript aprovado quando:

- O código funciona.
- O código é legível.
- As variáveis têm bons nomes.
- As funções têm responsabilidades claras.
- Os erros básicos foram tratados.
- Não há repetição desnecessária.
- Não há console sujo sem motivo.
- O comportamento foi testado.
- Outro dev conseguiria entender o raciocínio.
- Você consegue explicar cada parte do código.

Se você não consegue explicar uma linha, essa linha ainda precisa ser estudada ou reescrita.
