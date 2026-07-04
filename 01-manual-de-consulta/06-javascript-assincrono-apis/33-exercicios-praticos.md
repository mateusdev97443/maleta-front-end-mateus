# Exercícios práticos

Os exercícios abaixo são progressivos. Faça um por vez e só avance quando conseguir explicar o fluxo em voz alta.

## 1. Temporizador com feedback

### Objetivo

Entender a diferença entre iniciar uma ação e receber o resultado depois.

### Enunciado

Crie um botão que mostra `Aguardando...` ao ser clicado e troca para `Pronto` após 1 segundo.

### Requisitos

- Usar `setTimeout`.
- Atualizar um elemento do DOM.
- Não travar a página.

### Critério de conclusão

A mensagem aparece imediatamente no clique e muda após o tempo definido.

### Dica opcional

Use um parágrafo com `id="status"`.

## 2. Promise manual com sucesso

### Objetivo

Criar e consumir uma Promise simples.

### Enunciado

Crie uma Promise que resolve com `Dados simulados carregados` após 1 segundo.

### Requisitos

- Usar `new Promise`.
- Chamar `resolve`.
- Consumir com `.then`.

### Critério de conclusão

A frase resolvida aparece no console ou na tela.

### Dica opcional

Coloque o `resolve` dentro de um `setTimeout`.

## 3. Promise manual com erro

### Objetivo

Praticar fluxo de falha.

### Enunciado

Altere o exercício anterior para rejeitar com uma mensagem de erro.

### Requisitos

- Usar `reject`.
- Consumir com `.catch`.
- Exibir mensagem amigável.

### Critério de conclusão

O erro técnico não aparece diretamente na interface.

### Dica opcional

Use uma variável booleana para alternar sucesso e falha.

## 4. then/catch/finally com loading

### Objetivo

Organizar sucesso, erro e finalização.

### Enunciado

Mostre loading antes de consumir uma Promise e esconda no `.finally`.

### Requisitos

- Usar `.then` para sucesso.
- Usar `.catch` para erro.
- Usar `.finally` para remover loading.

### Critério de conclusão

O loading desaparece tanto em sucesso quanto em falha.

### Dica opcional

Teste primeiro com sucesso e depois com rejeição.

## 5. async/await básico

### Objetivo

Reescrever um fluxo assíncrono com leitura sequencial.

### Enunciado

Transforme uma Promise consumida com `.then` em uma função `async` com `await`.

### Requisitos

- Criar função `async`.
- Usar `await` dentro dela.
- Manter o mesmo resultado final.

### Critério de conclusão

O código funciona e você consegue apontar onde a função pausa.

### Dica opcional

Comece com uma Promise manual antes de usar `fetch`.

## 6. Fetch básico

### Objetivo

Buscar dados de uma API pública sem token.

### Enunciado

Busque `https://dummyjson.com/users/1` e mostre o primeiro nome do usuário.

### Requisitos

- Usar `fetch`.
- Usar `await response.json()`.
- Atualizar o DOM com `textContent`.

### Critério de conclusão

O nome aparece na página após a requisição.

### Dica opcional

Use `firstName` no objeto retornado.

## 7. Tratamento de status HTTP

### Objetivo

Evitar renderizar resposta inválida.

### Enunciado

Antes de converter JSON, verifique `response.ok`.

### Requisitos

- Usar `if (!response.ok)`.
- Lançar `Error` manualmente.
- Tratar no `catch`.

### Critério de conclusão

Uma URL inexistente mostra mensagem amigável.

### Dica opcional

Use `response.status` no erro técnico do console.

## 8. Botão desabilitado

### Objetivo

Evitar múltiplas requisições pelo mesmo clique.

### Enunciado

Desabilite o botão enquanto os dados carregam.

### Requisitos

- `disabled = true` antes da busca.
- `disabled = false` no `finally`.
- Texto do botão pode mudar durante a espera.

### Critério de conclusão

Cliques repetidos não iniciam várias buscas simultâneas.

### Dica opcional

Teste clicando rapidamente várias vezes.

## 9. Renderização de lista

### Objetivo

Renderizar arrays vindos de API.

### Enunciado

Busque usuários e renderize uma lista com nome e e-mail.

### Requisitos

- Limpar lista anterior.
- Usar `createElement`.
- Tratar lista vazia.

### Critério de conclusão

A lista não duplica ao carregar novamente.

### Dica opcional

Crie uma função `renderizarUsuarios`.

## 10. Busca local por nome

### Objetivo

Filtrar dados já carregados.

### Enunciado

Depois de carregar usuários, permita buscar por nome digitado.

### Requisitos

- Guardar lista original.
- Usar `filter` e `includes`.
- Normalizar com `toLowerCase`.

### Critério de conclusão

Termo vazio volta a mostrar a lista completa.

### Dica opcional

Não chame `fetch` novamente neste exercício.

## 11. Filtro local por cidade

### Objetivo

Praticar filtro com critério específico.

### Enunciado

Filtre usuários pela cidade do endereço.

### Requisitos

- Ler `usuario.address.city`.
- Mostrar mensagem se não houver resultado.
- Criar botão para limpar filtro.

### Critério de conclusão

O filtro funciona sem perder a lista original.

### Dica opcional

Sempre filtre a partir de `usuariosCarregados`.
