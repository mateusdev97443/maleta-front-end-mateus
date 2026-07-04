# Null, undefined, truthy e falsy

`null` e `undefined` representam ausência, mas não significam a mesma coisa.

## `null`

Use `null` quando a ausência é intencional.

```js
const complementoEndereco = null;
```

Isso comunica: “este campo foi considerado e não possui valor”.

## `undefined`

`undefined` surge quando uma variável foi declarada sem valor ou quando uma busca não encontra resultado.

```js
let telefone;
console.log(telefone);

const tecnologias = ["HTML", "CSS"];
console.log(tecnologias[5]);
```

## Valores falsy

Em uma condição, estes valores se comportam como falso: `false`, `0`, `""`, `null`, `undefined` e `NaN`.

```js
const nome = "";

if (!nome) {
  console.log("Nome não informado.");
}
```

## Valores truthy

Strings com conteúdo, números diferentes de zero, arrays e objetos costumam se comportar como verdadeiro.

```js
const lista = [];

if (lista) {
  console.log("Arrays são truthy mesmo vazios.");
}
```

## Quando ser explícito

Se a regra depende de ausência intencional, compare com `null`. Se depende de texto vazio, compare com `""` ou use `trim()`.

```js
if (complementoEndereco === null) {
  console.log("Sem complemento por escolha do cadastro.");
}
```

## Erros comuns

- Achar que array vazio é falsy.
- Tratar `undefined` como valor planejado.
- Usar `if (valor)` quando a regra exige distinguir `0` de ausência.
