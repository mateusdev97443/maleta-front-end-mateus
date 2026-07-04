# Padrão profissional Fetch/APIs

Este padrão organiza código assíncrono no nível atual da Maleta: simples, legível, sem framework e sem arquitetura complexa.

## Separar responsabilidades

A função de busca conversa com a API. A função de renderização atualiza o DOM. A função de erro comunica falha. O evento apenas coordena o fluxo.

```js
async function buscarUsuarios() {
  const response = await fetch("https://dummyjson.com/users");

  if (!response.ok) {
    throw new Error(`Erro HTTP: ${response.status}`);
  }

  return await response.json();
}

function renderizarUsuarios(usuarios) {
  lista.innerHTML = "";

  if (usuarios.length === 0) {
    lista.textContent = "Nenhum usuário encontrado.";
    return;
  }

  usuarios.forEach((usuario) => {
    const item = document.createElement("li");
    item.textContent = usuario.name;
    lista.appendChild(item);
  });
}

function mostrarErro() {
  mensagem.textContent = "Não foi possível carregar os dados agora.";
}

async function aoClicarCarregar() {
  botao.disabled = true;
  mensagem.textContent = "Carregando...";

  try {
    const usuarios = await buscarUsuarios();
    mensagem.textContent = "Usuários carregados.";
    renderizarUsuarios(usuarios);
  } catch (erro) {
    console.error(erro);
    mostrarErro();
  } finally {
    botao.disabled = false;
  }
}
```

## Regras do padrão

- Evite código gigante dentro do evento.
- Use nomes claros e verbos de ação.
- Trate loading antes e depois da requisição.
- Trate erro com mensagem amigável.
- Trate lista vazia como estado válido, não como falha.
- Não exponha tokens.
- Não use API privada no front-end.
- Não misture busca, validação e renderização em uma única função enorme.
- Mantenha simplicidade enquanto o projeto ainda é didático.
- Evite abstração avançada antes da hora.

## Como saber se ficou profissional

O código ficou profissional quando outro iniciante consegue apontar onde a API é chamada, onde a tela é atualizada, onde o erro aparece e onde o botão é bloqueado. Clareza vem antes de esperteza.
