# Mini desafios

Os mini desafios integram vários conceitos, mas continuam pequenos. Não transforme nenhum deles em aplicação grande.

## 1. Card de usuário carregado por API

### Contexto

Uma área de perfil precisa mostrar dados básicos de um usuário público.

### Objetivo

Carregar e renderizar um card com nome, e-mail e cidade.

### Requisitos obrigatórios

- Usar API pública sem token.
- Mostrar loading.
- Tratar erro.
- Ter botão `Tentar novamente`.

### Restrições

- Sem login.
- Sem backend próprio.
- Sem armazenamento em banco.

### Critérios de qualidade

- Função separada para buscar.
- Função separada para renderizar.
- Mensagem de erro amigável.

### Evolução futura

Permitir escolher outro usuário por ID, sem implementar agora.

## 2. Lista de posts

### Contexto

Uma página precisa exibir títulos de posts de demonstração.

### Objetivo

Renderizar uma lista simples de posts.

### Requisitos obrigatórios

- Validar `response.ok`.
- Limpar lista anterior.
- Tratar lista vazia.

### Restrições

- Sem paginação avançada.
- Sem roteamento.
- Sem SPA.

### Critérios de qualidade

- Criar itens com `createElement`.
- Não duplicar resultados.
- Mostrar status de carregamento.

### Evolução futura

Adicionar limite de itens exibidos.

## 3. Buscador em dados carregados

### Contexto

A lista de usuários já foi carregada uma vez.

### Objetivo

Buscar usuários por nome sem nova requisição.

### Requisitos obrigatórios

- Preservar lista original.
- Normalizar termo digitado.
- Renderizar mensagem de nenhum resultado.

### Restrições

- Não chamar API a cada tecla.
- Não usar biblioteca externa.

### Critérios de qualidade

- Busca previsível.
- Código curto.
- Estado simples em uma variável.

### Evolução futura

Adicionar debounce em outro momento.

## 4. Filtro de usuários por cidade

### Contexto

Usuários possuem cidade no endereço.

### Objetivo

Permitir filtrar a lista por cidade.

### Requisitos obrigatórios

- Campo de texto ou select simples.
- Botão filtrar.
- Botão limpar filtro.

### Restrições

- Sem gerenciamento avançado de estado.
- Sem nova chamada de API para filtrar.

### Critérios de qualidade

- Lista original preservada.
- Mensagem quando a cidade não for encontrada.

### Evolução futura

Popular um select com cidades únicas.

## 5. Tela com loading, erro e tentativa novamente

### Contexto

Uma requisição pode falhar e o usuário precisa entender o que fazer.

### Objetivo

Criar um fluxo completo de carregamento, erro e nova tentativa.

### Requisitos obrigatórios

- Loading visível.
- Erro amigável.
- Botão desabilitado durante a requisição.
- Botão para tentar novamente.

### Restrições

- Não usar `location.reload`.
- Não criar roteamento.

### Critérios de qualidade

- `finally` restaura a interface.
- O erro anterior é limpo antes de nova tentativa.

### Evolução futura

Registrar número de tentativas apenas visualmente.
