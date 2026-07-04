# Estilos Inline vs Classes CSS

O JavaScript consegue alterar estilo inline com `element.style`, mas isso deve ser exceção. Na maioria dos casos, é melhor alternar classes e deixar o CSS definir cores, espaçamentos e animações.

## Exemplo com style

```js
caixa.style.backgroundColor = "#222";
caixa.style.color = "#fff";
```

Funciona, mas espalha regras visuais no JavaScript. Se várias propriedades mudam, o código cresce rápido.

## Exemplo recomendado com classe

```css
.caixa--destaque {
  background-color: #222;
  color: #fff;
  border-radius: 8px;
}
```

```js
caixa.classList.add("caixa--destaque");
```

## Quando style faz sentido

- Ajuste pontual calculado, como largura de uma barra de progresso.
- Valor numérico que depende de interação.

```js
barra.style.width = `${porcentagem}%`;
```

## Regra prática

Se a mudança tem nome de estado, use classe: aberto, ativo, selecionado, erro, sucesso, escondido. Se a mudança é um valor calculado, `style` pode ser aceitável.
