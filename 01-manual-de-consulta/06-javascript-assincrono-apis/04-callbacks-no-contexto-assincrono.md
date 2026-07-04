# Callbacks no contexto assíncrono

Callback é uma função passada como argumento para ser executada em outro momento. Em código assíncrono, esse "outro momento" normalmente acontece depois de um evento, temporizador ou resposta.

## Função passada como argumento

```js
function mostrarMensagem() {
  console.log("Callback executado");
}

setTimeout(mostrarMensagem, 1000);
```

A função `mostrarMensagem` não é executada na hora em que é declarada. Ela é entregue ao `setTimeout`, que a chama depois.

## Relação com eventos

Eventos do DOM usam callbacks o tempo todo:

```js
botao.addEventListener("click", () => {
  status.textContent = "Botão clicado";
});
```

Nesse caso, a função só executa quando o clique acontece.

## Relação com operações assíncronas

Callbacks ajudam a representar a ideia de "quando terminar, faça isto". Antes de Promises e `async/await`, muitos fluxos assíncronos eram escritos com callbacks.

```js
function esperarDepoisExecutar(callback) {
  setTimeout(() => {
    callback("Dados simulados");
  }, 1000);
}

esperarDepoisExecutar((dados) => {
  console.log(dados);
});
```

## Cuidado com aninhamento

O problema aparece quando um callback depende de outro, que depende de outro:

```js
primeiraEtapa(() => {
  segundaEtapa(() => {
    terceiraEtapa(() => {
      console.log("Difícil de manter");
    });
  });
});
```

Esse formato fica ruim de ler e de tratar erros. Promises e `async/await` ajudam a organizar esse fluxo.

## Boa prática

Use callbacks com clareza em eventos e exemplos simples. Quando o fluxo tiver várias etapas assíncronas, prefira Promises ou `async/await`.

## Exercício rápido

Crie uma função `executarDepoisDeUmSegundo(callback)` e passe para ela uma função que atualiza o texto de um parágrafo.
