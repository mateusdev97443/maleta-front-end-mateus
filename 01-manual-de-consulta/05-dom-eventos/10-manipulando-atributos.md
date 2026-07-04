# Manipulando Atributos

Atributos guardam informações no elemento, como `src`, `alt`, `href`, `disabled`, `type` e valores `data-*`. O JavaScript pode ler, alterar ou remover esses atributos.

## getAttribute

Lê o valor atual.

```js
const imagem = document.querySelector(".foto-perfil");
if (imagem) {
  const textoAlternativo = imagem.getAttribute("alt");
  console.log(textoAlternativo);
}
```

## setAttribute

Define ou substitui um valor.

```js
const linkContato = document.querySelector(".link-contato");
if (linkContato) {
  linkContato.setAttribute("href", "contato.html");
}
```

## removeAttribute

Remove um atributo.

```js
const botaoEnviar = document.querySelector(".botao-enviar");
if (botaoEnviar) {
  botaoEnviar.removeAttribute("disabled");
}
```

## Exemplo: trocar imagem

```js
const capa = document.querySelector(".capa-curso");
if (capa) {
  capa.setAttribute("src", "imagens/dom-eventos.png");
  capa.setAttribute("alt", "Ilustração sobre DOM e eventos");
}
```

## Boa prática

Ao trocar `src`, revise também `alt`. Atributo visual e acessibilidade caminham juntos.
