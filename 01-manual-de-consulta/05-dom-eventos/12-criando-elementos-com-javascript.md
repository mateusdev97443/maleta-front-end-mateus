# Criando Elementos com JavaScript

Criar elementos com JavaScript é útil quando a interface precisa adicionar itens depois de uma ação do usuário. O método principal é `document.createElement`.

## Criando item de lista

```html
<ul class="lista-estudos"></ul>
<button class="adicionar-topico">Adicionar tópico</button>
```

```js
const listaEstudos = document.querySelector(".lista-estudos");
const adicionarTopico = document.querySelector(".adicionar-topico");

if (listaEstudos && adicionarTopico) {
  adicionarTopico.addEventListener("click", function () {
    const item = document.createElement("li");
    item.textContent = "Revisar eventos de clique";
    listaEstudos.append(item);
  });
}
```

## append e appendChild

- `append` aceita elementos e textos.
- `appendChild` aceita um nó por vez.

Para estudos iniciais, `append` costuma ser mais simples.

## Por que não montar tudo como string

Criar elementos deixa cada parte clara: primeiro cria o `li`, depois define texto, depois insere na lista. Isso reduz erros e evita uso desnecessário de marcação em string.

## Boa prática

Crie o elemento, configure conteúdo e classes, depois insira no DOM. Essa ordem facilita manutenção.
