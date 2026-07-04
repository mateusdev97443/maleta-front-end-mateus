# Introdução ao CSS

## O que é CSS

CSS significa **Cascading Style Sheets** ou folhas de estilo em cascata. Ele define como o conteúdo HTML será apresentado visualmente: cores, tamanhos, fontes, espaçamentos, bordas, sombras, estados e detalhes de interface.

CSS não substitui HTML. O HTML descreve a estrutura e o significado do conteúdo; o CSS define a aparência desse conteúdo.

## Papel do CSS no Front-end

No Front-end, CSS transforma uma estrutura funcional em uma interface compreensível, agradável e consistente. Um bom CSS ajuda a:

- reforçar hierarquia visual;
- melhorar leitura e navegação;
- destacar ações importantes;
- manter padrão visual entre telas;
- reduzir retrabalho em manutenção;
- apoiar acessibilidade com contraste, foco visível e espaçamento adequado.

## Estrutura, estilo e comportamento

| Camada | Responsabilidade | Exemplo |
|---|---|---|
| HTML | Estrutura e significado | Títulos, parágrafos, listas, formulários. |
| CSS | Apresentação visual | Cores, fontes, espaçamento, bordas. |
| JavaScript | Comportamento | Abrir menu, validar interação, buscar dados. |

Separar responsabilidades evita páginas difíceis de manter. Um botão deve ser um botão no HTML, ter aparência de botão no CSS e, se necessário, comportamento controlado por JavaScript.

## Relação entre HTML e CSS

O CSS seleciona elementos do HTML e aplica declarações a eles.

```html
<a class="botao" href="/contato">Fale conosco</a>
```

```css
.botao {
  color: #ffffff;
  background-color: #2563eb;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
}
```

A classe `botao` cria uma ponte entre estrutura e estilo sem depender do nome da tag.

## Quando o CSS entra no projeto

CSS deve entrar logo após a estrutura HTML essencial estar clara. Em projetos reais, uma sequência saudável é:

1. entender conteúdo e objetivo da página;
2. criar HTML semântico;
3. definir identidade visual básica;
4. criar estilos globais;
5. estilizar componentes;
6. revisar acessibilidade e consistência.

Evite escrever CSS antes de entender o conteúdo. Estilizar uma estrutura ruim costuma esconder problemas em vez de resolvê-los.
