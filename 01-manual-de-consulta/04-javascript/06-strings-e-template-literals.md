# Strings e template literals

String é texto. Pode usar aspas simples, aspas duplas ou crase. Crase cria template literal, que permite interpolar variáveis e quebrar linhas com mais facilidade.

```js
const primeiroNome = 'Mateus';
const sobrenome = "Ribeiro";
const area = "Front-end";

const fraseAntiga = primeiroNome + " estuda " + area + ".";
const fraseModerna = `${primeiroNome} ${sobrenome} estuda ${area}.`;

const bloco = `Aluno: ${primeiroNome}
Área: ${area}`;
```

Prefira template literals quando houver variáveis no texto. Cuidado para não abrir com aspas e fechar com crase.

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
