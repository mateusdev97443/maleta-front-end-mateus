# Erros reais de integração

## Async fora de ordem

Problema: uma resposta antiga chega depois de uma nova e sobrescreve a tela. Acontece quando várias buscas são disparadas sem controle. Exemplo: dois cliques rápidos em recarregar. Correção: desabilite o botão durante loading ou compare a requisição atual. Evite permitindo uma ação por vez.

## Render duplicado

Problema: os mesmos cards aparecem repetidos. Acontece quando `innerHTML +=` é usado sem limpar a lista. Exemplo: `list.innerHTML += card`. Correção: use `list.innerHTML = cards.join("")`. Evite limpando resultado anterior.

## Estado quebrado

Problema: loading e erro aparecem juntos. Acontece quando cada função altera só um pedaço da UI. Exemplo: `showError` não remove loading. Correção: chame `clearUI` antes do novo estado. Evite centralizando transições.

## DOM inconsistente

Problema: o código tenta alterar elemento inexistente. Acontece por seletor errado ou HTML imaginado. Exemplo: `document.querySelector("#cards").innerHTML = html` quando não há `#cards`. Correção: confira seletores e trate ausência. Evite nomeando IDs com clareza.

## Variável global bagunçada

Problema: qualquer função altera qualquer dado. Acontece quando tudo fica solto no escopo global. Exemplo: `users = users.filter(...)`. Correção: use estado simples e preserve fonte original. Evite mutações sem intenção.

## Filtro alterando lista original

Problema: limpar filtro não restaura dados. Acontece quando o resultado filtrado substitui a fonte. Exemplo: `users = users.filter(...)`. Correção: crie `filteredUsers`. Evite tratando a lista original como somente leitura.

## Loading que não some

Problema: usuário vê carregamento infinito. Acontece quando o `catch` mostra erro sem limpar loading. Exemplo: `showError()` isolado. Correção: limpar estado em sucesso e falha. Evite criando caminho final para todos os resultados.

## Erro antigo permanecendo

Problema: dados novos aparecem com mensagem de falha antiga. Acontece por não limpar feedback antes de tentar novamente. Correção: `clearFeedback()` no início do fluxo. Evite mensagens independentes sem controle.

## Evento registrado mais de uma vez

Problema: um clique executa a mesma ação várias vezes. Acontece quando `addEventListener` fica dentro de função chamada repetidamente. Correção: registre eventos em `init`. Evite colocar listener dentro de render.

## Função gigante que faz tudo

Problema: buscar, filtrar, validar e renderizar ficam inseparáveis. Acontece por pressa. Correção: dividir em funções por responsabilidade. Evite aceitando crescimento desordenado.

## Buscar API de novo sem necessidade

Problema: cada filtro dispara rede. Acontece por confundir busca local com busca remota. Correção: carregue uma vez e filtre array local. Evite requisições em evento `input` quando os dados já existem.

## Esquecer de limpar resultado anterior

Problema: UI mistura estado antigo e novo. Acontece quando a renderização só adiciona. Correção: limpar lista, detalhe e mensagens antes do novo desenho. Evite sempre iniciando transição com limpeza explícita.
