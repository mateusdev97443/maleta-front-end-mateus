# Projeto 4: lista com filtros e estados

Este fluxo combina API, filtro, loading, erro, vazio, sucesso e botão para limpar filtro. Use estado simples em variável, sem gerenciamento avançado.

```js
const state = { users: [], filteredUsers: [], isLoading: false };

function applyCityFilter(city) {
  const normalizedCity = city.trim().toLowerCase();
  state.filteredUsers = state.users.filter(user =>
    user.address.city.toLowerCase().includes(normalizedCity)
  );
  renderCurrentList();
}

function clearFilter() {
  filterInput.value = "";
  state.filteredUsers = [...state.users];
  renderCurrentList();
}
```

Busque a API uma vez no carregamento inicial. Depois filtre localmente. O botão limpar filtro restaura a lista a partir dos dados originais. A renderização reaproveitável recebe a lista atual e decide entre vazio ou sucesso.
