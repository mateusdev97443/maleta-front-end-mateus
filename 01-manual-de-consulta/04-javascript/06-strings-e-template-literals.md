# Strings e template literals

String é texto. Ela pode representar nome, email, mensagem, status ou qualquer sequência de caracteres.

## Aspas simples, duplas e crase

```js
const nome = 'Mateus';
const area = "Front-end";
const frase = `Estudando ${area}`;
```

Escolha um padrão e mantenha consistência no arquivo. A crase é especial porque permite interpolação.

## Concatenação

Concatenação junta textos com `+`.

```js
const nome = "Mateus";
const mensagem = "Olá, " + nome + "!";
console.log(mensagem);
```

Funciona, mas pode ficar difícil de ler quando há muitas variáveis.

## Template literals

Template literal usa crase e `${}` para inserir valores.

```js
const nome = "Mateus";
const fase = 5;
const mensagem = `${nome} está na Fase ${fase} da Maleta.`;

console.log(mensagem);
```

## Quebra de linha

```js
const resumo = `Aluno: Mateus
Fase: JavaScript Fundamentos
Status: em estudo`;

console.log(resumo);
```

## Erros comuns

- Abrir com aspas simples e fechar com aspas duplas.
- Usar `${nome}` dentro de aspas comuns esperando interpolação.
- Esquecer que espaços dentro da string fazem parte do texto.

## Boa prática específica

Use template literals para mensagens com variáveis. Reserve concatenação para casos muito simples.
