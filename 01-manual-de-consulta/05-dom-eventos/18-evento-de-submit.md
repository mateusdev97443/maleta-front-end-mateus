# Evento de Submit

O evento `submit` acontece quando um formulário é enviado. Ele deve ser escutado no elemento `form`, não apenas no botão. Assim, o envio por teclado também é considerado.

## Exemplo básico

```html
<form class="form-contato">
  <input class="campo-email" type="email" placeholder="Seu e-mail">
  <button type="submit">Enviar</button>
</form>
<p class="retorno-form"></p>
```

```js
const formContato = document.querySelector(".form-contato");
const campoEmail = document.querySelector(".campo-email");
const retornoForm = document.querySelector(".retorno-form");

if (formContato && campoEmail && retornoForm) {
  formContato.addEventListener("submit", function (event) {
    event.preventDefault();

    if (campoEmail.value.trim() === "") {
      retornoForm.textContent = "Informe seu e-mail.";
      return;
    }

    retornoForm.textContent = "Dados conferidos visualmente.";
  });
}
```

## Por que preventDefault

Sem `preventDefault`, o navegador tenta executar o comportamento padrão do envio, que normalmente recarrega ou navega. Para validação visual nesta fase, impedimos isso.

## Erro comum

Colocar o evento no botão e esquecer que o formulário também pode ser enviado pela tecla Enter.
