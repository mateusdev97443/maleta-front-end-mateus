# Erros reais de integração

## 1. Async fora de ordem

### Problema

Uma resposta antiga chega depois de uma ação mais recente e substitui a interface atual. O usuário pode filtrar por um termo, mudar rapidamente para outro e, no fim, ver dados que pertencem à primeira ação.

### Por que acontece

Requisições assíncronas não garantem retorno na mesma ordem em que foram disparadas. Se o código não identifica qual resposta ainda é válida, qualquer resposta atrasada pode renderizar por último.

### Exemplo do erro

```js
loadUsers("ana");
loadUsers("mateus");
```

### Correção

```js
let currentRequestId = 0;

async function loadUsers(term) {
  const requestId = ++currentRequestId;
  const users = await fetchUsers(term);

  if (requestId !== currentRequestId) {
    return;
  }

  renderUsers(users);
}
```

### Como evitar

Controle concorrência. Para fluxos simples, desabilite o botão durante loading. Para buscas que podem ser disparadas em sequência, guarde um identificador da requisição mais recente e ignore respostas antigas.

## 2. Render duplicado

### Problema

A lista mostra os mesmos itens mais de uma vez depois de recarregar, buscar ou aplicar filtros. A tela parece ter mais dados do que realmente existe.

### Por que acontece

A renderização adiciona novo HTML sobre o conteúdo anterior, em vez de representar apenas o estado atual da lista.

### Exemplo do erro

```js
users.forEach(user => {
  list.innerHTML += `<li>${user.name}</li>`;
});
```

### Correção

```js
list.innerHTML = users
  .map(user => `<li>${user.name}</li>`)
  .join("");
```

### Como evitar

Trate renderização de lista como substituição. Antes de desenhar o resultado atual, remova o resultado anterior ou atribua o HTML completo de uma vez.

## 3. Estado quebrado

### Problema

A interface mostra sinais contraditórios, como loading junto com erro, mensagem de vazio junto com cards ou sucesso com aviso antigo na tela.

### Por que acontece

Cada função altera uma parte do DOM sem limpar as partes que não pertencem mais ao novo estado. O código passa a somar mensagens em vez de trocar estados.

### Exemplo do erro

```js
showLoading();
showEmpty();
renderUsers(users);
```

### Correção

```js
function showSuccess(users) {
  clearUI();
  renderUsers(users);
}
```

### Como evitar

Defina quais elementos pertencem a cada estado. Ao entrar em loading, erro, vazio ou sucesso, limpe os elementos incompatíveis com esse estado.

## 4. DOM inconsistente

### Problema

O JavaScript tenta alterar um elemento que não existe e a tela quebra com erro no console. Em vez de falha visual controlada, o fluxo para de executar.

### Por que acontece

O seletor usado no JavaScript não combina com a estrutura conceitual da tela, foi digitado errado ou está sendo usado antes de existir.

### Exemplo do erro

```js
document.querySelector("#cards").innerHTML = html;
```

### Correção

```js
const cardsContainer = document.querySelector("#lista-usuarios");

if (!cardsContainer) {
  throw new Error("Container de usuários não encontrado.");
}

cardsContainer.innerHTML = html;
```

### Como evitar

Centralize seletores em um objeto `elements`, use nomes coerentes e valide elementos essenciais no início do fluxo. Isso torna problemas de DOM mais fáceis de localizar.

## 5. Variável global bagunçada

### Problema

Os dados mudam sem ficar claro qual função alterou o quê. Depois de alguns eventos, a lista original, a lista filtrada e o item selecionado ficam inconsistentes.

### Por que acontece

Variáveis soltas são modificadas por muitas funções. Sem uma fonte de verdade clara, uma correção em um ponto pode quebrar outro fluxo.

### Exemplo do erro

```js
users = [];
users = users.filter(matchByName);
selectedUser = users[0];
```

### Correção

```js
const state = {
  users: [],
  filteredUsers: [],
  selectedUserId: null
};

state.filteredUsers = state.users.filter(matchByName);
```

### Como evitar

Use estado simples e explícito. Decida quais dados são fonte original, quais são derivados e quais representam uma escolha temporária da interface.

## 6. Filtro alterando lista original

### Problema

Depois de aplicar filtro, o botão limpar não consegue restaurar todos os itens. A tela passa a trabalhar apenas com o subconjunto filtrado.

### Por que acontece

O resultado filtrado é salvo por cima da lista original. O código perde a referência completa que deveria servir como base para novos filtros.

### Exemplo do erro

```js
users = users.filter(user => user.city === selectedCity);
```

### Correção

```js
const filteredUsers = users.filter(user => user.city === selectedCity);
renderUsers(filteredUsers);
```

