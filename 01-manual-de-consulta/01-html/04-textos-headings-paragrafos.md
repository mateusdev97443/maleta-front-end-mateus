# 04 — Textos, headings e parágrafos

## Headings `h1` a `h6`

Headings criam a hierarquia do conteúdo. O `h1` representa o assunto principal da página. `h2` divide grandes seções, `h3` subdivide `h2`, e assim por diante.

```html
<h1>Guia de HTML</h1>
<h2>Semântica</h2>
<h3>Landmarks</h3>
```

## Boas práticas de hierarquia

- Não escolha heading pelo tamanho visual.
- Evite pular níveis sem motivo.
- Garanta que cada seção importante tenha título.
- Use texto claro, específico e escaneável.

## Elementos textuais

- `p`: parágrafo de texto.
- `strong`: forte importância, não apenas negrito.
- `em`: ênfase, não apenas itálico.
- `br`: quebra de linha pontual; não use para espaçamento visual.
- `hr`: mudança temática entre blocos.
- `blockquote`: citação em bloco.
- `code`: trecho de código ou nome técnico.

## Exemplo

```html
<article>
  <h2>Por que usar HTML semântico?</h2>
  <p>HTML semântico melhora a leitura por pessoas, navegadores e tecnologias assistivas.</p>
  <p><strong>Atenção:</strong> semântica deve vir antes da aparência.</p>
  <blockquote>
    <p>Um bom HTML comunica estrutura e intenção.</p>
  </blockquote>
</article>
```
