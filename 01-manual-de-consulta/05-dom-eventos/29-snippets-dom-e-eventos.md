# Snippets de DOM e Eventos

Modelos curtos para consulta. Adapte seletores ao seu HTML e mantenha as verificações quando o elemento puder não existir.

## Selecionar um elemento

**Objetivo:** Encontrar um alvo único no DOM.

```js
const titulo = document.querySelector(".titulo");
```

**Explicação curta:** Seleciona o primeiro elemento com a classe `.titulo`. Se nada for encontrado, `titulo` recebe `null`.

**Quando usar:** Quando a interface tem apenas um título, mensagem, formulário ou botão principal.

**Cuidado importante:** Verifique a existência antes de acessar propriedades.

## Selecionar vários elementos

**Objetivo:** Obter todos os itens equivalentes.

```js
const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
  card.classList.add("card--preparado");
});
```

**Explicação curta:** Seleciona todos os elementos `.card` e percorre a lista para aplicar uma classe em cada um.

**Quando usar:** Quando existem cards, links, abas, botões de filtro ou perguntas repetidas.

**Cuidado importante:** A lista não possui `addEventListener` direto; percorra item por item.

## Alterar texto

**Objetivo:** Atualizar uma mensagem visível.

```js
const status = document.querySelector(".status");

if (status) {
  status.textContent = "Dados conferidos.";
}
```

**Explicação curta:** Troca apenas o texto do elemento, sem interpretar tags.

**Quando usar:** Mensagens de sucesso, erro, contadores e previews.

**Cuidado importante:** Para texto digitado por usuário, prefira sempre `textContent`.

## Alternar classe

**Objetivo:** Ligar e desligar um estado visual.

```js
const painel = document.querySelector(".painel");

if (painel) {
  painel.classList.toggle("painel--aberto");
}
```

**Explicação curta:** Se a classe existe, remove; se não existe, adiciona.

**Quando usar:** Menus, accordions, tema visual, detalhes expansíveis.

**Cuidado importante:** A aparência precisa estar definida no CSS.

## Verificar se classe existe

**Objetivo:** Descobrir o estado atual do elemento.

```js
const aberto = menu.classList.contains("menu--aberto");
```

**Explicação curta:** Retorna verdadeiro quando a classe está presente e falso quando não está.

**Quando usar:** Para trocar texto de botão ou decidir o próximo passo.

**Cuidado importante:** Não use texto visível como única fonte de estado.

## Alterar atributo

**Objetivo:** Modificar informações como link ou imagem.

```js
imagem.setAttribute("src", "imagens/perfil.png");
imagem.setAttribute("alt", "Foto de perfil atualizada");
```

**Explicação curta:** Atualiza o caminho da imagem e o texto alternativo relacionado.

**Quando usar:** Troca de imagem, link, descrição alternativa ou estado de botão.

**Cuidado importante:** Ao trocar imagem, revise também o `alt`.

## Desabilitar botão

**Objetivo:** Impedir uma ação temporariamente.

```js
botao.setAttribute("disabled", "");
```

**Explicação curta:** Adiciona o atributo `disabled`, deixando o botão inativo.

**Quando usar:** Enquanto um campo obrigatório está vazio.

**Cuidado importante:** Remova com `removeAttribute("disabled")` quando a ação voltar a ser permitida.

## Criar elemento

**Objetivo:** Adicionar estrutura simples à página.

```js
const item = document.createElement("li");
item.textContent = "Estudar classList";
lista.append(item);
```

**Explicação curta:** Cria um `li`, define seu texto e insere no fim da lista.

**Quando usar:** Listas visuais criadas por interação do usuário.

**Cuidado importante:** Configure o elemento antes de inserir no DOM.

## Remover elemento

**Objetivo:** Retirar um item da interface.

```js
const aviso = document.querySelector(".aviso");

if (aviso) {
  aviso.remove();
}
```

**Explicação curta:** Remove o elemento encontrado da árvore do DOM.

