# Projeto 2: busca dinâmica

## Objetivo do mini projeto

Este mini projeto ensina a criar uma busca dinâmica local em dados que já foram carregados. A tela não deve chamar a API a cada tecla. Ela deve usar a lista original em memória, derivar uma lista filtrada e renderizar o resultado atual.

A busca dinâmica é um treino importante porque aproxima o estudante de interfaces reais: o usuário digita, a tela responde e os estados precisam continuar coerentes.

## Busca local versus nova requisição

Uma nova requisição conversa novamente com a API. Uma busca local usa dados que já estão disponíveis no JavaScript. Neste projeto, depois que os usuários foram carregados, buscar por nome deve ser apenas uma operação de array.

Fazer `fetch` a cada tecla causa problemas:

- aumenta chamadas desnecessárias à rede;
- pode deixar respostas fora de ordem;
- torna a tela mais lenta;
- dificulta diferenciar erro de rede de busca sem resultado;
- cria dependência externa para uma ação que poderia ser instantânea.

## Evento recomendado

Use o evento `input`. Ele é mais adequado do que `keyup` porque reage a digitação, colagem, corte, preenchimento automático e limpeza do campo. `keyup` está ligado ao teclado; `input` está ligado à mudança real do valor.

## Normalização da busca

A busca deve ignorar diferenças simples de maiúsculas, minúsculas e espaços acidentais:

- `trim()` remove espaços no começo e no fim;
- `toLowerCase()` permite comparar textos sem depender de caixa.

Sem normalização, buscar por `  maria ` pode falhar mesmo quando existe `Maria`.

## Preservação da lista original

A lista original é a fonte confiável. Ela não deve ser destruída por filtro. O filtro deve derivar uma nova lista:

```text
originalUsers → termo digitado → filteredUsers → renderização
```

Se o filtro altera `originalUsers`, o botão de limpar filtro não terá como restaurar todos os dados sem buscar a API novamente.

## Exemplo de código didático

```js
const elements = {
  searchInput: document.querySelector("#busca"),
  list: document.querySelector("#lista-usuarios"),
  status: document.querySelector("#status")
};

let originalUsers = [];

function initSearch(users) {
  originalUsers = users;
  renderSearchResult(originalUsers);
  elements.searchInput.addEventListener("input", handleSearchInput);
}

function handleSearchInput(event) {
  const searchTerm = normalizeText(event.target.value);

  clearFeedback();

  if (searchTerm === "") {
    renderSearchResult(originalUsers);
    return;
  }

  const filteredUsers = filterUsersByName(originalUsers, searchTerm);
  renderSearchResult(filteredUsers);
}

function filterUsersByName(users, searchTerm) {
  return users.filter(user => {
    return normalizeText(`${user.firstName} ${user.lastName}`).includes(searchTerm);
  });
}

function renderSearchResult(users) {
  elements.list.innerHTML = "";

  if (users.length === 0) {
    showEmptySearch();
    return;
  }

  elements.list.innerHTML = users
    .map(user => `<li>${user.firstName} ${user.lastName} — ${user.email}</li>`)
    .join("");
}

function normalizeText(text) {
  return text.trim().toLowerCase();
}

function showEmptySearch() {
  elements.status.textContent = "Nenhum usuário encontrado para essa busca.";
}

function clearFeedback() {
  elements.status.textContent = "";
}
```

## Explicação passo a passo

1. `initSearch` recebe os usuários já carregados e guarda em `originalUsers`.
2. O evento `input` é registrado uma vez.
3. A cada alteração no campo, `handleSearchInput` normaliza o texto.
4. Se o campo estiver vazio, a lista original volta para a tela.
5. Se houver termo, `filterUsersByName` cria uma nova lista filtrada.
6. `renderSearchResult` decide se renderiza itens ou mostra estado vazio.
7. `clearFeedback` remove mensagens antigas antes de cada nova busca.

## Busca sem resultado não é erro técnico

Se o usuário digita um nome que não existe, a aplicação não falhou. A busca funcionou e retornou zero resultados. Por isso, o estado correto é vazio, não erro.

## Erros comuns

- Usar `fetch` dentro do evento `input` sem necessidade.
- Fazer `originalUsers = originalUsers.filter(...)` e perder a fonte original.
- Esquecer `trim()` e criar resultados estranhos com espaços.
- Esquecer `toLowerCase()` e tornar a busca sensível a maiúsculas.
- Mostrar mensagem de erro quando a busca apenas não encontrou itens.
- Não limpar uma mensagem de vazio quando o usuário apaga o campo.

## Checklist de conclusão

- [ ] A busca usa evento `input`.
- [ ] A diferença entre `input` e `keyup` está clara.
- [ ] Não existe nova requisição a cada tecla.
- [ ] O termo é normalizado com `trim()` e `toLowerCase()`.
- [ ] A lista original é preservada.
- [ ] A lista filtrada é derivada da original.
- [ ] Busca sem resultado mostra estado vazio.
- [ ] Mensagens antigas são limpas antes de novo resultado.
- [ ] A função de filtro não mexe no DOM.
- [ ] A função de renderização não busca dados.
