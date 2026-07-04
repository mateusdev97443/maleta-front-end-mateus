# Renderizando listas de resultados

Quando a API retorna vários itens, o Front-end precisa criar uma lista clara, limpar resultados anteriores e tratar lista vazia.

## Exemplo com array

```js
function renderizarUsuarios(usuarios) {
  lista.innerHTML = "";

  if (usuarios.length === 0) {
    lista.textContent = "Nenhum usuário encontrado.";
    return;
  }

  usuarios.forEach((usuario) => {
    const item = document.createElement("li");
    item.textContent = `${usuario.firstName} - ${usuario.email}`;
    lista.appendChild(item);
  });
}
```

## Limpar resultado anterior

Sem limpar a lista, cada clique pode duplicar os itens. A limpeza faz parte da renderização.

## Lista vazia não é erro

Se a busca funcionou, mas não encontrou itens, mostre uma mensagem de vazio. Não use mensagem de falha.

## Erros comuns

- Duplicar itens a cada nova busca.
- Não tratar array vazio.
- Criar HTML grande em string para dados simples.

## Boa prática

Use `createElement` em exemplos didáticos. Isso deixa claro quais elementos são criados e onde entram no DOM.

## Exercício rápido

Renderize uma lista de usuários e teste manualmente chamando a função com array cheio e array vazio.
