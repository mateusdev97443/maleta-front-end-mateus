# Tratando status HTTP

Uma requisição pode receber resposta do servidor e ainda assim indicar problema. Por isso é importante verificar `response.ok` e `response.status`.

## response.ok

`response.ok` é `true` para status de sucesso na faixa 200.

```js
const response = await fetch(url);

if (!response.ok) {
  throw new Error(`Erro HTTP: ${response.status}`);
}
```

## response.status

`response.status` mostra o código numérico da resposta. Ele ajuda a diferenciar situações como não encontrado (`404`) e erro interno (`500`).

## Erro de rede vs status de erro

Erro de rede acontece quando o navegador não consegue completar a requisição. Status HTTP de erro acontece quando o servidor respondeu, mas informou que algo deu errado.

Um `404` pode não cair automaticamente no `catch` do `fetch`, porque houve resposta HTTP. Você precisa lançar erro manualmente se `response.ok` for falso.

## Exemplo completo

```js
async function buscarPost() {
  try {
    const response = await fetch("https://dummyjson.com/posts/999999");

    if (!response.ok) {
      throw new Error(`Status inesperado: ${response.status}`);
    }

    const post = await response.json();
    titulo.textContent = post.title;
  } catch (erro) {
    mensagem.textContent = "Não encontramos o conteúdo solicitado.";
    console.error(erro);
  }
}
```

## Erros comuns

- Confiar nos dados sem verificar status.
- Tratar `404` como lista vazia.
- Mostrar o código técnico como única mensagem ao usuário.

## Boa prática

Valide `response.ok` antes de converter e renderizar. Isso impede que a interface trabalhe com dados de uma resposta inválida.

## Exercício rápido

Faça uma função que lança erro quando `response.ok` for falso e mostra uma mensagem amigável no `catch`.
