# Renderizando dados no DOM

Renderizar dados é transformar a resposta da API em informação visível na página. O foco deve ser atualizar elementos específicos, sem criar uma estrutura complexa.

## Exemplo de card

```html
<h2 id="nome"></h2>
<p id="email"></p>
<p id="cidade"></p>
```

```js
function renderizarUsuario(usuario) {
  nome.textContent = `${usuario.firstName} ${usuario.lastName}`;
  email.textContent = usuario.email;
  cidade.textContent = usuario.address.city;
}
```

## Por que usar textContent

`textContent` é suficiente para inserir textos simples e evita montar HTML desnecessário.

## Limpando antes de renderizar

```js
function limparUsuario() {
  nome.textContent = "";
  email.textContent = "";
  cidade.textContent = "";
}
```

Limpar evita mostrar dados antigos durante uma nova busca.

## Erros comuns

- Renderizar antes dos dados chegarem.
- Usar campos que podem não existir sem verificar.
- Misturar fetch dentro da função de renderização.

## Boa prática

A função de renderização deve receber dados prontos e apenas atualizar o DOM.

## Exercício rápido

Crie uma função que recebe um objeto de usuário e preenche três elementos: nome, e-mail e cidade.
