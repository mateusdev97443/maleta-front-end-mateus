# Formas de aplicar CSS

## CSS externo

O CSS externo fica em um arquivo `.css` separado e é vinculado ao HTML pelo elemento `link`.

```html
<link rel="stylesheet" href="./styles.css">
```

```css
body {
  font-family: Arial, sans-serif;
}
```

É a forma preferida em projetos profissionais porque melhora organização, reaproveitamento, cache do navegador e manutenção.

## CSS interno

O CSS interno fica dentro de uma tag `style` no próprio HTML.

```html
<style>
  h1 {
    color: #1f2937;
  }
</style>
```

Pode ser útil para testes rápidos, exemplos didáticos ou páginas muito pequenas, mas não é ideal para projetos maiores porque mistura estrutura e estilo.

## CSS inline

O CSS inline é aplicado diretamente no atributo `style`.

```html
<p style="color: red;">Mensagem importante</p>
```

Use com muita cautela. Ele dificulta manutenção, aumenta repetição e tem prioridade alta na cascata.

## Ordem de prioridade

Quando regras entram em conflito, a decisão considera cascata, especificidade e origem da regra. De modo simplificado:

1. regras com `!important` podem vencer regras normais;
2. CSS inline costuma ter prioridade maior que seletores em arquivos;
3. seletores mais específicos vencem menos específicos;
4. em empate, a regra declarada depois vence.

## Por que preferir CSS externo

- separa responsabilidades;
- facilita revisão no Git;
- permite reaproveitar estilos em várias páginas;
- reduz HTML poluído;
- cria padrão de organização;
- ajuda o navegador a armazenar o arquivo em cache.

## Organização inicial

Uma estrutura simples para projetos pequenos:

```text
projeto/
├── index.html
└── css/
    └── styles.css
```

Para esta fase, mantenha simples. Arquiteturas maiores podem ser estudadas depois, quando houver necessidade real.
