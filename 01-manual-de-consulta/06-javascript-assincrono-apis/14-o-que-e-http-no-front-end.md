# O que é HTTP no Front-end

HTTP é o protocolo usado pelo navegador para conversar com servidores. No consumo de API, ele define como o pedido sai e como a resposta volta.

## Cliente e servidor

No nosso caso, o cliente é o navegador executando JavaScript. O servidor é o sistema que recebe o pedido e responde com dados.

## Foco em GET

O método `GET` é usado para buscar informações.

```js
fetch("https://dummyjson.com/posts");
```

Esse pedido significa: "quero ler dados deste endereço".

## Status HTTP

A resposta vem com um status. Alguns exemplos:

- `200`: pedido bem-sucedido;
- `404`: recurso não encontrado;
- `500`: erro no servidor;
- `401` ou `403`: acesso não autorizado ou proibido.

Nesta fase, não implementamos autenticação. Se uma API exige credencial secreta, ela não é adequada para os exemplos.

## Corpo da resposta

Além do status, uma resposta pode ter corpo com dados, geralmente em JSON.

## Erros comuns

- Achar que qualquer resposta recebida significa sucesso.
- Ignorar o status e tentar renderizar dados inexistentes.
- Entrar em detalhes de backend antes de dominar o pedido GET no Front-end.

## Boa prática

Para cada requisição, identifique URL, método, status esperado e formato do corpo antes de escrever a renderização.

## Exercício rápido

Analise uma URL de API pública e escreva: método usado, objetivo do pedido e status esperado em caso de sucesso.
