# Como executar JavaScript

Existem três formas úteis para estudar JavaScript básico: console do navegador, arquivo `.js` separado e script interno no HTML. Cada uma tem um papel.

## Console do navegador

O console é ideal para testar uma linha, investigar valores e aprender rapidamente. Ele não substitui organização em arquivo, mas é excelente para estudo.

```js
const linguagem = "JavaScript";
console.log(linguagem);
```

## Arquivo `.js`

Em projetos, prefira um arquivo separado, por exemplo `script.js`. Isso evita misturar estrutura HTML com lógica.

```js
const nome = "Mateus";
console.log(`${nome} iniciou os estudos de JavaScript.`);
```

## Tag `<script>`

A ligação básica com HTML pode ser feita assim:

```html
<script src="script.js"></script>
```

## Script interno x externo

Script interno fica dentro do HTML e serve apenas para testes muito pequenos. Script externo fica em arquivo próprio, melhora leitura, reaproveitamento e manutenção.

```html
<script>
  console.log("Teste rápido");
</script>
```

## Posição do script

Para estudo inicial, colocar a tag antes do fechamento de `</body>` costuma ser simples porque o HTML principal já foi lido. Como esta fase não aprofunda manipulação de tela, a posição aparece apenas como organização básica.

## Organização mínima

Use nomes simples e claros: `script.js`, `estudos.js` ou `fundamentos.js`. Em cada arquivo, agrupe exemplos por tema e separe blocos com comentários úteis.
