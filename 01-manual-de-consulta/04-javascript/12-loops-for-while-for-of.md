# Loops: for, while e for...of

Loops repetem instruções sem duplicar código. Todo loop precisa de condição de parada.

```js
for (let contador = 1; contador <= 3; contador++) {
  console.log(`Repetição ${contador}`);
}

let tentativas = 0;
while (tentativas < 3) {
  console.log("Tentando novamente");
  tentativas++;
}

const tecnologias = ["HTML", "CSS", "JavaScript"];

for (const tecnologia of tecnologias) {
  console.log(tecnologia);
}
```

Use `for` quando precisar de contador, `while` quando a repetição depender de uma condição e `for...of` para percorrer listas de forma legível.

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
