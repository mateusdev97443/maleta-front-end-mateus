# Mini desafios

## Introdução

Os mini desafios são exercícios curtos para fixar decisões de layout. Todos devem ser resolvidos sem JavaScript.

## Desafio 1 — Card adaptável

### Missão

Criar um card com título, texto, botão e imagem opcional que funcione em qualquer largura.

### Regras

Não usar altura fixa. Usar `gap` e controlar imagem com `aspect-ratio` se ela existir.

### O que testar

Título com uma linha, título com três linhas e card sem imagem.

### Critério de sucesso

O card continua legível e sem conteúdo cortado.

## Desafio 2 — Seção de preços responsiva

### Missão

Criar três planos de preço com nome, valor, lista de recursos e botão.

### Regras

Usar Grid responsivo. O plano destacado não pode quebrar o mobile.

### O que testar

Uma coluna no mobile, múltiplas colunas quando couber e textos de recursos longos.

### Critério de sucesso

Todos os planos ficam comparáveis e sem overflow.

## Desafio 3 — Galeria responsiva

### Missão

Criar uma galeria de imagens com recorte consistente.

### Regras

Usar `grid`, `auto-fit`, `minmax()`, `aspect-ratio` e `object-fit`.

### O que testar

Imagens horizontais, verticais e quadradas.

### Critério de sucesso

A galeria mantém alinhamento e as imagens não distorcem.

## Desafio 4 — Formulário de contato responsivo

### Missão

Criar formulário com nome, e-mail, assunto, mensagem e botão.

### Regras

Campos empilhados no mobile. Apenas campos curtos podem dividir linha no desktop.

### O que testar

Largura de 360px, 768px e 1200px.

### Critério de sucesso

O formulário permanece confortável e legível em todas as larguras.

## Desafio 5 — Layout de perfil

### Missão

Criar bloco de perfil com avatar, nome, descrição, links e ações.

### Regras

Usar Flexbox para alinhar avatar e texto quando houver espaço. No mobile, empilhar.

### O que testar

Nome longo, descrição longa e vários links.

### Critério de sucesso

O avatar não deforma e o texto não estoura.

## Desafio 6 — Página com hero, cards e rodapé

### Missão

Montar uma página simples com três padrões de seção.

### Regras

Usar container consistente e mobile-first.

### O que testar

Ordem de leitura no mobile e alinhamento no desktop.

### Critério de sucesso

A página parece uma unidade, não blocos desconectados.

## Desafio 7 — Dashboard com sidebar conceitual

### Missão

Criar dashboard com sidebar, topo, métricas e lista.

### Regras

Sidebar acima no mobile e lateral no desktop. Não usar interação dinâmica.

### O que testar

Menu com muitos links e métricas com números grandes.

### Critério de sucesso

O painel não gera rolagem horizontal.

## Desafio 8 — Corrigir overflow horizontal

### Missão

Receber ou criar uma página com overflow e descobrir a causa.

### Regras

Não resolver apenas com `body { overflow-x: hidden; }`.

### O que testar

Imagem grande, container fixo, grid rígido e texto longo.

### Critério de sucesso

A causa real é corrigida e a rolagem horizontal desaparece.

## Desafio 9 — Melhorar espaçamentos no mobile

### Missão

Pegar uma seção com espaçamentos exagerados e torná-la proporcional.

### Regras

Usar escala de espaçamento ou `clamp()`.

### O que testar

Se a primeira dobra da tela mostra conteúdo suficiente.

### Critério de sucesso

A seção respira sem desperdiçar espaço no mobile.

## Desafio 10 — Transformar layout rígido em fluido

### Missão

Substituir larguras fixas por soluções responsivas.

### Regras

Usar `max-width`, `min()`, porcentagem, Grid ou Flexbox conforme o caso.

### O que testar

Larguras pequenas, médias e grandes.

### Critério de sucesso

O layout se adapta sem múltiplas correções específicas.
