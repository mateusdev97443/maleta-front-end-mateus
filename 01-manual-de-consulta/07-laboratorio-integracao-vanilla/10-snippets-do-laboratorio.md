# Snippets do laboratório

## Fetch padrão

### Quando usar

Use quando a tela precisa carregar dados de uma API pública e transformar resposta em objeto JavaScript. Este snippet é uma base de raciocínio, não uma regra rígida para copiar sem pensar.

### Código

```js
async function fetchData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Falha na requisição. Status: ${response.status}.`);
  }

  return response.json();
}
```

### Explicação

A validação vem antes da conversão para JSON. A função não renderiza nada; ela apenas devolve dados ou lança erro.

### Cuidado comum

Misturar `fetch`, mensagem visual e renderização na mesma função.

## Render padrão

### Quando usar

Use quando um array precisa substituir o conteúdo visual atual de uma lista. Este snippet é uma base de raciocínio, não uma regra rígida para copiar sem pensar.

### Código

```js
function renderItems(items) {
  list.innerHTML = items
    .map(item => `<li>${item.name}</li>`)
    .join("");
}
```

### Explicação

A renderização representa o estado atual. Por isso, ela substitui o HTML da lista em vez de acumular itens indefinidamente.

### Cuidado comum

Usar `innerHTML +=` e duplicar conteúdo a cada atualização.

## Loader padrão

### Quando usar

Use no início de uma operação que pode demorar, como chamada de API. Este snippet é uma base de raciocínio, não uma regra rígida para copiar sem pensar.

### Código

```js
function showLoading() {
  status.textContent = "Carregando...";
  reloadButton.disabled = true;
}
```

### Explicação

O loading dá retorno imediato e pode bloquear ações repetidas enquanto a operação está em andamento.

### Cuidado comum

Mostrar loading e esquecer de reabilitar botões no final.

## Erro padrão

### Quando usar

Use quando uma operação falha por status HTTP, rede ou dado inesperado. Este snippet é uma base de raciocínio, não uma regra rígida para copiar sem pensar.

### Código

```js
function showError(message) {
  status.textContent = message || "Não foi possível concluir a ação.";
}
```

### Explicação

A mensagem deve ser clara e permitir próxima ação, como tentar novamente.

### Cuidado comum

Manter erro antigo depois de uma nova tentativa bem-sucedida.

## Estado vazio

### Quando usar

Use quando a operação funcionou, mas não há itens para mostrar. Este snippet é uma base de raciocínio, não uma regra rígida para copiar sem pensar.

### Código

```js
function showEmpty() {
  status.textContent = "Nenhum resultado encontrado.";
}
```

### Explicação

Vazio é resultado válido. Ele não deve ser tratado como falha técnica.

### Cuidado comum

Mostrar erro para busca sem resultado.

## Filtro local

### Quando usar

Use quando os dados já foram carregados e o usuário quer refinar a lista. Este snippet é uma base de raciocínio, não uma regra rígida para copiar sem pensar.

### Código

```js
function filterByName(users, term) {
  const normalizedTerm = term.trim().toLowerCase();
  return users.filter(user =>
    `${user.firstName} ${user.lastName}`.toLowerCase().includes(normalizedTerm)
  );
}
```

### Explicação

A função recebe dados e devolve nova lista. Ela não altera a fonte original.

### Cuidado comum

Fazer nova requisição a cada tecla ou destruir a lista original.

## Detalhe dinâmico

### Quando usar

Use quando o clique em um item deve preencher um painel de detalhes. Este snippet é uma base de raciocínio, não uma regra rígida para copiar sem pensar.

### Código

```js
function renderDetail(user) {
  detail.innerHTML = `<h2>${user.firstName} ${user.lastName}</h2><p>${user.email}</p>`;
}
```

### Explicação

O detalhe é renderizado por uma função própria para não misturar responsabilidades com a lista.

### Cuidado comum

Montar lista e detalhe na mesma função.

## Botão tentar novamente

### Quando usar

Use quando o usuário precisa recuperar uma falha de carregamento. Este snippet é uma base de raciocínio, não uma regra rígida para copiar sem pensar.

### Código

```js
function initRetry() {
  retryButton.addEventListener("click", loadUsers);
}
```

### Explicação

O botão reaproveita o fluxo principal. Ele não deve criar uma versão paralela da busca.

### Cuidado comum

Registrar o evento dentro do `catch` e multiplicar listeners.

## Função de inicialização

### Quando usar

Use como ponto de entrada para registrar eventos e iniciar a tela. Este snippet é uma base de raciocínio, não uma regra rígida para copiar sem pensar.

### Código

```js
function init() {
  searchInput.addEventListener("input", handleSearch);
  retryButton.addEventListener("click", loadUsers);
  loadUsers();
}
```

### Explicação

A inicialização mostra por onde a tela começa e evita eventos espalhados.

### Cuidado comum

Executar registros de evento dentro de funções de render.

## Limpeza de UI

### Quando usar

Use antes de trocar entre loading, erro, vazio e sucesso. Este snippet é uma base de raciocínio, não uma regra rígida para copiar sem pensar.

### Código

```js
function clearUI() {
  status.textContent = "";
  list.innerHTML = "";
  detail.innerHTML = "";
}
```

### Explicação

Limpar a interface impede que estados antigos fiquem visíveis junto com o novo estado.

### Cuidado comum

Limpar também os dados originais por engano.
