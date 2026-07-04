# then, catch e finally

`.then`, `.catch` e `.finally` são métodos usados para consumir Promises. Cada um tem um papel claro no fluxo.

## Quando entra no then

`.then` executa quando a Promise resolve com sucesso.

```js
buscarNome()
  .then((nome) => {
    titulo.textContent = nome;
  });
```

## Quando entra no catch

`.catch` executa quando a Promise rejeita ou quando um erro acontece em algum `.then` anterior.

```js
buscarNome()
  .then((nome) => renderizar(nome))
  .catch(() => {
    mensagem.textContent = "Não foi possível carregar o nome.";
  });
```

## Quando entra no finally

`.finally` executa no sucesso e na falha. Ele é ótimo para encerrar loading.

```js
loading.hidden = false;

buscarNome()
  .then(renderizar)
  .catch(mostrarErro)
  .finally(() => {
    loading.hidden = true;
  });
```

## Erro comum: esquecer return

```js
fetch(url)
  .then((response) => {
    response.json(); // erro: faltou return
  })
  .then((dados) => {
    console.log(dados); // undefined
  });
```

Correção:

```js
fetch(url)
  .then((response) => response.json())
  .then((dados) => console.log(dados));
```

## Boa prática

Use `.finally` para restaurar estado visual, não para processar dados. Dados pertencem ao `.then`; erros pertencem ao `.catch`.

## Exercício rápido

Monte uma Promise simulada com loading visível, mensagem de sucesso no `.then`, erro no `.catch` e limpeza no `.finally`.
