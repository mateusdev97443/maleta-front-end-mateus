# Checklist final de JavaScript assíncrono e APIs

Este checklist serve para revisar códigos que usam `fetch`, Promises, `async/await`, carregamento de dados e comunicação com APIs. A meta é evitar telas travadas, erros silenciosos, requisições duplicadas e experiências confusas para o usuário.

Em projetos profissionais, consumir uma API não é apenas “dar fetch e mostrar na tela”. É preciso tratar carregamento, sucesso, erro, dados vazios, resposta inesperada e manutenção do código.

## Antes da requisição

Antes de chamar uma API, confirme:

- A URL da API está correta.
- O endpoint foi testado.
- O método HTTP faz sentido para a ação.
- Os parâmetros necessários foram definidos.
- A interface mostra estado de carregamento.
- O botão pode ser desabilitado durante a requisição.
- O código está preparado para sucesso e erro.
- Existe uma mensagem amigável se algo falhar.
- A tela não fica vazia sem explicação.
- O usuário entende o que está acontecendo.

Exemplo de preparação simples:

```javascript
const botaoBuscar = document.querySelector(".botao-buscar");
const resultado = document.querySelector(".resultado");

function mostrarCarregamento() {
  resultado.textContent = "Carregando dados...";
}
```

Cuidado profissional: se o usuário clica e nada muda na tela, ele pode achar que a aplicação travou.

## Uso correto de async e await

Verifique:

- Funções assíncronas usam `async`.
- `await` está dentro de uma função `async`.
- O código não mistura `then/catch` e `async/await` sem necessidade.
- `try/catch` foi usado para capturar erros.
- O fluxo continua fácil de ler.
- A função tem responsabilidade clara.

Exemplo correto:

```javascript
async function carregarUsuario() {
  try {
    const resposta = await fetch("https://api.github.com/users/octocat");
    const dados = await resposta.json();

    console.log(dados);
  } catch (erro) {
    console.error("Erro ao carregar usuário:", erro);
  }
}
```

Evite código assíncrono sem tratamento:

```javascript
async function carregarUsuario() {
  const resposta = await fetch("https://api.github.com/users/octocat");
  const dados = await resposta.json();
  console.log(dados);
}
```

O segundo exemplo pode quebrar silenciosamente para o usuário se a rede falhar.

## Verificação da resposta

Antes de confiar nos dados, confirme:

- `response.ok` foi verificado.
- Status HTTP foi considerado.
- `response.json()` foi usado apenas quando a resposta é JSON.
- Erros 404, 500 e falhas de rede foram considerados.
- Dados inexistentes não quebram a tela.
- A mensagem de erro é útil para o usuário.

Exemplo profissional:

```javascript
async function buscarUsuario(usuario) {
  const resposta = await fetch(`https://api.github.com/users/${usuario}`);

  if (!resposta.ok) {
    throw new Error("Usuário não encontrado");
  }

  return resposta.json();
}
```

Cuidado: `fetch` só cai no `catch` em erro de rede. Uma resposta 404 ainda pode chegar como resposta válida, por isso `response.ok` é importante.

## Estados da interface

Uma tela profissional deve deixar claro:

- quando está carregando;
- quando carregou com sucesso;
- quando não encontrou dados;
- quando ocorreu erro;
- quando o usuário pode tentar novamente;
- quando uma ação está bloqueada temporariamente.

Exemplo completo:

```javascript
async function executarBusca() {
  resultado.textContent = "Buscando...";
  botaoBuscar.disabled = true;

  try {
    const dados = await buscarUsuario("octocat");
    resultado.textContent = dados.name || dados.login;
  } catch (erro) {
    resultado.textContent = "Não foi possível carregar os dados.";
  } finally {
    botaoBuscar.disabled = false;
  }
}
```

O `finally` é útil porque executa tanto no sucesso quanto no erro.

## Renderização dos dados

Confira:

- Os dados foram validados antes de renderizar.
- Listas vazias têm mensagem amigável.
- Campos ausentes não quebram o layout.
- O HTML gerado é claro.
- Dados externos não são inseridos sem cuidado.
- A interface continua legível com muitos resultados.
- A renderização fica separada da função que busca dados, quando possível.

Exemplo:

```javascript
function renderizarUsuario(usuario) {
  resultado.innerHTML = `
    <article>
      <h2>${usuario.name || usuario.login}</h2>
      <p>${usuario.bio || "Sem biografia cadastrada."}</p>
    </article>
  `;
}
```

Cuidado: ao usar `innerHTML`, nunca insira conteúdo digitado pelo usuário sem tratamento. Em muitos casos, `textContent` é mais seguro.

## Tratamento de dados vazios

APIs reais podem retornar lista vazia, campo ausente ou formato inesperado.

Verifique:

- Existe mensagem para resultado vazio.
- O código testa se a lista tem itens.
- Campos opcionais têm fallback.
- O layout não quebra quando falta imagem, nome ou descrição.
- O usuário não vê `undefined` na tela.

Exemplo:

```javascript
function renderizarLista(itens) {
  if (!itens.length) {
    resultado.textContent = "Nenhum resultado encontrado.";
    return;
  }

  resultado.textContent = `${itens.length} resultado(s) encontrado(s).`;
}
```

## Organização do código

Um código de API fica mais profissional quando separa responsabilidades:

- função para buscar dados;
- função para renderizar dados;
- função para mostrar loading;
- função para mostrar erro;
- função principal para controlar o fluxo.

Exemplo:

```javascript
function mostrarErro() {
  resultado.textContent = "Erro ao carregar. Tente novamente.";
}

function mostrarSucesso(mensagem) {
  resultado.textContent = mensagem;
}
```

Evite colocar busca, tratamento, renderização e evento dentro de uma única função gigante.

## Eventos e chamadas duplicadas

Antes de aprovar:

- O evento foi registrado uma única vez.
- O botão não dispara várias requisições desnecessárias.
- O usuário não consegue enviar a mesma busca repetidamente sem controle.
- O estado do botão volta ao normal no final.
- O código lida com busca vazia.

Exemplo:

```javascript
botaoBuscar.addEventListener("click", () => {
  executarBusca();
});
```

Se a busca depende de um campo, valide antes:

```javascript
const campoUsuario = document.querySelector("#usuario");

if (campoUsuario.value.trim() === "") {
  resultado.textContent = "Digite um usuário para buscar.";
}
```

## Erros que reprovam uma integração

Evite:

- fazer `fetch` sem `try/catch`;
- ignorar `response.ok`;
- deixar botão clicável durante várias requisições;
- não mostrar loading;
- não mostrar erro para o usuário;
- quebrar a tela quando a API retorna vazio;
- misturar toda a lógica em uma função gigante;
- usar dados externos sem validação;
- deixar `console.log` excessivo;
- depender de API instável sem mensagem alternativa;
- mostrar `undefined`, `null` ou erro técnico para o usuário final.

## Checklist de aprovação

A integração está pronta quando:

- A requisição funciona.
- O loading aparece.
- O sucesso renderiza corretamente.
- O erro é tratado.
- O botão não dispara chamadas duplicadas sem controle.
- A API com resposta vazia não quebra a tela.
- O código usa `async/await` com clareza.
- `response.ok` foi considerado.
- A renderização é separada da busca quando possível.
- O usuário entende o que está acontecendo.
- Outro dev conseguiria manter o código.

Se a tela fica parada sem mensagem, a integração ainda não está profissional.
