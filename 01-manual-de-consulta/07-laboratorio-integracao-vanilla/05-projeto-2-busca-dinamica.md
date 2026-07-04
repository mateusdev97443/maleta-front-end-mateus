# Projeto 2: busca dinâmica

A busca dinâmica deve filtrar dados já carregados. Use o evento `input`, porque ele responde a digitação, colagem, corte e limpeza do campo; `keyup` ignora algumas formas de alteração do valor.

```js
let originalUsers = [];

function handleSearch(event) {
  const term = event.target.value.trim().toLowerCase();
  const filteredUsers = originalUsers.filter(user =>
    user.name.toLowerCase().includes(term)
  );

  if (filteredUsers.length === 0) {
    showEmpty();
    return;
  }

  renderUsers(filteredUsers);
}
```

Não faça nova requisição a cada tecla: isso desperdiça rede e torna a interface instável. Preserve `originalUsers` como fonte intacta e trate `filteredUsers` como resultado temporário. Antes de renderizar, limpe mensagens antigas para evitar vazio e cards ao mesmo tempo.
