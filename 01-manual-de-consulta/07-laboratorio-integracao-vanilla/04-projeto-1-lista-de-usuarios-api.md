# Projeto 1: lista de usuários com API

Use a API pública `https://jsonplaceholder.typicode.com/users`, sem token, para treinar o fluxo carregar dados → tratar resposta → renderizar UI. A função de busca deve usar `async/await`, validar `response.ok`, aproveitar `response.status` na mensagem e chamar `response.json()` apenas depois da validação.

```js
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error(`Status ${response.status}: falha ao buscar usuários.`);
  return response.json();
}

async function loadUsers() {
  showLoading();
  try {
    const users = await getUsers();
    if (users.length === 0) return showEmpty();
    renderCards(users);
  } catch (error) {
    showError(error.message);
  }
}
```

Renderize cards com nome, e-mail e cidade. Loading aparece antes do `fetch`; erro aparece no `catch`; vazio aparece quando a lista vem válida, mas sem itens. Separe `getUsers`, `renderCards`, `showLoading`, `showError`, `showEmpty` e `clearUI` para manter o fluxo revisável.
