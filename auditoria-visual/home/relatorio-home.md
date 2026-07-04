# AUDITORIA VISUAL POR SCREENSHOTS — HOME

## 1. Veredito geral
Não foi possível emitir veredito visual por evidência de screenshots nesta execução.

Motivo: o ambiente não possui navegador headless instalado e bloqueou as tentativas de instalar Playwright/Chromium por proxy/403 Forbidden. A Home (`index.html`) e o CSS (`assets/css/home.css`) foram inspecionados apenas em nível de código para confirmar os alvos, mas a auditoria solicitada exige renderização real no navegador.

## 2. Prints gerados
Nenhum screenshot foi gerado.

Pasta preparada para saída:

- `auditoria-visual/home/screenshots/`

Arquivos esperados, mas não criados por limitação técnica do ambiente:

- `home-320-top.png`
- `home-320-full.png`
- `home-320-focus-skip-link.png`
- `home-320-focus-nav.png`
- `home-320-mapa.png`
- `home-320-fases.png`
- `home-320-projeto.png`
- `home-320-qualidade.png`
- equivalentes para `390`, `768`, `1024`, `1366` e `1440`.

## 3. Análise por viewport

### 320px
- Pontos fortes: não avaliado visualmente.
- Problemas: screenshots não puderam ser capturados.
- Nota: sem nota.

### 390px
- Pontos fortes: não avaliado visualmente.
- Problemas: screenshots não puderam ser capturados.
- Nota: sem nota.

### 768px
- Pontos fortes: não avaliado visualmente.
- Problemas: screenshots não puderam ser capturados.
- Nota: sem nota.

### 1024px
- Pontos fortes: não avaliado visualmente.
- Problemas: screenshots não puderam ser capturados.
- Nota: sem nota.

### 1366px
- Pontos fortes: não avaliado visualmente.
- Problemas: screenshots não puderam ser capturados.
- Nota: sem nota.

### 1440px
- Pontos fortes: não avaliado visualmente.
- Problemas: screenshots não puderam ser capturados.
- Nota: sem nota.

## 4. Análise por seção

### Header/nav
Não avaliado por screenshot.

### Hero
Não avaliado por screenshot.

### Como usar
Não avaliado por screenshot.

### Mapa da Maleta
Não avaliado por screenshot.

### Fases
Não avaliado por screenshot.

### Projeto
Não avaliado por screenshot.

### Qualidade
Não avaliado por screenshot.

### Status
Não avaliado por screenshot.

### Próximos passos
Não avaliado por screenshot.

### Footer
Não avaliado por screenshot.

## 5. Problemas críticos
- Crítico: ambiente sem navegador headless disponível e sem permissão efetiva de rede para baixar dependências de captura, impedindo a geração dos screenshots obrigatórios.

## 6. Problemas altos
- Alto: não há evidência visual para confirmar responsividade, foco, alinhamento, hierarquia visual ou polish da Home.

## 7. Problemas médios
- Médio: não foi possível verificar empiricamente se o header sticky interfere nas âncoras ou se o foco do skip link/nav é confortável em todas as larguras.

## 8. Problemas baixos
- Baixo: a pasta de saída foi preparada, mas permaneceu sem imagens por causa da limitação técnica.

## 9. Acessibilidade visual
Não validada por screenshot. A validação visual de skip link, foco visível, contraste percebido, tamanho de clique e navegação por teclado depende de navegador renderizando a página.

## 10. Recomendações de correção
1. Reexecutar a auditoria em ambiente com Chromium/Firefox/Chrome instalado.
2. Instalar previamente uma das opções abaixo antes da execução:
   - `python3 -m pip install playwright && python3 -m playwright install chromium`
   - `npm install --save-dev playwright && npx playwright install chromium`
   - `apt-get install chromium` ou pacote equivalente do sistema.
3. Rodar o servidor local com `python3 -m http.server 8765`.
4. Executar script Playwright para capturar os viewports obrigatórios.
5. Só emitir veredito visual depois de revisar as imagens geradas.

## 11. Veredito final
Não avançar com base nesta execução, porque a auditoria visual por screenshots não foi concluída. A Home pode estar tecnicamente estruturada, mas precisa ser auditada em navegador real antes de decidir se está pronta para avançar para o Projeto Fase 9 ou se precisa de refinamento.

## Comandos executados

```bash
pwd && find .. -name AGENTS.md -print
```

```bash
git status --short && rg --files | sed -n '1,80p' && python3 -c "import playwright; print('playwright ok')" || true && which chromium || true && which chromium-browser || true && which google-chrome || true && which firefox || true
```

```bash
which chromium || true; which chromium-browser || true; which google-chrome || true; which firefox || true; node -v || true; npm -v || true; python3 --version; git status --short; sed -n '1,220p' index.html
```

```bash
sed -n '1,260p' assets/css/home.css && mkdir -p auditoria-visual/home/screenshots auditoria-visual/home/scripts && cat > /tmp/audit-home.js <<'SCRIPT' ... SCRIPT
python3 -m http.server 8765 >/tmp/home-server.log 2>&1 & echo $! >/tmp/home-server.pid
sleep 1
npx -y playwright@latest /tmp/audit-home.js
```

Resultado: falhou com `npm error 403 Forbidden - GET https://registry.npmjs.org/playwright`.

```bash
python3 -m pip install --user playwright && python3 -m playwright install chromium
```

Resultado: falhou com `Tunnel connection failed: 403 Forbidden` e `No matching distribution found for playwright`.

```bash
which wkhtmltoimage || true; which cutycapt || true; which pageres || true; which xdg-open || true; find / -maxdepth 3 \( -name chromium -o -name chrome -o -name firefox \) 2>/dev/null | head -50; python3 -c "import selenium; print('selenium ok')" || true; python3 -c "import PIL; print('PIL ok')" || true
```

Resultado: não encontrou navegador/ferramenta alternativa; Selenium e PIL não estavam instalados.

```bash
apt-get update && apt-get install -y chromium
```

Resultado: falhou com repositórios Ubuntu bloqueados por `403 Forbidden`.