### Como evitar

Nunca trate filtro como destruição da fonte. Filtro deve produzir uma lista derivada; a lista original deve continuar disponível para limpar, combinar ou trocar critérios.

## 7. Loading que não some

### Problema

A tela fica presa em “carregando” mesmo depois de a operação terminar. O usuário não sabe se deve esperar, tentar novamente ou considerar que houve erro.

### Por que acontece

O código mostra loading no começo, mas só remove esse estado em um caminho específico. Se acontece erro, retorno antecipado ou lista vazia, a limpeza não roda.

### Exemplo do erro

```js
showLoading();
const users = await fetchUsers();

if (users.length === 0) {
  showEmpty();
  return;
}
```

### Correção

```js
showLoading();

try {
  const users = await fetchUsers();
  renderResult(users);
} finally {
  hideLoading();
}
```

### Como evitar

Garanta saída para todos os caminhos. `finally` ajuda quando o mesmo encerramento precisa acontecer em sucesso, erro ou retorno intermediário.

## 8. Erro antigo permanecendo na tela

### Problema

A nova tentativa funciona, os cards aparecem, mas a mensagem de erro anterior continua visível. A tela comunica sucesso e falha ao mesmo tempo.

### Por que acontece

O fluxo de sucesso renderiza dados, mas não limpa a área de feedback usada anteriormente pelo erro.

### Exemplo do erro

```js
showError("Falha ao carregar usuários.");
renderUsers(users);
```

### Correção

```js
clearFeedback();
renderUsers(users);
```

### Como evitar

No início de cada nova tentativa, limpe feedback antigo. Antes de renderizar sucesso, confirme que mensagens de erro e vazio não continuam ativas.

## 9. Evento registrado mais de uma vez

### Problema

Um único clique executa a ação duas, três ou várias vezes. Isso pode duplicar requisições, duplicar renders e deixar estados fora de controle.

### Por que acontece

`addEventListener` é chamado dentro de funções que rodam repetidamente, como renderizações, filtros ou callbacks de sucesso.

### Exemplo do erro

```js
function renderUsers(users) {
  list.innerHTML = createCards(users);
  retryButton.addEventListener("click", loadUsers);
}
```

### Correção

```js
function init() {
  retryButton.addEventListener("click", loadUsers);
}
```

### Como evitar

Registre eventos em uma etapa previsível de inicialização. Renderizar HTML e conectar eventos globais são responsabilidades diferentes.

## 10. Função gigante que faz tudo

### Problema

Uma única função busca dados, valida resposta, filtra, monta HTML, altera loading, mostra erro e registra eventos. Qualquer ajuste exige entender o fluxo inteiro.

### Por que acontece

O código cresce sem pausas para extrair responsabilidades. O que começou como um teste rápido vira a função principal da tela.

### Exemplo do erro

```js
async function start() {
  // busca API, filtra, monta cards, mostra erro e registra eventos
}
```

### Correção

```js
async function loadUsers() {
  showLoading();
  const users = await fetchUsers();
  renderUsers(users);
}
```

### Como evitar

Separe por intenção: buscar dados, transformar dados, renderizar UI e mostrar estados. Se uma função precisa de comentário para explicar várias etapas diferentes, ela provavelmente deve ser dividida.

## 11. Buscar API de novo sem necessidade

### Problema

Cada tecla digitada ou cada filtro aplicado dispara uma chamada externa. A interface fica dependente da rede para uma operação que poderia ser instantânea.

### Por que acontece

O código confunde busca local com busca remota. Depois que os dados já estão carregados, filtros simples deveriam trabalhar sobre o array em memória.

### Exemplo do erro

```js
searchInput.addEventListener("input", () => {
  fetchUsers(searchInput.value);
});
```

### Correção

```js
searchInput.addEventListener("input", () => {
  const filteredUsers = filterUsers(originalUsers, searchInput.value);
  renderUsers(filteredUsers);
});
```

### Como evitar

Defina a origem dos dados antes de codar. Se a tela já tem todos os dados necessários, derive resultados localmente e preserve a API para carregamento inicial ou nova tentativa real.

## 12. Esquecer de limpar resultado anterior

### Problema

A tela mistura cards antigos com uma nova mensagem de vazio, detalhe antigo com item novo ou erro antigo com lista atualizada.

### Por que acontece

O código altera apenas a parte que acabou de mudar, mas deixa outras áreas visuais com conteúdo do estado anterior.

### Exemplo do erro

```js
showEmpty();
```

### Correção

```js
clearUI();
showEmpty();
```

### Como evitar

Antes de mostrar um novo estado, pergunte quais áreas da tela devem ficar vazias. Limpeza não é detalhe visual; é parte da consistência da interface.
