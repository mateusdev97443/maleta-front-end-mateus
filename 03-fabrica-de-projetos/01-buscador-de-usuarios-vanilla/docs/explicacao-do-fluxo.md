# Explicação do fluxo do projeto

## Visão geral

O Buscador de Usuários Vanilla segue um fluxo simples: carregar dados de uma API pública, guardar a lista original em memória, renderizar cards na tela e permitir que o usuário filtre essa lista localmente pelo nome. A interface muda de estado conforme o momento da aplicação.

## Carregamento inicial

Quando o arquivo `js/script.js` é carregado com `defer`, o HTML já está disponível para o JavaScript selecionar os elementos necessários. Em seguida, a função `iniciarAplicacao` registra os eventos dos botões e do campo de busca, além de chamar `buscarUsuarios` para iniciar o carregamento dos dados.

## Busca na API

A função `buscarUsuarios` é assíncrona e usa `fetch` para chamar `https://dummyjson.com/users`. Antes da requisição, a interface entra no estado de loading, a lista visível é limpa e os controles são desabilitados temporariamente para evitar ações durante o carregamento.

## Validação de status HTTP

Depois que a resposta chega, o código verifica `response.ok`. Essa validação é importante porque uma requisição pode receber resposta do servidor mesmo quando o status HTTP representa erro. Se `response.ok` for falso, o código lança um erro e encaminha o fluxo para o `catch`.

## Conversão com `response.json()`

Quando a resposta é válida, o projeto chama `response.json()` para transformar o corpo da resposta em um objeto JavaScript. A API DummyJSON retorna os usuários dentro da propriedade `users`, por isso o código confere se esse valor é realmente um array antes de salvar os dados.

## Armazenamento dos usuários originais

Os usuários carregados são guardados na variável `usuariosOriginais`. Essa lista funciona como a fonte principal dos dados na página. Quando a busca é limpa ou quando o termo digitado muda, o filtro usa essa variável para calcular o que deve aparecer na tela.

## Renderização inicial

Após salvar os usuários originais, a função `renderizarUsuarios` recebe a lista completa. Ela limpa a lista anterior, cria um `DocumentFragment`, monta cada card com `createElement` e insere todos os cards de uma vez na área `#lista-usuarios`.

Cada card mostra nome, e-mail, telefone, cidade e empresa. Quando algum dado não existe, o projeto usa o texto `Não informado` para manter a interface compreensível.

## Busca local por nome

O evento `input` do campo de busca chama `filtrarUsuarios`. Essa função lê o termo digitado, transforma o texto em minúsculas e compara com o nome completo de cada usuário. O resultado filtrado é enviado para `renderizarUsuarios`.

A busca é local porque usa os dados que já estão em `usuariosOriginais`. Assim, a aplicação responde rápido e não depende de uma nova chamada de rede a cada tecla.

## Limpeza de busca

O botão **Limpar busca** esvazia o campo de texto, renderiza novamente a lista original e devolve o foco para o input. Isso ajuda o usuário a continuar pesquisando sem precisar recarregar a página.

## Tentativa novamente

O botão **Tentar novamente** chama `buscarUsuarios` outra vez. Ele serve para recuperar a aplicação depois de um erro de rede ou para recarregar os dados da API quando o usuário desejar.

## Estados da interface

### Loading

Indica que a requisição está em andamento. A lista é limpa e os controles ficam desabilitados temporariamente.

### Erro

Aparece quando a requisição falha ou quando o status HTTP não é aceito por `response.ok`. A mensagem orienta o usuário a tentar novamente.

### Vazio

Aparece quando não existem usuários para renderizar. Isso pode acontecer se a API retornar uma lista vazia ou se a busca local não encontrar nomes compatíveis.

### Sucesso

Aparece quando pelo menos um usuário foi renderizado. A mensagem informa a quantidade de usuários encontrados.

## Separação das funções

O projeto separa responsabilidades para facilitar estudo e manutenção:

- `iniciarAplicacao` prepara eventos e inicia o carregamento.
- `buscarUsuarios` cuida da requisição e do tratamento assíncrono.
- `filtrarUsuarios` calcula o resultado da busca local.
- `renderizarUsuarios` decide se mostra cards ou estado vazio.
- `criarCardUsuario` monta a estrutura de cada card.
- `mostrarLoading`, `mostrarErro`, `mostrarEstadoVazio` e `mostrarSucesso` controlam mensagens e estados visuais.
- `limparBusca` restaura a lista original.

## Por que não chamar a API a cada tecla

Chamar a API a cada tecla aumentaria o número de requisições sem necessidade, deixaria a interface mais dependente da rede e dificultaria o estudo do filtro local. Como o projeto carrega uma lista pequena de usuários, filtrar em memória é mais simples, rápido e didático.

## Por que preservar a lista original

A lista original permite que o filtro seja reversível. Sem ela, cada nova busca poderia partir de uma lista já filtrada, fazendo resultados desaparecerem indevidamente. Preservar os dados originais garante que limpar a busca sempre restaure o conjunto completo.

## Por que separar busca, filtro e renderização

Separar essas partes evita funções grandes e misturadas. A busca cuida da origem dos dados, o filtro decide quais dados devem aparecer e a renderização transforma dados em elementos visuais. Essa divisão deixa o código mais claro para leitura, revisão e manutenção.

## Fluxo resumido em etapas

1. A página carrega `index.html`, `css/style.css` e `js/script.js`.
2. `iniciarAplicacao` registra eventos e chama `buscarUsuarios`.
3. `buscarUsuarios` mostra loading e faz `fetch` na API pública.
4. O código valida `response.ok`.
5. A resposta válida é convertida com `response.json()`.
6. Os usuários são salvos em `usuariosOriginais`.
7. A lista completa é renderizada em cards.
8. Ao digitar no campo, `filtrarUsuarios` filtra localmente por nome.
9. `renderizarUsuarios` atualiza cards, estado vazio ou sucesso.
10. O botão limpar restaura a lista original.
11. O botão tentar novamente executa uma nova chamada à API.
