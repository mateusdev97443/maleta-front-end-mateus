# 07 — Formulários

Formulários são pontos críticos de interação. Um bom formulário precisa ser compreensível, acessível, validável e preparado para integração com servidor ou serviço externo.

## `form`, `action` e `method`

```html
<form action="/contato" method="post">
  ...
</form>
```

- `action`: URL para onde os dados serão enviados.
- `method="get"`: envia dados na URL; útil para buscas e filtros compartilháveis.
- `method="post"`: envia dados no corpo da requisição; comum em contato, login, cadastro e ações que alteram dados.

Se o formulário ainda não tem integração, mantenha a estrutura correta e documente o destino esperado no projeto, sem inventar comportamento com HTML.

## `name`, `id` e `value`

- `id`: identifica um elemento na página e conecta `label` ao campo.
- `name`: define a chave enviada no formulário. Sem `name`, o valor normalmente não é enviado.
- `value`: define o valor inicial ou o valor enviado por controles como `radio`, `checkbox` e `option`.

```html
<label for="email">E-mail</label>
<input id="email" name="email" type="email" value="" autocomplete="email" required>
```

## Label conectado corretamente

O padrão mais claro é usar `for` no `label` apontando para o `id` do campo.

```html
<label for="nome">Nome completo</label>
<input id="nome" name="nome" type="text" autocomplete="name" required>
```

Também é possível envolver o campo com `label`, mas isso pode ficar menos legível em formulários grandes.

## Tipos de `input`

```html
<input type="text" name="nome">
<input type="email" name="email">
<input type="password" name="senha">
<input type="number" name="idade" min="18" max="120">
<input type="tel" name="telefone" autocomplete="tel">
<input type="url" name="site">
<input type="date" name="data_nascimento">
<input type="checkbox" name="termos" value="aceito">
<input type="radio" name="turno" value="manha">
<input type="file" name="curriculo" accept=".pdf">
```

Escolha o tipo de acordo com o dado solicitado. Isso melhora teclado em dispositivos móveis, validação nativa e clareza para tecnologias assistivas.

## `select`, `option` e `textarea`

Use `select` quando a pessoa precisa escolher uma opção em uma lista limitada. Use `textarea` para mensagens longas.

```html
<label for="assunto">Assunto</label>
<select id="assunto" name="assunto" required>
  <option value="">Selecione uma opção</option>
  <option value="orcamento">Orçamento</option>
  <option value="suporte">Suporte</option>
</select>

<label for="mensagem">Mensagem</label>
<textarea id="mensagem" name="mensagem" rows="6" minlength="10" required></textarea>
```

## Botões: `submit`, `reset` e `button`

```html
<button type="submit">Enviar</button>
<button type="reset">Limpar</button>
<button type="button">Abrir ajuda</button>
```

- `submit`: envia o formulário.
- `reset`: restaura valores iniciais; use com cuidado, pois pode apagar dados por acidente.
- `button`: botão neutro para comportamento futuro controlado por script em fases posteriores.

Sempre declare `type`; dentro de formulário, `button` sem tipo pode se comportar como `submit`.

## `fieldset` e `legend`

Use `fieldset` para agrupar campos relacionados e `legend` para nomear o grupo. Isso é essencial em grupos de `radio` e `checkbox`.

```html
<fieldset>
  <legend>Turno preferido</legend>

  <input id="turno-manha" name="turno" type="radio" value="manha" required>
  <label for="turno-manha">Manhã</label>

  <input id="turno-tarde" name="turno" type="radio" value="tarde">
  <label for="turno-tarde">Tarde</label>
</fieldset>
```

## Validação e estados

- `required`: torna o campo obrigatório.
- `minlength` e `maxlength`: limitam tamanho textual.
- `pattern`: valida formato com expressão regular; explique o formato esperado.
- `autocomplete`: ajuda preenchimento automático e reduz esforço.
- `disabled`: desativa o campo e impede envio do valor.
- `readonly`: impede edição, mas mantém o campo focável e pode enviar valor.

