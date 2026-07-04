# Boas práticas CSS

## Organização

Agrupe regras por responsabilidade: base, componentes, utilitários e exceções. Em projetos pequenos, um arquivo bem dividido por comentários já pode ser suficiente.

## Nomes claros

Classes devem explicar intenção, não apenas aparência momentânea.

```css
/* Melhor */
.card-produto { }
.botao-primario { }

/* Pior */
.azul-grande { }
```

## Evite repetição

Se o mesmo valor aparece muitas vezes, considere variável ou classe reutilizável.

## Evite especificidade desnecessária

```css
/* Evite */
main .conteudo .lista li a { }

/* Prefira */
.link-lista { }
```

## Evite `!important`

Ele dificulta sobrescritas futuras. Resolva primeiro ordem, seletor e arquitetura.

## CSS previsível

- mantenha padrão de espaçamento;
- use uma escala de cores;
- escreva uma regra por intenção;
- não misture comportamento JavaScript com aparência;
- remova código morto.

## Comentários úteis

Comente decisões, não o óbvio.

```css
/* Mantém contraste suficiente sobre imagem escura do banner. */
.hero { color: #ffffff; }
```

## Manutenção

CSS profissional é fácil de alterar sem medo. Se uma pequena mudança exige mexer em muitos pontos, há sinal de repetição ou acoplamento.
