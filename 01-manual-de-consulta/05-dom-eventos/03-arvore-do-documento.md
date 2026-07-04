# Árvore do Documento

O navegador organiza a página como uma árvore. O elemento `html` fica no topo; dentro dele existem `head` e `body`; dentro do `body` aparecem seções, títulos, listas, botões, formulários e outros elementos.

## Exemplo de árvore

```html
<body>
  <main class="conteudo">
    <section class="perfil">
      <h1>Mateus</h1>
      <p>Estudante de front-end</p>
    </section>
  </main>
</body>
```

Uma forma de visualizar:

```txt
body
└── main.conteudo
    └── section.perfil
        ├── h1
        └── p
```

## Nós e elementos

Na árvore existem nós de tipos diferentes. Elementos HTML são nós, textos também são nós e comentários também podem aparecer como nós. Nesta fase, o foco principal será manipular elementos, porque eles são os alvos mais comuns das interações.

## Relações importantes

- **Pai:** elemento que contém outro.
- **Filho:** elemento que está dentro de outro.
- **Irmãos:** elementos no mesmo nível.
- **Descendente:** elemento dentro de outro, mesmo que não seja filho direto.

## Por que isso importa

Entender árvore ajuda a criar seletores melhores. Se existem vários botões na página, talvez você não queira selecionar qualquer botão, mas o botão dentro de um card específico.

```js
const perfil = document.querySelector(".perfil");
const paragrafoDoPerfil = perfil ? perfil.querySelector("p") : null;
```

Aqui a busca do parágrafo acontece dentro de `.perfil`, reduzindo o risco de alterar outro parágrafo da página.
