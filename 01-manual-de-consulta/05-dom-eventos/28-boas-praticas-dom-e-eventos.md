# Boas Práticas de DOM e Eventos

Boas práticas deixam o código previsível. A meta não é escrever o menor código possível, mas um código que Mateus consiga revisar depois.

## Selecione com intenção

Use classes claras para comportamento, como `.botao-menu`, `.form-contato`, `.erro-email`. Evite seletores frágeis demais quando a estrutura pode mudar.

## Verifique elementos

```js
if (!formulario || !campoNome || !mensagem) {
  return;
}
```

Em scripts maiores, retornar cedo evita aninhamento excessivo.

## Separe funções

```js
function mostrarErro(texto) {
  mensagem.textContent = texto;
  mensagem.classList.add("mensagem--erro");
}
```

Funções pequenas deixam eventos mais legíveis.

## Prefira classes para visual

Estados como aberto, ativo, inválido e escondido devem ser classes. Isso mantém CSS e JavaScript com responsabilidades separadas.

## Teste manualmente

Antes de considerar pronto, teste caminho feliz, campo vazio, clique repetido, correção de erro e ausência de erro no console.
