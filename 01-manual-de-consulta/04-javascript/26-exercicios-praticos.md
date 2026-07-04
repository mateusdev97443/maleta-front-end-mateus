# Exercícios práticos

Exercícios graduais para praticar fundamentos com valores fixos e `console.log`. Cada exercício pede testes concretos para evitar respostas vagas.

## Exercício 1 — Criar variáveis de perfil

### Objetivo

Declarar dados básicos de um aluno.

### Instruções

Crie `nome`, `idade`, `cidade`, `trilha` e `estaEstudando`. Mostre uma linha no console para cada dado. Teste com seu nome e depois com um perfil fictício.

### Requisitos obrigatórios

Use `const` para dados que não mudam e nomes em camelCase.

### Critérios de conclusão

Todos os dados aparecem no console com rótulos claros.

### Extra opcional

Crie uma variável `objetivoAtual` e inclua na mensagem final.

## Exercício 2 — Calcular idade aproximada

### Objetivo

Praticar subtração e variáveis numéricas.

### Instruções

Crie `anoAtual` e `anoNascimento`. Calcule `idadeAproximada`. Teste com 2000, 2005 e 2010 como anos de nascimento.

### Requisitos obrigatórios

Não use string para anos. Use nomes descritivos.

### Critérios de conclusão

O console mostra a idade aproximada correta para cada teste.

### Extra opcional

Mostre uma frase com template literal.

## Exercício 3 — Montar frase com template literal

### Objetivo

Unir texto e variáveis com crase.

### Instruções

Crie `nome`, `fase`, `tema` e gere a frase: “Mateus está na Fase 5 estudando JavaScript”. Troque o tema para testar.

### Requisitos obrigatórios

Use crase e `${}`; não use concatenação.

### Critérios de conclusão

A frase muda corretamente quando as variáveis mudam.

### Extra opcional

Inclua uma segunda linha com horas de estudo.

## Exercício 4 — Verificar maioridade

### Objetivo

Criar uma decisão booleana simples.

### Instruções

Crie `idade` e uma condição que exiba “maior de idade” ou “menor de idade”. Teste 17, 18 e 21.

### Requisitos obrigatórios

Use `>=` e estrutura `if/else`.

### Critérios de conclusão

Os três testes retornam mensagens corretas.

### Extra opcional

Crie uma variável `podeAcessar` antes do `if`.

## Exercício 5 — Classificar nota

### Objetivo

Treinar `if`, `else if` e ordem de condições.

### Instruções

Crie `nota` e classifique: 9 ou mais “excelente”, 7 ou mais “aprovado”, 5 ou mais “recuperação”, abaixo disso “reprovado”. Teste 10, 8, 6 e 3.

### Requisitos obrigatórios

Comece pela maior faixa.

### Critérios de conclusão

Cada nota cai na categoria correta.

### Extra opcional

Transforme limites em constantes nomeadas.

## Exercício 6 — Calcular desconto

### Objetivo

Aplicar operadores matemáticos em regra de preço.

### Instruções

Crie `precoOriginal` e `percentualDesconto`. Calcule valor do desconto e preço final. Teste 100 com 10%, 250 com 20% e 80 com 0%.

### Requisitos obrigatórios

Use percentual em decimal, como `0.1`.

### Critérios de conclusão

O console mostra preço original, desconto e preço final.

### Extra opcional

Crie mensagem formatada com template literal.

## Exercício 7 — Verificar estoque

### Objetivo

Combinar comparação e mensagem.

### Instruções

Crie `quantidadeEmEstoque` e `quantidadeSolicitada`. Informe se a compra pode continuar. Teste estoque 5 pedido 3, estoque 2 pedido 4 e estoque 0 pedido 1.

### Requisitos obrigatórios

Use comparação `>=`.

### Critérios de conclusão

A mensagem reflete disponibilidade real.

### Extra opcional

Adicione regra para estoque baixo quando sobrar 1 item.

## Exercício 8 — Percorrer lista de tecnologias

### Objetivo

Praticar array e `for...of`.

