# Switch

`switch` é útil quando uma variável deve ser comparada com valores fixos. Ele deixa categorias explícitas.

## Estrutura

```js
const statusPedido = "enviado";

switch (statusPedido) {
  case "pendente":
    console.log("Aguardando pagamento");
    break;
  case "pago":
    console.log("Separar produto");
    break;
  case "enviado":
    console.log("Acompanhar entrega");
    break;
  default:
    console.log("Status desconhecido");
}
```

## Diferença para `if`

Use `switch` para igualdade contra categorias. Use `if` para intervalos, combinações lógicas e comparações como maior ou menor.

## Outros exemplos

```js
const nivelUsuario = "editor";

switch (nivelUsuario) {
  case "admin":
    console.log("Pode gerenciar tudo");
    break;
  case "editor":
    console.log("Pode editar conteúdo");
    break;
  default:
    console.log("Permissão básica");
}
```

## Erros comuns

- Esquecer `break`.
- Repetir lógica que seria mais clara com objeto ou função.
- Usar `switch` para faixa de nota, onde `if` é mais direto.
