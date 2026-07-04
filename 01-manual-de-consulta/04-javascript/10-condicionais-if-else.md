# Condicionais if, else if e else

Condicionais escolhem caminhos. `if` testa a primeira condição, `else if` testa alternativas e `else` cobre o restante.

## Condição simples

```js
const idade = 19;

if (idade >= 18) {
  console.log("Maior de idade");
}
```

## Condição composta

```js
const usuarioAtivo = true;
const senhaCorreta = false;

if (usuarioAtivo && senhaCorreta) {
  console.log("Acesso conceitual permitido");
} else {
  console.log("Verifique status do usuário ou senha");
}
```

## Ordem das condições

A ordem muda o resultado quando faixas se sobrepõem.

```js
const nota = 9.5;

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Revisar conteúdo");
}
```

## Estoque e guard clause introdutória

```js
function verificarCompra(estoque, usuarioAtivo) {
  if (!usuarioAtivo) {
    return "Usuário inativo";
  }

  if (estoque <= 0) {
    return "Produto sem estoque";
  }

  return "Compra pode continuar";
}
```

Guard clause reduz aninhamento: casos de bloqueio aparecem primeiro.

## Erros comuns

- Usar `=` dentro da condição.
- Colocar `else` antes de testar casos mais específicos.
- Criar condições longas sem nomes auxiliares.
