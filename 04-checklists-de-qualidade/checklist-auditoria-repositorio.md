# Checklist de auditoria do repositório

Use este checklist antes de considerar a Maleta pronta para nova auditoria, publicação ou avanço de fase.

## 1. README principal

- [ ] O objetivo da Maleta está claro.
- [ ] O mapa das fases está atualizado.
- [ ] O status por área diferencia fase concluída, área em evolução e backlog.
- [ ] Os links principais funcionam.
- [ ] Próximos passos estão documentados sem criar Fase 10 antes da hora.

## 2. Estrutura e escopo

- [ ] A estrutura de pastas continua previsível.
- [ ] Não há arquivos duplicados ou fora de lugar.
- [ ] Não foram adicionados frameworks.
- [ ] Não foram adicionados Bootstrap, Tailwind, Vite ou Webpack.
- [ ] Não foi criado backend, banco, autenticação, npm ou build obrigatório.
- [ ] O escopo vanilla continua explícito.

## 3. HTML

- [ ] Páginas HTML possuem `<!DOCTYPE html>`.
- [ ] Páginas HTML possuem `lang="pt-BR"`.
- [ ] Páginas HTML possuem `meta name="viewport"`.
- [ ] Páginas públicas possuem `meta name="description"`.
- [ ] Headings seguem ordem lógica.
- [ ] Formulários possuem `label` associado ao campo.

## 4. CSS e layout

- [ ] O layout continua mobile-first.
- [ ] Há foco visível em links, botões e campos.
- [ ] Há suporte a `prefers-reduced-motion` quando existir transição/animação.
- [ ] O conteúdo não depende de biblioteca externa.
- [ ] O layout permanece legível em telas pequenas, médias e grandes.

## 5. JavaScript e DOM

- [ ] O JavaScript continua vanilla.
- [ ] `fetch` é usado apenas quando necessário.
- [ ] `response.ok` é validado antes de `response.json()`.
- [ ] Fluxos assíncronos tratam `try`, `catch` e `finally` quando aplicável.
- [ ] Dados externos são renderizados com `createElement` e `textContent`.
- [ ] Não há `innerHTML` com dados externos.
- [ ] Estados de loading, erro, vazio e sucesso são claros quando houver dados dinâmicos.

## 6. Acessibilidade

- [ ] Há skip link em páginas públicas principais.
- [ ] Estados dinâmicos usam `aria-live` ou alternativa equivalente.
- [ ] Links têm texto compreensível fora de contexto.
- [ ] A navegação por teclado é possível.
- [ ] Contraste e tamanho de toque são adequados.

## 7. Segurança e privacidade

- [ ] Não há tokens, chaves privadas ou credenciais.
- [ ] Não há API privada exposta.
- [ ] Não há dependências externas desconhecidas.
- [ ] Dados de API pública são tratados como conteúdo externo.

## 8. Validação local sugerida

Execute, quando possível:

```bash
git status --short
find . -maxdepth 4 -type f | sort
rg -n "innerHTML|bootstrap|tailwind|vite|webpack" .
rg -n "lang=\"pt-BR\"|viewport|meta name=\"description\"|focus-visible|prefers-reduced-motion|aria-live" index.html assets/css/home.css 03-fabrica-de-projetos/01-buscador-de-usuarios-vanilla
rg -n "fetch|response\.ok|try|catch|finally" 03-fabrica-de-projetos/01-buscador-de-usuarios-vanilla/js/script.js
python3 -m http.server 8765
curl -I http://127.0.0.1:8765/
curl -I http://127.0.0.1:8765/03-fabrica-de-projetos/01-buscador-de-usuarios-vanilla/
```

Se algum comando encontrar ocorrência esperada em material didático, registre o contexto e verifique se ela não afeta código publicado.