### Instruções

Crie array com HTML, CSS e JavaScript. Percorra e mostre “Tecnologia estudada: X”. Adicione Git e rode de novo.

### Requisitos obrigatórios

Use `for...of`.

### Critérios de conclusão

Todos os itens aparecem sem acessar índices manualmente.

### Extra opcional

Mostre também a quantidade total com `length`.

## Exercício 9 — Somar números de um array

### Objetivo

Usar acumulador em loop.

### Instruções

Crie `notas = [8, 7, 9]`. Some todos os valores em `total`. Teste com outro array `[5, 10, 6]`.

### Requisitos obrigatórios

Use `let total = 0` e `for...of`.

### Critérios de conclusão

O total bate com a soma manual.

### Extra opcional

Calcule a média.

## Exercício 10 — Encontrar item em array

### Objetivo

Usar busca simples com `includes` ou `find`.

### Instruções

Crie lista de tecnologias e verifique se “JavaScript” existe. Teste procurando “Git” também como segundo termo de busca.

### Requisitos obrigatórios

Use comparação estrita se usar `find`.

### Critérios de conclusão

O console informa encontrado ou não encontrado corretamente.

### Extra opcional

Mostre o índice com `indexOf`.

## Exercício 11 — Filtrar produtos disponíveis

### Objetivo

Criar nova lista a partir de array de objetos.

### Instruções

Crie três produtos com `nome` e `disponivel`. Use `filter` para gerar apenas disponíveis. Teste com dois disponíveis e depois nenhum disponível.

### Requisitos obrigatórios

A condição deve retornar boolean.

### Critérios de conclusão

A nova lista contém apenas produtos disponíveis.

### Extra opcional

Mostre os nomes com `map`.

## Exercício 12 — Criar objeto de projeto

### Objetivo

Modelar entidade real.

### Instruções

Crie objeto `projeto` com `nome`, `fase`, `tema`, `concluido`. Altere `concluido` para `true` e adicione `revisado`.

### Requisitos obrigatórios

Use acesso com ponto para propriedades comuns.

### Critérios de conclusão

O objeto final mostra todas as propriedades corretas.

### Extra opcional

Acesse uma propriedade usando colchetes.

## Exercício 13 — Criar função de saudação

### Objetivo

Praticar parâmetro e chamada.

### Instruções

Crie `saudarAluno(nome)` que retorna “Olá, Nome!”. Teste com Mateus, Ana e João.

### Requisitos obrigatórios

A função deve retornar string, não apenas imprimir.

### Critérios de conclusão

Cada chamada retorna saudação personalizada.

### Extra opcional

Padronize o nome com `trim()`.

## Exercício 14 — Criar função de cálculo

### Objetivo

Encapsular cálculo reutilizável.

### Instruções

Crie `calcularTotal(preco, quantidade)` e teste 10x3, 25x4 e 99x1.

### Requisitos obrigatórios

Use `return`.

### Critérios de conclusão

Os totais são corretos e salvos em variáveis antes do console.

### Extra opcional

Crie função separada para aplicar desconto.

## Exercício 15 — Criar função de validação simples

### Objetivo

Validar strings básicas.

### Instruções

Crie `validarNome(nome)` que retorna `true` se o nome sem espaços tiver pelo menos 3 caracteres. Teste “Ma”, “Mateus” e “  Ana  ”.

### Requisitos obrigatórios

Use `trim()` e `length`.

### Critérios de conclusão

A função retorna boolean correto.

### Extra opcional

Crie validação simples de email com `includes("@")`.

## Exercício 16 — Refatorar código repetido para função

### Objetivo

Transformar repetição em função.

### Instruções

Comece com três cálculos de preço final repetidos. Depois crie `calcularPrecoFinal(preco, desconto)` e substitua as repetições.

### Requisitos obrigatórios

A função deve receber dados por parâmetro.

### Critérios de conclusão

O resultado final é igual ao código repetido, mas com menos duplicação.

### Extra opcional

Crie array de preços e aplique a função em cada item.

