---
title: Laboratório de Integração Vanilla
permalink: /01-manual-de-consulta/07-laboratorio-integracao-vanilla/
---

# FASE 8 — Laboratório de Integração Front-end Vanilla

## Objetivo da fase

Esta fase transforma os conhecimentos anteriores em fluxos pequenos de interface: buscar dados, tratar resposta, atualizar a tela, reagir a eventos e manter estados visuais claros. O foco é treinar integração com JavaScript vanilla, sem criar um projeto executável real.

## Pré-requisitos

- HTML semântico para estruturar áreas de conteúdo, formulário e mensagens.
- CSS e responsividade para organizar cards, listas e painéis em telas diferentes.
- JavaScript fundamentos: variáveis, arrays, objetos, funções, condicionais e loops.
- DOM e eventos para selecionar elementos, escutar ações e alterar conteúdo.
- Async/await, Fetch e APIs públicas sem token.

## O que esta fase ensina

- Integrar HTML, CSS, DOM, eventos, Fetch e renderização dinâmica.
- Controlar estados de loading, erro, vazio e sucesso.
- Criar busca local, filtros simples e detalhe dinâmico.
- Separar funções de inicialização, busca de dados, regra e renderização.
- Pensar em fluxo antes de escrever código.

## O que esta fase não ensina

- Não ensina frameworks.
- Não usa backend próprio.
- Não usa bibliotecas externas.
- Não usa GitHub Pages.
- Não cria aplicação executável, deploy, roteamento ou SPA.
- Não trabalha com autenticação real, tokens reais ou banco de dados.

## Observações obrigatórias

Todos os exemplos são didáticos em Markdown. O código aparece apenas dentro dos arquivos `.md`, como material de estudo. A fase usa JavaScript vanilla, não usa frameworks, não usa backend próprio e não ativa GitHub Pages.

## Ordem recomendada de estudo

1. [Introdução ao laboratório de integração](./01-introducao-ao-laboratorio-de-integracao.md)
2. [Padrão base de projeto vanilla](./02-padrao-base-de-projeto-vanilla.md)
3. [Estados de aplicação](./03-estados-de-aplicacao.md)
4. [Projeto 1: lista de usuários com API](./04-projeto-1-lista-de-usuarios-api.md)
5. [Projeto 2: busca dinâmica](./05-projeto-2-busca-dinamica.md)
6. [Projeto 3: detalhe dinâmico](./06-projeto-3-detalhe-dinamico.md)
7. [Projeto 4: lista com filtros e estados](./07-projeto-4-lista-com-filtros-e-estados.md)
8. [Erros reais de integração](./08-erros-reais-de-integracao.md)
9. [Boas práticas de organização](./09-boas-praticas-de-organizacao.md)
10. [Snippets do laboratório](./10-snippets-do-laboratorio.md)
11. [Checklist de projeto vanilla](./11-checklist-de-projeto-vanilla.md)
12. [Mini desafios](./12-mini-desafios.md)
13. [Modelo mental de integração](./13-modelo-mental-de-integracao.md)

## Padrão esperado de estudo

Leia um arquivo por vez, copie os exemplos apenas para treino local se desejar, explique o fluxo com suas próprias palavras e revise se cada estado da tela tem uma resposta visual. Antes de aumentar o código, confirme que o menor fluxo funcional já está claro.

## Checklist resumido da fase

- [ ] Entendi a diferença entre conceito isolado e fluxo integrado.
- [ ] Sei montar loading, erro, vazio e sucesso.
- [ ] Sei buscar dados com Fetch e validar `response.ok`.
- [ ] Sei renderizar lista, busca, filtro e detalhe.
- [ ] Sei preservar dados originais ao filtrar.
- [ ] Sei organizar funções pequenas e revisáveis.
