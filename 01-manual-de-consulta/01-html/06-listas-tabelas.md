# 06 — Listas e tabelas

## Listas

- `ul`: lista sem ordem específica.
- `ol`: lista ordenada por sequência ou prioridade.
- `li`: item de lista.
- `dl`: lista de definição.
- `dt`: termo.
- `dd`: descrição.

```html
<ul>
  <li>HTML semântico</li>
  <li>Acessibilidade</li>
</ul>

<ol>
  <li>Planejar estrutura</li>
  <li>Escrever HTML</li>
  <li>Validar</li>
</ol>

<dl>
  <dt>SEO</dt>
  <dd>Otimização para mecanismos de busca.</dd>
</dl>
```

## Tabelas

Use tabelas para dados tabulares, não para layout.

```html
<table>
  <caption>Comparativo de planos</caption>
  <thead>
    <tr>
      <th scope="col">Plano</th>
      <th scope="col">Preço</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Básico</th>
      <td>R$ 29</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Valores mensais.</td>
    </tr>
  </tfoot>
</table>
```

## Quando não usar tabela

Não use `table` para alinhar cards, colunas visuais, menus ou layout geral. Esses casos pertencem ao CSS em fases futuras.
