# Objetos: fundamentos

Objeto agrupa propriedades e valores de uma entidade.

```js
const projeto = {
  nome: "Maleta Front-end",
  fase: 5,
  concluido: false
};

console.log(projeto.nome);
console.log(projeto["fase"]);

projeto.concluido = true;
projeto.responsavel = "Mateus";

const projetos = [
  { nome: "HTML", fase: 2 },
  { nome: "CSS", fase: 3 }
];
```

Use objeto quando um item possui várias características. Use array de objetos quando houver uma lista de entidades semelhantes.

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
