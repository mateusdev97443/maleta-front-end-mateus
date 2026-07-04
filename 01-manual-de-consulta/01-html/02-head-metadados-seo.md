# 02 — Head, metadados e SEO básico

## O que fica no `head`

O `head` concentra informações sobre o documento: codificação, responsividade, título, descrição, favicon e metadados para buscadores e compartilhamento.

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Manual prático de HTML para estudantes de Front-end.">
  <meta name="author" content="Maleta Front-end">
  <meta name="robots" content="index, follow">
  <link rel="icon" href="/favicon.ico">
  <title>Manual HTML Completo | Maleta Front-end</title>
</head>
```

## Metadados essenciais

- `charset`: use `UTF-8` para suportar português corretamente.
- `viewport`: obrigatório para layout se adaptar em dispositivos móveis.
- `title`: deve identificar a página de forma única.
- `description`: deve resumir o valor da página sem enrolação.
- `favicon`: melhora identidade visual em abas, favoritos e histórico.
- `robots`: orienta indexação quando necessário.

## Boas práticas para `title`

- Seja específico: `Contato | Escola Aurora` é melhor que `Página`.
- Coloque a palavra principal no início quando fizer sentido.
- Evite títulos duplicados em páginas diferentes.
- Mantenha tamanho razoável para não truncar em resultados de busca.

## Boas práticas para `description`

- Escreva uma frase natural e útil.
- Explique o que a pessoa encontrará na página.
- Evite repetir apenas o título.
- Não prometa conteúdo que a página não entrega.

## HTML e SEO

SEO técnico começa com HTML compreensível. Buscadores analisam título, descrição, hierarquia de headings, links internos, textos alternativos e estrutura semântica. Um HTML bem organizado facilita rastreamento, entendimento do conteúdo e compartilhamento.

## Busca e compartilhamento

Para projetos reais, considere metadados sociais quando houver páginas públicas compartilháveis:

```html
<meta property="og:title" content="Manual HTML Completo">
<meta property="og:description" content="Guia prático de HTML semântico e acessível.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://exemplo.com/manual-html">
<meta property="og:image" content="https://exemplo.com/imagem-compartilhamento.png">
```

## Erros comuns

- Ausência de `viewport`.
- Título genérico como `Home`, `Index` ou `Documento`.
- Description duplicada em várias páginas.
- Metadados sociais apontando para URLs quebradas.
- Colocar conteúdo visível dentro do `head`.
