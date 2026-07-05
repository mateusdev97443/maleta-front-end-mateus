# Modelo de análise de requisição

Este modelo serve para analisar uma requisição antes de implementar o código com `fetch`, `async/await` ou qualquer integração com API.

Em projetos profissionais, um dev não deve começar direto pelo código. Primeiro ele precisa entender o endpoint, o método HTTP, os dados enviados, os dados recebidos, os possíveis erros e o comportamento esperado da interface.

## Objetivo da requisição

Antes de escrever o código, responda:

- O que essa requisição precisa fazer?
- Ela busca dados?
- Ela cadastra alguma informação?
- Ela atualiza algo existente?
- Ela remove algum recurso?
- Qual parte da interface depende dessa resposta?
- O usuário precisa ver loading?
- O usuário precisa receber mensagem de sucesso ou erro?

Exemplo de objetivo:

```text
Buscar informações de um usuário do GitHub e exibir nome, foto, bio e link do perfil na tela.
```

Um objetivo claro evita código confuso e ajuda a separar responsabilidades.

## Endpoint

O endpoint é o endereço usado para acessar o recurso da API.

Exemplo:

```text
https://api.github.com/users/octocat
```

Antes de usar um endpoint, confirme:

- A URL está correta.
- O endpoint existe.
- O endpoint foi testado no navegador, Postman, Insomnia ou outra ferramenta.
- Ele retorna dados no formato esperado.
- Ele exige parâmetros.
- Ele exige autenticação.
- Ele possui limite de uso.
- Ele pode retornar erro.

Exemplo em JavaScript:

```javascript
const url = "https://api.github.com/users/octocat";
```

Cuidado profissional: uma URL errada pode gerar erro 404, tela vazia ou comportamento confuso para o usuário.

## Método HTTP

O método HTTP indica a intenção da requisição.

Principais métodos:

- `GET`: buscar dados.
- `POST`: criar dados.
- `PUT`: substituir dados.
- `PATCH`: atualizar parte dos dados.
- `DELETE`: remover dados.

Exemplo de análise:

```text
Método: GET
Motivo: a tela precisa apenas buscar informações de um usuário.
```

Exemplo com `fetch`:

```javascript
const resposta = await fetch("https://api.github.com/users/octocat");
```

Quando o método não é informado, `fetch` usa `GET` por padrão.

## Dados enviados

Nem toda requisição envia dados. Uma busca simples com `GET` geralmente não envia corpo.

Para requisições como `POST`, `PUT` ou `PATCH`, analise:

- Quais dados precisam ser enviados?
- O formato será JSON?
- Os nomes das propriedades estão corretos?
- Existe campo obrigatório?
- Algum dado precisa ser validado antes?
- Algum dado vem de formulário?
- Algum dado não deve ser enviado por segurança?

Exemplo de corpo JSON:

```javascript
const novoUsuario = {
  nome: "Mateus",
  perfil: "Front-end"
};
```

Exemplo de envio:

```javascript
await fetch("https://exemplo.com/usuarios", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(novoUsuario)
});
```

Cuidado: objetos JavaScript precisam ser convertidos com `JSON.stringify()` antes de serem enviados no `body`.

## Dados recebidos

Antes de renderizar a resposta, entenda o formato recebido.

Pergunte:

- A API retorna objeto ou array?
- Quais campos vêm na resposta?
- Algum campo pode vir vazio?
- Algum campo pode vir `null`?
- Existe mensagem de erro no corpo da resposta?
- A resposta realmente é JSON?
- O layout está preparado para dados incompletos?

Exemplo de resposta esperada:

```json
{
  "login": "octocat",
  "name": "The Octocat",
  "bio": "GitHub mascot"
}
```

Exemplo de leitura:

```javascript
const resposta = await fetch("https://api.github.com/users/octocat");
const dados = await resposta.json();

console.log(dados.login);
```

Não renderize dados sem antes entender o formato.

## Status da resposta

Uma requisição pode responder com vários status HTTP.

Exemplos comuns:

- `200`: sucesso.
- `201`: criado com sucesso.
- `400`: requisição inválida.
- `401`: não autorizado.
- `403`: acesso proibido ou limite excedido.
- `404`: não encontrado.
- `500`: erro no servidor.

Com `fetch`, uma resposta 404 não cai automaticamente no `catch`. Por isso, é importante verificar `response.ok`.

