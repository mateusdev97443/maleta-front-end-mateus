# Loading no Front-end

Loading é o feedback visual que informa que uma operação começou e ainda não terminou. Sem ele, o usuário não sabe se deve esperar ou clicar de novo.

## Quando mostrar

Mostre loading quando uma ação depende de tempo: requisição HTTP, simulação com temporizador, leitura de dados ou qualquer operação perceptível.

## Exemplo com texto

```js
async function carregarPosts() {
  status.textContent = "Carregando posts...";

  try {
    const response = await fetch("https://dummyjson.com/posts");
    const dados = await response.json();
    renderizarPosts(dados.posts);
    status.textContent = "Posts carregados.";
  } catch (erro) {
    status.textContent = "Não foi possível carregar os posts.";
  }
}
```

## Exemplo com finally

```js
loading.hidden = false;

try {
  await carregarDados();
} finally {
  loading.hidden = true;
}
```

`finally` garante que o loading desapareça em sucesso ou falha.

## Cuidados de interface

- Não use loading eterno.
- Não apague mensagens importantes sem substituir por outro estado.
- Não confunda loading com erro; são estados diferentes.

## Boa prática

O loading deve começar antes do `await` e terminar depois do fluxo, preferencialmente em `finally`.

## Exercício rápido

Adicione um elemento `span` com "Carregando..." que aparece durante uma busca e some ao final.
