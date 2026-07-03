# 19 — Padrão profissional para projetos HTML

## Organização do arquivo

- Comece com estrutura completa de documento.
- Mantenha `head` limpo e com metadados essenciais.
- Organize o `body` em blocos previsíveis: `header`, `main` e `footer`.
- Separe seções por responsabilidade e mantenha indentação consistente.

## Nomes

- Use `id` apenas quando precisar de âncora, label ou referência única.
- Use nomes descritivos em âncoras e identificadores.
- Evite nomes genéricos como `section1`, `box`, `coisa` ou `teste`.

## Comentários úteis

Comentários devem explicar contexto, decisão ou ponto de manutenção. Não use comentários para repetir a tag.

```html
<!-- Link de pular navegação para usuários de teclado -->
<a href="#conteudo">Ir para o conteúdo</a>
```

## Estrutura semântica mínima

```html
<header>...</header>
<main id="conteudo">
  <section aria-labelledby="titulo-secao">
    <h1 id="titulo-secao">Título principal</h1>
  </section>
</main>
<footer>...</footer>
```

## Checklist antes do commit

- [ ] O HTML está indentado e legível?
- [ ] O conteúdo principal está dentro de `main`?
- [ ] Headings estão coerentes?
- [ ] Imagens e formulários estão acessíveis?
- [ ] `title` e `description` foram revisados?
- [ ] Não houve avanço indevido para CSS ou JavaScript?
- [ ] Links internos e âncoras funcionam?

## Padrão mínimo de qualidade

Um projeto HTML profissional deve ser compreensível sem estilo, ter semântica correta, respeitar acessibilidade básica, conter metadados essenciais, evitar gambiarras estruturais e permitir manutenção por outra pessoa sem adivinhação.