```javascript
async function buscarUsuario(usuario) {
  const resposta = await fetch(`https://api.github.com/users/${usuario}`);

  if (!resposta.ok) {
    throw new Error("Usuário não encontrado.");
  }

  return resposta.json();
}
```

Esse cuidado evita que a interface tente usar dados inválidos.

## Estados da interface

A interface precisa responder ao ciclo da requisição.

Analise os estados:

- Antes de buscar.
- Carregando.
- Sucesso.
- Resultado vazio.
- Erro.
- Tentativa novamente.

Exemplo:

```javascript
function mostrarCarregando(elemento) {
  elemento.textContent = "Carregando...";
}

function mostrarErro(elemento) {
  elemento.textContent = "Não foi possível carregar os dados.";
}

function mostrarVazio(elemento) {
  elemento.textContent = "Nenhum resultado encontrado.";
}
```

Uma interface profissional nunca fica parada sem explicar o que está acontecendo.

## Tratamento de erro

Antes de aprovar a integração, defina como lidar com falhas.

Erros possíveis:

- Sem internet.
- Endpoint errado.
- Usuário não encontrado.
- API fora do ar.
- Limite de requisições excedido.
- Resposta em formato inesperado.
- Campo obrigatório vazio.
- Erro de autenticação.

Exemplo:

```javascript
async function executarBusca() {
  const resultado = document.querySelector(".resultado");

  if (!resultado) {
    return;
  }

  resultado.textContent = "Buscando...";

  try {
    const dados = await buscarUsuario("octocat");
    resultado.textContent = dados.name || dados.login;
  } catch (erro) {
    resultado.textContent = "Erro ao buscar usuário. Tente novamente.";
  }
}
```

Cuidado profissional: o usuário não deve ver erro técnico como primeira mensagem. Mostre uma mensagem clara e amigável.

## Segurança e exposição de dados

Ao analisar uma requisição, confirme:

- A chave da API não está exposta no front-end sem necessidade.
- Dados sensíveis não aparecem no console.
- O usuário não consegue enviar conteúdo perigoso sem validação.
- A aplicação não confia cegamente em dados externos.
- Informações privadas não são renderizadas indevidamente.
- Tokens e senhas não são colocados no código público.

Evite:

```javascript
const token = "TOKEN_SECRETO_AQUI";
```

Projetos públicos não devem expor segredos no código.

## Organização do código

Uma integração fica mais fácil de manter quando o código é dividido.

Separação recomendada:

- função para montar URL;
- função para buscar dados;
- função para validar resposta;
- função para renderizar sucesso;
- função para renderizar erro;
- função principal para controlar o fluxo.

Exemplo:

```javascript
function montarUrl(usuario) {
  return `https://api.github.com/users/${usuario}`;
}

async function buscarDados(url) {
  const resposta = await fetch(url);

  if (!resposta.ok) {
    throw new Error("Erro na requisição.");
  }

  return resposta.json();
}
```

Evite colocar toda a lógica dentro de um único evento de clique gigante.

## Modelo pronto de análise

Antes de codar, preencha mentalmente ou no caderno:

```text
Objetivo:
Endpoint:
Método HTTP:
Dados enviados:
Dados recebidos:
Status de sucesso:
Possíveis erros:
Estado de loading:
Mensagem de sucesso:
Mensagem de erro:
Comportamento com resposta vazia:
Validações necessárias:
Riscos de segurança:
Funções necessárias:
```

Exemplo preenchido:

```text
Objetivo: buscar perfil de usuário no GitHub.
Endpoint: https://api.github.com/users/{usuario}
Método HTTP: GET
Dados enviados: nome do usuário pela URL.
Dados recebidos: login, name, avatar_url, bio, html_url.
Status de sucesso: 200.
Possíveis erros: usuário não encontrado, sem internet, limite da API.
Loading: mostrar "Buscando usuário...".
Sucesso: renderizar card do usuário.
Erro: mostrar mensagem amigável.
Resposta vazia: informar que nenhum usuário foi encontrado.
Validações: campo não pode estar vazio.
Riscos: não inserir texto do usuário com innerHTML sem cuidado.
Funções: buscarUsuario, renderizarUsuario, mostrarErro, limparResultado.
```

## Checklist de aprovação

A análise está pronta quando:

- O objetivo da requisição está claro.
- O endpoint foi conferido.
- O método HTTP faz sentido.
- Os dados enviados foram definidos.
- O formato da resposta foi entendido.
- `response.ok` será tratado.
- Os erros principais foram previstos.
- A interface terá loading.
- A interface terá mensagem de erro.
- Resposta vazia não quebrará a tela.
- O código será dividido em funções pequenas.
- Não haverá segredo exposto no front-end.
- Outro dev conseguiria entender a integração.

Se você não consegue explicar a requisição antes de codar, ainda não está pronto para implementá-la.
