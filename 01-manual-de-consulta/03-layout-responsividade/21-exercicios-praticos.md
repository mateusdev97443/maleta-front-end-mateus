# Exercícios práticos

## Introdução

Os exercícios abaixo devem ser feitos com HTML e CSS puros, sem JavaScript. A proposta é praticar raciocínio de layout, não apenas copiar código.

## Exercício 1 — Container centralizado

### Objetivo

Criar um container que mantenha conteúdo legível em telas grandes e com respiro lateral no mobile.

### Instruções

Crie uma página com uma seção contendo título, subtítulo e dois parágrafos. A seção deve ocupar a largura da tela, mas o texto precisa ficar limitado e centralizado.

### Requisitos obrigatórios

- Usar `width`, `max-width` ou `min()`.
- Usar `margin-inline: auto`.
- Manter respiro lateral em telas pequenas.
- Não usar `width` fixa maior que a tela.

### Critérios de conclusão

O texto não fica colado nas bordas no mobile e não fica longo demais no desktop.

### Extra opcional

Crie uma variação para artigo usando largura em `ch`.

## Exercício 2 — Seção com largura máxima

### Objetivo

Separar responsabilidade entre seção e container.

### Instruções

Monte uma seção de “Sobre o projeto” com fundo, espaçamento vertical e conteúdo centralizado.

### Requisitos obrigatórios

- `.secao` deve controlar `padding-block`.
- `.container` deve controlar largura.
- Usar `clamp()` em pelo menos um espaçamento.

### Critérios de conclusão

A seção mantém ritmo visual em mobile e desktop sem media query obrigatória.

### Extra opcional

Adicione uma segunda seção reutilizando as mesmas classes.

## Exercício 3 — Grupo de cards com Flexbox

### Objetivo

Praticar `display: flex`, `flex-wrap`, `gap` e `flex`.

### Instruções

Crie três cards de benefícios com título, texto e link.

### Requisitos obrigatórios

- O container dos cards deve usar Flexbox.
- Os cards devem quebrar linha quando não couberem.
- Cada card deve ter largura mínima confortável.
- Não usar altura fixa.

### Critérios de conclusão

Os cards ficam empilhados em telas pequenas e lado a lado quando houver espaço.

### Extra opcional

Faça um card ter conteúdo maior e confirme que o layout não quebra.

## Exercício 4 — Grid de cards responsivo

### Objetivo

Criar uma grade fluida com Grid, `auto-fit` e `minmax()`.

### Instruções

Crie seis cards de projetos. Cada card deve ter categoria, título e descrição.

### Requisitos obrigatórios

- Usar `display: grid`.
- Usar `repeat(auto-fit, minmax(...))`.
- Usar `gap`.
- Não depender de três media queries para definir colunas.

### Critérios de conclusão

A grade cria quantas colunas couberem sem overflow horizontal.

### Extra opcional

Adicione um card com imagem usando `aspect-ratio`.

## Exercício 5 — Formulário responsivo

### Objetivo

Construir um formulário confortável em mobile e organizado no desktop.

### Instruções

Crie formulário com nome, e-mail, telefone, assunto, mensagem e botão.

### Requisitos obrigatórios

- Labels visíveis.
- Campos com `width: 100%`.
- Campos empilhados no mobile.
- Nome/e-mail ou telefone/assunto lado a lado apenas em telas maiores.

### Critérios de conclusão

O formulário é fácil de preencher no mobile e não fica largo demais no desktop.

### Extra opcional

Use `fieldset` e `legend` para agrupar dados.

## Exercício 6 — Hero section responsiva

### Objetivo

Criar uma abertura de landing page com hierarquia clara.

### Instruções

Monte hero com etiqueta, título, texto, botão e imagem.

### Requisitos obrigatórios

- Uma coluna no mobile.
- Duas colunas no desktop.
- Imagem fluida.
- Título com `clamp()`.

### Critérios de conclusão

A mensagem principal aparece antes da imagem no HTML e o layout não quebra em telas intermediárias.

### Extra opcional

Adicione um segundo botão em um grupo com Flexbox.

## Exercício 7 — Landing page simples

### Objetivo

Combinar padrões de seção em uma página completa.

### Instruções

Crie uma landing page com topo, hero, benefícios, seção alternada, chamada final e rodapé.

### Requisitos obrigatórios

- Usar container consistente.
- Usar Grid nos cards.
- Usar Flexbox no menu ou grupo de ações.
- Não usar JavaScript.

### Critérios de conclusão

A página mantém ordem lógica no mobile e melhora visualmente no desktop.

### Extra opcional

Inclua uma seção de depoimentos em cards.

## Exercício 8 — Dashboard simples

### Objetivo

Praticar layout de painel com sidebar conceitual e conteúdo principal.

### Instruções

Crie sidebar, topo do painel, três métricas e uma área de conteúdo.

### Requisitos obrigatórios

- Sidebar acima do conteúdo no mobile.
- Sidebar lateral no desktop.
- Métricas em uma coluna no mobile e grade no desktop.
- Usar `minmax(0, 1fr)` na coluna principal.

### Critérios de conclusão

O dashboard não gera overflow horizontal e a navegação continua legível.

### Extra opcional

Adicione uma lista de atividades recentes.

## Exercício 9 — Corrigir layout quebrado

### Objetivo

Praticar diagnóstico de responsividade.

### Instruções

Crie propositalmente uma página com container fixo, imagem sem limite, flex sem wrap e texto longo. Depois corrija cada problema.

### Requisitos obrigatórios

- Identificar o sintoma de cada erro.
- Corrigir largura fixa.
- Corrigir imagem.
- Corrigir flex sem wrap.
- Corrigir texto longo.

### Critérios de conclusão

A página final não tem rolagem horizontal em telas pequenas.

### Extra opcional

Escreva comentários no CSS explicando cada correção.

## Exercício 10 — Refatorar desktop-first para mobile-first

### Objetivo

Transformar um CSS cheio de correções em uma estratégia progressiva.

### Instruções

Crie primeiro um layout desktop-first com duas colunas e correções para mobile. Depois refatore para mobile-first.

### Requisitos obrigatórios

- CSS base deve ser uma coluna.
- Usar `@media (min-width: ...)` para expandir.
- Reduzir regras desnecessárias.
- Manter o mesmo HTML.

### Critérios de conclusão

A versão mobile-first fica mais curta, mais previsível e funciona em telas intermediárias.

### Extra opcional

Compare os dois CSS em comentários: o que ficou mais simples?
