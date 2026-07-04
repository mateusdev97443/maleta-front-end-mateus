# Removendo Elementos

Remover elementos significa retirar algo da árvore do DOM. O método mais direto é `remove`.

## Exemplo: fechar aviso

```html
<div class="aviso-sistema">
  <p>Revise seus dados antes de continuar.</p>
  <button class="fechar-aviso">Fechar</button>
</div>
```

```js
const avisoSistema = document.querySelector(".aviso-sistema");
const fecharAviso = document.querySelector(".fechar-aviso");

if (avisoSistema && fecharAviso) {
  fecharAviso.addEventListener("click", function () {
    avisoSistema.remove();
  });
}
```

## Remover ou esconder?

Remover apaga o elemento do DOM. Esconder com classe mantém o elemento na página, apenas invisível.

- Use `remove` quando o item não precisa voltar.
- Use classe quando a interface pode mostrar novamente.

## Erro comum

Tentar usar um elemento depois que ele foi removido. Se o código precisa reabrir algo, talvez seja melhor alternar uma classe `escondido` em vez de remover.
