# Comparando then/catch com async/await

`.then/.catch` e `async/await` trabalham com Promises. A diferença principal está na forma de leitura do fluxo.

## Mesmo exemplo com then/catch

```js
function carregarUsuario() {
  loading.hidden = false;

  fetch("https://dummyjson.com/users/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Falha HTTP");
      }

      return response.json();
    })
    .then((usuario) => {
      nome.textContent = usuario.firstName;
    })
    .catch((erro) => {
      mensagem.textContent = "Não foi possível carregar.";
      console.error(erro);
    })
    .finally(() => {
      loading.hidden = true;
    });
}
```

## Mesmo exemplo com async/await

```js
async function carregarUsuario() {
  loading.hidden = false;

  try {
    const response = await fetch("https://dummyjson.com/users/1");

    if (!response.ok) {
      throw new Error("Falha HTTP");
    }

    const usuario = await response.json();
    nome.textContent = usuario.firstName;
  } catch (erro) {
    mensagem.textContent = "Não foi possível carregar.";
    console.error(erro);
  } finally {
    loading.hidden = true;
  }
}
```

## Quando cada estilo é legível

`.then/.catch` pode ser bom para cadeias curtas e transformações simples. `async/await` costuma ficar mais claro quando há várias etapas com validação, conversão, renderização e loading.

## Não existe vencedor absoluto

O objetivo é legibilidade. Em um time, mantenha consistência. Em estudos, pratique os dois para reconhecer código em projetos diferentes.

## Exercício rápido

Escreva uma busca simples nas duas versões e destaque onde ficam: validação de status, conversão JSON, renderização e tratamento de erro.
