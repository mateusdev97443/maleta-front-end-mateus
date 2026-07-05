# Formulários

## Objetivo da categoria

Criar formulários claros, acessíveis e confiáveis para coletar informações de pessoas usuárias. O foco é praticar campos, labels, validação, mensagens de erro, estados de interação e organização visual.

Formulários aparecem em cadastros, login, contato, checkout, pesquisas, orçamentos e sistemas internos. Por isso, este projeto deve priorizar usabilidade e prevenção de erros.

## Para quem é esse projeto

- Estudantes que querem dominar HTML de formulários.
- Iniciantes em JavaScript que precisam praticar validação e eventos.
- Pessoas que desejam criar páginas de contato, cadastro ou orçamento.
- Portfólios que precisam demonstrar cuidado com acessibilidade e experiência do usuário.

## O que construir

Construa um formulário completo para um cenário específico. Exemplos:

- Formulário de contato comercial.
- Cadastro de usuário.
- Solicitação de orçamento.
- Inscrição em evento.
- Pesquisa de satisfação.
- Agendamento de consulta.

O formulário deve orientar a pessoa, validar dados importantes e mostrar feedback claro após o envio simulado.

## Seções ou páginas obrigatórias

- **Introdução:** explique o objetivo do formulário e o tempo estimado de preenchimento.
- **Dados principais:** campos essenciais para o cenário escolhido.
- **Preferências ou detalhes:** campos complementares, como assunto, categoria, data ou mensagem.
- **Consentimento:** aceite de termos, política ou autorização quando fizer sentido.
- **Resumo ou confirmação:** feedback após envio simulado.
- **Área de ajuda:** instruções curtas para campos que podem gerar dúvida.

## Componentes sugeridos

- Inputs de texto, e-mail, telefone e senha quando aplicável.
- `textarea` para mensagens longas.
- `select`, radio buttons e checkboxes.
- Fieldsets para agrupar campos relacionados.
- Mensagens de erro por campo.
- Indicador de campo obrigatório.
- Botão de enviar e botão de limpar ou voltar.
- Barra de progresso em formulários de múltiplas etapas.

## Requisitos de HTML

- Todo campo deve ter `label` associado por `for` e `id`, exceto casos com associação implícita bem controlada.
- Use tipos corretos de input, como `email`, `tel`, `date`, `number` e `password`.
- Agrupe opções relacionadas com `fieldset` e `legend`.
- Informe campos obrigatórios de forma visual e textual.
- Use atributos nativos como `required`, `minlength`, `maxlength`, `pattern` e `autocomplete` quando fizer sentido.
- Não use placeholder como substituto de label.
- O botão de envio deve ser um `button` ou `input` adequado.

## Requisitos de CSS e responsividade

- Campos devem ter tamanho confortável para toque em celulares.
- Estados de foco, erro, sucesso e desabilitado devem ser visualmente diferentes.
- Mensagens de erro devem ficar próximas ao campo correspondente.
- O layout deve funcionar em uma coluna no mobile.
- Em telas maiores, campos relacionados podem ficar lado a lado sem prejudicar leitura.
- O formulário deve manter alinhamento e espaçamento consistentes.
- Evite esconder instruções importantes em textos muito pequenos.

## Requisitos de JavaScript

JavaScript é recomendado para validação complementar e feedback dinâmico.

Implemente quando possível:

- Validação no envio, sem recarregar a página.
- Mensagens específicas por campo inválido.
- Máscara simples ou formatação visual apenas quando não prejudicar edição.
- Habilitar ou desabilitar botão conforme consentimento obrigatório.
- Contador de caracteres em campos longos.
- Feedback de envio simulado com resumo dos dados principais.

Nunca confie apenas em JavaScript para acessibilidade: mantenha labels, tipos e atributos HTML corretos.

## Acessibilidade mínima

- Campos devem ser alcançáveis e preenchíveis por teclado.
- Erros precisam ser descritos em texto, não apenas por cor.
- Mensagens dinâmicas devem ser perceptíveis para tecnologias assistivas quando possível.
- Ordem de tabulação deve seguir a ordem visual.
- Labels e instruções devem ser claras.
- O foco deve ir para uma área útil após tentativa de envio com erro ou sucesso.

## Critérios de aceite

- O objetivo do formulário está claro antes do primeiro campo.
- Todos os campos têm labels adequados.
- Campos obrigatórios são identificáveis.
- Validações importantes funcionam e exibem mensagens úteis.
- O envio simulado mostra confirmação ou resumo.
- O formulário é utilizável em celular.
- A navegação por teclado funciona do início ao fim.

## Variações de dificuldade

- **Iniciante:** formulário de contato com validação HTML nativa e layout responsivo.
- **Intermediário:** validação personalizada com JavaScript e mensagens por campo.
- **Avançado:** formulário em múltiplas etapas, resumo antes do envio e persistência temporária com `localStorage`.

## Erros comuns

- Usar placeholder no lugar de label.
- Mostrar “campo inválido” sem explicar o problema.
- Validar tarde demais ou cedo demais de forma agressiva.
- Limpar todos os dados após erro de envio.
- Criar campos pequenos demais para mobile.
- Usar máscara que impede correção fácil do valor.

## Checklist final

- [ ] Cada campo possui label associado.
- [ ] Tipos de input foram escolhidos corretamente.
- [ ] Campos obrigatórios estão sinalizados.
- [ ] Mensagens de erro são específicas e próximas aos campos.
- [ ] O formulário funciona por teclado.
- [ ] O envio simulado exibe feedback claro.
- [ ] O layout foi testado em celular.
- [ ] Não há instruções importantes apenas em placeholder.

## Próximos passos

Depois de concluir, teste o formulário com dados válidos e inválidos, peça para outra pessoa preenchê-lo sem explicação prévia e registre melhorias encontradas. Em projetos reais, valide também no backend e trate privacidade dos dados coletados.
