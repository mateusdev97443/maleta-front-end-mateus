# 14 — Checklist final de HTML

Use este checklist para aprovar ou reprovar uma página antes de entrega, publicação ou commit. Cada item deve ser respondido objetivamente.

## Documento

- [ ] O arquivo começa com `<!doctype html>`.
- [ ] A tag `html` define o idioma correto, como `lang="pt-BR"`.
- [ ] Existem apenas um `head` e um `body`.
- [ ] A estrutura é legível sem depender de CSS ou JavaScript.
- [ ] A indentação permite identificar pais, filhos e seções rapidamente.

## Head e SEO básico

- [ ] `meta charset="UTF-8"` está presente.
- [ ] `meta name="viewport"` está presente e correto.
- [ ] O `title` é específico, descritivo e diferente de outras páginas.
- [ ] A `meta description` resume o conteúdo real da página.
- [ ] O favicon foi referenciado quando o projeto possui favicon.
- [ ] Metadados não prometem conteúdo que a página não entrega.

## Semântica

- [ ] Existe um único `main` visível com o conteúdo principal.
- [ ] `header`, `nav`, `section`, `article`, `aside` e `footer` são usados pelo significado, não pela aparência.
- [ ] Cada `section` importante tem título claro.
- [ ] `article` é usado apenas para conteúdo que faz sentido isoladamente.
- [ ] `div` aparece apenas como agrupamento neutro quando não há tag semântica melhor.

## Textos

- [ ] Existe um `h1` claro para o assunto principal.
- [ ] Headings seguem ordem lógica, sem pular níveis por motivo visual.
- [ ] Parágrafos são usados para texto corrido.
- [ ] `strong` e `em` indicam importância ou ênfase real.
- [ ] Não há excesso de `br` para criar espaçamento.

## Links

- [ ] Todo link tem `href` válido ou âncora interna existente.
- [ ] Textos de links são descritivos e fazem sentido fora do contexto.
- [ ] Links externos em nova aba usam `rel="noopener noreferrer"`.
- [ ] Links são usados para navegação, não para ações que deveriam ser botões.

## Imagens e mídia

- [ ] Imagens informativas têm `alt` específico.
- [ ] Imagens decorativas usam `alt=""`.
- [ ] Imagens relevantes definem `width` e `height` quando possível.
- [ ] `figure` e `figcaption` são usados quando a legenda faz parte do conteúdo.
- [ ] Iframes têm `title` descritivo.
- [ ] Vídeos e áudios têm controles quando a pessoa precisa controlar a reprodução.

## Formulários

- [ ] Todo campo tem `label` conectado ou nome acessível equivalente.
- [ ] Campos possuem `name` quando o valor precisa ser enviado.
- [ ] Tipos de input correspondem ao dado solicitado.
- [ ] `required`, `minlength`, `maxlength`, `pattern` e `autocomplete` são usados quando ajudam a pessoa.
- [ ] Grupos de radio e checkbox usam `fieldset` e `legend`.
- [ ] Botões declaram `type` explicitamente.

## Acessibilidade

- [ ] Landmarks ajudam a navegar pela página.
- [ ] A ordem do HTML acompanha a ordem lógica de leitura e foco.
- [ ] A página é navegável por teclado em ordem previsível.
- [ ] Não há `tabindex` positivo sem justificativa forte.
- [ ] ARIA foi usada apenas quando HTML nativo não resolveu o problema.
- [ ] Links, botões e campos têm nomes claros para leitores de tela.

## Validação

- [ ] Tags estão fechadas corretamente.
- [ ] Elementos estão aninhados de forma válida.
- [ ] IDs são únicos na página.
- [ ] Atributos obrigatórios foram preenchidos.
- [ ] O HTML foi revisado em validador ou por inspeção estrutural criteriosa.

## Manutenção

- [ ] Nomes de `id`, `name` e âncoras são claros.
- [ ] Comentários explicam decisões úteis, não o óbvio.
- [ ] Não há código morto, blocos duplicados ou marcação temporária esquecida.
- [ ] O arquivo pode ser entendido por outra pessoa sem explicação verbal.

## Pronto para commit

- [ ] Todos os links internos testados funcionam.
- [ ] O escopo da alteração ficou restrito ao HTML necessário.
- [ ] Nenhuma solução de estilo ou comportamento foi misturada indevidamente ao HTML.
- [ ] A página atende aos critérios mínimos de semântica, acessibilidade, SEO básico e validação.
