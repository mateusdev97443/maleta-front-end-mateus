# Busca simples com dados de API

Busca simples significa encontrar itens por texto em uma lista de dados. Nesta fase, a busca pode acontecer localmente depois que os dados já foram carregados.

## Guardando dados carregados

```js
let usuariosCarregados = [];

async function carregarUsuarios() {
  usuariosCarregados = await buscarUsuarios();
  renderizarUsuarios(usuariosCarregados);
}
```

## Buscando por nome

```js
function buscarPorNome() {
  const termo = campoBusca.value.trim().toLowerCase();

  const encontrados = usuariosCarregados.filter((usuario) => {
    const nome = `${usuario.firstName} ${usuario.lastName}`.toLowerCase();
    return nome.includes(termo);
  });

  renderizarUsuarios(encontrados);
}
```

## Buscar na API ou filtrar localmente?

Se a lista já está carregada e é pequena, filtre localmente. Se a base é grande ou precisa de dados atualizados, uma nova requisição pode fazer sentido, mas isso já exige mais planejamento.

## Erros comuns

- Perder a lista original ao substituir pelos filtrados.
- Não normalizar maiúsculas e minúsculas.
- Mostrar tela vazia sem mensagem.

## Boa prática

Mantenha uma variável com os dados originais e renderize uma lista filtrada sem apagar a origem.

## Exercício rápido

Depois de carregar usuários, implemente um campo que filtra por primeiro nome sem chamar a API novamente.
