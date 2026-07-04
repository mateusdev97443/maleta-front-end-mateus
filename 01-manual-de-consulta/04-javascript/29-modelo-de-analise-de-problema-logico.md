# Modelo de análise de problema lógico

Antes de escrever JavaScript, transforme o problema em passos claros. Código é consequência de entendimento.

## Processo passo a passo

1. Defina o problema em uma frase.
2. Liste os dados disponíveis.
3. Liste o resultado esperado.
4. Identifique se existe decisão.
5. Identifique se existe repetição.
6. Escolha estruturas: variável, array, objeto ou função.
7. Escreva casos de teste.
8. Só então escreva o código.

## Perguntas antes do código

- Qual problema preciso resolver?
- Quais dados eu tenho?
- Quais dados preciso gerar?
- Esse problema precisa de condição?
- Esse problema precisa de repetição?
- Preciso de array?
- Preciso de objeto?
- Preciso de função?
- Qual deve ser a entrada?
- Qual deve ser a saída?
- Que casos de teste posso usar?
- O que pode dar errado?

## Modelo preenchível

```md
Problema:
Dados de entrada:
Resultado esperado:
Condições necessárias:
Repetições necessárias:
Estruturas escolhidas:
Funções planejadas:
Casos de teste:
Possíveis erros:
Primeiro passo no código:
```

## Exemplo preenchido — calcular desconto

```md
Problema: calcular preço final de um produto com desconto.
Dados de entrada: preço original e percentual de desconto.
Resultado esperado: preço final.
Condições necessárias: nenhuma condição obrigatória no primeiro momento.
Repetições necessárias: não.
Estruturas escolhidas: numbers e variáveis.
Funções planejadas: calcularPrecoFinal(preco, percentual).
Casos de teste: 100 com 10%, 200 com 0%, 80 com 25%.
Possíveis erros: usar 10 em vez de 0.10; esquecer parênteses; usar string.
Primeiro passo no código: declarar preço e percentual como numbers.
```

```js
function calcularPrecoFinal(preco, percentualDesconto) {
  return preco - preco * percentualDesconto;
}
```

## Exemplo preenchido — filtrar produtos

```md
Problema: listar apenas produtos disponíveis.
Dados de entrada: array de produtos com nome e disponível.
Resultado esperado: novo array contendo apenas disponíveis.
Condições necessárias: produto.disponivel deve ser true.
Repetições necessárias: sim, percorrer produtos.
Estruturas escolhidas: array de objetos e filter.
Funções planejadas: filtrarProdutosDisponiveis(produtos).
Casos de teste: todos disponíveis, nenhum disponível, lista mista.
Possíveis erros: escrever "true" como string; alterar lista original sem necessidade.
Primeiro passo no código: montar array de produtos de teste.
```

```js
function filtrarProdutosDisponiveis(produtos) {
  return produtos.filter((produto) => produto.disponivel === true);
}
```

## Checklist antes de começar a codar

- [ ] Eu sei explicar o problema em uma frase.
- [ ] Sei quais valores entram.
- [ ] Sei qual resultado deve sair.
- [ ] Tenho pelo menos três casos de teste.
- [ ] Sei se preciso de condição.
- [ ] Sei se preciso de repetição.
- [ ] Escolhi nomes de variáveis antes de escrever.
- [ ] Sei onde uma função ajudaria.
