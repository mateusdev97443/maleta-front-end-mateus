# Validações Simples no Front-end

Validação simples verifica se os dados preenchidos fazem sentido para a interface antes de mostrar uma mensagem positiva. Nesta fase, vamos validar presença de texto, tamanho mínimo e escolhas obrigatórias.

## Campo vazio

```js
if (campoNome.value.trim() === "") {
  mensagem.textContent = "O nome é obrigatório.";
}
```

## Tamanho mínimo

```js
if (campoSenha.value.trim().length < 6) {
  mensagem.textContent = "Use pelo menos 6 caracteres.";
}
```

## Seleção obrigatória

```js
const planoSelecionado = document.querySelector(".plano--ativo");

if (!planoSelecionado) {
  mensagem.textContent = "Escolha um plano.";
}
```

## Exemplo com retorno antecipado

```js
function validarNome() {
  if (campoNome.value.trim() === "") {
    erroNome.textContent = "Preencha o nome.";
    return false;
  }

  erroNome.textContent = "";
  return true;
}
```

## Erro comum

Criar uma validação que mostra erro, mas permite continuar como se estivesse tudo certo. Use `return` para interromper o fluxo quando o dado não passou.
