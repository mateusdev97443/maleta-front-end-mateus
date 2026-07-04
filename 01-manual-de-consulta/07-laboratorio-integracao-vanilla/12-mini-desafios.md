# Mini desafios

## 1. Transformar lista em cards
Contexto: uma lista simples já renderiza nomes. Objetivo: exibir cards com nome, e-mail e cidade. Requisitos: manter função `renderUsers`; restrições: não buscar API novamente. Critério: todos os usuários aparecem em cards. Dica: monte uma template string por usuário.

## 2. Adicionar botão tentar novamente
Contexto: a API pode falhar. Objetivo: permitir nova tentativa. Requisitos: botão chama o mesmo `loadUsers`; restrições: não registrar evento dentro do `catch`. Critério: um clique refaz o fluxo. Dica: registre em `init`.

## 3. Criar busca por nome
Contexto: dados já carregados. Objetivo: filtrar enquanto digita. Requisitos: usar `input`, `trim` e `toLowerCase`; restrições: sem nova requisição. Critério: resultados mudam dinamicamente. Dica: preserve lista original.

## 4. Criar filtro por cidade
Contexto: usuários possuem endereço. Objetivo: filtrar por cidade. Requisitos: estado vazio quando não houver resultado; restrições: não alterar fonte. Critério: limpar filtro restaura todos. Dica: use `filteredUsers`.

## 5. Criar detalhe ao clicar
Contexto: cards estão na tela. Objetivo: mostrar dados do item escolhido. Requisitos: capturar `id`; restrições: não renderizar a lista de novo sem necessidade. Critério: painel exibe detalhe correto. Dica: `find` ajuda.

## 6. Tratar lista vazia
Contexto: filtro pode não encontrar nada. Objetivo: mostrar mensagem clara. Requisitos: limpar lista antes da mensagem; restrições: não chamar erro. Critério: vazio não parece falha técnica. Dica: compare `length`.

## 7. Limpar erro antigo
Contexto: usuário tenta novamente após falha. Objetivo: remover mensagem antiga no novo carregamento. Requisitos: `clearUI` no início; restrições: não apagar dados de estado sem querer. Critério: loading aparece sem erro antigo. Dica: separe DOM de dados.

## 8. Separar função gigante
Contexto: uma função faz tudo. Objetivo: dividir em busca, regra e render. Requisitos: mínimo três funções; restrições: manter comportamento. Critério: leitura fica linear. Dica: nomeie por intenção.

## 9. Impedir múltiplos cliques durante loading
Contexto: botão dispara várias requisições. Objetivo: desabilitar durante carregamento. Requisitos: alternar `disabled`; restrições: reabilitar em sucesso e erro. Critério: clique repetido não duplica fluxo. Dica: use função `setLoading`.

## 10. Preservar lista original
Contexto: filtros sucessivos somem com dados. Objetivo: manter fonte intacta. Requisitos: `originalUsers` e lista filtrada; restrições: não reatribuir a original no filtro. Critério: limpar filtro restaura tudo. Dica: derive resultados, não destrua fonte.
