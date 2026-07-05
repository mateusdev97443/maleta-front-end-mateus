---
title: Manual JavaScript Fundamentos
permalink: /01-manual-de-consulta/04-javascript/
breadcrumbs:
  - label: Manual
    url: /01-manual-de-consulta/
  - label: Manual JavaScript Fundamentos
---


<div class="doc-note">
<strong>Foco da seção:</strong> raciocínio com dados, decisões, repetições, objetos e funções antes de conectar a lógica à interface.
</div>

## Comece por aqui

<div class="doc-grid">
  <a class="doc-card" href="01-introducao-ao-javascript.html"><strong>Introdução</strong><span>Entenda o papel do JavaScript no front-end.</span></a>
  <a class="doc-card" href="10-condicionais-if-else.html"><strong>Condicionais</strong><span>Treine decisões com entrada, processamento e saída.</span></a>
  <a class="doc-card" href="25-checklist-final.html"><strong>Revisão final</strong><span>Consolide os critérios para concluir a fase.</span></a>
</div>

A Fase 5 transforma JavaScript em uma base de raciocínio para Front-end. O objetivo é fazer Mateus entender como representar dados, tomar decisões, repetir processos, organizar listas, modelar objetos e criar funções antes de conectar essa lógica à interface.

## Objetivo da Fase 5

Construir domínio inicial de JavaScript puro, com foco em lógica, leitura de código e solução de problemas pequenos. Ao final, Mateus deve conseguir explicar cada linha dos exemplos, prever saídas no console e criar funções simples com entradas e retornos claros.

## Objetivo de aprendizado

Ao concluir esta fase, Mateus deve ser capaz de transformar um problema simples em dados, condições, repetições e funções pequenas. O aprendizado esperado não é decorar sintaxe, mas raciocinar sobre entrada, processamento e saída com JavaScript básico.

## O que será estudado

- Papel do JavaScript no Front-end e diferença entre estrutura, estilo e comportamento.
- Execução no console do navegador, em arquivo `.js` e ligação introdutória via `<script>`.
- Sintaxe, comentários, console, variáveis, tipos de dados, operadores e comparação.
- `null`, `undefined`, truthy, falsy, condicionais, `switch` e loops.
- Arrays, métodos básicos de arrays, objetos, funções, parâmetros, retorno e escopo.
- Arrow functions e callbacks apenas como introdução à ideia de função passada como argumento.
- Métodos básicos de string, debugging, erros comuns, boas práticas, snippets, exercícios, desafios e revisão.

## O que não será estudado ainda

- Frameworks, bibliotecas externas, tipagem avançada ou ferramentas complexas.
- Manipulação avançada de tela, seleção de elementos ou projetos interativos.
- Requisições externas, assincronicidade avançada ou integração com APIs.
- Aplicações grandes. Esta fase treina lógica com valores fixos e `console.log`.

## Pré-requisitos

Antes de iniciar, revise HTML, CSS, layout e responsividade das fases anteriores. A sequência correta é: primeiro entender estrutura e visual; depois aprender lógica; somente em fases futuras conectar lógica à tela.

## Como estudar

1. Leia um capítulo por vez e digite os exemplos manualmente.
2. Antes de executar, tente prever o resultado do console.
3. Troque valores pequenos para observar mudanças de comportamento.
4. Anote erros reais: mensagem, linha, causa e correção.
5. Resolva os exercícios sem copiar soluções prontas.
6. Use o modelo de análise lógica antes dos mini desafios.

## Arquivos disponíveis

- [Introdução ao JavaScript](01-introducao-ao-javascript.html)
- [Como executar JavaScript](02-como-executar-javascript.html)
- [Sintaxe, comentários e console](03-sintaxe-comentarios-e-console.html)
- [Variáveis: let, const e var](04-variaveis-let-const-var.html)
- [Tipos de dados](05-tipos-de-dados.html)
- [Strings e template literals](06-strings-e-template-literals.html)
- [Numbers e operadores matemáticos](07-numbers-e-operadores-matematicos.html)
- [Booleans, comparações e lógica](08-booleans-comparacoes-e-logica.html)
- [Null, undefined, truthy e falsy](09-null-undefined-truthy-falsy.html)
- [Condicionais if, else if e else](10-condicionais-if-else.html)
- [Switch](11-switch.html)
- [Loops: for, while e for...of](12-loops-for-while-for-of.html)
- [Arrays: fundamentos](13-arrays-fundamentos.html)
- [Métodos básicos de array](14-metodos-basicos-de-array.html)
- [Objetos: fundamentos](15-objetos-fundamentos.html)
- [Funções: fundamentos](16-funcoes-fundamentos.html)
- [Parâmetros, retorno e escopo](17-parametros-retorno-e-escopo.html)
- [Arrow functions](18-arrow-functions.html)
- [Callbacks: introdução](19-callbacks-introducao.html)
- [Métodos básicos de string](20-metodos-basicos-de-string.html)
- [Debugging básico](21-debugging-basico.html)
- [Problemas frequentes em JavaScript](22-erros-comuns-em-javascript.html)
- [Boas práticas de JavaScript básico](23-boas-praticas-javascript-basico.html)
- [Snippets JavaScript fundamentos](24-snippets-javascript-fundamentos.html)
- [Revisão final da fase](25-checklist-final.html)
- [Exercícios práticos](26-exercicios-praticos.html)
- [Mini desafios](27-mini-desafios.html)
- [Perguntas de revisão](28-perguntas-de-revisao.html)
- [Modelo de análise de problema lógico](29-modelo-de-analise-de-problema-logico.html)
- [Padrão profissional JavaScript básico](30-padrao-profissional-javascript-basico.html)

## Ordem recomendada de estudo

Estude na ordem dos arquivos. Os capítulos 1 a 9 constroem vocabulário da linguagem; 10 a 14 treinam decisões, repetições e listas; 15 a 20 organizam dados e ações; 21 a 30 consolidam investigação, prática e padrão profissional.

## Avisos de escopo

- Sem frameworks: nenhum exemplo depende de biblioteca externa ou ferramenta de interface.
- Sem DOM avançado: a tag `<script>` aparece apenas para mostrar onde o arquivo JavaScript entra.
- Sem projetos grandes: os exemplos usam dados fixos e `console.log` para treinar raciocínio.

## Conexão com a Fábrica de Projetos Front-end

A Fábrica de Projetos exigirá decisões como calcular preço, validar texto, filtrar produtos, classificar níveis, percorrer listas e montar resumos. Esta fase treina essas regras isoladamente para que, no futuro, a interface apenas consuma uma lógica já compreendida.

## Critérios para considerar a fase concluída

- Explicar a diferença prática entre HTML, CSS e JavaScript.
- Escolher entre `const` e `let` com justificativa.
- Usar comparação estrita em decisões.
- Resolver problemas simples com condicionais, loops, arrays, objetos e funções.
- Identificar erros comuns sem apagar o código inteiro.
- Concluir exercícios, mini desafios e perguntas de revisão.
- Aplicar o padrão profissional JavaScript básico da Maleta.


## Próximo passo

<div class="doc-actions">
  <a href="{{ '/03-fabrica-de-projetos/' | relative_url }}">Praticar na Fábrica de Projetos</a>
  <a href="{{ '/01-manual-de-consulta/' | relative_url }}">Voltar ao Manual</a>
</div>
