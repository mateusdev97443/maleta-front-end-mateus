# Switch

`switch` compara um mesmo valor contra vários casos. É útil quando há categorias fixas.

```js
const statusPedido = "pago";

switch (statusPedido) {
  case "pendente":
    console.log("Aguardando pagamento");
    break;
  case "pago":
    console.log("Separar pedido");
    break;
  case "enviado":
    console.log("Acompanhar entrega");
    break;
  default:
    console.log("Status desconhecido");
}
```

Use `break` para evitar que o código continue nos próximos casos. Para condições com intervalos, `if` costuma ser melhor.

## Quando usar

Use este conhecimento quando precisar transformar uma ideia em passos lógicos claros, testar valores no console e preparar código JavaScript básico para projetos Front-end futuros.

## Erros comuns

- Copiar código sem entender o papel de cada linha.
- Misturar muitos assuntos ao mesmo tempo.
- Ignorar mensagens do console.
- Usar nomes vagos como `x`, `coisa` ou `dados` sem contexto.

## Boas práticas

- Prefira clareza em vez de código curto demais.
- Teste cada pequena parte com valores fixos.
- Use indentação consistente.
- Explique a intenção quando um comentário realmente ajudar.
