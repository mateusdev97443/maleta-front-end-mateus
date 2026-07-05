# Dashboards

## Objetivo da categoria

Criar interfaces para visualizar dados, acompanhar indicadores e apoiar decisões. O foco é transformar informações em cards, tabelas, gráficos simples e filtros compreensíveis.

Um dashboard de qualidade não é apenas decorativo: ele precisa responder perguntas, destacar prioridades e permitir leitura rápida dos dados mais importantes.

## Para quem é esse projeto

- Estudantes que já praticaram HTML, CSS e JavaScript básico.
- Iniciantes que querem treinar renderização de dados na tela.
- Pessoas que precisam simular painéis administrativos, financeiros, educacionais ou comerciais.
- Portfólios que precisam mostrar organização de informação e componentes reutilizáveis.

## O que construir

Construa um dashboard com dados fictícios em JavaScript. Escolha um contexto, como vendas, finanças pessoais, tarefas, alunos, estoque, saúde, suporte ou marketing.

O painel deve mostrar indicadores principais, uma lista ou tabela detalhada e pelo menos um controle para filtrar ou alterar a visualização dos dados.

## Seções ou páginas obrigatórias

- **Cabeçalho do painel:** título, período analisado e ação principal.
- **Resumo de indicadores:** cards com métricas importantes.
- **Área de visualização:** gráfico simples, barras, progresso ou comparação visual.
- **Tabela ou lista:** dados detalhados com status, valores ou categorias.
- **Filtros:** período, categoria, status ou busca.
- **Estado vazio:** mensagem quando não houver dados para mostrar.
- **Rodapé ou observação:** origem dos dados simulados e data fictícia de atualização.

## Componentes sugeridos

- Cards de KPI.
- Tabela responsiva.
- Campo de busca.
- Select de filtro.
- Badges de status.
- Barras de progresso com CSS.
- Gráfico simples feito com HTML/CSS ou SVG básico.
- Botão para limpar filtros.
- Mensagens de loading, vazio e erro em versões mais avançadas.

## Requisitos de HTML

- Use estrutura semântica para separar cabeçalho, filtros, resumo e detalhes.
- Tabelas devem usar `table`, `thead`, `tbody`, `th` e `td` corretamente quando houver dados tabulares.
- Cards de indicador devem ter título, valor e contexto.
- Controles de filtro devem ter labels.
- Não represente dados importantes apenas como imagem.
- Inclua textos que expliquem o significado de números e status.

## Requisitos de CSS e responsividade

- Comece com layout em coluna para mobile.
- Em telas maiores, organize indicadores e gráficos em grid.
- Garanta que tabelas não estourem a largura da tela; use rolagem controlada ou adaptação em cards.
- Diferencie visualmente status, alertas e tendências sem depender apenas de cor.
- Use espaçamento consistente para evitar aparência poluída.
- Mantenha números e rótulos legíveis.
- Teste o painel com poucos e muitos itens.

## Requisitos de JavaScript

JavaScript faz sentido neste projeto para manipular dados simulados e atualizar a interface.

Implemente quando possível:

- Array de objetos representando os dados do painel.
- Cálculo de indicadores a partir dos dados, como total, média ou quantidade por status.
- Renderização dinâmica de cards e linhas da tabela.
- Filtros por categoria, período, status ou busca.
- Estado vazio quando filtros não retornarem resultados.
- Função para limpar filtros.

Evite números fixos no HTML quando eles deveriam vir dos dados simulados.

## Acessibilidade mínima

- Tabelas devem ter cabeçalhos claros.
- Filtros precisam de labels e foco visível.
- Indicadores devem ter texto suficiente para serem compreendidos fora do contexto visual.
- Cores de status devem ser acompanhadas por texto ou ícone com nome acessível.
- Atualizações dinâmicas importantes devem ser anunciadas ou apresentadas em uma região clara.
- O dashboard deve ser navegável por teclado.

## Critérios de aceite

- O painel deixa claro qual contexto está sendo analisado.
- Indicadores principais são calculados a partir dos dados.
- Filtros alteram a lista, tabela ou visualização.
- Há tratamento para resultado vazio.
- O layout funciona em celular e desktop.
- Dados tabulares são marcados semanticamente.
- A interface parece organizada e pronta para demonstração.

## Variações de dificuldade

- **Iniciante:** cards de indicadores e tabela estática com dados simulados.
- **Intermediário:** renderização dinâmica, filtros e cálculo de métricas com JavaScript.
- **Avançado:** múltiplas visualizações, ordenação de tabela, gráficos em SVG ou Canvas e persistência de preferências.

## Erros comuns

- Criar muitos indicadores sem explicar o que significam.
- Usar dados fixos no HTML e filtros falsos que não alteram nada.
- Fazer gráficos bonitos, mas pouco legíveis.
- Ignorar estado vazio.
- Quebrar tabelas no mobile.
- Usar apenas cor para indicar sucesso, alerta ou erro.

## Checklist final

- [ ] O contexto do dashboard está explícito.
- [ ] Os dados simulados estão organizados em JavaScript.
- [ ] Indicadores são calculados, não apenas digitados manualmente.
- [ ] Filtros foram testados com resultados existentes e vazios.
- [ ] Tabela ou lista possui marcação clara.
- [ ] O layout foi revisado em celular e desktop.
- [ ] Status e tendências não dependem apenas de cor.
- [ ] Há observação sobre origem fictícia dos dados.

## Próximos passos

Depois de finalizar, teste o dashboard com novos itens no array de dados, revise se as métricas continuam corretas e documente no portfólio quais perguntas o painel ajuda a responder. Em um projeto real, o próximo passo seria integrar uma API e tratar carregamento, erro e permissões de acesso.
