# Checklist de projeto vanilla

## Estrutura

- [ ] A tela possui objetivo claro e pequeno.
- [ ] O código tem ponto de entrada, como `init`.
- [ ] Os elementos do DOM usados pelo JavaScript estão identificados conceitualmente.

## Dados

- [ ] Existe uma lista original preservada quando há busca ou filtro.
- [ ] Listas filtradas são derivadas, não substituem a fonte.
- [ ] Dados inexistentes ou incompletos são tratados antes de renderizar.

## API e Fetch

- [ ] A API usada é pública e sem token.
- [ ] `response.ok` é validado antes de `response.json()`.
- [ ] `response.status` é usado quando melhora a mensagem de erro.
- [ ] A API não é chamada novamente para cada tecla ou filtro local.

## Estados de interface

- [ ] Loading aparece durante operações assíncronas.
- [ ] Erro aparece apenas quando existe falha técnica.
- [ ] Vazio aparece quando a operação funciona, mas não há resultados.
- [ ] Sucesso remove mensagens antigas e mostra dados atuais.

## Renderização

- [ ] A lista é limpa antes de nova renderização.
- [ ] Cards ou itens são criados a partir dos dados atuais.
- [ ] A renderização não faz requisição.
- [ ] Detalhe dinâmico tem função própria quando existir.

## Eventos

- [ ] Eventos são registrados no lugar certo, preferencialmente em `init`.
- [ ] O mesmo evento não é registrado várias vezes.
- [ ] Botões são desabilitados durante loading quando múltiplos cliques causariam problema.

## Busca e filtros

- [ ] Busca local usa `input` quando precisa reagir à mudança real do valor.
- [ ] Termos são normalizados com `trim()` e `toLowerCase()`.
- [ ] Busca sem resultado é tratada como vazio, não como erro.
- [ ] Botão limpar filtro restaura a lista original.

## Organização de funções

- [ ] Funções são pequenas e nomeadas por intenção.
- [ ] Busca, regra e UI não ficam misturadas sem necessidade.
- [ ] Não existe função gigante concentrando todo o fluxo.
- [ ] O código pode ser revisado em ordem previsível.

## Responsividade

- [ ] A estrutura visual pensada para cards ou listas se adapta a telas menores.
- [ ] Mensagens de estado continuam visíveis em diferentes larguras.
- [ ] O conteúdo essencial não depende de hover ou largura grande.

## Restrições da fase

- [ ] Sem frameworks.
- [ ] Sem bibliotecas externas.
- [ ] Sem backend próprio.
- [ ] Sem token exposto.
- [ ] Sem arquivos reais `.html`, `.css` ou `.js` para esta fase.
- [ ] Sem GitHub Pages.

## Revisão final

- [ ] O fluxo principal pode ser explicado em voz alta.
- [ ] Estados antigos são limpos antes de estados novos.
- [ ] O mini projeto continua didático e controlado.
- [ ] O código de exemplo está dentro do Markdown.
