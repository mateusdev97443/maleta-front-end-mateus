# Projeto 1: lista de usuários com API

## Objetivo do mini projeto

O objetivo deste mini projeto conceitual é montar o primeiro fluxo completo de integração da fase: abrir a tela, avisar que os dados estão carregando, buscar usuários em uma API pública, validar a resposta, converter o corpo para JSON, decidir se existe conteúdo para mostrar e renderizar cards na interface.

A proposta não é criar um arquivo executável. O código abaixo é um modelo didático em Markdown para treinar raciocínio de integração com JavaScript vanilla.

## O que o estudante vai treinar

- Organizar uma função de inicialização.
- Buscar dados com `fetch` e `async/await`.
- Validar `response.ok` antes de usar o corpo da resposta.
- Usar `response.status` para mensagens de erro mais úteis.
- Converter a resposta com `response.json()`.
- Diferenciar loading, erro, vazio e sucesso.
- Renderizar cards a partir de um array de objetos.
- Separar busca, tratamento de estado e renderização.

## Elementos conceituais da tela

Uma tela simples desse projeto teria, conceitualmente:

- uma área de status para loading, erro ou vazio;
- uma lista ou grade para cards de usuários;
- um botão de tentar novamente, opcional, para repetir o carregamento;
- uma estrutura visual responsiva para os cards se adaptarem a telas menores.

Esses elementos são citados para orientar o raciocínio. Eles não serão criados como arquivos reais nesta fase.

## Origem dos dados

A origem dos dados é a API pública sem token:

```text
https://dummyjson.com/users?limit=10
```

Ela é útil para estudo porque retorna usuários fictícios dentro da propriedade `users`, com campos como `firstName`, `lastName`, `email`, `phone` e `address.city`.

## Fluxo geral da integração

O fluxo que Mateus deve enxergar é:

```text
iniciar tela → mostrar loading → buscar API → validar response.ok → converter JSON → verificar vazio → renderizar cards → tratar erro → limpar estados antigos
```

A ordem importa. Se a interface não limpa estados antigos, um erro anterior pode continuar aparecendo mesmo depois de uma nova resposta com sucesso. Se o código converte JSON antes de validar a resposta, a mensagem de falha pode ficar confusa. Se o vazio é tratado como erro, o usuário recebe uma mensagem tecnicamente incorreta.

## Estados esperados

- **Loading:** aparece enquanto a requisição está em andamento.
- **Erro:** aparece quando a requisição falha ou retorna status inadequado.
- **Vazio:** aparece quando a requisição funciona, mas a lista não possui itens.
- **Sucesso:** aparece quando existem usuários e os cards são renderizados.

## Separação de funções

Uma divisão saudável para esse mini projeto é:

- `init`: ponto de entrada da tela.
- `loadUsers`: coordena o fluxo completo.
- `fetchUsers`: faz a requisição e retorna dados.
- `renderUsers`: transforma usuários em cards.
- `showLoading`: exibe estado de carregamento.
- `showError`: exibe mensagem de falha.
- `showEmpty`: exibe mensagem de lista vazia.
- `clearUI`: limpa mensagens e resultados antigos.
- `setRetryEnabled`: controla o botão de nova tentativa, se existir.

## Exemplo de código didático

```js
const elements = {
  status: document.querySelector("#status"),
  list: document.querySelector("#lista-usuarios"),
  retryButton: document.querySelector("#tentar-novamente")
};

function init() {
  elements.retryButton.addEventListener("click", loadUsers);
  loadUsers();
}

async function loadUsers() {
  clearUI();
  showLoading();
  setRetryEnabled(false);

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
  } finally {
    setRetryEnabled(true);
  }
}

async function fetchUsers() {
  const response = await fetch("https://dummyjson.com/users?limit=10");

  if (!response.ok) {
    throw new Error(`Não foi possível carregar usuários. Status: ${response.status}.`);
  }

  const data = await response.json();
  return data.users;
}

function renderUsers(users) {
  const cards = users.map(user => {
    return `
      <article class="user-card">
        <h2>${user.firstName} ${user.lastName}</h2>
        <p>${user.email}</p>
        <p>${user.address.city}</p>
      </article>
    `;
  });

  elements.list.innerHTML = cards.join("");
}

function showLoading() {
  elements.status.textContent = "Carregando usuários...";
}

function showError(message) {
  elements.status.textContent = message;
}

function showEmpty() {
  elements.status.textContent = "A API respondeu, mas nenhum usuário foi encontrado.";
}

function clearUI() {
  elements.status.textContent = "";
  elements.list.innerHTML = "";
}

function setRetryEnabled(isEnabled) {
  elements.retryButton.disabled = !isEnabled;
}

init();
```

## Explicação do código por partes

### Inicialização

`init` registra o evento do botão de nova tentativa uma única vez e chama `loadUsers`. Isso impede o erro comum de registrar o mesmo listener várias vezes dentro de funções que rodam repetidamente.

### Coordenação do fluxo

`loadUsers` não deveria montar card diretamente. Ela coordena: limpa a tela, mostra loading, chama a busca, decide se o resultado é vazio, renderiza sucesso ou mostra erro.

### Busca de dados

`fetchUsers` tem uma responsabilidade: conversar com a API. Ela valida `response.ok`, usa `response.status` para uma mensagem melhor e só depois converte com `response.json()`.

### Renderização

`renderUsers` recebe dados prontos. Ela não sabe de loading, não sabe de API e não sabe de erro. Isso deixa a função simples de revisar.

### Estados antigos

`clearUI` aparece antes de loading, antes de sucesso e antes de erro. Essa repetição é intencional: ela evita que mensagens antigas contaminem o estado atual.

## Erros comuns nesse mini projeto

- Chamar `response.json()` sem validar `response.ok`.
- Esquecer de limpar a lista antes de renderizar novamente.
- Mostrar erro quando a lista está vazia, mesmo sem falha técnica.
- Registrar o clique do botão de tentar novamente dentro do `catch`.
- Deixar o botão ativo durante loading e permitir várias requisições simultâneas.
- Fazer a função de renderização buscar dados por conta própria.

## Checklist de conclusão

- [ ] A tela inicia por uma função `init`.
- [ ] O loading aparece antes da requisição.
- [ ] A API usada é pública e sem token.
- [ ] `response.ok` é validado antes de `response.json()`.
- [ ] `response.status` ajuda a explicar falhas.
- [ ] Lista vazia é tratada como vazio, não como erro.
- [ ] Cards são renderizados apenas no sucesso.
- [ ] Mensagens antigas são limpas antes de novo estado.
- [ ] As funções possuem responsabilidades separadas.
- [ ] Não foi criado arquivo real de projeto fora do Markdown.
