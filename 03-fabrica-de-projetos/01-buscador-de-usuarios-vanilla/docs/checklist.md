# Checklist de revisão — Buscador de Usuários Vanilla

## HTML

- [x] Usa HTML5 válido.
- [x] Define `lang="pt-BR"`.
- [x] Possui estrutura semântica com `header`, `main` e `section`.
- [x] Possui título principal claro.
- [x] Possui texto curto explicando o objetivo.
- [x] Possui `label` associado ao input de busca.
- [x] Possui botões claros para limpar busca e tentar novamente.
- [x] Possui área de status para loading, erro, vazio e sucesso.
- [x] Possui área própria para a lista de cards.
- [x] Carrega `css/style.css` corretamente.
- [x] Carrega `js/script.js` com `defer`.
- [x] Não possui CDN.
- [x] Não possui JavaScript inline.

## CSS

- [x] Possui reset simples.
- [x] Usa layout mobile-first.
- [x] Possui boa legibilidade.
- [x] Possui contraste adequado.
- [x] Usa espaçamentos consistentes.
- [x] Usa grid e flexbox de forma simples.
- [x] Possui cards responsivos.
- [x] Possui foco visível em campos e botões.
- [x] Estiliza formulário e botões.
- [x] Possui estado visual de loading.
- [x] Possui estado visual de erro.
- [x] Possui estado visual de vazio.
- [x] Possui estado visual de sucesso.
- [x] Usa media queries para telas maiores.
- [x] Não usa Bootstrap.
- [x] Não usa Tailwind.
- [x] Não usa biblioteca externa.

## JavaScript

- [x] Usa `const` e `let` corretamente.
- [x] Seleciona elementos do DOM no início.
- [x] Usa função de inicialização.
- [x] Carrega usuários ao iniciar a página.
- [x] Usa `fetch`.
- [x] Usa `async/await`.
- [x] Valida `response.ok`.
- [x] Usa `response.json()`.
- [x] Trata erros com `try/catch/finally`.
- [x] Controla loading.
- [x] Controla erro.
- [x] Controla lista vazia.
- [x] Controla sucesso.
- [x] Preserva a lista original em `usuariosOriginais`.
- [x] Faz busca local por nome.
- [x] Não chama a API a cada tecla digitada.
- [x] Limpa a lista antes de renderizar novamente.
- [x] Renderiza cards dinamicamente.
- [x] Usa `createElement` e `textContent` para dados externos.
- [x] Possui botão contextual para tentar novamente ou recarregar.
- [x] Possui botão de limpar busca.
- [x] Usa funções pequenas com nomes claros.

## Escopo

- [x] Sem framework.
- [x] Sem TypeScript.
- [x] Sem backend.
- [x] Sem banco de dados.
- [x] Sem autenticação real.
- [x] Sem token.
- [x] Sem API privada.
- [x] Sem npm.
- [x] Sem Vite.
- [x] Sem Webpack.
- [x] Sem Babel.
- [x] Sem Axios.
- [x] Sem Bootstrap.
- [x] Sem Tailwind.
- [x] Sem deploy como requisito da Fase 9.
- [x] Sem dependência de GitHub Pages para funcionar localmente.
- [x] Sem SPA complexa.
- [x] Sem roteamento.
- [x] Sem múltiplos projetos.
