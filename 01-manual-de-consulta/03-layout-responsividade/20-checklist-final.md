# Checklist final

## Introdução

Use este checklist antes de considerar um layout pronto. Ele ajuda a revisar estrutura visual, responsividade e qualidade profissional.

## Estrutura visual e hierarquia

- [ ] A página tem seções claras.
- [ ] O conteúdo mais importante aparece primeiro no mobile.
- [ ] Títulos, subtítulos e textos têm hierarquia visível.
- [ ] A leitura não depende de efeitos ou JavaScript.

## Espaçamento, alinhamento e consistência

- [ ] Espaçamentos verticais seguem um padrão.
- [ ] Elementos relacionados estão visualmente próximos.
- [ ] Alinhamentos são consistentes entre seções.
- [ ] `gap` é usado quando faz mais sentido que margens soltas.

## Largura máxima e containers

- [ ] O conteúdo não fica largo demais no desktop.
- [ ] Containers usam `max-width`, `min()` ou padrão equivalente.
- [ ] Não há larguras fixas desnecessárias.

## Responsividade e mobile-first

- [ ] O CSS base funciona em telas pequenas.
- [ ] Breakpoints foram criados pelo comportamento do conteúdo.
- [ ] Telas pequenas, médias e grandes foram testadas.
- [ ] Não existe overflow horizontal inesperado.

## Imagens, cards e formulários

- [ ] Imagens usam `max-width: 100%` e `height: auto` quando apropriado.
- [ ] Imagens de card usam `object-fit` ou `aspect-ratio` quando necessário.
- [ ] Cards se adaptam sem altura fixa frágil.
- [ ] Formulários ficam empilhados no mobile e confortáveis no desktop.

## Navegação estrutural

- [ ] Links de menu são legíveis em telas pequenas.
- [ ] O menu estrutural não depende de JavaScript nesta fase.
- [ ] A navegação não gera rolagem horizontal.

## Erros comuns a procurar

- [ ] Algum elemento usa `width` fixa que quebra a tela?
- [ ] Algum texto longo estoura o container?
- [ ] Alguma imagem distorce?
- [ ] Alguma media query existe apenas para remendar uma decisão ruim?
- [ ] Algum `overflow: hidden` esconde um problema real?

## Critérios de aprovação

O layout está aprovado quando funciona sem JavaScript, mantém hierarquia clara, não apresenta overflow horizontal, usa Flexbox e Grid com intenção, respeita containers, adapta imagens e mantém boa leitura em telas pequenas, médias e grandes.
