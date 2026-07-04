# Modelo mental de integração

## Antes do código

Pense em estado antes de pensar em linhas de JavaScript. O fluxo saudável é dados → lógica → UI. Outra forma de enxergar é entrada → processamento → saída visual.

## Perguntas de integração

- Qual é a origem dos dados?
- Quais eventos existem?
- Quais estados podem aparecer?
- Quais elementos do DOM mudam?
- Quais funções são necessárias?
- Qual é o menor fluxo funcional possível?

## Exemplo preenchido

- Objetivo da tela: listar usuários e permitir busca por nome.
- Origem dos dados: API pública de usuários sem token.
- Eventos existentes: carregamento inicial, digitação no input e clique em limpar.
- Estados possíveis: loading, erro, vazio e sucesso.
- Elementos do DOM: lista, campo de busca, botão limpar e área de mensagem.
- Funções necessárias: `init`, `fetchUsers`, `loadUsers`, `renderUsers`, `handleSearch`, `showLoading`, `showError`, `showEmpty`, `clearUI`.
- Fluxo principal: carregar dados, salvar lista original, renderizar sucesso, filtrar localmente quando o usuário digitar.
- Cuidados técnicos: não buscar a API a cada tecla, não apagar a lista original e não deixar mensagem antiga na tela.

Evolua o projeto pequeno adicionando uma responsabilidade por vez. Se uma nova função deixa o fluxo mais claro, ela é investimento; se ela esconde uma mistura de responsabilidades, revise.
