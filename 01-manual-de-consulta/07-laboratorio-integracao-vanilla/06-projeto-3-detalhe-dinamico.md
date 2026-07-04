# Projeto 3: detalhe dinâmico

O detalhe dinâmico ensina a separar lista e painel de informações. O clique em um item captura `id` ou índice, encontra o objeto correspondente e renderiza apenas o detalhe.

```js
function handleUserClick(userId) {
  const user = users.find(item => item.id === userId);
  if (!user) {
    showDetailMessage("Usuário não encontrado.");
    return;
  }

  highlightSelectedUser(user.id);
  renderUserDetail(user);
}

function renderUserDetail(user) {
  detail.innerHTML = `<h2>${user.name}</h2><p>${user.email}</p><p>${user.address.city}</p>`;
}
```

Não misture a renderização da lista com a renderização do detalhe. A lista mostra opções; o detalhe mostra o item selecionado. Se o elemento não existir, trate com mensagem clara em vez de quebrar o código.
