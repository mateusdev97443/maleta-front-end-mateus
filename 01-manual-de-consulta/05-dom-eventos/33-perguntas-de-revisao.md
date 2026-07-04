# Perguntas de Revisão

Responda primeiro sem consultar o gabarito. Depois compare sua resposta com os comentários.

## Perguntas

1. O que é DOM?
2. Qual a diferença entre HTML e DOM?
3. Qual a diferença entre querySelector e querySelectorAll?
4. O que é NodeList?
5. Por que verificar se o elemento existe?
6. Qual a diferença entre textContent, innerText e innerHTML?
7. Quando usar classList?
8. Por que evitar excesso de estilo inline?
9. O que é evento?
10. Para que serve addEventListener?
11. O que é event.target?
12. Para que serve preventDefault?
13. Como validar formulário simples?
14. Como organizar código DOM?

## Gabarito comentado

1. **O que é DOM?** É a representação da página criada pelo navegador a partir do HTML. O JavaScript manipula essa representação, não o arquivo original salvo no projeto.

2. **Qual a diferença entre HTML e DOM?** HTML é o código escrito. DOM é a estrutura interpretada, em memória, com elementos que podem ser lidos e alterados enquanto a página está aberta.

3. **Qual a diferença entre querySelector e querySelectorAll?** `querySelector` retorna o primeiro elemento encontrado ou `null`. `querySelectorAll` retorna uma lista com todos os elementos compatíveis.

4. **O que é NodeList?** É a lista retornada por `querySelectorAll`. Ela pode ser percorrida com `forEach`, mas não deve ser tratada como um único elemento.

5. **Por que verificar se o elemento existe?** Porque seletores podem não encontrar nada. Manipular `null` gera erro e interrompe o script.

6. **Qual a diferença entre textContent, innerText e innerHTML?** `textContent` trabalha com texto puro; `innerText` considera mais o texto visível; `innerHTML` lê ou escreve marcação e exige cuidado.

7. **Quando usar classList?** Quando o JavaScript precisa controlar estados visuais como ativo, aberto, erro, sucesso ou escondido sem sobrescrever todas as classes.

8. **Por que evitar excesso de estilo inline?** Porque espalha regras visuais no JavaScript. Classes deixam CSS responsável pela aparência e tornam o código mais limpo.

9. **O que é evento?** É uma ocorrência percebida pelo navegador, como clique, digitação ou envio de formulário, que pode disparar uma função.

10. **Para que serve addEventListener?** Serve para registrar uma função que será executada quando determinado evento acontecer em um elemento.

11. **O que é event.target?** É a referência ao elemento que originou o evento. Ajuda a descobrir qual botão, item ou campo foi acionado.

12. **Para que serve preventDefault?** Serve para impedir o comportamento padrão do navegador, como recarregar a página no envio de um formulário.

13. **Como validar formulário simples?** Escute `submit`, impeça o comportamento padrão quando necessário, leia `value`, use `trim`, mostre erro claro e interrompa o fluxo se houver problema.

14. **Como organizar código DOM?** Selecione elementos no começo, use nomes claros, verifique existência, crie funções pequenas, prefira classes CSS e teste cada estado manualmente.
