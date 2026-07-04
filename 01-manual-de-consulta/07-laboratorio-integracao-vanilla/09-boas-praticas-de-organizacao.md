# Boas práticas de organização

Prefira funções pequenas com nomes que expliquem intenção: `loadUsers`, `fetchUsers`, `renderUsers`, `applyFilter`, `clearFeedback`. Uma boa ordem de leitura é: estado inicial, elementos do DOM, `init`, eventos, funções assíncronas, regras e renderização.

Evite acoplamento: a função que busca dados não deve montar HTML; a função que renderiza não deve chamar API; a função de filtro não deve alterar a lista original. Divida um fluxo grande perguntando: esta linha pertence à entrada, ao processamento ou à saída visual?

Código fácil de revisar tem menos surpresa. O revisor deve conseguir abrir o arquivo, encontrar a inicialização, seguir o evento principal e entender onde cada estado visual é tratado.