**Quando usar:** Avisos descartáveis, itens removidos e mensagens temporárias.

**Cuidado importante:** Se precisar mostrar de novo, talvez seja melhor esconder com classe.

## Evento de clique

**Objetivo:** Executar ação ao ativar botão.

```js
botao.addEventListener("click", function () {
  card.classList.toggle("card--ativo");
});
```

**Explicação curta:** Registra uma função que alterna estado visual do card quando o botão é clicado.

**Quando usar:** Botões, menus, cards e controles visuais.

**Cuidado importante:** Não registre o mesmo evento repetidamente sem necessidade.

## Evento de input

**Objetivo:** Responder à digitação.

```js
campo.addEventListener("input", function () {
  preview.textContent = campo.value;
});
```

**Explicação curta:** Copia o valor atual do campo para um elemento de preview a cada alteração.

**Quando usar:** Prévia de nome, contador visual ou limpeza de erro.

**Cuidado importante:** Campos usam `value`, não `textContent`.

## Evento de submit com preventDefault

**Objetivo:** Validar formulário sem recarregar a página.

```js
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  mensagem.textContent = "Formulário revisado.";
});
```

**Explicação curta:** Escuta o envio do formulário e impede o comportamento padrão antes de mostrar feedback.

**Quando usar:** Formulários simples com validação visual.

**Cuidado importante:** Registre no `form`, não apenas no botão.

## Validação de campo vazio

**Objetivo:** Detectar ausência de texto útil.

```js
if (campoNome.value.trim() === "") {
  erro.textContent = "Digite seu nome.";
}
```

**Explicação curta:** Remove espaços das pontas e verifica se ainda resta conteúdo.

**Quando usar:** Campos obrigatórios de nome, assunto ou comentário.

**Cuidado importante:** Espaços não devem contar como preenchimento real.

## Mostrar mensagem de erro

**Objetivo:** Exibir retorno claro para o usuário.

```js
erro.textContent = "Campo obrigatório.";
erro.classList.add("erro--visivel");
```

**Explicação curta:** Define o texto do erro e adiciona uma classe para destacar visualmente.

**Quando usar:** Validações e orientações de correção.

**Cuidado importante:** Não use apenas cor; mantenha texto explicativo.

## Esconder e mostrar elemento

**Objetivo:** Controlar visibilidade por classe.

```js
detalhes.classList.toggle("detalhes--oculto");
```

**Explicação curta:** Alterna a classe que o CSS usa para esconder ou mostrar o bloco.

**Quando usar:** Painéis, respostas, menus e informações extras.

**Cuidado importante:** Evite alternar vários estilos inline.

## Menu simples

**Objetivo:** Abrir e fechar navegação.

```js
botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("menu--aberto");
});
```

**Explicação curta:** O clique alterna a classe responsável por exibir a navegação.

**Quando usar:** Menus pequenos em páginas de estudo.

**Cuidado importante:** Atualize o texto do botão se isso ajudar o usuário.

## Accordion simples

**Objetivo:** Controlar resposta do item clicado.

```js
perguntas.forEach(function (pergunta) {
  pergunta.addEventListener("click", function () {
    pergunta.closest(".faq-item").classList.toggle("faq-item--aberto");
  });
});
```

**Explicação curta:** Cada pergunta altera o item de FAQ mais próximo, sem afetar todos os outros por engano.

**Quando usar:** Dúvidas frequentes e detalhes expansíveis.

**Cuidado importante:** Confira se `closest` encontrou o item antes de manipular em códigos maiores.

## Tema claro/escuro simples

**Objetivo:** Trocar aparência geral da página.

```js
botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("tema-escuro");
});
```

**Explicação curta:** Alterna uma classe no `body`, permitindo que o CSS mude a aparência global.

**Quando usar:** Exercício de estado visual amplo.

**Cuidado importante:** Nesta fase, a troca vale apenas para a página aberta.
