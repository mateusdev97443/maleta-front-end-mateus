# Erros reais de integração

## 1. Async fora de ordem

### Problema

Uma resposta antiga chega depois de uma ação mais recente e sobrescreve a tela atual. Em uma tela pequena isso já confunde o usuário; em uma tela com busca, filtro e detalhe, o problema fica mais difícil de rastrear.

### Por que acontece

Isso acontece porque várias ações assíncronas são disparadas sem controle de carregamento ou identificação da última requisição. Normalmente o código parece funcionar no primeiro teste, mas quebra quando a ação é repetida ou quando a API demora.

### Exemplo do erro

```js
loadUsers();
loadUsers();
```

### Correção

```js
if (isLoading) return;
isLoading = true;
await loadUsers();
isLoading = false;
```

### Como evitar

Bloqueie ações durante loading ou guarde um identificador da requisição atual. Revise o fluxo perguntando qual estado visual deve existir antes, durante e depois da ação.

## 2. Render duplicado

### Problema

A lista mostra itens repetidos depois de recarregar ou filtrar. Em uma tela pequena isso já confunde o usuário; em uma tela com busca, filtro e detalhe, o problema fica mais difícil de rastrear.

### Por que acontece

Isso acontece porque o código adiciona HTML novo sem remover o resultado anterior. Normalmente o código parece funcionar no primeiro teste, mas quebra quando a ação é repetida ou quando a API demora.

### Exemplo do erro

```js
list.innerHTML += card;
```

### Correção

```js
list.innerHTML = cards.join("");
```

### Como evitar

Trate renderização como substituição do estado visual, não como acúmulo sem controle. Revise o fluxo perguntando qual estado visual deve existir antes, durante e depois da ação.

## 3. Estado quebrado

### Problema

Loading, erro, vazio e sucesso aparecem misturados. Em uma tela pequena isso já confunde o usuário; em uma tela com busca, filtro e detalhe, o problema fica mais difícil de rastrear.

### Por que acontece

Isso acontece porque cada função altera um pedaço da tela e ninguém limpa o estado anterior. Normalmente o código parece funcionar no primeiro teste, mas quebra quando a ação é repetida ou quando a API demora.

### Exemplo do erro

```js
showLoading();
showError("Falhou");
```

### Correção

```js
clearUI();
showError("Falhou");
```

### Como evitar

Crie uma rotina de limpeza antes de toda transição importante de estado. Revise o fluxo perguntando qual estado visual deve existir antes, durante e depois da ação.

## 4. DOM inconsistente

### Problema

O javascript tenta alterar um elemento que não existe. Em uma tela pequena isso já confunde o usuário; em uma tela com busca, filtro e detalhe, o problema fica mais difícil de rastrear.

### Por que acontece

Isso acontece porque o seletor não corresponde ao HTML conceitual ou a área ainda não foi criada. Normalmente o código parece funcionar no primeiro teste, mas quebra quando a ação é repetida ou quando a API demora.

### Exemplo do erro

```js
document.querySelector("#cards").innerHTML = html;
```

### Correção

```js
const list = document.querySelector("#lista");
if (!list) return;
list.innerHTML = html;
```

### Como evitar

Use nomes previsíveis e confira os elementos necessários no início. Revise o fluxo perguntando qual estado visual deve existir antes, durante e depois da ação.

## 5. Variável global bagunçada

### Problema

Qualquer função altera dados centrais sem intenção clara. Em uma tela pequena isso já confunde o usuário; em uma tela com busca, filtro e detalhe, o problema fica mais difícil de rastrear.

### Por que acontece

Isso acontece porque muitas variáveis soltas passam a ser modificadas em vários pontos. Normalmente o código parece funcionar no primeiro teste, mas quebra quando a ação é repetida ou quando a API demora.

### Exemplo do erro

```js
users = [];
users = users.filter(match);
```

### Correção

```js
const state = { users: [], filteredUsers: [] };
state.filteredUsers = state.users.filter(match);
```

### Como evitar

Agrupe estado simples e defina quais funções podem alterar cada parte. Revise o fluxo perguntando qual estado visual deve existir antes, durante e depois da ação.

## 6. Filtro alterando lista original

### Problema

Limpar filtro não recupera todos os itens. Em uma tela pequena isso já confunde o usuário; em uma tela com busca, filtro e detalhe, o problema fica mais difícil de rastrear.

### Por que acontece

Isso acontece porque o resultado filtrado substitui a fonte original de dados. Normalmente o código parece funcionar no primeiro teste, mas quebra quando a ação é repetida ou quando a API demora.

### Exemplo do erro

```js
users = users.filter(user => user.name.includes(term));
```

### Correção

```js
const filteredUsers = users.filter(user => user.name.includes(term));
```

### Como evitar

Considere a lista original como fonte de verdade para filtros locais. Revise o fluxo perguntando qual estado visual deve existir antes, durante e depois da ação.

