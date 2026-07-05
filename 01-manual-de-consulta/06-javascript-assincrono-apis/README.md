---
title: JavaScript Assíncrono, Fetch e APIs
permalink: /01-manual-de-consulta/06-javascript-assincrono-apis/
---

# Fase 7 — JavaScript Assíncrono, Fetch e APIs

## Objetivo

Ensinar como o JavaScript lida com operações que não acontecem imediatamente e como o Front-end pode buscar dados externos com segurança, clareza e controle.

## Pré-requisitos

- JavaScript fundamentos.
- DOM e Eventos.
- Formulários e interações simples.
- Leitura básica de objetos e arrays.

## O que esta fase ensina

Programação assíncrona, callbacks, Promises, `then`, `catch`, `finally`, `async`, `await`, `try/catch`, HTTP básico, APIs, `fetch`, JSON, loading, erro, mensagens para usuário, botão desabilitado, renderização no DOM, busca e filtro simples.

## O que esta fase não ensina

Não ensina frameworks, React, Vue, Angular, TypeScript, backend próprio, banco de dados, autenticação real, tokens secretos, APIs privadas, npm, bundlers, roteamento, SPA complexa, deploy ou GitHub Pages.

## Observações importantes

- Todo conteúdo usa JavaScript vanilla.
- Nenhum exemplo depende de framework.
- Nenhum backend próprio é criado.
- Nenhum token secreto é usado.
- GitHub Pages não é ativado nesta fase.

## Ordem recomendada de estudo

1. [01 introducao ao javascript assincrono](01-introducao-ao-javascript-assincrono.html)
2. [02 codigo sincrono vs assincrono](02-codigo-sincrono-vs-assincrono.html)
3. [03 por que o navegador nao pode travar](03-por-que-o-navegador-nao-pode-travar.html)
4. [04 callbacks no contexto assincrono](04-callbacks-no-contexto-assincrono.html)
5. [05 settimeout como exemplo didatico](05-settimeout-como-exemplo-didatico.html)
6. [06 o que sao promises](06-o-que-sao-promises.html)
7. [07 estados de uma promise](07-estados-de-uma-promise.html)
8. [08 then catch e finally](08-then-catch-e-finally.html)
9. [09 encadeamento de promises](09-encadeamento-de-promises.html)
10. [10 async e await](10-async-e-await.html)
11. [11 try catch com async await](11-try-catch-com-async-await.html)
12. [12 comparando then catch com async await](12-comparando-then-catch-com-async-await.html)
13. [13 o que e uma api](13-o-que-e-uma-api.html)
14. [14 o que e http no front end](14-o-que-e-http-no-front-end.html)
15. [15 request e response](15-request-e-response.html)
16. [16 introducao ao fetch](16-introducao-ao-fetch.html)
17. [17 lendo respostas com response json](17-lendo-respostas-com-response-json.html)
18. [18 tratando status http](18-tratando-status-http.html)
19. [19 loading no front end](19-loading-no-front-end.html)
20. [20 tratamento de erros em requisicoes](20-tratamento-de-erros-em-requisicoes.html)
21. [21 mensagens para o usuario](21-mensagens-para-o-usuario.html)
22. [22 desabilitando botao durante carregamento](22-desabilitando-botao-durante-carregamento.html)
23. [23 consumindo api publica simples](23-consumindo-api-publica-simples.html)
24. [24 renderizando dados no dom](24-renderizando-dados-no-dom.html)
25. [25 renderizando listas de resultados](25-renderizando-listas-de-resultados.html)
26. [26 busca simples com dados de api](26-busca-simples-com-dados-de-api.html)
27. [27 filtro simples com dados carregados](27-filtro-simples-com-dados-carregados.html)
28. [28 organizando funcoes assincronas](28-organizando-funcoes-assincronas.html)
29. [29 erros comuns em fetch e apis](29-erros-comuns-em-fetch-e-apis.html)
30. [30 boas praticas em javascript assincrono](30-boas-praticas-em-javascript-assincrono.html)
31. [31 snippets javascript assincrono fetch apis](31-snippets-javascript-assincrono-fetch-apis.html)
32. [32 checklist final](32-checklist-final.html)
33. [33 exercicios praticos](33-exercicios-praticos.html)
34. [34 mini desafios](34-mini-desafios.html)
35. [35 perguntas de revisao](35-perguntas-de-revisao.html)
36. [36 modelo de analise de requisicao](36-modelo-de-analise-de-requisicao.html)
37. [37 padrao profissional fetch apis](37-padrao-profissional-fetch-apis.html)

## Padrão esperado de estudo

Leia o conceito, execute mentalmente a ordem do código, identifique loading, sucesso e erro, depois adapte o exemplo em uma pequena página HTML local.

## Checklist resumido da fase

- [ ] Entendo por que o navegador não deve travar.
- [ ] Sei diferenciar síncrono e assíncrono.
- [ ] Sei tratar sucesso, erro e finalização.
- [ ] Sei usar `fetch` com `response.json()`.
- [ ] Verifico status HTTP antes de confiar nos dados.
- [ ] Mostro loading e mensagens amigáveis.
- [ ] Não exponho tokens nem uso APIs privadas.
