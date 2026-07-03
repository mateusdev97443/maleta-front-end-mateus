# 09 — Acessibilidade no HTML

Acessibilidade começa no HTML. Uma marcação correta permite navegação por teclado, leitura por leitores de tela e compreensão por diferentes pessoas.

## Fundamentos

- Use HTML semântico antes de recorrer a `aria`.
- Escreva `alt` útil para imagens informativas.
- Conecte `label` e campos de formulário.
- Mantenha ordem lógica de títulos.
- Garanta que links e botões tenham texto compreensível.
- Preserve navegação por teclado no fluxo natural.
- Use landmarks como `header`, `nav`, `main` e `footer`.

## ARIA somente quando necessário

ARIA não corrige HTML mal escolhido. Prefira controles nativos: `button` para ações, `a` para navegação, `input` para entrada de dados. Use `aria-label`, `aria-labelledby` ou `aria-describedby` quando precisar fornecer contexto que não está claro no texto visível.

## Checklist rápido

- [ ] Existe um `main` identificando o conteúdo principal?
- [ ] Headings seguem hierarquia lógica?
- [ ] Imagens informativas têm `alt` descritivo?
- [ ] Campos têm labels conectados?
- [ ] Links fazem sentido fora de contexto?
- [ ] Botões são botões reais?
- [ ] Não há uso desnecessário de `tabindex` positivo?

## Erros comuns

- `alt` genérico como “imagem”.
- Campo com apenas `placeholder`.
- Elemento clicável feito com `div`.
- Link “clique aqui” sem contexto.
- Ordem visual diferente da ordem do HTML.
