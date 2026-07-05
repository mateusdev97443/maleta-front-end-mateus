---
title: Manual HTML Completo
permalink: /01-manual-de-consulta/01-html/
breadcrumbs:
  - label: Manual
    url: /01-manual-de-consulta/
  - label: Manual HTML Completo
---


<div class="doc-note">
<strong>Foco da seção:</strong> marcação semântica, acessível, validável, preparada para SEO básico e fácil de manter.
</div>

## Comece por aqui

<div class="doc-grid">
  <a class="doc-card" href="./01-estrutura-base-html.html"><strong>Estrutura base</strong><span>Comece pelo documento mínimo correto.</span></a>
  <a class="doc-card" href="./03-semantica-html.html"><strong>Semântica</strong><span>Escolha tags por significado, não por aparência.</span></a>
  <a class="doc-card" href="./14-checklist-final-html.html"><strong>Checklist final</strong><span>Revise antes de entregar ou publicar.</span></a>
</div>

## Objetivo

Este manual organiza os fundamentos e padrões profissionais de HTML para estudo, consulta rápida e aplicação em projetos Front-end reais. Ele prioriza marcação semântica, acessível, validável, preparada para SEO básico e fácil de manter por outras pessoas.

## Como usar

- Estude os capítulos na ordem recomendada se estiver começando.
- Consulte arquivos específicos quando estiver implementando uma parte da página, como formulários, tabelas, imagens ou estrutura semântica.
- Use os snippets como ponto de partida, mas adapte textos, atributos e hierarquia ao contexto real do projeto.
- Revise sua página com o checklist final antes de abrir PR, entregar atividade ou publicar.
- Volte aos capítulos de erros comuns e boas práticas sempre que encontrar marcação confusa ou difícil de manter.

## Ordem recomendada de estudo

1. [Estrutura base HTML](./01-estrutura-base-html.html)
2. [Head, metadados e SEO](./02-head-metadados-seo.html)
3. [Semântica HTML](./03-semantica-html.html)
4. [Textos, headings e parágrafos](./04-textos-headings-paragrafos.html)
5. [Links, imagens e mídias](./05-links-imagens-midias.html)
6. [Listas e tabelas](./06-listas-tabelas.html)
7. [Formulários](./07-formularios.html)
8. [Atributos importantes](./08-atributos-importantes.html)
9. [Acessibilidade no HTML](./09-acessibilidade-html.html)
10. [Validação HTML](./10-validacao-html.html)
11. [Erros comuns](./11-erros-comuns-html.html)
12. [Boas práticas](./12-boas-praticas-html.html)
13. [Snippets HTML](./13-snippets-html.html)
14. [Checklist final](./14-checklist-final-html.html)
15. [Exercícios](./15-exercicios-html.html)
16. [Mini desafios](./16-mini-desafios-html.html)
17. [Perguntas de revisão](./17-perguntas-de-revisao-html.html)
18. [Modelo de análise](./18-modelo-analise-html.html)
19. [Padrão profissional para projetos](./19-padrao-profissional-projetos.html)

## Arquivos disponíveis

| Arquivo | Para que serve |
|---|---|
| [01-estrutura-base-html.md](./01-estrutura-base-html.html) | Criar a base correta de qualquer documento HTML. |
| [02-head-metadados-seo.md](./02-head-metadados-seo.html) | Configurar `head`, metadados, favicon e SEO básico. |
| [03-semantica-html.md](./03-semantica-html.html) | Decidir quais tags estruturais usar e evitar `div` sem necessidade. |
| [04-textos-headings-paragrafos.md](./04-textos-headings-paragrafos.html) | Organizar títulos, parágrafos, ênfase, citações e trechos de código. |
| [05-links-imagens-midias.md](./05-links-imagens-midias.html) | Criar links, imagens, vídeos, áudios e iframes com acessibilidade e performance. |
| [06-listas-tabelas.md](./06-listas-tabelas.html) | Escolher entre listas e tabelas e estruturar dados tabulares corretamente. |
| [07-formularios.md](./07-formularios.html) | Construir formulários acessíveis, validáveis e prontos para integração. |
| [08-atributos-importantes.md](./08-atributos-importantes.html) | Consultar atributos essenciais como `id`, `class`, `data-*`, `aria-*`, `name` e `required`. |
| [09-acessibilidade-html.md](./09-acessibilidade-html.html) | Revisar landmarks, headings, `alt`, labels, teclado, links, botões e ARIA. |
| [10-validacao-html.md](./10-validacao-html.html) | Identificar problemas de HTML mal formado e qualidade estrutural. |
| [11-erros-comuns-html.md](./11-erros-comuns-html.html) | Evitar problemas recorrentes que prejudicam manutenção, SEO e acessibilidade. |
| [12-boas-praticas-html.md](./12-boas-praticas-html.html) | Aplicar padrões de clareza, simplicidade, separação de responsabilidades e manutenção. |
| [13-snippets-html.md](./13-snippets-html.html) | Copiar exemplos prontos e bem formatados para cenários comuns. |
| [14-checklist-final-html.md](./14-checklist-final-html.html) | Aprovar ou reprovar uma página HTML antes da entrega. |
| [15-exercicios-html.md](./15-exercicios-html.html) | Praticar fundamentos em níveis básico, intermediário e aplicado. |
| [16-mini-desafios-html.md](./16-mini-desafios-html.html) | Resolver briefings curtos com requisitos e critérios de qualidade. |
| [17-perguntas-de-revisao-html.md](./17-perguntas-de-revisao-html.html) | Fazer autoavaliação e fixar conceitos importantes. |
| [18-modelo-analise-html.md](./18-modelo-analise-html.html) | Auditar qualquer HTML por estrutura, semântica, acessibilidade, SEO e melhorias. |
| [19-padrao-profissional-projetos.md](./19-padrao-profissional-projetos.html) | Entregar arquivos HTML com organização, nomenclatura e critérios profissionais. |

## Como aplicar em projetos reais

1. Crie o documento com `doctype`, idioma, `charset`, `viewport`, `title` e `description`.
2. Desenhe a estrutura do `body` antes de escrever detalhes: `header`, `nav`, `main`, seções e `footer`.
3. Escreva conteúdo com headings em ordem lógica e textos de links compreensíveis.
4. Inclua imagens, mídias, tabelas e formulários com atributos obrigatórios e acessibilidade desde o começo.
5. Valide o HTML, revise o checklist final e corrija problemas antes do commit.
6. Em projetos maiores, use o modelo de análise para revisar páginas antigas ou pull requests de colegas.

## Status da Fase 2

Fase 2 — Manual HTML Completo: conteúdo concluído e aprofundado para estudo, consulta prática, revisão técnica e aplicação em projetos reais.

## Próximo passo

<div class="doc-actions">
  <a href="{{ '/01-manual-de-consulta/02-css/' | relative_url }}">Avançar para CSS</a>
  <a href="{{ '/01-manual-de-consulta/' | relative_url }}">Voltar ao Manual</a>
</div>
