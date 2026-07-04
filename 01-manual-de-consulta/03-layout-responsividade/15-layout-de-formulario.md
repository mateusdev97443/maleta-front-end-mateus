# Layout de formulário

## Introdução

Formulário responsivo precisa ser fácil de ler, preencher e revisar. O layout deve reduzir esforço: labels claras, campos confortáveis, agrupamento lógico e ordem previsível.

## Objetivo do layout

O objetivo é coletar dados sem confundir a pessoa usuária. No mobile, campos empilhados costumam ser melhores. No desktop, campos relacionados podem ficar lado a lado quando isso não prejudicar a leitura.

## Estrutura HTML recomendada

```html
<form class="formulario">
  <fieldset>
    <legend>Dados pessoais</legend>

    <div class="formulario__linha">
      <label>
        Nome
        <input type="text" name="nome" autocomplete="name">
      </label>

      <label>
        E-mail
        <input type="email" name="email" autocomplete="email">
      </label>
    </div>
  </fieldset>

  <label>
    Mensagem
    <textarea name="mensagem" rows="5"></textarea>
  </label>

  <button type="submit">Enviar</button>
</form>
```

## Comportamento no mobile

No mobile, empilhe tudo. Campo lado a lado em tela estreita gera digitação desconfortável e leitura ruim. Botões devem ser fáceis de tocar.

## Comportamento no desktop

No desktop, use duas colunas apenas para campos curtos e relacionados, como nome/sobrenome ou cidade/estado. Mensagens, observações e campos longos devem ocupar a linha inteira.

## Onde usar Grid

Grid facilita linhas de formulário que mudam de uma para duas colunas.

```css
.formulario {
  display: grid;
  gap: 1.25rem;
}

.formulario__linha {
  display: grid;
  gap: 1rem;
}

@media (min-width: 760px) {
  .formulario__linha {
    grid-template-columns: 1fr 1fr;
  }
}
```

## Onde usar Flexbox

Use Flexbox em grupos de ações, como botões de enviar e cancelar.

```css
.formulario__acoes {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
```

## Estilo base de campos

```css
.formulario label {
  display: grid;
  gap: 0.5rem;
  font-weight: 600;
}

.formulario input,
.formulario textarea,
.formulario select {
  width: 100%;
  padding: 0.75rem 0.875rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  font: inherit;
}
```

## Onde usar container

Formulários longos não devem ocupar a tela inteira no desktop. Limite a largura para melhorar leitura.

```css
.formulario-container {
  width: min(100% - 2rem, 760px);
  margin-inline: auto;
}
```

## Problemas comuns

- Campos muito estreitos em colunas no mobile.
- Labels longe dos inputs.
- Botão pequeno demais para toque.
- Formulário ocupando largura excessiva no desktop.
- Agrupar campos sem lógica.

## Exemplo semicompleto

```css
fieldset {
  display: grid;
  gap: 1rem;
  padding: 0;
  border: 0;
}

button {
  justify-self: start;
  padding: 0.85rem 1.25rem;
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;
}
```

## Boas práticas

- Mantenha label visível.
- Empilhe campos no mobile.
- Use colunas apenas quando houver espaço e relação entre campos.
- Dê largura máxima ao formulário.
- Teste navegação e leitura visual antes de estilizar demais.
