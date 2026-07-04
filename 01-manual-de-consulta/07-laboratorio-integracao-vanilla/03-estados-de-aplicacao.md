# Estados de aplicação

## Por que estados existem

Uma interface dinâmica nunca deveria deixar o usuário adivinhar o que aconteceu. Estados são respostas visuais para momentos diferentes do fluxo: carregando, falhou, não encontrou dados ou renderizou com sucesso.

## Loading

O loading informa que uma ação está em andamento. Ele evita a sensação de tela travada e também pode justificar desabilitar botões temporariamente.

## Erro

Erro não é lista vazia. Erro significa que a operação falhou: API indisponível, resposta inválida, status HTTP inesperado ou problema de conexão. A mensagem deve orientar a próxima ação, como tentar novamente.

## Vazio

Vazio significa que a operação funcionou, mas não há itens para mostrar. Em uma busca local, por exemplo, nenhum resultado para `ana` não é falha do sistema.

## Sucesso

Sucesso é o estado em que dados válidos foram transformados em UI. Mesmo nesse estado, a interface precisa estar limpa: sem mensagem antiga de erro e sem loading visível.

## Exemplo de controle no DOM

```js
function setState(state, payload = {}) {
  clearUI();

  if (state === "loading") {
    status.textContent = "Carregando...";
    return;
  }

  if (state === "error") {
    status.textContent = payload.message || "Não foi possível carregar.";
    return;
  }

  if (state === "empty") {
    status.textContent = "Nenhum resultado encontrado.";
    return;
  }

  if (state === "success") {
    renderItems(payload.items);
  }
}
```

## Evitando tela silenciosa

Sempre que um fluxo assíncrono começa, mostre loading. Sempre que termina, substitua por erro, vazio ou sucesso. Limpar estado antigo antes do novo impede mensagens contraditórias, como lista renderizada com um erro antigo acima.
