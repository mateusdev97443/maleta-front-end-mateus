# Boas práticas em JavaScript assíncrono

Boas práticas não servem para deixar o código sofisticado. Elas servem para deixar o fluxo previsível quando tempo, rede e usuário estão envolvidos.

## Use nomes claros

Prefira nomes que expliquem ação e resultado.

```js
async function buscarUsuarios() {}
function renderizarUsuarios(usuarios) {}
function mostrarErroCarregamento() {}
```

Evite nomes vagos como `dados`, `coisa` ou `executar` quando a função tem responsabilidade específica.

## Separe responsabilidades

Uma função busca dados. Outra renderiza. Outra mostra erro. Outra controla loading.

```js
async function buscarUsuarios() {
  const response = await fetch("https://dummyjson.com/users");
  if (!response.ok) throw new Error("Falha HTTP");
  const dados = await response.json();
  return dados.users;
}
```

## Use try/catch/finally quando houver await

```js
try {
  const usuarios = await buscarUsuarios();
  renderizarUsuarios(usuarios);
} catch (erro) {
  mostrarErro("Não foi possível carregar usuários.");
  console.error(erro);
} finally {
  definirLoading(false);
}
```

`finally` é especialmente útil para limpar estado visual.

## Valide response.ok

Não confie apenas no fato de a requisição ter respondido.

```js
if (!response.ok) {
  throw new Error(`Status ${response.status}`);
}
```

## Não exponha tokens

Código Front-end é público para quem abre a página. Se uma API precisa de segredo, ela não pertence a exemplos desta fase.

## Não use API privada

Exemplos didáticos devem funcionar para qualquer estudante. API privada, com login ou permissão especial, quebra o estudo e cria risco de segurança.

## Não esconda erro do usuário

O console ajuda o desenvolvedor; a tela precisa ajudar o usuário.

```js
mensagem.textContent = "Não foi possível carregar. Tente novamente.";
console.error(erro);
```

## Limpe estado visual

Antes de nova busca, limpe mensagem antiga ou resultado anterior quando fizer sentido. Depois da busca, restaure botão e loading.

## Mantenha exemplos pequenos

Um bom exemplo ensina uma ideia. Não misture busca, filtro, paginação, autenticação e roteamento em um único bloco.

## Evite abstração avançada

Antes de criar utilitários genéricos, domine o fluxo básico: clicar, carregar, validar, converter, renderizar, tratar erro e finalizar.

## Checklist rápido

- A função assíncrona tem nome claro?
- `response.ok` foi verificado?
- O loading é encerrado no erro?
- O usuário recebe mensagem compreensível?
- O botão volta ao estado normal?
- Lista vazia tem tratamento?
- Nenhum token foi exposto?
