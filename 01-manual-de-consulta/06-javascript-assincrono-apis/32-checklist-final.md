# Checklist final

Use este checklist antes de considerar pronto qualquer código assíncrono com Fetch/APIs.

## Requisição

- [ ] A URL é pública e adequada para uso no Front-end?
- [ ] Não existe token secreto no código?
- [ ] Não existe API privada sendo consumida diretamente?
- [ ] O método HTTP usado faz sentido, especialmente GET para leitura?
- [ ] O status HTTP é verificado com `response.ok`?
- [ ] `response.json()` está depois da resposta e antes de acessar os dados?

## Estados da interface

- [ ] Existe loading enquanto a requisição acontece?
- [ ] O loading desaparece tanto no sucesso quanto no erro?
- [ ] O usuário recebe feedback claro?
- [ ] O botão é desabilitado quando cliques repetidos causariam problema?
- [ ] O botão volta ao normal no `finally` ou fluxo equivalente?

## Dados e renderização

- [ ] Dados inexistentes são tratados?
- [ ] Lista vazia é tratada com mensagem própria?
- [ ] Resultado anterior é limpo antes de renderizar o novo?
- [ ] O DOM é atualizado apenas nos elementos necessários?
- [ ] O código não monta uma SPA complexa?

## Organização

- [ ] Funções estão organizadas por responsabilidade?
- [ ] Nomes como `buscarUsuarios` e `renderizarUsuarios` são claros?
- [ ] O evento não concentra fetch, validação, renderização e erro ao mesmo tempo?
- [ ] Não há dependência de framework?
- [ ] Não há código desnecessariamente complexo?

## Revisão final

- [ ] O fluxo de sucesso foi testado manualmente?
- [ ] O fluxo de erro foi simulado?
- [ ] O fluxo de lista vazia foi considerado?
- [ ] O conteúdo permanece em JavaScript vanilla?
