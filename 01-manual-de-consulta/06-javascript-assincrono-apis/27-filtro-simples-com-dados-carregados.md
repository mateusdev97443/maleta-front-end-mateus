# Filtro simples com dados carregados

Filtro local usa dados que já estão na memória para exibir apenas uma parte da lista. Ele é útil para critérios simples, como cidade, categoria ou identificador.

## Exemplo por cidade

```js
function filtrarPorCidade(cidadeEscolhida) {
  const cidadeNormalizada = cidadeEscolhida.trim().toLowerCase();

  const filtrados = usuariosCarregados.filter((usuario) =>
    usuario.address.city.toLowerCase().includes(cidadeNormalizada)
  );

  renderizarUsuarios(filtrados);
}
```

## Diferença para busca

Busca geralmente usa texto livre. Filtro costuma usar critério definido, como cidade igual a um valor, status ou categoria.

## Estado simples

```js
let usuariosCarregados = [];
```

Esse estado é suficiente para a fase. Não é necessário criar gerenciamento avançado.

## Erros comuns

- Fazer `fetch` novamente a cada filtro sem necessidade.
- Filtrar uma lista que já estava filtrada e perder itens.
- Não oferecer botão para limpar filtro.

## Boa prática

Sempre filtre a partir da lista original carregada. Para limpar, renderize novamente a lista completa.

## Exercício rápido

Crie um filtro por cidade e um botão "Limpar filtro" que volta a mostrar todos os usuários carregados.