```html
<label for="cep">CEP</label>
<input
  id="cep"
  name="cep"
  type="text"
  inputmode="numeric"
  pattern="[0-9]{5}-?[0-9]{3}"
  autocomplete="postal-code"
  required
>
```

## Exemplo completo: formulário de contato

```html
<form action="/contato" method="post">
  <fieldset>
    <legend>Envie sua mensagem</legend>

    <label for="contato-nome">Nome</label>
    <input id="contato-nome" name="nome" type="text" autocomplete="name" required minlength="2" maxlength="80">

    <label for="contato-email">E-mail</label>
    <input id="contato-email" name="email" type="email" autocomplete="email" required>

    <label for="contato-assunto">Assunto</label>
    <select id="contato-assunto" name="assunto" required>
      <option value="">Selecione</option>
      <option value="orcamento">Orçamento</option>
      <option value="duvida">Dúvida</option>
      <option value="suporte">Suporte</option>
    </select>

    <label for="contato-mensagem">Mensagem</label>
    <textarea id="contato-mensagem" name="mensagem" rows="6" required minlength="10" maxlength="1000"></textarea>

    <button type="submit">Enviar mensagem</button>
  </fieldset>
</form>
```

## Exemplo completo: login

```html
<form action="/login" method="post">
  <fieldset>
    <legend>Acessar conta</legend>

    <label for="login-email">E-mail</label>
    <input id="login-email" name="email" type="email" autocomplete="username" required>

    <label for="login-senha">Senha</label>
    <input id="login-senha" name="senha" type="password" autocomplete="current-password" required minlength="8">

    <button type="submit">Entrar</button>
  </fieldset>
</form>
```

## Exemplo completo: inscrição em evento

```html
<form action="/inscricao" method="post">
  <fieldset>
    <legend>Dados pessoais</legend>

    <label for="inscricao-nome">Nome completo</label>
    <input id="inscricao-nome" name="nome" type="text" autocomplete="name" required>

    <label for="inscricao-email">E-mail</label>
    <input id="inscricao-email" name="email" type="email" autocomplete="email" required>

    <label for="inscricao-telefone">Telefone</label>
    <input id="inscricao-telefone" name="telefone" type="tel" autocomplete="tel">
  </fieldset>

  <fieldset>
    <legend>Preferências</legend>

    <label for="inscricao-data">Data preferida</label>
    <input id="inscricao-data" name="data" type="date" required>

    <input id="newsletter" name="newsletter" type="checkbox" value="sim">
    <label for="newsletter">Quero receber novidades por e-mail</label>
  </fieldset>

  <button type="submit">Confirmar inscrição</button>
</form>
```

## Acessibilidade em formulários

- Todo campo precisa de `label` conectado ou nome acessível equivalente.
- `placeholder` pode dar dica, mas nunca substitui `label`.
- Agrupe opções relacionadas com `fieldset` e `legend`.
- Use textos de botão específicos: “Enviar mensagem” é melhor que “Enviar”.
- Informe formato esperado quando usar `pattern`.
- Mantenha ordem do HTML igual à ordem visual esperada.

## Erros comuns e correções

| Erro | Correção |
|---|---|
| Campo sem `name` | Adicionar `name` coerente com o dado enviado |
| `label` sem `for` ou apontando para `id` inexistente | Igualar `for="campo"` e `id="campo"` |
| Usar apenas `placeholder` | Manter `label` visível e usar `placeholder` só como dica extra |
| Botão sem `type` | Declarar `type="submit"`, `type="reset"` ou `type="button"` |
| Radios sem mesmo `name` | Usar o mesmo `name` para opções do mesmo grupo |
| `disabled` em campo cujo valor precisa ser enviado | Usar `readonly` quando o valor deve seguir no envio |
