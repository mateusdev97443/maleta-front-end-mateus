# Erros Comuns de DOM e Eventos

Conhecer erros comuns acelera a depuração. DOM e eventos costumam falhar por seletor errado, elemento inexistente, evento no alvo incorreto ou manipulação visual bagunçada.

## Selecionar classe sem ponto

```js
document.querySelector("menu"); // procura tag menu
document.querySelector(".menu"); // procura classe menu
```

## Manipular null

```js
const alerta = document.querySelector(".alerta");
alerta.textContent = "Oi";
```

Se `.alerta` não existir, isso quebra. Verifique antes.

## Usar evento no elemento errado

Formulário deve escutar `submit` no `form`, não apenas `click` no botão.

## Tratar NodeList como elemento

`querySelectorAll` retorna lista. Percorra com `forEach`.

## Misturar regra visual demais no JavaScript

Se o código tem dez linhas de `element.style`, considere criar uma classe CSS.

## Usar innerHTML sem necessidade

Para texto comum, `textContent` é mais simples e seguro.

## Não testar estados repetidos

Clique duas vezes, envie vazio, digite espaços, apague texto e tente novamente. Muitas falhas aparecem apenas na segunda interação.
