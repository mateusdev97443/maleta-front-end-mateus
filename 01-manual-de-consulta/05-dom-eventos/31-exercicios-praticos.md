# Exercícios Práticos

Exercícios progressivos para treinar sem solução pronta. Cada exercício deve ser feito em HTML, CSS simples e JavaScript puro.

## Exercício 1: Selecionar elementos

**Objetivo:** praticar selecionar elementos em uma interação pequena.

**Enunciado:** Crie um título com classe `.titulo-aula` e um parágrafo `.descricao-aula`. No JavaScript, selecione os dois e mostre seus textos no console.

**Requisitos:**
- usar `querySelector`.
- testar seleção por classe.
- verificar se os elementos existem.

**Dica:** Se trocar a classe no HTML, o JavaScript também precisa mudar.

**Critério de conclusão:** Concluído quando o console mostra os textos corretos sem erro.

## Exercício 2: Alterar textos

**Objetivo:** praticar alterar textos em uma interação pequena.

**Enunciado:** Crie um botão “Mostrar aviso” e um parágrafo vazio. Ao clicar, escreva uma mensagem de orientação no parágrafo.

**Requisitos:**
- usar `textContent`.
- não usar marcação em string.
- registrar evento de clique.

**Dica:** Comece selecionando botão e parágrafo.

**Critério de conclusão:** Concluído quando a mensagem aparece apenas após o clique.

## Exercício 3: Trocar classes

**Objetivo:** praticar trocar classes em uma interação pequena.

**Enunciado:** Crie três cards. Ao clicar em um card, ele deve receber a classe `card--ativo` e os outros devem perder essa classe.

**Requisitos:**
- usar `querySelectorAll`.
- percorrer com `forEach`.
- garantir apenas um ativo.

**Dica:** Remova a classe de todos antes de adicionar no clicado.

**Critério de conclusão:** Concluído quando só um card fica ativo por vez.

## Exercício 4: Mudar atributos

**Objetivo:** praticar mudar atributos em uma interação pequena.

**Enunciado:** Crie uma imagem e dois botões: “Foto 1” e “Foto 2”. Cada botão deve trocar `src` e `alt` da imagem.

**Requisitos:**
- usar `setAttribute`.
- alterar `src` e `alt` juntos.
- não criar nova imagem.

**Dica:** Use caminhos locais fictícios se necessário.

**Critério de conclusão:** Concluído quando a imagem e o texto alternativo mudam juntos.

## Exercício 5: Criar elementos

**Objetivo:** praticar criar elementos em uma interação pequena.

**Enunciado:** Crie um campo de texto, um botão e uma lista. Ao clicar, adicione um `li` com o texto digitado.

**Requisitos:**
- usar `createElement`.
- usar `append`.
- ignorar campo vazio.

**Dica:** Use `trim` para validar texto útil.

**Critério de conclusão:** Concluído quando itens novos aparecem na lista.

## Exercício 6: Remover elementos

**Objetivo:** praticar remover elementos em uma interação pequena.

**Enunciado:** Crie uma lista com itens e um botão “Remover último”. O botão deve remover o último `li` da lista.

**Requisitos:**
- selecionar lista.
- encontrar último item.
- não quebrar lista vazia.

**Dica:** Pesquise a propriedade `lastElementChild` no console.

**Critério de conclusão:** Concluído quando remover funciona e lista vazia não gera erro.

## Exercício 7: Botão que altera mensagem

**Objetivo:** praticar botão que altera mensagem em uma interação pequena.

**Enunciado:** Monte um painel de status com botão “Iniciar estudo”. O clique deve mudar o texto do status para indicar início.

**Requisitos:**
- seletores claros.
- evento de clique.
- texto específico.

**Dica:** Use nomes como `.status-estudo`.

**Critério de conclusão:** Concluído quando o status muda no clique.

## Exercício 8: Contador simples

**Objetivo:** praticar contador simples em uma interação pequena.

**Enunciado:** Crie contador com botões aumentar, diminuir e zerar. Mostre o número em um elemento de texto.

**Requisitos:**
- variável numérica.
- atualizar tela após cada ação.
- não deixar lógica duplicada demais.

**Dica:** Crie uma função `atualizarContador`.

**Critério de conclusão:** Concluído quando os três botões funcionam.

## Exercício 9: Campo com preview

**Objetivo:** praticar campo com preview em uma interação pequena.

**Enunciado:** Crie um campo “Nome do projeto” e um cartão que mostra o nome digitado em tempo real.

**Requisitos:**
- evento `input`.
- ler `value`.
- usar texto padrão quando vazio.

**Dica:** Use operador `||` para fallback se quiser.

**Critério de conclusão:** Concluído quando o preview acompanha a digitação.

## Exercício 10: Formulário com validação

**Objetivo:** praticar formulário com validação em uma interação pequena.

**Enunciado:** Crie formulário com campo de nome. No envio, se estiver vazio, mostre erro; se estiver preenchido, mostre sucesso visual.

**Requisitos:**
- evento `submit`.
- usar `preventDefault`.
- limpar erro quando corrigir.

**Dica:** Registre `input` no campo para limpar erro.

**Critério de conclusão:** Concluído quando vazio mostra erro e preenchido mostra sucesso.

## Exercício 11: Lista dinâmica simples

**Objetivo:** praticar lista dinâmica simples em uma interação pequena.

**Enunciado:** Permita adicionar itens e remover cada item por um botão dentro do próprio `li`.

**Requisitos:**
- criar `li`.
- criar botão de remover.
- usar `remove` no item certo.

**Dica:** O botão pode ser criado junto com o item.

**Critério de conclusão:** Concluído quando cada item remove apenas a si mesmo.

## Exercício 12: Menu simples

**Objetivo:** praticar menu simples em uma interação pequena.

**Enunciado:** Crie botão “Abrir menu” e navegação escondida por classe. O clique alterna abertura e texto do botão.

**Requisitos:**
- usar `classList.toggle`.
- usar `contains`.
- não mexer em vários estilos inline.

**Dica:** A classe aberta deve ser resolvida no CSS.

**Critério de conclusão:** Concluído quando abre, fecha e atualiza texto.

## Exercício 13: Accordion simples

**Objetivo:** praticar accordion simples em uma interação pequena.

**Enunciado:** Crie três perguntas com respostas. Ao clicar na pergunta, mostre ou esconda apenas a resposta daquele item.

**Requisitos:**
- usar estrutura `.faq-item`.
- usar `closest` ou seleção interna.
- não abrir resposta errada.

**Dica:** Comece com uma pergunta, depois repita.

**Critério de conclusão:** Concluído quando cada pergunta controla sua resposta.

## Exercício 14: Modo claro/escuro simples

**Objetivo:** praticar modo claro/escuro simples em uma interação pequena.

**Enunciado:** Crie botão que alterna a classe `tema-escuro` no `body` e muda o texto do botão.

**Requisitos:**
- classe no `body`.
- CSS para os dois temas.
- texto do botão coerente.

**Dica:** Use `document.body.classList`.

**Critério de conclusão:** Concluído quando a aparência muda e o texto acompanha.
