# Mini desafios

## 1. Transformar lista em cards

### Contexto

Você já possui uma lista textual de usuários renderizada na tela.

### Objetivo

Converter cada usuário em um card com hierarquia visual melhor.

### Requisitos

- mostrar nome, e-mail e cidade.
- manter a função de renderização separada.
- limpar a lista antes de renderizar.

### Restrições

- não buscar a API novamente.
- não criar arquivo real fora do Markdown.

### Critério de conclusão

Todos os usuários aparecem como cards e não há duplicação ao recarregar.

### Dica opcional

Use `map` para criar um card por usuário e `join("")` para montar o HTML final.

## 2. Adicionar botão tentar novamente

### Contexto

A tela possui tratamento de erro, mas o usuário não tem ação clara após uma falha.

### Objetivo

Criar um botão que execute novamente o carregamento principal.

### Requisitos

- registrar evento uma única vez.
- reaproveitar `loadUsers`.
- desabilitar o botão durante loading.

### Restrições

- não registrar o evento dentro do `catch`.
- não criar uma segunda função de busca duplicada.

### Critério de conclusão

Após erro, clicar no botão tenta carregar novamente sem multiplicar requisições.

### Dica opcional

O melhor lugar para registrar esse evento costuma ser `init`.

## 3. Criar busca por nome

### Contexto

Os dados já estão carregados em memória.

### Objetivo

Filtrar usuários enquanto o usuário digita.

### Requisitos

- usar evento `input`.
- normalizar com `trim()` e `toLowerCase()`.
- preservar lista original.

### Restrições

- não fazer `fetch` a cada tecla.
- não alterar a fonte original.

### Critério de conclusão

A lista muda dinamicamente e volta completa quando o campo é limpo.

### Dica opcional

Crie uma lista filtrada derivada da original.

## 4. Criar filtro por cidade

### Contexto

Cada usuário possui uma cidade em `address.city`.

### Objetivo

Permitir que o estudante filtre usuários por cidade.

### Requisitos

- normalizar cidade digitada.
- mostrar vazio quando não houver resultado.
- manter botão limpar filtro.

### Restrições

- não confundir vazio com erro.
- não apagar usuários originais.

### Critério de conclusão

Filtrar por uma cidade existente mostra apenas usuários compatíveis; limpar restaura todos.

### Dica opcional

A regra pode ficar em uma função `filterByCity`.

## 5. Criar detalhe ao clicar

### Contexto

A lista de usuários já aparece em cards ou botões.

### Objetivo

Mostrar um painel com informações do usuário selecionado.

### Requisitos

- usar `id` ou `data-user-id`.
- ter função `renderUserDetail`.
- tratar item inexistente.

### Restrições

- não misturar renderização da lista com detalhe.
- não registrar listener repetido em cada render.

### Critério de conclusão

Clicar em um item atualiza apenas o painel de detalhe e destaca o selecionado.

### Dica opcional

Delegação de evento na lista pode simplificar o fluxo.

## 6. Tratar lista vazia

### Contexto

Um filtro pode retornar zero resultados.

### Objetivo

Exibir mensagem de vazio clara e não técnica.

### Requisitos

- limpar cards antigos.
- mostrar texto de vazio.
- permitir limpar filtro.

### Restrições

- não mostrar mensagem de erro.
- não deixar lista antiga na tela.

### Critério de conclusão

Quando não há resultados, a tela mostra somente a mensagem de vazio adequada.

### Dica opcional

Compare `filteredUsers.length` antes de renderizar.

## 7. Limpar erro antigo

### Contexto

Depois de uma falha, uma nova tentativa pode funcionar.

### Objetivo

Remover mensagens antigas antes de novo loading ou sucesso.

### Requisitos

- criar `clearFeedback` ou `clearUI`.
- chamar limpeza no início do fluxo.
- garantir sucesso sem erro antigo.

### Restrições

- não apagar a lista original.
- não esconder erro real sem nova tentativa.

### Critério de conclusão

Após uma tentativa bem-sucedida, não sobra mensagem de falha anterior.

### Dica opcional

Separe limpeza visual de limpeza de dados.

## 8. Separar função gigante em funções menores

### Contexto

Uma função concentra busca, filtro, estado e renderização.

### Objetivo

Dividir o fluxo em funções com intenção clara.

### Requisitos

- criar função de busca.
- criar função de render.
- criar função de estado ou feedback.

### Restrições

- não mudar o comportamento final.
- não criar nomes genéricos.

### Critério de conclusão

O código fica mais fácil de ler e cada função tem uma responsabilidade.

### Dica opcional

Procure verbos de intenção: buscar, filtrar, renderizar, limpar.

## 9. Impedir múltiplos cliques durante loading

### Contexto

O botão de carregar pode ser clicado várias vezes rapidamente.

### Objetivo

Bloquear ações repetidas enquanto a requisição está em andamento.

### Requisitos

- usar `disabled`.
- reativar no final.
- manter feedback de loading.

### Restrições

- não deixar o botão bloqueado para sempre.
- não ignorar tratamento de erro.

### Critério de conclusão

Cliques repetidos durante loading não disparam várias requisições.

### Dica opcional

Use `finally` para reativar o botão.

## 10. Preservar lista original

### Contexto

Filtros sucessivos estão reduzindo a fonte de dados permanentemente.

### Objetivo

Garantir que todo filtro derive de uma fonte intacta.

### Requisitos

- criar `originalUsers`.
- criar `filteredUsers`.
- restaurar original ao limpar.

### Restrições

- não reatribuir original no filtro.
- não buscar API só para restaurar dados.

### Critério de conclusão

Depois de vários filtros, limpar mostra novamente todos os usuários.

### Dica opcional

Pense em fonte de verdade e resultado derivado.
