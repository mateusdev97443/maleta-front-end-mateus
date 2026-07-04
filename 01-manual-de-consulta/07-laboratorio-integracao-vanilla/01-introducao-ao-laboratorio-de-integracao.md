# Introdução ao laboratório de integração

## Da teoria isolada para o fluxo completo

Saber HTML, CSS, eventos e Fetch separadamente é como conhecer ferramentas dentro de uma caixa. Integrar é escolher a ferramenta certa, na ordem certa, para resolver uma tela real: o usuário clica, o código busca ou filtra dados, a lógica decide o que mostrar e a interface responde sem ficar silenciosa.

Neste laboratório, o objetivo não é decorar comandos. O objetivo é montar mini sistemas controlados, pequenos o suficiente para entender cada etapa e reais o suficiente para revelar problemas comuns: loading que não some, erro antigo que continua na tela, lista vazia tratada como falha ou filtro que destrói os dados originais.

## Conceitos separados não garantem uma tela pronta

Uma pessoa pode saber selecionar um elemento com `querySelector`, fazer um `fetch` e criar um card com template string. Ainda assim, pode travar ao decidir quando limpar a lista, onde mostrar o erro, como impedir render duplicado e como organizar as funções. A integração nasce dessas decisões.

## O que significa integrar

Integrar HTML, CSS, DOM, eventos e Fetch significa conectar responsabilidades:

- o HTML oferece pontos de entrada e saída da interface;
- o CSS garante hierarquia visual e adaptação responsiva;
- o JavaScript escuta eventos e coordena o fluxo;
- o Fetch busca dados externos;
- o DOM recebe a representação visual do estado atual.

## Como pensar antes de montar a tela

Antes do código, responda: qual é a origem dos dados, quais ações o usuário pode fazer, quais estados podem aparecer e quais elementos do DOM precisam mudar. Essa análise evita improviso e reduz funções gigantes.

## Limites da fase

A fase trabalha com exemplos didáticos em Markdown. Não existe app completo, backend, roteamento, deploy ou framework. O treino é propositalmente vanilla para Mateus enxergar o mecanismo da interface sem camadas adicionais.

## Por que um projeto pequeno precisa de organização

Projeto pequeno desorganizado vira confuso rápido. Se uma função busca dados, filtra, monta HTML, registra evento e mostra erro, qualquer ajuste vira risco. Organização desde cedo cria leitura clara: iniciar, buscar, tratar, renderizar e reagir.
