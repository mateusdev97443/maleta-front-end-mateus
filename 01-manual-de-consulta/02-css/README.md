---
title: Manual CSS Completo
---

# Manual CSS Completo

## Objetivo

Este manual reúne fundamentos, padrões e exemplos práticos de CSS para consulta diária de estudantes e pessoas desenvolvedoras Front-end. O foco da Fase 3 é dominar estilização base: seletores, cascata, box model, cores, tipografia, unidades, estados, variáveis, organização e qualidade profissional.

> Observação: Flexbox, Grid, media queries e estratégias completas de responsividade pertencem à Fase 4 — Layout e Responsividade. Aqui eles podem aparecer apenas como menção leve, sem aprofundamento.

## Como usar

- Estude na ordem recomendada se estiver começando em CSS.
- Consulte capítulos específicos quando surgir uma dúvida prática durante um projeto.
- Copie snippets apenas como ponto de partida e adapte ao contexto real.
- Use checklist, modelo de análise e padrão profissional antes de abrir commit ou pull request.
- Volte aos capítulos de erros comuns e boas práticas sempre que o CSS começar a ficar difícil de manter.

## Ordem recomendada de estudo

1. [Introdução ao CSS](./01-introducao-css.md)
2. [Formas de aplicar CSS](./02-formas-de-aplicar-css.md)
3. [Seletores CSS](./03-seletores-css.md)
4. [Cascata, especificidade e herança](./04-cascata-especificidade-heranca.md)
5. [Box Model](./05-box-model.md)
6. [Cores, fundos, bordas e sombras](./06-cores-fundos-bordas-sombras.md)
7. [Tipografia CSS](./07-tipografia-css.md)
8. [Unidades de medida](./08-unidades-medidas.md)
9. [Espaçamento e alinhamento básico](./09-espacamento-alinhamento-basico.md)
10. [Display e visibilidade](./10-display-visibilidade.md)
11. [Pseudo-classes e pseudo-elementos](./11-pseudo-classes-pseudo-elementos.md)
12. [Variáveis CSS](./12-variaveis-css.md)
13. [Boas práticas CSS](./13-boas-praticas-css.md)
14. [Erros comuns CSS](./14-erros-comuns-css.md)
15. [Snippets CSS](./15-snippets-css.md)
16. [Checklist final CSS](./16-checklist-final-css.md)
17. [Exercícios CSS](./17-exercicios-css.md)
18. [Mini desafios CSS](./18-mini-desafios-css.md)
19. [Perguntas de revisão CSS](./19-perguntas-de-revisao-css.md)
20. [Modelo de análise CSS](./20-modelo-analise-css.md)
21. [Padrão profissional CSS](./21-padrao-profissional-css.md)

## Arquivos disponíveis

| Arquivo | Para que serve |
|---|---|
| [01-introducao-css.md](./01-introducao-css.md) | Entender o papel do CSS e sua relação com HTML e JavaScript. |
| [02-formas-de-aplicar-css.md](./02-formas-de-aplicar-css.md) | Comparar CSS externo, interno e inline e organizar arquivos iniciais. |
| [03-seletores-css.md](./03-seletores-css.md) | Escolher seletores adequados sem criar CSS frágil. |
| [04-cascata-especificidade-heranca.md](./04-cascata-especificidade-heranca.md) | Resolver conflitos de regras com método e sem abuso de `!important`. |
| [05-box-model.md](./05-box-model.md) | Controlar content, padding, border, margin, largura, altura e `box-sizing`. |
| [06-cores-fundos-bordas-sombras.md](./06-cores-fundos-bordas-sombras.md) | Aplicar aparência visual com contraste e consistência. |
| [07-tipografia-css.md](./07-tipografia-css.md) | Definir fontes, tamanhos, pesos, alinhamentos e hierarquia visual. |
| [08-unidades-medidas.md](./08-unidades-medidas.md) | Decidir entre `px`, `%`, `em`, `rem`, `vw`, `vh` e `ch`. |
| [09-espacamento-alinhamento-basico.md](./09-espacamento-alinhamento-basico.md) | Trabalhar espaçamento e alinhamento simples sem aprofundar layout. |
| [10-display-visibilidade.md](./10-display-visibilidade.md) | Entender fluxo, exibição, ocultação e impactos de acessibilidade. |
| [11-pseudo-classes-pseudo-elementos.md](./11-pseudo-classes-pseudo-elementos.md) | Criar estados e detalhes visuais com cuidado profissional. |
| [12-variaveis-css.md](./12-variaveis-css.md) | Criar tokens reutilizáveis para cores, fontes e espaçamentos. |
| [13-boas-praticas-css.md](./13-boas-praticas-css.md) | Manter CSS previsível, legível e fácil de evoluir. |
| [14-erros-comuns-css.md](./14-erros-comuns-css.md) | Identificar vícios que geram bugs e dívida técnica. |
| [15-snippets-css.md](./15-snippets-css.md) | Usar bases prontas para reset, body, botões, cards, formulários e tabelas. |
| [16-checklist-final-css.md](./16-checklist-final-css.md) | Revisar organização, acessibilidade, estados e manutenção antes do commit. |
| [17-exercicios-css.md](./17-exercicios-css.md) | Praticar CSS em níveis básico, intermediário e aplicado. |
| [18-mini-desafios-css.md](./18-mini-desafios-css.md) | Resolver briefings curtos com critérios de qualidade. |
| [19-perguntas-de-revisao-css.md](./19-perguntas-de-revisao-css.md) | Fixar conteúdo por autoavaliação. |
| [20-modelo-analise-css.md](./20-modelo-analise-css.md) | Auditar qualquer CSS por organização, repetição, acessibilidade e riscos. |
| [21-padrao-profissional-css.md](./21-padrao-profissional-css.md) | Definir o mínimo profissional para entrega de CSS. |

## Como aplicar em projetos reais

1. Comece vinculando um arquivo CSS externo e criando uma base global simples.
2. Defina variáveis para cores, espaçamentos e fontes antes de repetir valores.
3. Estilize primeiro elementos globais como `body`, links, imagens e formulários básicos.
4. Crie classes claras para componentes simples como botão, card e container.
5. Revise cascata, especificidade, estados de foco e contraste antes do commit.
6. Use snippets, checklist e modelo de análise para padronizar entregas e revisões.

## Status da Fase 3

Fase 3 — Manual CSS Completo: conteúdo criado para estudo, consulta prática, revisão técnica e aplicação profissional em projetos Front-end, sem avançar profundamente para Layout e Responsividade.
