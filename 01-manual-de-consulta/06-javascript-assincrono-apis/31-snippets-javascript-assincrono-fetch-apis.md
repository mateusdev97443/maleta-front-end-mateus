# Snippets JavaScript assíncrono, Fetch e APIs

## Fetch básico

Quando usar: para fazer uma requisição GET simples.

```js
fetch("https://dummyjson.com/users/1")
  .then((response) => response.json())
  .then((user) => console.log(user.name));
```

Explicação: `fetch` retorna uma Promise e `response.json()` converte o corpo da resposta. Cuidado comum: achar que `fetch` já devolve o objeto final.

## Fetch com async/await

Quando usar: quando o fluxo fica mais legível em passos sequenciais.

```js
async function carregarUsuario() {
  const response = await fetch("https://dummyjson.com/users/1");
  const user = await response.json();
  console.log(user.name);
}
```

Explicação: `await` aguarda cada Promise dentro de uma função `async`. Cuidado comum: usar `await` fora de função adequada.

## Tratamento de status HTTP

Quando usar: sempre que a resposta precisa ser validada.

```js
if (!response.ok) {
  throw new Error(`Erro HTTP: ${response.status}`);
}
```

Explicação: status como 404 ainda podem chegar como resposta. Cuidado comum: tratar apenas erro de rede.

## try/catch/finally

Quando usar: para organizar sucesso, falha e encerramento visual.

```js
try {
  const dados = await buscarDados();
  renderizar(dados);
} catch (erro) {
  mostrarErro("Não foi possível carregar.");
} finally {
  esconderLoading();
}
```

Explicação: `finally` executa em sucesso ou falha. Cuidado comum: deixar loading preso.

## Loading simples

Quando usar: em qualquer espera perceptível.

```js
loading.hidden = false;
const response = await fetch(url);
loading.hidden = true;
```

Explicação: o usuário entende que a ação começou. Cuidado comum: esconder loading só no sucesso.

## Botão desabilitado durante requisição

Quando usar: para evitar cliques duplicados.

```js
botao.disabled = true;
try {
  await carregarDados();
} finally {
  botao.disabled = false;
}
```

Explicação: protege contra requisições repetidas. Cuidado comum: não reabilitar o botão após erro.

## Renderização de lista

Quando usar: quando a API retorna array.

```js
lista.innerHTML = "";
dados.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item.name;
  lista.appendChild(li);
});
```

Explicação: limpa o resultado anterior antes de renderizar. Cuidado comum: duplicar itens a cada clique.

## Mensagem de erro

Quando usar: quando a busca falha ou retorna algo inesperado.

```js
mensagem.textContent = "Não conseguimos carregar os dados agora.";
mensagem.classList.add("erro");
```

Explicação: a mensagem deve ser humana. Cuidado comum: exibir stack trace para usuário.

## Função separada para buscar dados

Quando usar: para tirar o fetch de dentro do evento.

```js
async function buscarUsuarios() {
  const response = await fetch("https://dummyjson.com/users");
  if (!response.ok) throw new Error("Falha na busca");
  return await response.json();
}
```

Explicação: facilita reaproveitar e testar manualmente. Cuidado comum: misturar DOM dentro da função de busca.

## Função separada para renderizar dados

Quando usar: para centralizar atualização visual.

```js
function renderizarUsuarios(usuarios) {
  lista.innerHTML = "";
  usuarios.forEach((usuario) => {
    const item = document.createElement("li");
    item.textContent = usuario.name;
    lista.appendChild(item);
  });
}
```

Explicação: recebe dados prontos e cuida apenas da tela. Cuidado comum: fazer nova requisição dentro da renderização.

## Filtro local simples

Quando usar: quando os dados já foram carregados.

```js
const termo = campoBusca.value.trim().toLowerCase();
const filtrados = usuarios.filter((usuario) =>
  usuario.name.toLowerCase().includes(termo)
);
renderizarUsuarios(filtrados);
```

Explicação: evita chamar a API sem necessidade. Cuidado comum: perder a lista original.
