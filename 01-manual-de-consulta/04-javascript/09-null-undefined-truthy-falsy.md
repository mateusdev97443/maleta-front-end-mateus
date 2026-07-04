# Null, undefined, truthy e falsy

`null` indica ausência intencional. `undefined` indica que algo ainda não recebeu valor. Em condicionais, alguns valores se comportam como falso: `false`, `0`, `""`, `null`, `undefined` e `NaN`. Outros tendem a ser truthy.

```js
let telefone;
const complemento = null;
const nome = "Mateus";

if (nome) {
  console.log("Nome informado");
}

if (telefone === undefined) {
  console.log("Telefone ainda não definido");
}

if (complemento === null) {
  console.log("Complemento não existe neste cadastro");
}
```

Quando a regra exige precisão, seja explícito em vez de confiar apenas em truthy ou falsy.

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
