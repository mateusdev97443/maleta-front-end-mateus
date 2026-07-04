# Checklist final CSS

Use este checklist para aprovar ou reprovar uma entrega CSS antes de commit, pull request, atividade ou publicação. Se um item crítico falhar, ajuste antes de considerar a entrega pronta.

## Organização

- [ ] O CSS está dentro do escopo da tarefa e não altera áreas sem necessidade.
- [ ] Arquivos, seções e comentários seguem uma ordem compreensível.
- [ ] Regras globais, componentes, estados e utilitários não estão misturados sem critério.
- [ ] Código morto, duplicado ou experimental foi removido.
- [ ] Comentários explicam decisões úteis, não o óbvio.

## Conexão com HTML

- [ ] O HTML continua responsável por estrutura e significado.
- [ ] O CSS não depende de marcação frágil ou excessivamente aninhada.
- [ ] Classes usadas no CSS existem no HTML esperado.
- [ ] Elementos interativos continuam sendo elementos corretos, como links e botões.
- [ ] A estilização não exige `style` inline para funcionar.

## Seletores

- [ ] Classes têm nomes claros e consistentes.
- [ ] IDs não foram usados para estilização comum.
- [ ] Seletores longos foram evitados ou justificados.
- [ ] Seletores de elemento foram usados apenas para base global ou casos controlados.
- [ ] Estados como `:hover`, `:focus-visible` e `[disabled]` foram tratados quando aplicável.

## Cascata e especificidade

- [ ] A ordem das regras é previsível.
- [ ] Regras de base aparecem antes de componentes e variações.
- [ ] Conflitos foram resolvidos sem aumentar especificidade de forma desnecessária.
- [ ] `!important` não foi usado, ou está documentado e justificado.
- [ ] Estilos inline não foram usados para resolver disputa de CSS.

## Box Model

- [ ] `box-sizing: border-box` está aplicado na base ou considerado no cálculo.
- [ ] `padding` foi usado para espaço interno.
- [ ] `margin` foi usado para espaço externo.
- [ ] Alturas fixas não cortam conteúdo real.
- [ ] `min-height`, `max-width` e limites flexíveis foram usados quando necessários.
- [ ] `overflow` não esconde texto, foco ou controles importantes.

## Tipografia

- [ ] Fonte, tamanho e `line-height` favorecem leitura.
- [ ] Hierarquia visual foi feita com CSS sem quebrar a semântica dos headings.
- [ ] Textos longos têm largura confortável.
- [ ] Links continuam reconhecíveis como links.
- [ ] Não há excesso de pesos, tamanhos ou estilos tipográficos sem padrão.

## Cores e contraste

- [ ] Texto e fundo têm contraste suficiente.
- [ ] Cores principais estão consistentes com a identidade do projeto.
- [ ] Estados visuais não dependem apenas de cor quando a informação é importante.
- [ ] Sombras, bordas e fundos são sutis e padronizados.
- [ ] Transparências não prejudicam leitura.

## Espaçamento

- [ ] Espaçamentos seguem uma escala ou padrão claro.
- [ ] Não há valores mágicos sem justificativa.
- [ ] Componentes têm respiro interno adequado.
- [ ] Separação entre blocos é consistente.
- [ ] Margens verticais foram revisadas para evitar surpresas de colapso.

## Display e visibilidade

- [ ] `display: none` foi usado apenas quando o elemento deve sair do fluxo.
- [ ] `visibility: hidden` foi usado apenas quando o espaço precisa ser preservado.
- [ ] `opacity: 0` não deixou controles invisíveis e interativos por acidente.
- [ ] Elementos focáveis escondidos foram evitados.
- [ ] Conteúdo essencial não foi ocultado de forma inacessível.

## Estados

- [ ] Links e botões têm estados de `hover` e foco quando necessário.
- [ ] `:focus-visible` está presente em elementos interativos customizados.
- [ ] Estados `disabled` são visualmente claros.
- [ ] Estados ativos ou selecionados não dependem de um único detalhe fraco.
- [ ] A experiência funciona sem depender apenas de mouse.

## Acessibilidade

- [ ] Foco visível foi preservado.
- [ ] Tamanho de fonte e espaçamento permitem leitura confortável.
- [ ] Conteúdo visual decorativo não carrega informação essencial sozinho.
- [ ] Conteúdo escondido foi analisado em relação a teclado e leitores de tela.
- [ ] A interface continua compreensível com zoom do navegador.

## Manutenção

- [ ] Valores repetidos importantes viraram variáveis ou padrões reutilizáveis.
- [ ] Classes comunicam intenção e não apenas aparência temporária.
- [ ] O CSS pode ser explicado por outra pessoa sem investigação excessiva.
- [ ] Uma pequena alteração visual não exige editar muitos pontos.
- [ ] O padrão adotado pode crescer sem virar disputa de especificidade.

## Pronto para commit

- [ ] O diff foi revisado arquivo por arquivo.
- [ ] O escopo da Fase 3 foi respeitado.
- [ ] Não há avanço profundo para Flexbox, Grid, media queries ou JavaScript.
- [ ] Links internos de documentação foram validados quando aplicável.
- [ ] `git diff --check` não aponta problemas.
- [ ] `git status` mostra apenas alterações esperadas antes do commit.
