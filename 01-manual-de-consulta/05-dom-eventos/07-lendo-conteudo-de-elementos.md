# Lendo Conteúdo de Elementos

Ler conteúdo é descobrir o que já está dentro de um elemento. Essa leitura pode servir para validar, copiar, comparar ou montar mensagens.

## textContent

`textContent` lê o texto do elemento, inclusive textos escondidos por CSS. É a opção mais direta para conteúdo textual.

```js
const titulo = document.querySelector(".titulo-aula");
if (titulo) {
  console.log(titulo.textContent);
}
```

## innerText

`innerText` considera mais o que está visível na tela. Pode ser útil quando você quer o texto como o usuário enxerga, mas depende mais do layout.

## innerHTML

`innerHTML` lê a marcação interna. Use com cuidado, porque mistura texto com tags. Para a maioria das mensagens simples, prefira `textContent`.

```html
<p class="aviso"><strong>Atenção:</strong> revise o formulário.</p>
```

```js
const aviso = document.querySelector(".aviso");
if (aviso) {
  console.log(aviso.textContent);
  console.log(aviso.innerHTML);
}
```

## Quando ler conteúdo

- Conferir se um campo visual já tem mensagem.
- Copiar texto de um card selecionado.
- Verificar o rótulo de um botão.
- Montar feedback a partir de uma escolha.
