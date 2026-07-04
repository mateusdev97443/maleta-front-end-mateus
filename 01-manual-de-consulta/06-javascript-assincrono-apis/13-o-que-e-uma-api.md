# O que é uma API

API é uma forma definida de comunicação entre sistemas. No Front-end, normalmente você usa uma API para pedir dados que serão exibidos na tela.

## API no contexto do Front-end

O navegador não precisa saber como o servidor guarda os dados. Ele precisa saber qual URL chamar e qual formato esperar na resposta.

Exemplo de contrato simples:

```txt
Pedido: GET /users/1
Resposta esperada: dados de um usuário
```

## Sem backend próprio nesta fase

Aqui o foco é consumir APIs públicas de demonstração ou simular respostas. Não vamos criar servidor, login, banco de dados ou autenticação real.

## Pensando antes de chamar uma API

Pergunte:

- a API é pública?
- precisa de token?
- posso usar no navegador sem expor segredo?
- quais dados a tela realmente precisa?
- o que faço se a resposta vier vazia?

## Exemplo didático

```js
async function buscarUsuarioPublico() {
  const response = await fetch("https://dummyjson.com/users/1");
  const usuario = await response.json();
  console.log(usuario.firstName);
}
```

## Erros comuns

- Usar API privada diretamente no Front-end.
- Escolher uma API sem verificar se exige chave secreta.
- Buscar muitos dados quando a tela precisa de pouca informação.

## Boa prática

Trate a API como um contrato: o Front-end pede algo específico e prepara a interface para sucesso, erro e ausência de dados.

## Exercício rápido

Escolha uma tela simples, como card de usuário, e escreva quais campos a API precisaria devolver para essa tela funcionar.
