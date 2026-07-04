# Padrão base de projeto vanilla

## Estrutura conceitual

Um fluxo vanilla didático pode ser pensado em três camadas: HTML define regiões da página, CSS apresenta essas regiões de forma responsiva e JavaScript coordena dados, eventos e DOM. Mesmo sem arquivos reais nesta fase, o raciocínio é o mesmo.

## Separação de responsabilidades

- Inicialização: conecta o comportamento principal.
- Seleção de DOM: centraliza elementos usados.
- Busca de dados: conversa com a API.
- Renderização: transforma dados em interface.
- Estados: mostra loading, erro, vazio ou sucesso.
- Limpeza: remove resultado antigo antes de nova resposta.

## Exemplo didático

```js
const elements = {
  list: document.querySelector("#lista"),
  status: document.querySelector("#status"),
  reloadButton: document.querySelector("#recarregar")
};

function init() {
  elements.reloadButton.addEventListener("click", loadUsers);
  loadUsers();
}

async function loadUsers() {
  clearUI();
  showLoading();

  try {
    const users = await fetchUsers();
    clearUI();

    if (users.length === 0) {
      showEmpty();
      return;
    }

    renderUsers(users);
  } catch (error) {
    clearUI();
    showError(error.message);
  }
}

async function fetchUsers() {
  const response = await fetch("https://dummyjson.com/users?limit=10");

  if (!response.ok) {
    throw new Error(`Erro ${response.status} ao carregar usuários.`);
  }

  const data = await response.json();
  return data.users;
}

function renderUsers(users) {
  elements.list.innerHTML = users
    .map(user => `<li>${user.firstName} ${user.lastName} — ${user.email}</li>`)
    .join("");
}

function showLoading() {
  elements.status.textContent = "Carregando usuários...";
}

function showError(message) {
  elements.status.textContent = message;
}

function showEmpty() {
  elements.status.textContent = "Nenhum usuário encontrado.";
}

function clearUI() {
  elements.status.textContent = "";
  elements.list.innerHTML = "";
}

init();
```

## Leitura do padrão

A função `init` é a porta de entrada. Ela registra o evento principal e dispara o primeiro carregamento. `fetchUsers` não mexe no DOM; apenas retorna dados ou erro. `renderUsers` não busca API; apenas desenha. Essa divisão permite revisar cada parte sem misturar responsabilidades.
