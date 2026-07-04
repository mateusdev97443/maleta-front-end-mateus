# Block, inline e inline-block

## Introdução

`block`, `inline` e `inline-block` são comportamentos básicos que aparecem em quase todo layout. Eles explicam por que um parágrafo ocupa a linha inteira, por que um link fica dentro do texto e por que um botão pode ter padding sem quebrar a leitura.

## Elemento block

Um elemento block ocupa a largura disponível do pai e começa em nova linha. Ele aceita `width`, `max-width`, `height`, `padding`, `margin` e geralmente é usado para estruturar a página.

```html
<section class="aviso">
  <h2>Conteúdo importante</h2>
  <p>Este bloco ocupa a linha inteira do container.</p>
</section>
```

```css
.aviso {
  padding: 1rem;
  border: 1px solid #ddd;
}
```

## Elemento inline

Um elemento inline acompanha o texto e ocupa apenas o espaço do conteúdo. Ele não força nova linha. `width` e `height` não controlam seu tamanho como em elementos block.

```html
<p>Use <strong>HTML semântico</strong> e <a href="#">CSS organizado</a>.</p>
```

Links, `span`, `strong` e `em` costumam funcionar bem como inline porque fazem parte da frase.

## Limitações do inline

```css
.link-ruim {
  width: 200px;
  height: 48px;
  padding-block: 1rem;
}
```

Em elementos inline, largura e altura não criam uma “caixa de botão” previsível. Para isso, use `inline-block` ou outro contexto.

## Elemento inline-block

`inline-block` mistura características: fica na mesma linha como inline, mas aceita dimensões e espaçamentos como bloco.

```html
<a class="botao" href="#">Ver exercícios</a>
<a class="botao botao--secundario" href="#">Ler teoria</a>
```

```css
.botao {
  display: inline-block;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background: #1f2937;
  color: #fff;
  text-decoration: none;
}
```

## Links, botões e spans

Use `span` para marcar parte de texto sem criar bloco. Use `a` inline quando ele estiver dentro de uma frase. Use `a` com `inline-block` quando ele for uma chamada de ação visual.

```html
<p>Curso <span class="destaque">prático</span> de layout.</p>
<a class="botao" href="#projeto">Começar projeto</a>
```

## Cards simples não devem ser inline

Cards normalmente são blocos ou itens de Grid/Flexbox. Usar `inline-block` para muitos cards pode gerar problemas de espaços entre elementos, alinhamento vertical e quebra imprevisível.

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}
```

## Problemas de alinhamento

Elementos inline alinham pela linha de texto, não por uma grade visual perfeita. Isso pode causar desalinhamento quando há botões com textos diferentes. Para grupos de botões, Flexbox costuma ser melhor.

```css
.acoes {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
```

## Quando usar

- `block`: seções, containers, cards, parágrafos, títulos e áreas estruturais.
- `inline`: trechos dentro de texto, links contextuais e destaques simples.
- `inline-block`: botões, tags visuais e pequenos elementos que precisam de caixa sem ocupar a linha inteira.

## Erros comuns

- Tentar definir largura em `span` inline.
- Criar botões com `a` inline e padding vertical irregular.
- Montar grade de cards com `inline-block` quando Grid resolveria melhor.
- Usar `block` em links dentro de parágrafos e quebrar a frase.

## Boas práticas

- Escolha o comportamento pelo papel do elemento.
- Transforme link em `inline-block` quando ele tiver aparência de botão.
- Use Grid/Flexbox para grupos, não `inline-block` como gambiarra.
- Teste quebras de linha com textos maiores.
