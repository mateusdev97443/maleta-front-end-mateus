# Buscador de Usuários Vanilla

## Objetivo

Criar o primeiro projeto real guiado da Maleta de Ferramentas Front-end usando somente HTML, CSS e JavaScript vanilla. O projeto transforma estudos de DOM, eventos, `fetch`, `async/await` e renderização dinâmica em uma página funcional e pequena.

## Contexto na Maleta

Este projeto pertence à **Fase 9 — Primeiro Projeto Real Guiado Vanilla** e fica dentro da Fábrica de Projetos. Ele vem depois dos manuais e laboratórios anteriores para mostrar como organizar uma solução real sem frameworks, sem build e sem dependências externas.

## O que o projeto faz

O Buscador de Usuários Vanilla carrega usuários da API pública DummyJSON, exibe cards com dados básicos e permite buscar localmente por nome. A API é chamada no carregamento inicial e no botão de tentar novamente/recarregar, mas não é chamada a cada tecla digitada.

## Funcionalidades

- Consumo de API pública sem token.
- Estado de loading durante o carregamento.
- Estado de erro com mensagem amigável.
- Botão para tentar novamente ou recarregar usuários.
- Estado de lista vazia quando a busca não encontra resultados.
- Estado de sucesso com quantidade encontrada.
- Renderização dinâmica de cards de usuários.
- Busca local por nome com os dados já carregados.
- Botão para limpar busca.
- Layout responsivo com CSS mobile-first.
- Código JavaScript separado em funções pequenas.

## Conceitos praticados

- HTML5 semântico.
- Associação entre `label` e `input`.
- CSS responsivo com grid, flexbox, variáveis e foco visível.
- Seleção de elementos do DOM.
- Eventos de clique e digitação.
- `fetch`, `async/await`, `response.ok` e `response.json()`.
- `try/catch/finally` para tratar fluxo assíncrono.
- Manipulação segura do DOM com `createElement` e `textContent`.
- Preservação da lista original em memória.
- Filtragem local sem nova chamada de rede a cada tecla.

## Estrutura de arquivos

```text
03-fabrica-de-projetos/01-buscador-de-usuarios-vanilla/
├── README.md
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── docs/
    ├── checklist.md
    └── explicacao-do-fluxo.md
```

## Como abrir localmente

1. Abra a pasta `03-fabrica-de-projetos/01-buscador-de-usuarios-vanilla/`.
2. Abra o arquivo `index.html` diretamente no navegador.
3. Mantenha conexão com a internet para que a requisição à API pública funcione.

Não é necessário instalar pacotes, rodar servidor, executar build ou usar terminal.

## Como testar manualmente

1. Abra `index.html` no navegador.
2. Observe o estado de loading inicial.
3. Aguarde os cards aparecerem.
4. Digite um nome existente no campo de busca.
5. Digite um nome inexistente e confira a mensagem de lista vazia.
6. Clique em **Limpar busca** e confirme que a lista completa volta.
7. Clique em **Tentar novamente** para recarregar os dados da API.
8. Simule falta de internet ou bloqueio de rede para conferir o estado de erro.
9. Redimensione a tela para verificar o comportamento responsivo.

## API usada

A API utilizada é:

```text
https://dummyjson.com/users
```

Ela é pública, não exige token, não exige autenticação e retorna uma lista de usuários com dados como nome, e-mail, telefone, cidade e empresa.

## Estados da interface

- **Loading:** aparece enquanto os usuários estão sendo carregados.
- **Erro:** aparece quando a requisição falha ou a resposta HTTP não é válida.
- **Vazio:** aparece quando a lista carregada ou filtrada não possui usuários para exibir.
- **Sucesso:** aparece quando os cards foram renderizados com resultados.

## Decisões de organização

- O HTML mantém a estrutura semântica e acessível.
- O CSS usa uma abordagem mobile-first para começar simples e adaptar em telas maiores.
- O JavaScript guarda os usuários originais em `usuariosOriginais` para permitir busca local.
- A busca local não chama a API a cada tecla, reduzindo requisições desnecessárias.
- A renderização usa `createElement` e `textContent` para evitar inserir dados externos com HTML bruto.
- As responsabilidades foram separadas em funções de carregamento, filtro, renderização e estados visuais.

## Limites do projeto

Este projeto é intencionalmente pequeno. Ele não possui paginação, autenticação, persistência local, testes automatizados avançados, roteamento ou arquitetura complexa. A proposta é praticar o fluxo essencial de um projeto front-end vanilla real.

## O que este projeto não usa

- Frameworks como React, Vue ou Angular.
- TypeScript.
- Backend próprio.
- Banco de dados.
- Autenticação real.
- Tokens ou chaves secretas.
- API privada.
- npm, Vite, Webpack, Babel ou Axios.
- Bootstrap, Tailwind ou bibliotecas externas.
- SPA complexa.
- Roteamento.
- Deploy.
- GitHub Pages.

## Próximos estudos possíveis

Depois de revisar este projeto, bons exercícios de estudo são paginação simples, ordenação, filtros adicionais, melhoria de acessibilidade, tratamento visual mais detalhado de erros e testes manuais guiados. Esses estudos não fazem parte da Fase 9 e não foram implementados aqui para manter o escopo correto.
