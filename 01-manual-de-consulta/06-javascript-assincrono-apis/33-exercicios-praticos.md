# Exercícios práticos

## 1. Temporizador simples

Objetivo: praticar espera controlada. Enunciado: ao clicar em um botão, mostre "Aguardando..." e depois "Pronto". Requisitos: usar `setTimeout` e atualizar o DOM. Critério de conclusão: a mensagem muda na ordem correta. Dica opcional: comece selecionando apenas um parágrafo.

## 2. Promise manual simples

Objetivo: entender resultado futuro. Enunciado: crie uma Promise que resolve com "Dados carregados" após 1 segundo. Requisitos: usar `resolve`. Critério de conclusão: a frase aparece no console pelo `then`. Dica opcional: simule falha depois com `reject`.

## 3. then/catch

Objetivo: separar sucesso e erro. Enunciado: crie uma função que às vezes resolve e às vezes rejeita. Requisitos: usar `.then()` e `.catch()`. Critério de conclusão: sucesso e falha exibem mensagens diferentes. Dica opcional: use uma variável booleana.

## 4. async/await

Objetivo: reescrever fluxo assíncrono. Enunciado: transforme o exercício anterior em função `async`. Requisitos: usar `await`. Critério de conclusão: o resultado continua igual, mas o código fica sequencial. Dica opcional: mantenha a Promise manual.

## 5. try/catch

Objetivo: tratar falha com clareza. Enunciado: envolva o `await` em `try/catch`. Requisitos: mensagem amigável no DOM. Critério de conclusão: erro não quebra a página. Dica opcional: registre o erro técnico no console.

## 6. Fetch básico

Objetivo: buscar dados públicos. Enunciado: carregue um usuário de `https://dummyjson.com/users/1`. Requisitos: usar `fetch` e `response.json()`. Critério de conclusão: nome aparece na página. Dica opcional: exiba também e-mail.

## 7. Tratamento de erro

Objetivo: validar resposta. Enunciado: verifique `response.ok` antes de converter JSON. Requisitos: lançar erro em status inválido. Critério de conclusão: uma URL inexistente mostra mensagem amigável. Dica opcional: teste com `/users/9999` e observe o retorno.

## 8. Loading

Objetivo: informar espera. Enunciado: mostre "Carregando..." enquanto o fetch acontece. Requisitos: remover loading no sucesso e no erro. Critério de conclusão: loading nunca fica preso. Dica opcional: use `finally`.

## 9. Botão desabilitado

Objetivo: evitar cliques repetidos. Enunciado: desabilite o botão durante a requisição. Requisitos: reabilitar no final. Critério de conclusão: cliques rápidos não disparam múltiplas buscas visíveis. Dica opcional: altere o texto do botão.

## 10. Renderização de dados

Objetivo: preencher um card. Enunciado: renderize nome, e-mail e cidade de um usuário. Requisitos: usar `textContent`. Critério de conclusão: nenhum HTML sensível é injetado. Dica opcional: limpe o card antes da nova busca.

## 11. Lista de resultados

Objetivo: renderizar array. Enunciado: carregue `/users` e crie uma lista de nomes. Requisitos: tratar array vazio. Critério de conclusão: a lista não duplica ao clicar novamente. Dica opcional: use `innerHTML = ""` antes do loop.

## 12. Busca simples

Objetivo: encontrar item por texto. Enunciado: depois de carregar usuários, busque por nome digitado. Requisitos: usar `filter` e `includes`. Critério de conclusão: termo vazio volta a mostrar todos. Dica opcional: normalize com `toLowerCase()`.

## 13. Filtro local

Objetivo: evitar requisição desnecessária. Enunciado: carregue posts e filtre por `userId`. Requisitos: guardar a lista original em uma variável. Critério de conclusão: o filtro não chama `fetch` novamente. Dica opcional: mostre mensagem quando não houver resultado.
