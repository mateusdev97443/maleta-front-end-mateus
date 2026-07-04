# Projeto 3: detalhe dinâmico

## Objetivo do mini projeto

Este mini projeto ensina a selecionar um item da lista e mostrar um painel de detalhe. O foco é entender que uma interface pode ter duas regiões relacionadas, mas com responsabilidades diferentes: a lista apresenta opções; o detalhe apresenta informações do item escolhido.

## Lista e detalhe são responsabilidades diferentes

A lista responde à pergunta: “quais itens estão disponíveis?”. O detalhe responde à pergunta: “o que sei sobre o item selecionado?”. Misturar essas duas respostas em uma função só deixa o código rígido e difícil de evoluir.

Um bom fluxo é:

```text
renderizar lista → usuário clica → capturar id → encontrar item → destacar selecionado → renderizar detalhe
```

## Como capturar o item escolhido

Em exemplos didáticos, o `id` pode ser guardado em um atributo `data-*` dentro do item clicável. O atributo `data-user-id` deixa claro que aquele elemento visual representa um usuário específico.

## Estado inicial do painel

Antes de qualquer clique, o painel de detalhe não deve ficar quebrado ou vazio sem explicação. Ele pode mostrar uma instrução como: “Selecione um usuário para ver os detalhes”. Isso também ajuda o estudante a pensar em estado inicial, não apenas em estado após clique.

## Exemplo de código didático

```js
const elements = {
  list: document.querySelector("#lista-usuarios"),
  detail: document.querySelector("#detalhe-usuario")
};

let users = [];
let selectedUserId = null;

function initDetail(initialUsers) {
  users = initialUsers;
  renderUserList(users);
  renderInitialDetail();
  elements.list.addEventListener("click", handleListClick);
}

function renderUserList(usersToRender) {
  elements.list.innerHTML = usersToRender
    .map(user => {
      const isSelected = user.id === selectedUserId;
      const selectedClass = isSelected ? "is-selected" : "";

      return `
        <button class="user-item ${selectedClass}" data-user-id="${user.id}">
          ${user.firstName} ${user.lastName}
        </button>
      `;
    })
    .join("");
}

function handleListClick(event) {
  const button = event.target.closest("[data-user-id]");

  if (!button) {
    return;
  }

  const userId = Number(button.dataset.userId);
  selectUser(userId);
}

function selectUser(userId) {
  const user = users.find(currentUser => currentUser.id === userId);

  if (!user) {
    renderMissingUserDetail();
    return;
  }

  selectedUserId = user.id;
  renderUserList(users);
  renderUserDetail(user);
}

function renderInitialDetail() {
  elements.detail.innerHTML = "<p>Selecione um usuário para ver os detalhes.</p>";
}

function renderMissingUserDetail() {
  elements.detail.innerHTML = "<p>Usuário não encontrado.</p>";
}

function renderUserDetail(user) {
  elements.detail.innerHTML = `
    <article>
      <h2>${user.firstName} ${user.lastName}</h2>
      <p><strong>E-mail:</strong> ${user.email}</p>
      <p><strong>Telefone:</strong> ${user.phone}</p>
      <p><strong>Cidade:</strong> ${user.address.city}</p>
    </article>
  `;
}
```

## Explicação do fluxo

`initDetail` recebe os dados, renderiza a lista, mostra o detalhe inicial e registra o clique. O listener fica na lista, e não em cada item individual, o que simplifica a renderização.

`handleListClick` usa `closest` para encontrar um elemento com `data-user-id`. Isso evita quebrar o código quando o clique acontece em um texto interno do botão.

`selectUser` transforma o `id` em objeto real. Se não encontrar o usuário, o detalhe mostra uma mensagem específica. Se encontrar, atualiza `selectedUserId`, redesenha a lista com destaque e renderiza o detalhe.

## Destaque visual do selecionado

O destaque do item selecionado deve ser consequência do estado `selectedUserId`. A classe `is-selected` não deve ser aplicada manualmente em vários lugares. Quando a lista renderiza, ela compara cada usuário com o selecionado e decide a classe.

## Erros comuns

- Renderizar o detalhe dentro da função que monta a lista.
- Usar índice do array como identidade quando existe `id` estável.
- Não tratar clique fora do botão.
- Não tratar item inexistente.
- Registrar evento em cada botão a cada renderização.
- Deixar o painel de detalhe sem estado inicial.

## Checklist de conclusão

- [ ] A lista e o detalhe possuem funções separadas.
- [ ] O item selecionado é identificado por `id`.
- [ ] O exemplo usa `data-user-id` de forma didática.
- [ ] Clique fora de item é ignorado com segurança.
- [ ] Item inexistente é tratado no detalhe.
- [ ] Existe estado inicial para o painel de detalhe.
- [ ] O item selecionado recebe destaque visual.
- [ ] O clique não recria lógica desnecessária de busca.
- [ ] O listener não é registrado repetidamente.
