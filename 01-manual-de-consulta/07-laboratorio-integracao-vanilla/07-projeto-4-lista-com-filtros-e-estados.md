# Projeto 4: lista com filtros e estados

## Objetivo do mini projeto

Este é o mini projeto mais completo da fase. Ele combina carregamento inicial via API, estado simples em objeto, lista original, lista filtrada, loading, erro, vazio, sucesso, busca por nome, filtro por cidade, botão limpar filtro e renderização reaproveitável.

Mesmo sendo mais completo, ele continua pequeno e didático. Não é SPA, não tem roteamento e não usa gerenciamento avançado de estado.

## Visão geral do fluxo

```text
iniciar → carregar API → salvar lista original → copiar para lista filtrada → renderizar sucesso
                 ↓
          usuário filtra → derivar lista filtrada → renderizar vazio ou sucesso
                 ↓
          limpar filtro → restaurar lista original → renderizar sucesso
```

A API deve ser buscada no carregamento inicial ou em uma tentativa de recarregar após erro. Filtros locais não devem chamar a API novamente.

## Estado simples em objeto

Um objeto de estado ajuda a reunir informações importantes sem espalhar variáveis soltas:

```js
const state = {
  users: [],
  filteredUsers: [],
  isLoading: false,
  selectedCity: "",
  searchTerm: ""
};
```

Esse estado não é uma biblioteca, não é arquitetura avançada e não é gerenciamento complexo. É apenas uma forma organizada de representar a tela.

## Exemplo de código didático

```js
const elements = {
  status: document.querySelector("#status"),
  list: document.querySelector("#lista-usuarios"),
  searchInput: document.querySelector("#busca"),
  cityInput: document.querySelector("#cidade"),
  clearButton: document.querySelector("#limpar-filtros"),
  reloadButton: document.querySelector("#recarregar")
};

const state = {
  users: [],
  filteredUsers: [],
  isLoading: false,
  searchTerm: "",
  cityTerm: ""
};

function init() {
  elements.searchInput.addEventListener("input", handleFilterChange);
  elements.cityInput.addEventListener("input", handleFilterChange);
  elements.clearButton.addEventListener("click", clearFilters);
  elements.reloadButton.addEventListener("click", loadUsers);
  loadUsers();
}

async function loadUsers() {
  setLoading(true);
  clearUI();

  try {
    const users = await fetchUsers();
    state.users = users;
    state.filteredUsers = users;
    renderCurrentList();
  } catch (error) {
    clearUI();
    showError(error.message);
  } finally {
    setLoading(false);
  }
}

async function fetchUsers() {
  const response = await fetch("https://dummyjson.com/users?limit=10");

  if (!response.ok) {
    throw new Error(`Falha ao carregar dados. Status: ${response.status}.`);
  }

  const data = await response.json();
  return data.users;
}

function handleFilterChange() {
  state.searchTerm = normalizeText(elements.searchInput.value);
  state.cityTerm = normalizeText(elements.cityInput.value);
  state.filteredUsers = applyFilters(state.users, state.searchTerm, state.cityTerm);
  renderCurrentList();
}

function applyFilters(users, searchTerm, cityTerm) {
  return users.filter(user => {
    const matchesName = normalizeText(`${user.firstName} ${user.lastName}`).includes(searchTerm);
    const matchesCity = normalizeText(user.address.city).includes(cityTerm);
    return matchesName && matchesCity;
  });
}

function clearFilters() {
  elements.searchInput.value = "";
  elements.cityInput.value = "";
  state.searchTerm = "";
  state.cityTerm = "";
  state.filteredUsers = state.users;
  renderCurrentList();
}

function renderCurrentList() {
  clearUI();

  if (state.filteredUsers.length === 0) {
    showEmpty();
    return;
  }

  renderUsers(state.filteredUsers);
}

function renderUsers(users) {
  elements.list.innerHTML = users
    .map(user => `<article><h2>${user.firstName} ${user.lastName}</h2><p>${user.address.city}</p></article>`)
    .join("");
}

function setLoading(isLoading) {
  state.isLoading = isLoading;
  elements.reloadButton.disabled = isLoading;
  elements.clearButton.disabled = isLoading;

  if (isLoading) {
    elements.status.textContent = "Carregando usuários...";
  }
}

function showError(message) {
  elements.status.textContent = message;
}

function showEmpty() {
  elements.status.textContent = "Nenhum usuário corresponde aos filtros atuais.";
}

function clearUI() {
  elements.status.textContent = "";
  elements.list.innerHTML = "";
}

function normalizeText(text) {
  return text.trim().toLowerCase();
}

init();
```

## Explicação por etapas

### Carregamento inicial

`loadUsers` busca a API uma vez, salva os dados em `state.users` e copia a referência para `state.filteredUsers`. A partir daí, os filtros trabalham localmente.

### Filtros locais

`handleFilterChange` lê os campos, normaliza os valores e chama `applyFilters`. Essa função não altera `state.users`; ela retorna uma nova seleção derivada.

### Renderização reaproveitável

`renderCurrentList` é chamada tanto depois do carregamento quanto depois dos filtros. Ela centraliza a decisão entre vazio e sucesso, evitando duplicação de regras.

### Loading e ações bloqueadas

`setLoading` desabilita botões durante carregamento para evitar múltiplos cliques e estados concorrentes. Ao final, o `finally` reabilita as ações.

## Erros comuns

- Chamar a API novamente a cada alteração de filtro.
- Fazer `state.users = state.users.filter(...)` e destruir a lista original.
- Esquecer de limpar mensagem de erro antes de renderizar sucesso.
- Deixar botão de recarregar ativo durante loading.
- Tratar filtro vazio como erro.
- Colocar toda a lógica dentro de um único listener.

## Checklist de conclusão

- [ ] O projeto continua conceitual e em Markdown.
- [ ] Não existe SPA, roteamento ou estado avançado.
- [ ] A API é buscada apenas quando necessário.
- [ ] A lista original é preservada em `state.users`.
- [ ] A lista filtrada é derivada em `state.filteredUsers`.
- [ ] Loading, erro, vazio e sucesso são tratados.
- [ ] O botão de limpar filtro restaura a lista original.
- [ ] Ações críticas são desabilitadas durante loading.
- [ ] A renderização é reaproveitável.
- [ ] As funções têm responsabilidades claras.
