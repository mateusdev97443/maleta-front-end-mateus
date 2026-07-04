# Mini desafios

Desafios para integrar fundamentos sem manipulação visual, sem `prompt` e sem `alert`. Use valores fixos e `console.log`.

## Desafio 1 — Calculadora simples de preço final

### Missão

Criar uma função que recebe preço, quantidade e desconto e retorna o total final.

### Regras

Use valores fixos; desconto deve ser decimal; se quantidade for zero, o total deve ser zero.

### O que testar

Preço 50 quantidade 2 desconto 10%; preço 80 quantidade 1 desconto 0%; quantidade 0.

### Critério de sucesso

A função retorna números corretos e o console mostra resumo legível.

## Desafio 2 — Classificador de nível de estudante

### Missão

Classificar horas de estudo em iniciante, em evolução ou consistente.

### Regras

Menos de 10 horas: iniciante; 10 a 39: em evolução; 40 ou mais: consistente.

### O que testar

0, 9, 10, 39 e 40 horas.

### Critério de sucesso

Cada valor cai no nível esperado.

## Desafio 3 — Organizador de lista de tarefas em array

### Missão

Criar array de tarefas e marcar uma tarefa como concluída usando objeto.

### Regras

Cada tarefa deve ter `titulo` e `concluida`; altere uma tarefa e mostre a lista final.

### O que testar

Lista vazia, lista com 3 tarefas, marcação da segunda tarefa.

### Critério de sucesso

O array mantém objetos claros e o status muda corretamente.

## Desafio 4 — Filtro de tecnologias conhecidas

### Missão

Separar tecnologias já estudadas das ainda não estudadas.

### Regras

Use array de objetos com `nome` e `estudada`. Gere lista filtrada de estudadas.

### O que testar

HTML/CSS estudadas, JavaScript em estudo, uma tecnologia não estudada.

### Critério de sucesso

O filtro retorna apenas itens com `estudada === true`.

## Desafio 5 — Resumo de perfil em objeto

### Missão

Montar objeto de perfil e gerar frase de resumo.

### Regras

Objeto deve ter nome, idade, cidade, trilha e tecnologias. A frase deve usar template literal.

### O que testar

Perfil completo e perfil com lista de tecnologias vazia.

### Critério de sucesso

O resumo fica compreensível e não depende de valores soltos.

## Desafio 6 — Sistema simples de aprovação por nota

### Missão

Criar função que recebe nota e retorna status.

### Regras

Nota >= 7 aprova; >=5 recuperação; menor que 5 reprova.

### O que testar

4.9, 5, 6.5, 7 e 10.

### Critério de sucesso

A função retorna texto correto para cada caso.

## Desafio 7 — Validador simples de nome e e-mail como string

### Missão

Validar nome e email usando métodos de string.

### Regras

Nome deve ter pelo menos 3 caracteres após `trim`; email deve conter `@` e `.`.

### O que testar

Nome “Ma”, “ Ana ”; emails “teste”, “a@b.com”.

### Critério de sucesso

Retorna objeto com `nomeValido` e `emailValido`.

## Desafio 8 — Contador de itens

### Missão

Contar quantos itens existem em diferentes arrays.

### Regras

Crie função `contarItens(lista)` que retorna `lista.length`.

### O que testar

Array vazio, array com 1 item, array com 5 itens.

### Critério de sucesso

A função não altera a lista e retorna o tamanho correto.

## Desafio 9 — Relatório de produtos em estoque

### Missão

Gerar total de produtos disponíveis e indisponíveis.

### Regras

Use array de objetos com `nome` e `estoque`; conte estoque maior que zero.

### O que testar

Todos disponíveis, nenhum disponível e lista mista.

### Critério de sucesso

O relatório mostra quantidades corretas.

## Desafio 10 — Função que recebe array e retorna estatísticas básicas

### Missão

Calcular soma, quantidade e média de números.

### Regras

Crie função que retorna objeto `{ soma, quantidade, media }`.

### O que testar

[10, 20, 30], [5], [] como caso especial.

### Critério de sucesso

A função trata lista vazia sem quebrar e retorna objeto claro.

