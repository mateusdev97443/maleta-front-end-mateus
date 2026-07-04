# Modelo mental de integração

## O que é o modelo mental

Um modelo mental é uma forma de organizar o pensamento antes de escrever código. Na Fase 8, ele serve para evitar que Mateus comece pela sintaxe e esqueça o fluxo. A pergunta principal não é “qual comando eu uso?”, mas “o que precisa acontecer na tela quando o usuário age ou quando os dados chegam?”.

## Pensar em tela versus pensar em fluxo

Pensar apenas em tela leva a frases como: “preciso de uma lista bonita”. Pensar em fluxo leva a decisões melhores: “a lista começa carregando, depois pode falhar, ficar vazia ou mostrar cards; quando o usuário digita, filtro localmente sem buscar a API de novo”.

A tela é o resultado visível. O fluxo é o caminho que produz esse resultado.

## Dados → lógica → UI

- **Dados:** vêm da API ou já estão em memória.
- **Lógica:** valida resposta, filtra, busca, seleciona e decide estados.
- **UI:** mostra loading, erro, vazio, sucesso, cards e detalhes.

Quando a UI tenta fazer papel de lógica, o código fica difícil de manter. Quando a lógica altera DOM em vários pontos, os estados se misturam.

## Entrada → processamento → saída visual

Outra forma de pensar:

- **Entrada:** carregamento inicial, digitação no campo, clique no item, clique em limpar.
- **Processamento:** buscar dados, normalizar termo, filtrar array, encontrar item por id.
- **Saída visual:** renderizar lista, mostrar vazio, destacar selecionado, preencher detalhe.

## Identificação antes do código

Antes de codar, identifique:

- origem dos dados;
- eventos existentes;
- estados possíveis;
- elementos do DOM afetados;
- funções necessárias;
- menor fluxo funcional possível.

O menor fluxo funcional é a primeira versão que prova o caminho principal sem enfeites. Por exemplo: carregar usuários e renderizar nomes. Depois entram busca, filtro, detalhe e refinamentos.

## Como evoluir sem bagunçar

Evolua uma responsabilidade por vez. Se a lista já carrega, adicione busca local. Se a busca funciona, adicione filtro por cidade. Se os filtros estão claros, adicione detalhe. A cada evolução, revise se a lista original continua preservada e se os estados antigos são limpos.

## Exemplo preenchido completo

```text
Cenário:
Tela de usuários com carregamento inicial, busca por nome, filtro por cidade e painel de detalhe.
```

### Objetivo da tela

Permitir que o usuário veja uma lista de usuários, refine a lista por nome ou cidade e clique em um usuário para ver informações detalhadas.

### Origem dos dados

API pública sem token: `https://dummyjson.com/users?limit=10`. Os dados são carregados no início e guardados como lista original.

### Eventos existentes

- carregamento inicial da tela;
- digitação no campo de busca por nome;
- digitação no campo de filtro por cidade;
- clique no botão limpar filtros;
- clique em um item da lista;
- clique em tentar novamente após erro.

### Estados possíveis

- loading durante a requisição;
- erro se a API falhar;
- vazio se filtros não encontrarem resultado;
- sucesso quando a lista possui itens;
- detalhe inicial antes de seleção;
- detalhe preenchido após clique;
- detalhe de item não encontrado em caso inconsistente.

### Elementos do DOM

- área de status;
- lista ou grade de usuários;
- campo de busca por nome;
- campo de filtro por cidade;
- botão limpar filtros;
- botão tentar novamente;
- painel de detalhe.

### Funções necessárias

- `init` para registrar eventos e iniciar carregamento;
- `loadUsers` para coordenar loading, busca, erro e sucesso;
- `fetchUsers` para conversar com a API;
- `applyFilters` para derivar lista filtrada;
- `renderUsers` para desenhar a lista;
- `renderUserDetail` para desenhar o detalhe;
- `showLoading`, `showError`, `showEmpty` e `clearUI` para estados;
- `normalizeText` para padronizar busca e filtro.

### Fluxo principal

1. `init` registra eventos e chama `loadUsers`.
2. `loadUsers` limpa UI, mostra loading e busca usuários.
3. `fetchUsers` valida `response.ok` e converte JSON.
4. A lista original é salva.
5. A lista filtrada começa igual à original.
6. `renderUsers` mostra os cards.
7. Digitação em busca ou cidade chama `applyFilters`.
8. A renderização decide entre vazio e sucesso.
9. Clique em card encontra usuário por `id` e renderiza detalhe.
10. Limpar filtros restaura a lista original sem nova requisição.

### Cuidados técnicos

- Não buscar API a cada tecla.
- Não destruir a lista original.
- Não confundir vazio com erro.
- Não registrar evento dentro de renderização.
- Não deixar loading, erro e sucesso visíveis ao mesmo tempo.
- Não transformar o laboratório em aplicação complexa.

## Checklist mental antes de codar

- [ ] Sei qual é a origem dos dados.
- [ ] Sei quais eventos iniciam mudanças.
- [ ] Sei quais estados a interface pode mostrar.
- [ ] Sei quais elementos do DOM serão alterados.
- [ ] Sei quais funções preciso criar.
- [ ] Sei qual é o menor fluxo funcional.
- [ ] Sei como preservar a lista original.
- [ ] Sei onde limpar estados antigos.
- [ ] Sei como evoluir sem misturar responsabilidades.
