# Checklist final de DOM e eventos

Este checklist serve para revisar interações feitas com JavaScript no navegador. A meta é garantir que o código manipule o DOM com segurança, responda corretamente aos eventos e ofereça uma experiência clara para o usuário.

DOM e eventos são pontos muito cobrados em projetos front-end porque conectam HTML, CSS e JavaScript. Uma interação que “funciona uma vez” não basta; ela precisa ser previsível, acessível, testável e fácil de manter.

## Seleção de elementos

Antes de manipular qualquer elemento, confirme:

- O seletor usado existe no HTML.
- `querySelector` foi usado para selecionar um único elemento.
- `querySelectorAll` foi usado para listas de elementos.
- O código verifica se o elemento existe antes de manipular.
- Classes e IDs têm nomes claros.
- O JavaScript não depende de uma estrutura HTML frágil demais.
- O script roda depois que o HTML necessário já foi carregado.

Exemplo seguro:

```javascript
const mensagem = document.querySelector(".mensagem");

if (mensagem) {
  mensagem.textContent = "Conteúdo atualizado com sucesso.";
}
```

Evite:

```javascript
document.querySelector(".mensagem").textContent = "Pronto";
```

O segundo exemplo pode quebrar se `.mensagem` não existir na página.

## Manipulação de conteúdo

Verifique:

- `textContent` foi usado para textos simples.
- `innerHTML` foi evitado quando não é necessário.
- Conteúdo vindo do usuário não foi inserido diretamente como HTML.
- O código não mistura regra de negócio com marcação demais.
- A alteração feita pelo JavaScript é clara para quem lê o código.
- A interface continua compreensível mesmo antes da interação.

Exemplo recomendado:

```javascript
const titulo = document.querySelector(".card__titulo");

if (titulo) {
  titulo.textContent = "Projeto atualizado";
}
```

Use `innerHTML` com cuidado. Ele pode ser útil em alguns casos, mas também aumenta risco de bugs e problemas de segurança quando usado com conteúdo externo ou digitado pelo usuário.

## Classes, atributos e estado visual

Confira:

- Estados visuais usam classes CSS.
- `classList.add`, `classList.remove` e `classList.toggle` foram usados corretamente.
- O JavaScript não está cheio de estilos inline sem necessidade.
- Atributos importantes foram atualizados quando o estado muda.
- O estado visual combina com o estado real da interface.
- O usuário recebe feedback quando algo muda.

Exemplo profissional:

```javascript
const botao = document.querySelector(".botao-menu");
const menu = document.querySelector(".menu");

if (botao && menu) {
  botao.addEventListener("click", () => {
    menu.classList.toggle("menu--aberto");

    const menuAberto = menu.classList.contains("menu--aberto");
    botao.setAttribute("aria-expanded", String(menuAberto));
  });
}
```

Esse exemplo não muda só o visual. Ele também atualiza `aria-expanded`, ajudando acessibilidade.

## Eventos

Antes de aprovar uma interação, confirme:

- O evento escolhido faz sentido para a ação.
- `click` foi usado para botões e ações diretas.
- `submit` foi usado em formulários.
- `input` foi usado para reagir enquanto o usuário digita.
- `change` foi usado quando a mudança final do campo importa.
- `preventDefault()` foi usado apenas quando necessário.
- O mesmo evento não está sendo registrado várias vezes sem controle.
- O nome da função explica o que acontece.

Exemplo com formulário:

```javascript
const formulario = document.querySelector(".formulario");

if (formulario) {
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Formulário enviado com controle via JavaScript");
  });
}
```

Cuidado: se o formulário precisa enviar dados normalmente para outra página ou servidor, não use `preventDefault()` sem motivo.

## Validação de formulários

Um formulário controlado por JavaScript precisa ser claro para o usuário.

Confira:

- Campos obrigatórios são verificados.
- Espaços vazios são tratados com `trim()`.
- Mensagens de erro são específicas.
- O usuário entende como corrigir o problema.
- A validação visual não depende apenas de cor.
- O formulário não envia dados inválidos.
- O foco e a acessibilidade foram considerados.

Exemplo simples:

```javascript
const campoNome = document.querySelector("#nome");
const erroNome = document.querySelector(".erro-nome");

if (campoNome && erroNome) {
  if (campoNome.value.trim() === "") {
    erroNome.textContent = "Informe seu nome.";
  } else {
    erroNome.textContent = "";
  }
}
```

## Feedback para o usuário

Toda interação importante deve responder ao usuário.

Verifique se existe feedback para:

- clique realizado;
- envio de formulário;
- erro de validação;
- campo obrigatório vazio;
- carregamento;
- sucesso;
- falha;
- estado ativo ou selecionado.

Exemplo:

```javascript
const aviso = document.querySelector(".aviso");

function mostrarAviso(mensagem) {
  if (aviso) {
    aviso.textContent = mensagem;
  }
}

mostrarAviso("Dados salvos com sucesso.");
```

Uma interface profissional não deixa o usuário adivinhar o que aconteceu.

## Organização do código

Antes de finalizar:

- Separe seleção de elementos da lógica principal.
- Evite repetir o mesmo seletor várias vezes.
- Crie funções para ações reutilizáveis.
- Use nomes claros para variáveis e funções.
- Não coloque lógica grande dentro de callbacks enormes.
- Mantenha CSS no CSS e comportamento no JavaScript.
- Remova `console.log` desnecessário antes da entrega.

Exemplo melhor:

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

## Acessibilidade básica

Confira:

- Botões reais usam `<button>`.
- Links são usados para navegação.
- O teclado consegue acessar a interação.
- Estados como aberto/fechado são comunicados quando necessário.
- Mensagens importantes são visíveis e compreensíveis.
- O foco do usuário não fica perdido.
- A interação não depende somente do mouse.
- O JavaScript não remove informação essencial da tela.

Cuidado profissional: uma interação bonita, mas inacessível, não é entrega nota máxima.

## Erros que reprovam a entrega

Evite:

- usar seletor errado e ignorar erro no console;
- manipular elemento sem verificar se ele existe;
- usar `innerHTML` sem necessidade;
- misturar muito CSS inline no JavaScript;
- criar evento dentro de evento sem controle;
- não tratar campo vazio;
- esquecer `preventDefault()` quando o envio precisa ser controlado;
- esconder erro do usuário;
- mudar visual sem atualizar acessibilidade;
- deixar código duplicado em várias interações.

## Checklist de aprovação

A interação está pronta quando:

- Não há erro no console.
- Todos os seletores funcionam.
- Os eventos respondem corretamente.
- O usuário recebe feedback.
- Estados visuais e lógicos combinam.
- Formulários têm validação mínima.
- Acessibilidade básica foi respeitada.
- O código é legível para outro dev.
- O comportamento foi testado mais de uma vez.
- A solução não quebra outras partes da página.

Se a interação funciona apenas “no teste rápido”, ainda não está pronta para entrega profissional.
