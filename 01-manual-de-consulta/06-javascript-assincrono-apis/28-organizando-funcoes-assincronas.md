# Organizando funções assíncronas

Organizar funções evita eventos gigantes e facilita localizar problemas. Cada função deve ter uma responsabilidade clara.

## Separação recomendada

```js
async function buscarUsuarios() {
  const response = await fetch("https://dummyjson.com/users");
  if (!response.ok) throw new Error("Falha ao buscar usuários");
  const dados = await response.json();
  return dados.users;
}

function renderizarUsuarios(usuarios) {
  // atualiza a lista no DOM
}

function mostrarErro(mensagemErro) {
  mensagem.textContent = mensagemErro;
}

function definirCarregando(estaCarregando) {
  botao.disabled = estaCarregando;
  loading.hidden = !estaCarregando;
}
```

## Evento como coordenador

```js
botao.addEventListener("click", async () => {
  definirCarregando(true);

  try {
    const usuarios = await buscarUsuarios();
    renderizarUsuarios(usuarios);
  } catch (erro) {
    mostrarErro("Não foi possível carregar usuários.");
    console.error(erro);
  } finally {
    definirCarregando(false);
  }
});
```

## Por que isso melhora

Quando algo quebra, você sabe onde procurar: API, DOM, mensagem ou estado visual.

## Erros comuns

- Colocar fetch, criação de elementos, mensagens e botão dentro do mesmo bloco enorme.
- Usar nomes vagos como `fazerCoisa`.
- Criar abstrações avançadas antes de dominar o fluxo básico.

## Boa prática

Comece simples: uma função para buscar, uma para renderizar, uma para erro e uma para loading.

## Exercício rápido

Pegue um código de evento grande e separe em pelo menos três funções com nomes claros.
