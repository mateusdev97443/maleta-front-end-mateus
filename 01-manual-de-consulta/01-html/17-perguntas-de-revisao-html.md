# Perguntas de revisão HTML

Este documento serve para testar se você realmente entendeu HTML como estrutura, semântica e base profissional de uma página. A meta não é decorar tags, mas saber escolher a marcação correta para cada situação.

Um bom dev front-end escreve HTML pensando em clareza, acessibilidade, manutenção, SEO básico e experiência real do usuário.

## Fundamentos essenciais

Responda sem consultar antes de considerar esta etapa dominada:

1. O que é HTML e qual é o papel dele no front-end?
2. Qual é a diferença entre estrutura, aparência e comportamento?
3. Por que HTML não deve ser usado para “desenhar” visualmente uma página?
4. Qual é a função do `<!DOCTYPE html>`?
5. Por que o atributo `lang` é importante na tag `<html>`?
6. O que normalmente deve ficar dentro do `<head>`?
7. O que normalmente deve ficar dentro do `<body>`?
8. Por que uma página deve ter título com `<title>`?
9. Qual é a diferença entre tag, atributo e conteúdo?
10. O que significa escrever HTML semântico?

Exemplo de base mínima correta:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minha página</title>
</head>
<body>
  <main>
    <h1>Conteúdo principal</h1>
    <p>Texto inicial da página.</p>
  </main>
</body>
</html>
```

## Estrutura e semântica

Perguntas importantes:

1. Quando usar `<header>`?
2. Quando usar `<main>`?
3. Quando usar `<section>`?
4. Quando usar `<article>`?
5. Quando usar `<nav>`?
6. Quando usar `<footer>`?
7. Quando uma `<div>` é aceitável?
8. Qual é o erro de usar `<div>` para tudo?
9. Por que headings precisam seguir uma hierarquia lógica?
10. Uma página pode ter vários `<h1>`? Quando isso pode confundir?

Cuidado profissional: a escolha da tag deve seguir o significado do conteúdo, não o visual desejado. Aparência é responsabilidade do CSS.

## Textos, headings e organização

Antes de aprovar uma página, responda:

1. O `<h1>` descreve claramente o assunto principal?
2. Os subtítulos seguem uma ordem lógica?
3. Existe salto estranho de `<h2>` para `<h5>` sem motivo?
4. Os parágrafos estão curtos e fáceis de ler?
5. Listas foram usadas quando havia sequência ou agrupamento?
6. Tabelas foram usadas apenas para dados tabulares?
7. O conteúdo continua compreensível sem CSS?
8. O HTML está fácil de revisar por outro dev?

Exemplo de hierarquia clara:

```html
<main>
  <h1>Manual de HTML</h1>

  <section>
    <h2>Estrutura base</h2>
    <p>Todo documento precisa de uma base previsível.</p>
  </section>

  <section>
    <h2>Semântica</h2>
    <p>As tags devem representar o significado do conteúdo.</p>
  </section>
</main>
```

## Links, imagens e mídia

Perguntas de revisão:

1. Qual é a diferença entre link interno e link externo?
2. Por que imagens precisam de `alt`?
3. Quando o `alt` pode ficar vazio?
4. O que é um link com texto ruim?
5. Por que “clique aqui” não é um bom texto de link?
6. Qual é a diferença entre caminho relativo e absoluto?
7. Como evitar imagem pesada prejudicando performance?
8. Quando usar `<figure>` e `<figcaption>`?
9. Qual cuidado tomar com vídeos e iframes?
10. Como abrir link externo com segurança usando `target="_blank"`?

Exemplo seguro:

```html
<a href="https://exemplo.com" target="_blank" rel="noopener noreferrer">
  Acessar documentação externa
</a>
```

Evite links genéricos:

```html
<a href="/manual.html">Clique aqui</a>
```

Prefira links descritivos:

```html
<a href="/manual.html">Abrir manual de HTML</a>
```

## Formulários

Perguntas essenciais:

1. Por que todo campo deve ter `<label>`?
2. Qual é a função do atributo `for` no `<label>`?
3. Qual é a diferença entre `name` e `id`?
4. Quando usar `required`?
5. Quando usar `type="email"`?
6. Quando usar `type="password"`?
7. Por que placeholder não substitui label?
8. Como agrupar campos relacionados?
9. Para que serve `<fieldset>`?
10. Para que serve `<legend>`?

Exemplo correto:

```html
<label for="email">E-mail</label>
<input id="email" name="email" type="email" required>
```

Exemplo melhor para grupo de opções:

```html
<fieldset>
  <legend>Preferência de contato</legend>

  <label>
    <input type="radio" name="contato" value="email">
    E-mail
  </label>

  <label>
    <input type="radio" name="contato" value="telefone">
    Telefone
  </label>
</fieldset>
```

## Acessibilidade e qualidade

Checklist de revisão:

- A página consegue ser entendida sem CSS?
- A ordem dos títulos faz sentido?
- Os links têm texto claro?
- As imagens importantes têm texto alternativo?
- Os botões usam `<button>` quando executam ações?
- O conteúdo principal está dentro de `<main>`?
- Existem landmarks suficientes para navegação?
- Os formulários têm labels visíveis?
- O HTML passa em uma validação básica?
- A estrutura ajuda SEO e leitores de tela?

Cuidado: acessibilidade não é detalhe extra. Em trabalho profissional, HTML mal estruturado prejudica navegação por teclado, leitores de tela, manutenção e SEO.

## Erros que reprovam uma entrega

Evite estes erros:

- usar tag apenas pela aparência;
- pular de `<h1>` direto para `<h4>` sem motivo;
- usar `<div>` e `<span>` para tudo;
- colocar botão como `<a>` quando não há navegação;
- usar imagem importante sem `alt`;
- criar formulário sem `label`;
- deixar links com texto genérico;
- misturar conteúdo, estilo e comportamento no HTML;
- esquecer `lang`, `meta charset` e `viewport`;
- entregar uma página que só faz sentido visualmente, mas não estruturalmente.

## Checklist rápido de aprovação

Antes de considerar o HTML pronto, confirme:

- A estrutura principal está clara.
- Existe apenas o necessário.
- As tags têm significado.
- Os nomes de arquivos e caminhos estão organizados.
- O conteúdo é acessível.
- O HTML seria compreensível para outro dev.
- A página continua entendível sem CSS.
- Os formulários são usáveis.
- Os links funcionam.
- O código parece profissional.

Se você não consegue explicar por que escolheu uma tag, provavelmente ainda precisa revisar a estrutura.
