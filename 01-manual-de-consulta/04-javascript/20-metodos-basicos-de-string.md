# Métodos básicos de string

Strings são textos em JavaScript. Elas aparecem em nomes, mensagens, emails, senhas, buscas, campos de formulário, URLs e respostas de APIs.

Dominar métodos básicos de string ajuda a limpar dados, validar entradas, montar mensagens e evitar erros comuns no front-end.

## O que é uma string

Uma string é um valor de texto. Pode ser escrita com aspas simples, aspas duplas ou crase.

```javascript
const nome = "Mateus";
const curso = 'Front-end';
const mensagem = `Olá, ${nome}!`;
```

Use crase quando precisar interpolar valores ou montar textos com variáveis.

```javascript
const pontos = 95;
const resultado = `Você fez ${pontos} pontos.`;

console.log(resultado);
```

## length

A propriedade `length` retorna a quantidade de caracteres de uma string.

```javascript
const senha = "abc123";

console.log(senha.length); // 6
```

Ela é muito usada em validações.

```javascript
const senha = "123";

if (senha.length < 6) {
  console.log("A senha precisa ter pelo menos 6 caracteres.");
}
```

Cuidado: `length` conta espaços também.

```javascript
const texto = "   oi   ";

console.log(texto.length); // 8
```

## trim

O método `trim()` remove espaços do começo e do fim da string.

```javascript
const nome = "   Mateus   ";
const nomeLimpo = nome.trim();

console.log(nomeLimpo); // "Mateus"
```

Ele é essencial em formulários.

```javascript
const campoNome = "   ";

if (campoNome.trim() === "") {
  console.log("O nome é obrigatório.");
}
```

Sem `trim()`, um campo preenchido só com espaços pode passar como se fosse válido.

## toLowerCase

O método `toLowerCase()` transforma o texto em letras minúsculas.

```javascript
const email = "MATEUS@EXEMPLO.COM";
const emailNormalizado = email.toLowerCase();

console.log(emailNormalizado);
```

É útil para comparar textos sem depender de maiúsculas e minúsculas.

```javascript
const resposta = "SIM";

if (resposta.toLowerCase() === "sim") {
  console.log("Resposta confirmada.");
}
```

## toUpperCase

O método `toUpperCase()` transforma o texto em letras maiúsculas.

```javascript
const sigla = "html";

console.log(sigla.toUpperCase()); // "HTML"
```

Use quando o formato visual ou de comparação exigir letras maiúsculas.

```javascript
const estado = "sp";
const estadoFormatado = estado.toUpperCase();

console.log(estadoFormatado);
```

## includes

O método `includes()` verifica se uma string contém determinado trecho. Ele retorna `true` ou `false`.

```javascript
const frase = "Estou estudando JavaScript";

console.log(frase.includes("JavaScript")); // true
console.log(frase.includes("Python")); // false
```

É útil em buscas simples.

```javascript
const produto = "Notebook Gamer";
const busca = "gamer";

if (produto.toLowerCase().includes(busca.toLowerCase())) {
  console.log("Produto encontrado.");
}
```

Cuidado: `includes()` diferencia maiúsculas de minúsculas. Por isso, muitas vezes usamos `toLowerCase()` antes.

## startsWith

O método `startsWith()` verifica se uma string começa com determinado texto.

```javascript
const link = "https://exemplo.com";

console.log(link.startsWith("https://")); // true
```

Pode ser usado para validações simples.

```javascript
const telefone = "(11) 99999-9999";

if (telefone.startsWith("(11)")) {
  console.log("Telefone de São Paulo.");
}
```

## endsWith

O método `endsWith()` verifica se uma string termina com determinado texto.

```javascript
const arquivo = "foto.png";

console.log(arquivo.endsWith(".png")); // true
```

É útil para validar extensões, domínios ou finais específicos.

```javascript
const email = "mateus@email.com";

if (email.endsWith(".com")) {
  console.log("Email termina com .com");
}
```

## replace

O método `replace()` substitui um trecho da string por outro.

```javascript
const preco = "R$ 50,00";
const precoSemSimbolo = preco.replace("R$ ", "");

console.log(precoSemSimbolo);
```

Por padrão, `replace()` troca apenas a primeira ocorrência encontrada.

```javascript
const texto = "banana banana";
const novoTexto = texto.replace("banana", "maçã");

console.log(novoTexto); // "maçã banana"
```

Para substituir várias ocorrências, use `replaceAll()` quando disponível.

```javascript
const texto = "banana banana";
const novoTexto = texto.replaceAll("banana", "maçã");

console.log(novoTexto); // "maçã maçã"
```

## slice

O método `slice()` extrai parte de uma string.

```javascript
const codigo = "JS-2026";

const linguagem = codigo.slice(0, 2);

console.log(linguagem); // "JS"
```

Ele recebe a posição inicial e a posição final. A posição final não entra no resultado.

```javascript
const nome = "Mateus";

console.log(nome.slice(0, 3)); // "Mat"
```

## split

O método `split()` divide uma string e retorna um array.

```javascript
const tags = "html,css,javascript";
const lista = tags.split(",");

console.log(lista); // ["html", "css", "javascript"]
```

É útil para transformar texto em lista.

```javascript
const nomeCompleto = "Mateus Ribeiro";
const partes = nomeCompleto.split(" ");

console.log(partes[0]); // "Mateus"
```

## charAt

O método `charAt()` retorna o caractere de uma posição.

```javascript
const nome = "Mateus";

console.log(nome.charAt(0)); // "M"
```

Também é possível acessar usando colchetes.

```javascript
console.log(nome[0]); // "M"
```

## Exemplo prático de validação

```javascript
function validarNome(nome) {
  const nomeLimpo = nome.trim();

  if (nomeLimpo.length < 3) {
    return "O nome precisa ter pelo menos 3 caracteres.";
  }

  return "Nome válido.";
}

console.log(validarNome(" Ma "));
console.log(validarNome(" Mateus "));
```

Esse exemplo combina `trim()` e `length`, dois recursos muito comuns em formulários.

## Exemplo prático de busca

```javascript
const produtos = ["Mouse Gamer", "Teclado Mecânico", "Monitor LED"];
const termoBusca = "gamer";

const encontrados = produtos.filter((produto) => {
  return produto.toLowerCase().includes(termoBusca.toLowerCase());
});

console.log(encontrados);
```

Aqui usamos `toLowerCase()` junto com `includes()` para criar uma busca mais flexível.

## Erros comuns

Evite:

- validar campo de texto sem usar `trim()`;
- comparar textos sem considerar maiúsculas e minúsculas;
- usar `replace()` achando que ele troca todas as ocorrências;
- esquecer que `length` conta espaços;
- montar mensagens com concatenação confusa;
- usar nomes de variáveis genéricos;
- não testar string vazia;
- não testar texto com espaços antes e depois.

## Checklist de aprovação

Antes de considerar strings dominadas, confirme:

- Você sabe criar strings com aspas e crase.
- Você entende quando usar template literals.
- Você sabe medir texto com `length`.
- Você usa `trim()` em formulários.
- Você usa `toLowerCase()` e `toUpperCase()` com intenção.
- Você sabe buscar trechos com `includes()`.
- Você entende `startsWith()` e `endsWith()`.
- Você sabe substituir texto com `replace()`.
- Você sabe cortar texto com `slice()`.
- Você sabe transformar texto em array com `split()`.
- Você testa entradas vazias.
- Você testa textos com espaços.
- Você evita comparações frágeis.

Strings parecem simples, mas muitos bugs de formulário, busca e validação começam nelas.
