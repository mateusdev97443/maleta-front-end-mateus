# try/catch com async/await

Quando uma Promise aguardada com `await` rejeita, o erro pode ser capturado com `try/catch`. Esse padrão deixa o fluxo de sucesso e falha próximos e legíveis.

## Capturando falha em await

```js
async function carregarUsuario() {
  try {
    const response = await fetch("https://dummyjson.com/users/1");
    const usuario = await response.json();
    nome.textContent = usuario.firstName;
  } catch (erro) {
    mensagem.textContent = "Não foi possível carregar o usuário.";
    console.error(erro);
  }
}
```

A mensagem do usuário é simples. O `console.error` fica para depuração do desenvolvedor.

## Usando finally

```js
async function carregarComLoading() {
  loading.hidden = false;

  try {
    const dados = await buscarDados();
    renderizar(dados);
  } catch (erro) {
    mostrarErro("Tente novamente em instantes.");
    console.error(erro);
  } finally {
    loading.hidden = true;
  }
}
```

`finally` evita que o loading fique preso quando ocorre erro.

## Importante sobre status HTTP

`try/catch` captura erro de rede e Promises rejeitadas. Para status como 404, você deve verificar `response.ok` e lançar erro manualmente.

## Erros comuns

- Colocar apenas `console.error` e não avisar o usuário.
- Esconder o erro do usuário, deixando a tela sem resposta.
- Remover loading só dentro do `try`, esquecendo o caminho de erro.

## Boa prática

Use três camadas: mensagem amigável para usuário, log técnico no console e limpeza visual no `finally`.

## Exercício rápido

Crie uma função `async` que tenta buscar uma URL, mostra erro amigável no `catch` e sempre esconde o loading no `finally`.
