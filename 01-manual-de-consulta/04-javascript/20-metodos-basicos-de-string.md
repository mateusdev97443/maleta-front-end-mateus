# Métodos básicos de string

Métodos de string ajudam a medir, padronizar, buscar e recortar textos.

## Medir e padronizar

```js
const nome = "  Mateus Ernandes  ";

console.log(nome.length);
console.log(nome.trim());
console.log(nome.toLowerCase());
console.log(nome.toUpperCase());
```

## Buscar partes do texto

```js
const email = "mateus@email.com";

console.log(email.includes("@"));
console.log(email.startsWith("mateus"));
console.log(email.endsWith(".com"));
```

## Substituir e recortar

```js
const frase = "Estudar CSS";
const corrigida = frase.replace("CSS", "JavaScript");
const primeiraPalavra = corrigida.slice(0, 7);

console.log(corrigida);
console.log(primeiraPalavra);
```

## Validação simples

```js
const nomeDigitado = "  Mateus  ";
const emailDigitado = " MATEUS@email.com ";

const nomeValido = nomeDigitado.trim().length >= 3;
const emailTratado = emailDigitado.trim().toLowerCase();
const emailValido = emailTratado.includes("@") && emailTratado.includes(".");
```

## Boa prática específica

Padronize antes de comparar. `"Mateus"` e `" mateus "` podem representar a mesma intenção humana, mas são textos diferentes para o JavaScript.
