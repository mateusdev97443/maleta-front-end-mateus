# Condicionais if, else if e else

Condicionais executam caminhos diferentes conforme uma condição.

```js
const idade = 17;
const nota = 8;
const estoque = 0;
const usuarioAtivo = true;

if (idade >= 18) {
  console.log("Pode acessar");
} else {
  console.log("Acesso negado pela idade");
}

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Precisa revisar");
}

if (!usuarioAtivo) {
  console.log("Pare: usuário inativo");
} else if (estoque <= 0) {
  console.log("Pare: produto sem estoque");
}
```

Guard clause é uma saída antecipada para casos inválidos. Nesta fase, use como ideia simples para reduzir blocos grandes.

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
