# Mini Desafios

Desafios integrados para juntar seleção, eventos, classes, atributos e feedback visual. Não use comunicação externa nem persistência.

## Card interativo

**Contexto:** Uma vitrine possui cards de ferramentas.

**Objetivo:** Transformar um card comum em card selecionável com estado ativo e botão de ação.

**Requisitos mínimos:**
- card com título, descrição e botão.
- classe visual para selecionado.
- texto do botão muda conforme estado.

**Requisitos extras:**
- adicionar selo visual.
- permitir apenas um card ativo.

**Critérios de qualidade:**
- estado visível.
- nomes claros.
- sem erro no console.

**Erros comuns a evitar:**
- ativar todos os cards ao mesmo tempo sem querer.
- depender apenas de cor.

## FAQ accordion

**Contexto:** Uma página de dúvidas precisa economizar espaço.

**Objetivo:** Criar perguntas que abrem e fecham respostas individualmente.

**Requisitos mínimos:**
- mínimo de três itens.
- cada pergunta controla seu item.
- classe no item aberto.

**Requisitos extras:**
- fechar outros itens ao abrir um novo.
- alterar símbolo de + para -.

**Critérios de qualidade:**
- estrutura repetível.
- seleção correta por item.
- respostas legíveis.

**Erros comuns a evitar:**
- selecionar só a primeira resposta.
- usar uma variável global para todas as respostas.

## Formulário de cadastro visual

**Contexto:** Uma tela de cadastro precisa orientar o usuário.

**Objetivo:** Validar nome e e-mail visualmente antes de mostrar sucesso.

**Requisitos mínimos:**
- campos de nome e e-mail.
- mensagens específicas.
- classe de erro no campo.

**Requisitos extras:**
- limpar erro durante digitação.
- desabilitar botão até preencher.

**Critérios de qualidade:**
- mensagens claras.
- uso de submit.
- preventDefault aplicado.

**Erros comuns a evitar:**
- validar apenas no clique do botão.
- não limpar erro antigo.

## Contador com botões

**Contexto:** Um painel precisa controlar quantidade.

**Objetivo:** Criar contador com aumentar, diminuir e zerar.

**Requisitos mínimos:**
- três botões.
- valor central visível.
- função para atualizar tela.

**Requisitos extras:**
- impedir número negativo.
- mudar classe quando chegar a zero.

**Critérios de qualidade:**
- lógica simples.
- sem duplicação excessiva.
- estado sempre visível.

**Erros comuns a evitar:**
- esquecer de atualizar a tela.
- misturar texto com número sem controle.

## Lista de tarefas visual sem persistência

**Contexto:** Um bloco de estudos precisa adicionar tarefas temporárias.

**Objetivo:** Criar lista em que o usuário adiciona e remove tarefas enquanto a página está aberta.

**Requisitos mínimos:**
- campo de texto.
- botão adicionar.
- botão remover em cada item.

**Requisitos extras:**
- mensagem para lista vazia.
- marcar item como concluído por classe.

**Critérios de qualidade:**
- itens criados com createElement.
- campo vazio tratado.
- remoção do item correto.

**Erros comuns a evitar:**
- usar conteúdo vazio.
- remover a lista inteira sem querer.

## Menu mobile simples conceitual

**Contexto:** Uma navegação precisa abrir em telas pequenas.

**Objetivo:** Criar botão que alterna menu e atualiza texto de abertura.

**Requisitos mínimos:**
- botão de menu.
- nav com links.
- classe aberta no nav.

**Requisitos extras:**
- fechar ao clicar em link.
- adicionar classe no body para travar visualmente.

**Critérios de qualidade:**
- classe controla aparência.
- texto do botão coerente.
- HTML semântico.

**Erros comuns a evitar:**
- controlar display em muitos pontos.
- não oferecer indicação de aberto/fechado.

## Alternador de tema

**Contexto:** Uma página de leitura precisa alternar contraste.

**Objetivo:** Alternar classe no body para tema claro/escuro enquanto a página está aberta.

**Requisitos mínimos:**
- botão de tema.
- CSS para body normal e escuro.
- texto do botão muda.

**Requisitos extras:**
- trocar ícone textual.
- alterar estilo de cards pelo tema.

**Critérios de qualidade:**
- estado centralizado no body.
- cores legíveis.
- sem armazenamento.

**Erros comuns a evitar:**
- aplicar classe em muitos elementos.
- esquecer contraste do texto.

## Galeria simples com troca de imagem

**Contexto:** Uma galeria local mostra imagem principal e miniaturas.

**Objetivo:** Clicar em miniatura altera imagem principal e texto alternativo.

**Requisitos mínimos:**
- imagem principal.
- três botões ou miniaturas.
- troca de src e alt.

**Requisitos extras:**
- destacar miniatura ativa.
- mostrar legenda.

**Critérios de qualidade:**
- atributos atualizados juntos.
- seleção múltipla correta.
- feedback de item ativo.

**Erros comuns a evitar:**
- trocar src sem alt.
- usar apenas primeira miniatura.

## Simulador de mensagem de erro

**Contexto:** Uma interface precisa demonstrar estados de erro e sucesso.

**Objetivo:** Criar controles para mostrar erro, mostrar sucesso e limpar mensagem.

**Requisitos mínimos:**
- área de feedback.
- três botões.
- classes diferentes por estado.

**Requisitos extras:**
- ícone textual antes da mensagem.
- tempo visual de destaque sem recurso externo.

**Critérios de qualidade:**
- estado anterior removido.
- mensagem clara.
- classes bem nomeadas.

**Erros comuns a evitar:**
- acumular classes conflitantes.
- deixar mensagem vazia com classe ativa.

## Painel simples de configurações visuais

**Contexto:** Um painel permite escolher tamanho de texto e destaque.

**Objetivo:** Criar botões que alteram classes de uma área de prévia.

**Requisitos mínimos:**
- área de prévia.
- botões de tamanho.
- botão de destaque.

**Requisitos extras:**
- mostrar configuração atual.
- permitir reset visual.

**Critérios de qualidade:**
- classes controlam visual.
- apenas uma opção de tamanho ativa.
- código organizado.

**Erros comuns a evitar:**
- misturar muitos styles inline.
- não remover classe anterior.
