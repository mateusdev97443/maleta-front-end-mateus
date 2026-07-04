# Padrão Profissional DOM e Eventos

Este padrão define como escrever código DOM simples, legível e seguro para a Fase 6.

## Nomeie pelo papel na interface

Prefira `botaoMenu`, `formCadastro`, `campoEmail`, `mensagemErro` e `listaTarefas`. Evite nomes vagos como `x`, `coisa` ou `elemento1`.

## Selecione no começo da funcionalidade

```js
const formCadastro = document.querySelector(".form-cadastro");
const campoNome = document.querySelector(".campo-nome");
const mensagem = document.querySelector(".mensagem-form");
```

Seleção concentrada facilita revisar dependências do código.

## Verifique existência

```js
if (!formCadastro || !campoNome || !mensagem) {
  return;
}
```

Em um script real, isso evita quebrar páginas que não possuem aquela interface.

## Use funções pequenas

```js
function mostrarErro(texto) {
  mensagem.textContent = texto;
  mensagem.classList.add("mensagem--erro");
}

function limparErro() {
  mensagem.textContent = "";
  mensagem.classList.remove("mensagem--erro");
}
```

## Separe lógica e visual

O JavaScript decide o estado; o CSS desenha o estado. Prefira `classList` para aberto, ativo, erro, sucesso, oculto e selecionado.

## Evite duplicação

Se dois eventos fazem quase a mesma coisa, extraia uma função. Se várias mensagens repetem texto, guarde em constantes claras.

## Use innerHTML com muita cautela

Para texto, use `textContent`. Para estruturas, prefira `createElement`. Isso deixa a intenção mais clara e reduz riscos.

## Comentários úteis

Comente decisões, não traduções óbvias do código. Um bom comentário explica por que uma verificação existe ou por que determinado evento está no formulário.

## Checklist antes de considerar pronto

- Seletores conferidos no HTML.
- Elementos verificados antes do uso.
- Eventos registrados uma vez.
- Formulários tratam envio corretamente.
- Classes CSS controlam visual.
- Console sem erros.
- Caminhos de erro e sucesso testados manualmente.
