# Tratamento de erros em requisições

Tratar erro é preparar a tela para quando a requisição não entrega o resultado esperado. Isso inclui falha de rede, status HTTP de erro e dados em formato inesperado.

## Tipos de falha

- Rede indisponível ou bloqueada.
- Servidor respondeu com status de erro.
- Corpo da resposta não tem os campos esperados.
- Lista veio vazia quando a tela esperava resultados.

## Exemplo seguro

```js
async function buscarUsuarios() {
  const response = await fetch("https://dummyjson.com/users");

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const dados = await response.json();

  if (!Array.isArray(dados.users)) {
    throw new Error("Formato inesperado");
  }

  return dados.users;
}
```

## Mensagem para usuário

```js
try {
  const usuarios = await buscarUsuarios();
  renderizarUsuarios(usuarios);
} catch (erro) {
  mensagem.textContent = "Não conseguimos carregar os usuários agora.";
  console.error(erro);
}
```

## Erros comuns

- Usar somente `console.error` e deixar a tela sem explicação.
- Mostrar detalhes técnicos para o usuário.
- Tratar qualquer falha como se fosse ausência de resultados.

## Boa prática

Separe mensagem humana de log técnico. O usuário precisa de orientação; o desenvolvedor precisa de detalhe para depurar.

## Exercício rápido

Simule uma URL inválida e mostre uma mensagem amigável no DOM, mantendo o erro técnico apenas no console.
