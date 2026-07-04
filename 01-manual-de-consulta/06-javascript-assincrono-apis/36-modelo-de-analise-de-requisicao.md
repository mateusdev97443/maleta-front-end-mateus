# Modelo de análise de requisição

Antes de codar uma requisição, responda este roteiro.

## Perguntas obrigatórias

- De onde vêm os dados?
- A API é pública?
- Precisa de token?
- Posso usar essa API no front-end sem expor segredo?
- Qual URL será chamada?
- Qual método HTTP será usado?
- O que acontece enquanto carrega?
- O que acontece se der erro de rede?
- O que acontece se vier status HTTP de erro?
- O que acontece se vier lista vazia?
- Qual elemento do DOM será atualizado?
- Qual botão deve ser desabilitado?
- Como o usuário será informado?
- Quais funções preciso separar?
- Qual é o menor fluxo funcional possível?

## Modelo preenchido

Cenário: carregar usuários públicos para uma lista.

- Dados: vêm de `https://dummyjson.com/users`.
- API pública: sim, endpoint de demonstração sem token.
- Token: não precisa e não deve ser criado.
- Uso no front-end: permitido para estudo porque não expõe segredo.
- Método: GET.
- Loading: mostrar texto "Carregando usuários...".
- Erro de rede: exibir "Não foi possível carregar usuários agora.".
- Status HTTP de erro: verificar `response.ok` e tratar como falha.
- Lista vazia: mostrar "Nenhum usuário encontrado.".
- DOM atualizado: elemento `ul` de resultados e parágrafo de status.
- Botão desabilitado: botão "Carregar usuários" durante a requisição.
- Funções separadas: `buscarUsuarios`, `renderizarUsuarios`, `mostrarErro`, `definirLoading`.
- Menor fluxo funcional: clicar, carregar, validar, converter JSON, renderizar nomes.

## Decisão antes do código

Se qualquer resposta envolver token secreto, API privada ou autenticação real, o fluxo não pertence a esta fase. Para a Maleta neste nível, prefira endpoints públicos, dados fictícios ou simulações locais.
