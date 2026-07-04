# Desabilitando botão durante carregamento

Desabilitar o botão durante uma requisição evita cliques repetidos e múltiplas chamadas desnecessárias.

## Por que isso importa

Se o usuário clica várias vezes em "Carregar", a página pode duplicar resultados, competir requisições e criar estados confusos.

## Exemplo

```js
async function aoClicar() {
  botao.disabled = true;
  botao.textContent = "Carregando...";

  try {
    const usuarios = await buscarUsuarios();
    renderizarUsuarios(usuarios);
  } catch (erro) {
    mostrarErro();
  } finally {
    botao.disabled = false;
    botao.textContent = "Carregar usuários";
  }
}
```

## Quando desabilitar

Desabilite quando a ação não deve ocorrer em paralelo: envio de formulário, busca que substitui resultado, tentativa de recarregar uma mesma lista.

## Quando ter cuidado

Não desabilite toda a página sem motivo. Bloqueie apenas o controle relacionado à ação em andamento.

## Erros comuns

- Desabilitar o botão e não reabilitar no erro.
- Mudar o texto do botão e não restaurar.
- Permitir dois cliques antes de iniciar o loading.

## Boa prática

Altere `disabled` antes do primeiro `await` e restaure no `finally`.

## Exercício rápido

Implemente um botão que não permite nova busca enquanto a anterior está em andamento.
