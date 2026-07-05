# Perguntas de revisão DOM e eventos

Use este arquivo para testar se você realmente entendeu DOM, eventos, manipulação de conteúdo, classes, formulários e organização de interações no front-end.

Responda primeiro sem consultar o gabarito. Depois compare sua resposta com os comentários e exemplos. A meta não é decorar comandos, mas entender quando usar cada recurso e quais cuidados um dev profissional precisa ter.

## Perguntas essenciais

1. O que é DOM?
2. Qual é a diferença entre HTML e DOM?
3. Qual é a diferença entre `querySelector` e `querySelectorAll`?
4. O que é uma `NodeList`?
5. Por que verificar se o elemento existe antes de manipular?
6. Qual é a diferença entre `textContent`, `innerText` e `innerHTML`?
7. Quando usar `classList`?
8. Por que evitar excesso de estilo inline no JavaScript?
9. O que é um evento?
10. Para que serve `addEventListener`?
11. O que é `event.target`?
12. Para que serve `preventDefault()`?
13. Como validar um formulário simples?
14. Como organizar código DOM de forma profissional?

## Perguntas de nível profissional

1. Por que manipular o DOM sem verificar seletores pode quebrar uma página?
2. Quando `innerHTML` pode ser perigoso?
3. Por que classes CSS são melhores que muitos estilos inline?
4. Como garantir que uma interação tenha feedback para o usuário?
5. Como evitar cadastrar o mesmo evento várias vezes?
6. Por que formulários precisam de mensagens de erro claras?
7. Como separar seleção de elementos, eventos e funções?
8. O que deve ser testado antes de considerar uma interação pronta?
9. Como manter acessibilidade em menus, accordions e botões?
10. O que reprova uma entrega de DOM e eventos?

## Gabarito comentado

### 1. O que é DOM?

DOM é a representação da página criada pelo navegador a partir do HTML. O JavaScript manipula essa representação em memória, não o arquivo HTML original salvo no projeto.

Quando você altera um texto com JavaScript, o navegador muda o que está sendo exibido na página aberta.

```javascript
const titulo = document.querySelector("h1");

if (titulo) {
  titulo.textContent = "Título alterado pelo JavaScript";
}
```

### 2. Qual é a diferença entre HTML e DOM?

HTML é o código escrito pelo dev. DOM é a estrutura interpretada pelo navegador depois que a página é carregada.

O HTML é estático no arquivo. O DOM pode mudar durante a navegação, conforme o usuário clica, digita ou interage.

### 3. Qual é a diferença entre querySelector e querySelectorAll?

`querySelector` retorna o primeiro elemento encontrado ou `null`.

`querySelectorAll` retorna uma lista com todos os elementos compatíveis.

```javascript
const primeiroBotao = document.querySelector(".botao");
const todosBotoes = document.querySelectorAll(".botao");
```

Use `querySelector` quando você espera um elemento. Use `querySelectorAll` quando precisa percorrer vários.

### 4. O que é NodeList?

`NodeList` é a lista retornada por `querySelectorAll`. Ela pode ser percorrida com `forEach`, mas não deve ser tratada como se fosse um único elemento.

```javascript
const botoes = document.querySelectorAll(".botao");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    console.log("Botão clicado");
  });
});
```

### 5. Por que verificar se o elemento existe?

Porque seletores podem não encontrar nada. Manipular `null` gera erro e pode interromper o restante do script.

Evite:

```javascript
document.querySelector(".mensagem").textContent = "Olá";
```

Prefira:

```javascript
const mensagem = document.querySelector(".mensagem");

if (mensagem) {
  mensagem.textContent = "Olá";
}
```

Esse cuidado é profissional, principalmente quando o mesmo JavaScript pode rodar em mais de uma página.

### 6. Qual é a diferença entre textContent, innerText e innerHTML?

`textContent` trabalha com texto puro.

`innerText` considera o texto visível na tela.

`innerHTML` lê ou escreve marcação HTML.

```javascript
const caixa = document.querySelector(".caixa");

if (caixa) {
  caixa.textContent = "Texto seguro";
}
```

Cuidado com `innerHTML`: ele deve ser usado com responsabilidade, principalmente quando envolve dados externos ou conteúdo digitado pelo usuário.

### 7. Quando usar classList?

Use `classList` quando o JavaScript precisa controlar estados visuais como aberto, ativo, erro, sucesso ou escondido.

