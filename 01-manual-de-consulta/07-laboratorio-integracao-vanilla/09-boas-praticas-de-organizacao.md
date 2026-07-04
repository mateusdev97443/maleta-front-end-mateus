# Boas práticas de organização

## Organização não é frescura

Em projetos pequenos, é comum pensar que organização atrasa. Na prática, ela evita que uma tela simples vire um bloco difícil de revisar. O laboratório da Fase 8 trabalha com fluxos pequenos justamente para mostrar que clareza nasce cedo: se o código já começa misturado, qualquer busca, filtro ou detalhe novo aumenta a chance de quebrar tudo.

## Funções pequenas

Função pequena não significa função sem importância. Significa função com uma intenção clara. `fetchUsers` busca dados. `renderUsers` desenha dados. `showError` mostra uma falha. Quando uma função começa a fazer três coisas, ela fica mais difícil de testar mentalmente.

## Nomes claros

Nomes devem explicar o papel da função ou variável. `data` é genérico; `users` é melhor. `doStuff` não informa nada; `applyCityFilter` informa a intenção. Um bom nome reduz comentário desnecessário.

## Separação entre dados, regra e UI

- Dados: a lista original recebida da API.
- Regra: filtro, busca, seleção e validação.
- UI: mensagens, cards, classes e conteúdo no DOM.

Misturar essas camadas cria acoplamento. Uma função de filtro que mexe no DOM não pode ser reaproveitada com facilidade. Uma função de render que chama API fica imprevisível.

## Função de inicialização

Use `init` como ponto de entrada. Ela deve selecionar o fluxo principal: registrar eventos e iniciar carregamento. Isso ajuda qualquer pessoa a abrir o código e descobrir por onde a tela começa.

## Seleção de elementos em lugar previsível

Agrupe seletores em um objeto `elements`. Isso reduz buscas espalhadas e deixa claro quais partes do DOM a tela usa.

```js
const elements = {
  list: document.querySelector("#lista"),
  status: document.querySelector("#status"),
  searchInput: document.querySelector("#busca")
};
```

## Renderização isolada

Renderizar é transformar estado atual em saída visual. Uma função de renderização não deveria decidir quando buscar API. Ela deve receber dados prontos e mostrar esses dados.

## Estado simples

Um objeto simples resolve bem os mini projetos da fase:

```js
const state = {
  users: [],
  filteredUsers: [],
  isLoading: false
};
```

Ele evita variáveis soltas e deixa claro o que a tela precisa lembrar.

## Evitar acoplamento

Acoplamento aparece quando uma função depende de detalhes demais. Se `filterUsers` lê input, altera lista, mostra erro e renderiza cards, ela está acoplada ao DOM e ao estado. Prefira receber valores e retornar resultado.

## Evitar função gigante

### Exemplo ruim

```js
async function start() {
  status.textContent = "Carregando";
  const response = await fetch(url);
  const users = await response.json();
  const filtered = users.filter(user => user.name.includes(input.value));
  list.innerHTML = filtered.map(user => `<li>${user.firstName} ${user.lastName}</li>`).join("");
}
```

### Exemplo melhorado

```js
async function loadUsers() {
  showLoading();
  const users = await fetchUsers();
  renderUsers(users);
}

function filterUsers(users, term) {
  return users.filter(user => `${user.firstName} ${user.lastName}`.toLowerCase().includes(term));
}
```

O segundo exemplo permite revisar busca, filtro e renderização separadamente.

## Ordem sugerida de leitura do código

1. Estado inicial.
2. Seletores do DOM.
3. Função `init`.
4. Eventos registrados.
5. Funções assíncronas.
6. Funções de regra, como filtros.
7. Funções de renderização.
8. Funções de feedback, como loading e erro.

## Checklist de organização

- [ ] Existe uma função de inicialização.
- [ ] Eventos são registrados uma vez.
- [ ] Seletores ficam em lugar previsível.
- [ ] Funções têm nomes claros.
- [ ] Busca de dados não renderiza HTML diretamente.
- [ ] Renderização não faz requisição.
- [ ] Filtros preservam a lista original.
- [ ] Estados visuais são limpos antes de novos estados.
- [ ] Nenhuma função concentra o fluxo inteiro.
- [ ] O código pode ser lido de cima para baixo sem surpresa.
