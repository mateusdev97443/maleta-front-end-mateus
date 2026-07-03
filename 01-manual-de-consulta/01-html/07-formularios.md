# 07 — Formulários

Formulários devem ser compreensíveis, navegáveis por teclado e validáveis.

## Estrutura base

```html
<form action="/contato" method="post">
  <fieldset>
    <legend>Dados de contato</legend>

    <label for="nome">Nome</label>
    <input id="nome" name="nome" type="text" autocomplete="name" required minlength="2" maxlength="80">

    <label for="email">E-mail</label>
    <input id="email" name="email" type="email" autocomplete="email" required>

    <label for="mensagem">Mensagem</label>
    <textarea id="mensagem" name="mensagem" required minlength="10"></textarea>

    <button type="submit">Enviar mensagem</button>
  </fieldset>
</form>
```

## Elementos principais

- `form`: agrupa controles e define envio.
- `label`: descreve o campo; conecte com `for` e `id`.
- `input`: campo de entrada.
- `button`: ação explícita; defina `type`.
- `textarea`: texto longo.
- `select` e `option`: seleção em lista.
- `fieldset` e `legend`: agrupam campos relacionados.

## Tipos de input úteis

`text`, `email`, `password`, `number`, `tel`, `url`, `search`, `date`, `checkbox`, `radio`, `file`, `hidden`, `submit`.

## Atributos de validação

- `required`: obrigatório.
- `minlength` e `maxlength`: tamanho de texto.
- `pattern`: expressão regular para formato específico.
- `autocomplete`: ajuda preenchimento automático.
- `disabled`: desativa e não envia o valor.
- `readonly`: impede edição, mas pode enviar o valor.

## Boas práticas

- Todo campo precisa de `label` visível ou alternativa acessível.
- `placeholder` não substitui `label`.
- Mensagens de erro devem ser claras.
- Agrupe radios e checkboxes relacionados com `fieldset`.
