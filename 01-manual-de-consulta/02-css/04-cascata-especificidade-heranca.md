# Cascata, especificidade e herança

CSS significa folhas de estilo em cascata porque várias regras podem atingir o mesmo elemento. Entender como o navegador decide a regra vencedora evita gambiarras, excesso de `!important` e seletores cada vez mais longos.

## O que é cascata

A cascata é o processo que combina regras de diferentes origens e decide quais declarações serão aplicadas.

Quando há conflito, o navegador considera, de forma simplificada:

1. importância da declaração, como `!important`;
2. origem da regra;
3. especificidade do seletor;
4. ordem em que a regra aparece.

```css
p {
  color: blue;
}

p {
  color: red;
}
```

As duas regras têm a mesma especificidade. A segunda vence porque aparece depois.

## Ordem das regras

A ordem importa quando a especificidade é igual.

```css
.alerta {
  color: #b91c1c;
}

.alerta {
  color: #7f1d1d;
}
```

Resultado: o texto fica `#7f1d1d`. Em um arquivo profissional, regras de base devem vir antes de componentes, e variações ou estados devem vir depois da regra principal.

```css
.botao {
  background-color: #2563eb;
}

.botao:hover {
  background-color: #1d4ed8;
}

.botao-secundario {
  background-color: #4b5563;
}
```

## Especificidade na prática

Especificidade é o peso do seletor. Quanto maior o peso, mais difícil sobrescrever.

| Seletor | Exemplo | Força relativa |
|---|---|---|
| Elemento | `p` | Baixa |
| Classe, atributo, pseudo-classe | `.texto`, `[disabled]`, `:hover` | Média |
| ID | `#aviso` | Alta |
| Inline | `style="color: red"` | Muito alta |

```html
<p id="mensagem" class="texto" style="color: purple;">Aviso</p>
```

```css
p {
  color: blue;
}

.texto {
  color: green;
}

#mensagem {
  color: red;
}
```

Resultado: o inline `purple` vence. Sem inline, o ID venceria. Sem ID, a classe venceria o elemento.

## Conflito entre elemento, classe, ID e inline

```css
button {
  background-color: gray;
}

.botao {
  background-color: blue;
}

#enviar {
  background-color: green;
}
```

```html
<button id="enviar" class="botao" style="background-color: red;">Enviar</button>
```

Resultado: vermelho, porque o estilo inline tem prioridade maior. Se o inline for removido, verde vence por causa do ID. Se o ID for removido, azul vence por causa da classe.

## Herança

Herança é quando filhos recebem automaticamente algumas propriedades do elemento pai.

```css
body {
  color: #111827;
  font-family: Arial, sans-serif;
  line-height: 1.5;
}
```

Elementos dentro do `body` tendem a herdar cor, fonte e altura de linha, o que reduz repetição.

### Propriedades que costumam herdar

- `color`;
- `font-family`;
- `font-size`;
- `font-weight`;
- `line-height`;
- `text-align` em muitos contextos;
- `visibility`.

### Propriedades que normalmente não herdam

- `margin`;
- `padding`;
- `border`;
- `background`;
- `width`;
- `height`;
- `box-shadow`;
- `display`.

Isso é positivo: se um card tem borda, seus parágrafos não devem herdar essa borda automaticamente.

## Uso responsável de `!important`

`!important` força uma declaração a vencer regras normais.

```css
.aviso {
  color: red !important;
}
```

### Quando pode ser aceitável

- classe utilitária muito específica e documentada;
- sobrescrita controlada de CSS externo que você não consegue alterar;
- correção temporária com tarefa registrada para remover depois;
- ajustes de acessibilidade que não podem ser bloqueados por outra regra.

### Quando evitar

- para vencer seletor mal planejado;
- para corrigir ordem confusa do arquivo;
- para esconder falta de padrão;
- em componentes comuns sem justificativa.

## Como resolver conflitos sem gambiarra

1. Remova estilos inline desnecessários.
2. Reduza IDs usados para estilização.
3. Troque seletores longos por classes claras.
4. Reorganize a ordem das regras.
5. Crie variações explícitas de componente.
6. Use variáveis para evitar duplicação.
7. Só então avalie `!important`.

## Exemplos de correção

```css
/* Problema */
#conteudo .card p a {
  color: red;
}

/* Correção */
.link-card {
  color: red;
}
```

```css
/* Problema */
.titulo {
  margin-bottom: 20px !important;
}

/* Correção: organizar ordem e padrão */
.titulo {
  margin-bottom: 1rem;
}

.card .titulo {
  margin-bottom: 0.5rem;
}
```

## Tabela de erros comuns e correções

| Erro | Consequência | Correção recomendada |
|---|---|---|
| Usar ID para componente comum | Dificulta sobrescrita. | Usar classe reutilizável. |
| Resolver tudo com `!important` | CSS vira disputa de força. | Ajustar ordem e especificidade. |
| Seletor longo demais | Quebra quando HTML muda. | Criar classe com intenção. |
| Repetir estilos inline | Manutenção lenta. | Mover para CSS externo. |
| Misturar regra global com componente | Efeito colateral em outras telas. | Separar base e componente. |
| Não entender herança | Repetição desnecessária. | Definir texto base no `body`. |

## Checklist de cascata

- [ ] A ordem do arquivo é previsível?
- [ ] Seletores têm especificidade controlada?
- [ ] Conflitos foram resolvidos sem `!important` desnecessário?
- [ ] Propriedades herdadas foram usadas a favor da manutenção?
- [ ] Estilos inline foram evitados?
