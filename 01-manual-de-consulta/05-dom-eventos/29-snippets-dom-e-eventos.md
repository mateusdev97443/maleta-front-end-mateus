# Snippets de DOM e Eventos

Estes snippets são modelos curtos para consulta. Adapte nomes de classes ao seu HTML e sempre teste se os elementos existem antes de manipular em projetos maiores.

## Selecionar um elemento

**Objetivo:** Encontrar o primeiro item compatível.

```js
const titulo = document.querySelector(".titulo");
```

**Explicação curta:** o código aplica uma ação pequena e direta no DOM.

**Quando usar:** Use quando só existe um alvo principal.

**Cuidado importante:** Verifique se não retornou null.

## Selecionar vários elementos

**Objetivo:** Criar uma lista de itens encontrados.

```js
const botoes = document.querySelectorAll(".botao");
botoes.forEach(function (botao) {
  console.log(botao.textContent);
});
```

**Explicação curta:** o código aplica uma ação pequena e direta no DOM.

**Quando usar:** Use em listas, cards e abas.

**Cuidado importante:** NodeList não é um único elemento.

## Alterar texto

**Objetivo:** Trocar conteúdo textual seguro.

```js
mensagem.textContent = "Texto atualizado.";
```

**Explicação curta:** o código aplica uma ação pequena e direta no DOM.

**Quando usar:** Use para mensagens simples.

**Cuidado importante:** Não use marcação HTML aqui.

## Alternar classe

**Objetivo:** Ligar e desligar estado visual.

```js
card.classList.toggle("ativo");
```

**Explicação curta:** o código aplica uma ação pequena e direta no DOM.

**Quando usar:** Use para menus, accordions e temas.

**Cuidado importante:** A classe precisa existir no CSS.

## Verificar se classe existe

**Objetivo:** Testar estado visual.

```js
if (card.classList.contains("ativo")) {
  console.log("Está ativo");
}
```

**Explicação curta:** o código aplica uma ação pequena e direta no DOM.

**Quando usar:** Use antes de decidir uma ação.

**Cuidado importante:** Evite depender de texto visual.

## Alterar atributo

**Objetivo:** Mudar link ou imagem.

```js
link.setAttribute("href", "contato.html");
```

**Explicação curta:** o código aplica uma ação pequena e direta no DOM.

**Quando usar:** Use para src, alt, href e aria.

**Cuidado importante:** Não coloque valores sem revisar.

## Desabilitar botão

**Objetivo:** Impedir clique temporário.

```js
botao.setAttribute("disabled", "");
```

**Explicação curta:** o código aplica uma ação pequena e direta no DOM.

**Quando usar:** Use quando falta preencher algo.

**Cuidado importante:** Remova com removeAttribute.

## Criar elemento

**Objetivo:** Adicionar item novo.

```js
const item = document.createElement("li");
item.textContent = "Novo item";
lista.append(item);
```

**Explicação curta:** o código aplica uma ação pequena e direta no DOM.

**Quando usar:** Use em listas dinâmicas simples.

**Cuidado importante:** Crie texto com textContent.

## Remover elemento

**Objetivo:** Apagar item da interface.

```js
item.remove();
```

**Explicação curta:** o código aplica uma ação pequena e direta no DOM.

**Quando usar:** Use em cards ou mensagens descartáveis.

**Cuidado importante:** Confirme se o elemento existe.

## Evento de clique

**Objetivo:** Reagir a clique.

```js
botao.addEventListener("click", function () {
  mensagem.textContent = "Clicou";
});
```

**Explicação curta:** o código aplica uma ação pequena e direta no DOM.

**Quando usar:** Use em botões e controles.

**Cuidado importante:** Registre uma vez.

## Evento de input

**Objetivo:** Ler digitação.

```js
campo.addEventListener("input", function () {
  preview.textContent = campo.value;
});
```

**Explicação curta:** o código aplica uma ação pequena e direta no DOM.

**Quando usar:** Use em preview e validação simples.

**Cuidado importante:** Não exagere na lógica a cada tecla.

## Evento de submit

**Objetivo:** Controlar envio sem recarregar.

```js
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  mensagem.textContent = "Formulário conferido.";
});
```

**Explicação curta:** o código aplica uma ação pequena e direta no DOM.

**Quando usar:** Use no formulário, não no botão.

**Cuidado importante:** Use preventDefault quando necessário.

## Validar campo vazio

**Objetivo:** Bloquear campo obrigatório.

```js
if (nome.value.trim() === "") {
  erro.textContent = "Preencha seu nome.";
}
```

**Explicação curta:** o código aplica uma ação pequena e direta no DOM.

**Quando usar:** Use em formulários simples.

**Cuidado importante:** trim evita espaços falsos.

## Mostrar mensagem de erro

**Objetivo:** Dar feedback claro.

```js
erro.textContent = "Campo obrigatório.";
erro.classList.add("visivel");
```

**Explicação curta:** o código aplica uma ação pequena e direta no DOM.

**Quando usar:** Use para orientar o usuário.

**Cuidado importante:** Não use só cor.

## Esconder e mostrar elemento

**Objetivo:** Alternar visibilidade.

```js
painel.classList.toggle("escondido");
```

**Explicação curta:** o código aplica uma ação pequena e direta no DOM.

**Quando usar:** Use com CSS .escondido.

**Cuidado importante:** Prefira classes.

## Menu simples

**Objetivo:** Abrir e fechar navegação.

```js
botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");
});
```

**Explicação curta:** o código aplica uma ação pequena e direta no DOM.

**Quando usar:** Use em navegação simples.

**Cuidado importante:** Cuide do texto do botão.

## Accordion simples

**Objetivo:** Mostrar resposta.

```js
pergunta.addEventListener("click", function () {
  resposta.classList.toggle("aberta");
});
```

**Explicação curta:** o código aplica uma ação pequena e direta no DOM.

**Quando usar:** Use em FAQ.

**Cuidado importante:** Não esconda conteúdo importante sem pista visual.

## Tema claro/escuro simples

**Objetivo:** Trocar tema por classe.

```js
botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("tema-escuro");
});
```

**Explicação curta:** o código aplica uma ação pequena e direta no DOM.

**Quando usar:** Use em exemplo visual simples.

**Cuidado importante:** Sem persistência nesta fase.
