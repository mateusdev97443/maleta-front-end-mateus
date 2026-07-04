# Mensagens para o usuário

Mensagens de interface explicam o estado da ação em linguagem humana. Elas devem orientar sem assustar e sem expor detalhes internos.

## Tipos de mensagem

- Inicial: "Clique para carregar usuários.";
- Loading: "Carregando usuários...";
- Sucesso: "Usuários carregados.";
- Lista vazia: "Nenhum usuário encontrado.";
- Erro: "Não foi possível carregar agora. Tente novamente.".

## Exemplo

```js
function mostrarMensagem(texto, tipo) {
  mensagem.textContent = texto;
  mensagem.className = `mensagem ${tipo}`;
}

mostrarMensagem("Carregando usuários...", "info");
```

## Mensagem técnica não é mensagem de usuário

Evite exibir textos como `TypeError: Failed to fetch`. Isso ajuda o desenvolvedor, mas não ajuda quem usa a página.

## Aplicação com erro

```js
catch (erro) {
  mostrarMensagem("Não conseguimos carregar os dados. Tente novamente.", "erro");
  console.error(erro);
}
```

## Erros comuns

- Deixar a tela muda após falha.
- Usar termos técnicos sem contexto.
- Mostrar sucesso quando a lista veio vazia.

## Boa prática

Cada estado precisa ter uma frase curta e específica. Mensagem boa responde: o que aconteceu e o que o usuário pode fazer.

## Exercício rápido

Crie quatro mensagens para uma busca de posts: inicial, carregando, vazia e erro.
