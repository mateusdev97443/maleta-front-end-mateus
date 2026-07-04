# Erros comuns em fetch e APIs

Este capítulo reúne falhas reais que aparecem quando iniciantes começam a consumir APIs no Front-end.

## 1. Achar que fetch retorna JSON direto

Problema: tentar acessar campos diretamente no retorno de `fetch`.

Por que acontece: `fetch` resolve com um `Response`, não com o corpo convertido.

```js
const usuario = await fetch(url);
console.log(usuario.name); // errado
```

Correção:

```js
const response = await fetch(url);
const usuario = await response.json();
console.log(usuario.name);
```

Como evitar: use nomes como `response` para resposta HTTP e `dados` para JSON convertido.

## 2. Esquecer await em response.json()

Problema: guardar uma Promise no lugar dos dados.

```js
const dados = response.json();
console.log(dados.users); // errado
```

Correção:

```js
const dados = await response.json();
```

Como evitar: lembre que ler o corpo também é assíncrono.

## 3. Não verificar response.ok

Problema: renderizar como sucesso uma resposta com status de erro.

```js
const response = await fetch(url);
const dados = await response.json();
renderizar(dados);
```

Correção:

```js
if (!response.ok) {
  throw new Error(`HTTP ${response.status}`);
}
```

Como evitar: valide status antes de converter e renderizar.

## 4. Confundir erro de rede com status HTTP

Problema: esperar que `catch` capture automaticamente qualquer 404.

Por que acontece: 404 é uma resposta recebida; erro de rede é falha ao completar a requisição.

Correção: lance erro manual quando `response.ok` for falso.

## 5. Deixar loading preso

Problema: esconder loading apenas no sucesso.

```js
loading.hidden = false;
const dados = await buscarDados();
loading.hidden = true;
```

Se `buscarDados` falhar, o loading pode continuar visível.

Correção: use `finally`.

```js
try {
  await buscarDados();
} finally {
  loading.hidden = true;
}
```

## 6. Não reabilitar botão

Problema: botão fica desabilitado após erro.

Correção: restaure `disabled` no `finally`.

```js
botao.disabled = true;
try {
  await carregar();
} finally {
  botao.disabled = false;
}
```

## 7. Duplicar itens na lista

Problema: acrescentar resultados novos sem limpar os antigos.

```js
usuarios.forEach(adicionarItem); // duplica a cada clique
```

Correção:

```js
lista.innerHTML = "";
usuarios.forEach(adicionarItem);
```

Como evitar: a função de renderização deve controlar a limpeza.

## 8. Não tratar lista vazia

Problema: a busca funciona, mas a tela fica em branco.

Correção:

```js
if (usuarios.length === 0) {
  lista.textContent = "Nenhum usuário encontrado.";
  return;
}
```

Como evitar: trate vazio como estado normal, não como erro inesperado.

## 9. Mostrar erro técnico ao usuário

Problema: exibir `TypeError: Failed to fetch` na tela.

Correção:

```js
mensagem.textContent = "Não foi possível carregar agora. Tente novamente.";
console.error(erro);
```

Como evitar: separe mensagem humana de log técnico.

## 10. Expor token no Front-end

Problema: colocar chave secreta em JavaScript público.

Por que é grave: qualquer pessoa pode abrir o DevTools e ver o código.

Correção: nesta fase, não use APIs que exigem segredo.

Como evitar: escolha apenas APIs públicas sem autenticação real.

## 11. Depender de API privada

Problema: criar exemplo que só funciona para quem tem acesso interno.

Correção: use endpoint público de demonstração ou dados simulados.

Como evitar: valide se a API funciona sem login e sem token antes de escrever o capítulo.

## 12. Misturar tudo em uma função enorme

Problema: o evento faz busca, valida status, converte JSON, cria HTML, mostra erro e controla botão.

Correção: separe responsabilidades.

```js
const usuarios = await buscarUsuarios();
renderizarUsuarios(usuarios);
```

Como evitar: mantenha funções pequenas com nomes claros.
