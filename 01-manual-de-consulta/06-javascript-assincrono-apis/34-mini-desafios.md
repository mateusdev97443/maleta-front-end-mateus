# Mini desafios

## 1. Card de usuário carregado por API

Contexto: uma área de perfil precisa carregar um usuário público. Objetivo: exibir nome, e-mail e cidade. Requisitos obrigatórios: fetch, loading, erro e botão tentar novamente. Restrições: sem login, token ou backend. Critérios de qualidade: funções separadas e mensagem de erro humana. Ideia de evolução futura: permitir escolher outro id, sem implementar agora.

## 2. Lista de posts

Contexto: uma página precisa listar títulos de posts. Objetivo: renderizar uma lista simples. Requisitos obrigatórios: limpar lista anterior, tratar array vazio e validar status. Restrições: sem paginação complexa ou roteamento. Critérios de qualidade: cada item deve ser criado com `createElement`. Ideia de evolução futura: limitar quantidade exibida.

## 3. Buscador em dados carregados

Contexto: usuários já foram carregados uma vez. Objetivo: buscar por nome localmente. Requisitos obrigatórios: preservar lista original, normalizar texto e renderizar resultado vazio. Restrições: não chamar API a cada tecla neste desafio. Critérios de qualidade: busca previsível e simples. Ideia de evolução futura: adicionar debounce depois de dominar o básico.

## 4. Filtro de usuários por cidade

Contexto: a lista contém endereço com cidade. Objetivo: filtrar usuários por cidade digitada. Requisitos obrigatórios: campo de texto, botão filtrar e botão limpar. Restrições: sem estado global complexo. Critérios de qualidade: nomes claros e feedback quando não encontrar cidade. Ideia de evolução futura: transformar cidades em select.

## 5. Estado de loading e erro

Contexto: uma tela falha às vezes por rede ou status. Objetivo: deixar claro o estado atual. Requisitos obrigatórios: mensagem inicial, loading, sucesso e erro. Restrições: não exibir erro técnico ao usuário. Critérios de qualidade: `finally` restaura interface. Ideia de evolução futura: criar componente visual reutilizável no futuro.

## 6. Botão tentar novamente

Contexto: uma requisição pode falhar. Objetivo: permitir nova tentativa sem recarregar a página. Requisitos obrigatórios: botão chama a mesma função de carregamento, desabilita durante requisição e limpa erro anterior. Restrições: sem recarregar com `location.reload`. Critérios de qualidade: fluxo curto e fácil de ler. Ideia de evolução futura: contar tentativas.

## 7. Renderização de lista vazia

Contexto: filtros podem não encontrar resultados. Objetivo: mostrar mensagem de lista vazia. Requisitos obrigatórios: não deixar área em branco, não mostrar erro falso e permitir limpar filtro. Restrições: sem template complexo. Critérios de qualidade: usuário entende que a busca funcionou, mas não encontrou itens. Ideia de evolução futura: sugerir termos parecidos.
