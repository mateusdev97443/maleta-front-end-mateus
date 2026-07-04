# Display e visibilidade

`display`, `visibility`, `opacity` e `overflow` controlam como uma caixa aparece, ocupa espaço, interage e afeta o fluxo da página.

## Display block

Elementos `block` ocupam a largura disponível e começam em nova linha.

```css
.card {
  display: block;
  width: 100%;
}
```

Exemplos comuns de elementos block: `div`, `section`, `article`, `p`, `h1`.

## Display inline

Elementos `inline` ocupam apenas o espaço do conteúdo e fluem junto ao texto.

```css
.destaque {
  display: inline;
  color: #2563eb;
}
```

`width` e `height` não funcionam como em blocos. Padding horizontal funciona melhor que padding vertical em termos de fluxo visual.

## Display inline-block

`inline-block` fica na linha, mas aceita largura, altura, margin e padding de forma mais previsível.

```css
.etiqueta {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
}
```

É útil para badges, botões em linha e pequenas etiquetas.

## Display none

`display: none` remove o elemento da renderização e do fluxo.

```css
.modal-fechado {
  display: none;
}
```

O elemento não ocupa espaço. Em geral, também deixa de ser percebido por leitores de tela. Use com cuidado para conteúdo importante.

## Visibility hidden

`visibility: hidden` deixa o elemento invisível, mas mantém o espaço ocupado.

```css
.reservado {
  visibility: hidden;
}
```

Pode ser útil quando a estrutura visual não deve “pular”, mas o conteúdo não deve aparecer.

## Opacity 0

`opacity: 0` torna o elemento transparente, mas ele continua no fluxo e pode continuar interativo.

```css
.invisivel {
  opacity: 0;
}
```

Cuidado: um botão com `opacity: 0` pode continuar clicável e focável, criando armadilhas para usuários.

## Overflow

`overflow` define o que acontece quando conteúdo ultrapassa a caixa.

```css
.caixa-com-rolagem {
  max-height: 16rem;
  overflow: auto;
}
```

| Valor | Efeito |
|---|---|
| `visible` | Conteúdo excedente aparece fora da caixa. |
| `hidden` | Conteúdo excedente é cortado. |
| `auto` | Rolagem aparece quando necessário. |
| `scroll` | Rolagem aparece mesmo quando não há excesso. |

## Sumir visualmente, sair do fluxo e continuar interativo

| Técnica | Visível? | Ocupa espaço? | Pode continuar interativo? | Uso típico |
|---|---|---|---|---|
| `display: none` | Não | Não | Não em uso comum | Remover temporariamente da interface. |
| `visibility: hidden` | Não | Sim | Não normalmente | Reservar espaço visual. |
| `opacity: 0` | Não | Sim | Sim, se não houver bloqueio | Transições visuais com cuidado. |
| `overflow: hidden` | Parcial | Sim | Conteúdo cortado pode ficar problemático | Cortes decorativos controlados. |

## Impactos em acessibilidade

- Não esconda conteúdo essencial apenas visualmente sem revisar leitores de tela.
- Não deixe elementos focáveis invisíveis.
- Não remova foco visível com overflow ou cortes.
- Se um controle está indisponível, use estado desabilitado real quando adequado.

## Elementos focáveis escondidos

```css
/* Ruim: link invisível pode continuar recebendo foco. */
.link-fantasma {
  opacity: 0;
}

/* Melhor: se não deve existir na interação, remova do fluxo. */
.link-inativo {
  display: none;
}
```

Se o elemento precisa estar disponível apenas para leitores de tela, use uma classe própria como `sr-only`, não `display: none`.

## Exemplos bons e ruins

```css
/* Ruim: corta conteúdo real sem alternativa. */
.card {
  height: 120px;
  overflow: hidden;
}

/* Melhor: permite crescimento. */
.card {
  min-height: 120px;
}
```

```css
/* Bom para etiqueta pequena em linha. */
.badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
}
```

## Checklist de visibilidade

- [ ] O elemento escondido deve sair do fluxo ou apenas sumir visualmente?
- [ ] Há elementos focáveis invisíveis?
- [ ] `overflow: hidden` não corta foco, texto ou controles?
- [ ] Conteúdo essencial continua disponível quando necessário?
- [ ] O comportamento foi testado com teclado?