## 7. Loading que não some

### Problema

A interface fica eternamente carregando após sucesso ou erro. Em uma tela pequena isso já confunde o usuário; em uma tela com busca, filtro e detalhe, o problema fica mais difícil de rastrear.

### Por que acontece

Isso acontece porque o código mostra loading, mas não define saída para todos os caminhos. Normalmente o código parece funcionar no primeiro teste, mas quebra quando a ação é repetida ou quando a API demora.

### Exemplo do erro

```js
showLoading();
await fetchUsers();
renderUsers(users);
```

### Correção

```js
showLoading();
try { renderUsers(await fetchUsers()); } finally { hideLoading(); }
```

### Como evitar

Use `finally` ou uma função de estado que sempre substitua o loading. Revise o fluxo perguntando qual estado visual deve existir antes, durante e depois da ação.

## 8. Erro antigo permanecendo na tela

### Problema

Uma mensagem de falha continua visível após uma nova tentativa bem-sucedida. Em uma tela pequena isso já confunde o usuário; em uma tela com busca, filtro e detalhe, o problema fica mais difícil de rastrear.

### Por que acontece

Isso acontece porque a nova operação renderiza sucesso sem limpar feedback anterior. Normalmente o código parece funcionar no primeiro teste, mas quebra quando a ação é repetida ou quando a API demora.

### Exemplo do erro

```js
showError("Falhou");
renderUsers(users);
```

### Correção

```js
clearFeedback();
renderUsers(users);
```

### Como evitar

Limpe mensagens no começo da tentativa e antes de renderizar sucesso. Revise o fluxo perguntando qual estado visual deve existir antes, durante e depois da ação.

## 9. Evento registrado mais de uma vez

### Problema

Um único clique executa a mesma função várias vezes. Em uma tela pequena isso já confunde o usuário; em uma tela com busca, filtro e detalhe, o problema fica mais difícil de rastrear.

### Por que acontece

Isso acontece porque o listener é adicionado dentro de renderizações ou funções chamadas repetidamente. Normalmente o código parece funcionar no primeiro teste, mas quebra quando a ação é repetida ou quando a API demora.

### Exemplo do erro

```js
function render() { button.addEventListener("click", loadUsers); }
```

### Correção

```js
function init() { button.addEventListener("click", loadUsers); }
```

### Como evitar

Registre eventos em `init` ou garanta que o registro ocorra apenas uma vez. Revise o fluxo perguntando qual estado visual deve existir antes, durante e depois da ação.

## 10. Função gigante que faz tudo

### Problema

Uma função busca, filtra, valida, renderiza e controla estado ao mesmo tempo. Em uma tela pequena isso já confunde o usuário; em uma tela com busca, filtro e detalhe, o problema fica mais difícil de rastrear.

### Por que acontece

Isso acontece porque o fluxo cresceu sem separação de responsabilidades. Normalmente o código parece funcionar no primeiro teste, mas quebra quando a ação é repetida ou quando a API demora.

### Exemplo do erro

```js
async function start() { /* 80 linhas misturadas */ }
```

### Correção

```js
async function loadUsers() { const users = await fetchUsers(); renderUsers(users); }
```

### Como evitar

Divida por intenção: buscar, processar, renderizar e mostrar feedback. Revise o fluxo perguntando qual estado visual deve existir antes, durante e depois da ação.

## 11. Buscar API de novo sem necessidade

### Problema

Cada tecla ou filtro dispara uma requisição externa. Em uma tela pequena isso já confunde o usuário; em uma tela com busca, filtro e detalhe, o problema fica mais difícil de rastrear.

### Por que acontece

Isso acontece porque o filtro local é confundido com busca remota. Normalmente o código parece funcionar no primeiro teste, mas quebra quando a ação é repetida ou quando a API demora.

### Exemplo do erro

```js
input.addEventListener("input", () => fetch(url));
```

### Correção

```js
input.addEventListener("input", () => renderUsers(filterUsers(users)));
```

### Como evitar

Depois de carregar dados estáveis, derive resultados localmente. Revise o fluxo perguntando qual estado visual deve existir antes, durante e depois da ação.

## 12. Esquecer de limpar resultado anterior

### Problema

A tela mistura cards antigos com mensagens novas. Em uma tela pequena isso já confunde o usuário; em uma tela com busca, filtro e detalhe, o problema fica mais difícil de rastrear.

### Por que acontece

Isso acontece porque o código muda só a parte nova e deixa sobras visuais. Normalmente o código parece funcionar no primeiro teste, mas quebra quando a ação é repetida ou quando a API demora.

### Exemplo do erro

```js
showEmpty(); // lista antiga continua
```

### Correção

```js
clearUI();
showEmpty();
```

### Como evitar

Antes de vazio, erro ou sucesso, remova o que não pertence ao estado atual. Revise o fluxo perguntando qual estado visual deve existir antes, durante e depois da ação.