```javascript
const menu = document.querySelector(".menu");

if (menu) {
  menu.classList.add("menu--aberto");
  menu.classList.remove("menu--fechado");
  menu.classList.toggle("menu--ativo");
}
```

Isso mantém a aparência no CSS e o comportamento no JavaScript.

### 8. Por que evitar excesso de estilo inline?

Porque espalhar estilo no JavaScript deixa o projeto difícil de manter. O ideal é criar classes no CSS e usar JavaScript apenas para adicionar ou remover estados.

Evite:

```javascript
caixa.style.backgroundColor = "red";
caixa.style.color = "white";
```

Prefira:

```javascript
caixa.classList.add("caixa--erro");
```

### 9. O que é evento?

Evento é uma ocorrência percebida pelo navegador, como clique, digitação, envio de formulário, carregamento da página ou mudança de campo.

Eventos permitem que a página responda às ações do usuário.

### 10. Para que serve addEventListener?

`addEventListener` registra uma função para ser executada quando determinado evento acontece.

```javascript
const botao = document.querySelector(".botao");

if (botao) {
  botao.addEventListener("click", () => {
    console.log("Clique detectado");
  });
}
```

### 11. O que é event.target?

`event.target` é o elemento que originou o evento. Ele ajuda a descobrir qual botão, item ou campo foi acionado.

```javascript
document.addEventListener("click", (event) => {
  console.log(event.target);
});
```

Esse recurso é útil em listas, menus e componentes com vários itens clicáveis.

### 12. Para que serve preventDefault?

`preventDefault()` impede o comportamento padrão do navegador.

O caso mais comum é impedir que um formulário recarregue a página automaticamente.

```javascript
const formulario = document.querySelector(".formulario");

if (formulario) {
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Envio controlado pelo JavaScript");
  });
}
```

Use com intenção. Não bloqueie o comportamento padrão sem saber o motivo.

### 13. Como validar formulário simples?

Uma validação simples deve:

- ouvir o evento `submit`;
- impedir envio quando houver erro;
- ler o valor do campo;
- usar `trim()` para remover espaços;
- mostrar mensagem clara;
- não depender apenas de cor;
- permitir correção pelo usuário.

```javascript
const formulario = document.querySelector(".formulario");
const campoNome = document.querySelector("#nome");
const erroNome = document.querySelector(".erro-nome");

if (formulario && campoNome && erroNome) {
  formulario.addEventListener("submit", (event) => {
    if (campoNome.value.trim() === "") {
      event.preventDefault();
      erroNome.textContent = "Informe seu nome.";
    }
  });
}
```

### 14. Como organizar código DOM?

Uma organização profissional separa:

- seleção de elementos;
- funções auxiliares;
- eventos;
- validações;
- atualizações visuais.

Exemplo:

```javascript
const botaoTema = document.querySelector(".botao-tema");
const pagina = document.body;

function alternarTema() {
  pagina.classList.toggle("tema-escuro");
}

if (botaoTema) {
  botaoTema.addEventListener("click", alternarTema);
}
```

Esse código é simples, legível e fácil de manter.

## Erros comuns que reprovam

Evite:

- manipular elementos sem verificar se existem;
- usar `innerHTML` sem necessidade;
- misturar muitas regras de CSS inline no JavaScript;
- criar funções enormes dentro de eventos;
- repetir o mesmo seletor várias vezes;
- não mostrar feedback ao usuário;
- validar formulário sem mensagem clara;
- usar link como botão sem necessidade;
- ignorar acessibilidade;
- deixar erro vermelho no console.

## Checklist de aprovação

Antes de considerar DOM e eventos dominados, confirme:

- Você sabe explicar o que é DOM.
- Você sabe selecionar um ou vários elementos.
- Você verifica se o elemento existe.
- Você sabe alterar texto com segurança.
- Você usa classes para estados visuais.
- Você sabe registrar eventos.
- Você entende `event.target`.
- Você usa `preventDefault()` com intenção.
- Você valida formulários simples.
- Você organiza o código em funções pequenas.
- Você testa os estados principais.
- Você evita código duplicado.
- Você mantém CSS e JavaScript com responsabilidades separadas.
- Você pensa em acessibilidade básica.
- Outro dev conseguiria entender seu código.

Se você só sabe copiar o código, ainda falta domínio. Se você consegue explicar cada linha e adaptar para outro cenário, está no caminho profissional.
