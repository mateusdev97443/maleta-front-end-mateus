# Snippets do laboratório

## Fetch padrão
Quando usar: carregar dados de API pública sem token.
```js
async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Erro ${response.status}`);
  return response.json();
}
```
Explicação: valida a resposta antes de converter. Cuidado comum: chamar `json()` antes de checar status.

## Render padrão
Quando usar: transformar array em lista visual.
```js
function renderItems(items) { list.innerHTML = items.map(item => `<li>${item.name}</li>`).join(""); }
```
Explicação: uma renderização substitui a anterior. Cuidado comum: duplicar com `+=`.

## Loader padrão
Quando usar: operação assíncrona iniciada.
```js
function showLoading() { status.textContent = "Carregando..."; }
```
Explicação: dá retorno imediato. Cuidado comum: não remover depois.

## Erro padrão
Quando usar: falha de API ou processamento.
```js
function showError(message) { status.textContent = message || "Erro inesperado."; }
```
Explicação: mostra falha compreensível. Cuidado comum: manter erro antigo em nova tentativa.

## Estado vazio
Quando usar: fluxo funcionou, mas não há itens.
```js
function showEmpty() { status.textContent = "Nenhum resultado encontrado."; }
```
Explicação: diferencia ausência de falha. Cuidado comum: tratar vazio como erro.

## Filtro local
Quando usar: dados já carregados.
```js
function filterByName(term) { return users.filter(user => user.name.toLowerCase().includes(term.trim().toLowerCase())); }
```
Explicação: evita nova requisição. Cuidado comum: alterar `users` original.

## Detalhe dinâmico
Quando usar: clique em item da lista.
```js
function renderDetail(item) { detail.innerHTML = `<h2>${item.name}</h2><p>${item.email}</p>`; }
```
Explicação: isola painel de detalhe. Cuidado comum: misturar com render da lista.

## Botão tentar novamente
Quando usar: permitir recuperação após erro.
```js
retryButton.addEventListener("click", loadUsers);
```
Explicação: reaproveita fluxo principal. Cuidado comum: registrar esse evento várias vezes.

## Função de inicialização
Quando usar: ponto de entrada do script.
```js
function init() { retryButton.addEventListener("click", loadUsers); loadUsers(); }
```
Explicação: concentra partida e eventos. Cuidado comum: espalhar inicialização.

## Limpeza de UI
Quando usar: antes de novo estado.
```js
function clearUI() { status.textContent = ""; list.innerHTML = ""; detail.innerHTML = ""; }
```
Explicação: evita mistura visual. Cuidado comum: limpar dados originais junto com o DOM.
