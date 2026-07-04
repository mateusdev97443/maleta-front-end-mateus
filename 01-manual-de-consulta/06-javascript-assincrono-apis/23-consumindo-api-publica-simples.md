# Consumindo API pública simples

Uma API pública simples permite praticar sem token, sem login e sem backend próprio. Ela deve ser usada apenas como fonte de dados didáticos.

## Escolha segura para estudo

Nesta fase, prefira endpoints abertos de demonstração, sem informações sensíveis e sem autenticação.

## Exemplo com usuários

```js
async function buscarUsuarios() {
  const response = await fetch("https://dummyjson.com/users");

  if (!response.ok) {
    throw new Error("Falha ao buscar usuários");
  }

  const dados = await response.json();
  return dados.users;
}
```

## Renderizando parte dos dados

```js
const usuarios = await buscarUsuarios();
usuarios.forEach((usuario) => {
  console.log(usuario.firstName, usuario.email);
});
```

## Cuidados

- Não coloque chave secreta no código.
- Não dependa de API privada.
- Não use dados reais de pessoas sem necessidade.
- Não construa autenticação nesta fase.

## Boa prática

Antes de usar uma API em exemplo, confirme se ela funciona sem token e se os dados são adequados para estudo.

## Exercício rápido

Busque usuários em uma API pública e exiba primeiro nome e e-mail no console antes de renderizar no DOM.
