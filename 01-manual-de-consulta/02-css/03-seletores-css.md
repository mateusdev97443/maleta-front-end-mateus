# Seletores CSS

Seletores indicam quais elementos HTML receberão estilos. Um bom seletor é claro, previsível, reutilizável e resistente a pequenas mudanças na estrutura da página.

## Visão geral rápida

| Seletor | Exemplo | Quando usar | Cuidado principal |
|---|---|---|---|
| Elemento | `p` | Base global de tags HTML. | Pode afetar elementos demais. |
| Classe | `.card` | Componentes, padrões e variações reutilizáveis. | Nome precisa comunicar intenção. |
| ID | `#cabecalho` | Âncoras e identificação única. | Especificidade alta; evite para estilo comum. |
| Agrupamento | `h1, h2, h3` | Regras compartilhadas. | Não agrupe elementos sem relação real. |
| Descendente | `.card p` | Elementos dentro de uma área. | Pode ficar frágil se longo demais. |
| Filho direto | `.menu > li` | Relação imediata entre pai e filho. | Depende da estrutura exata do HTML. |
| Irmão | `h2 + p` | Elementos vizinhos. | Pode quebrar se outro elemento entrar no meio. |
| Atributo | `input[type="email"]` | Elementos com atributo específico. | Evite depender de atributos instáveis. |
| Universal | `*` | Reset e regras globais controladas. | Pode gerar efeitos amplos demais. |

## Seletor de elemento

Seleciona todas as ocorrências de uma tag.

```css
body {
  font-family: Arial, sans-serif;
}

img {
  max-width: 100%;
  height: auto;
}
```

Use para estilos globais de base. Evite usar seletor de elemento para componentes específicos, porque ele pode afetar lugares inesperados.

```css
/* Ruim: todo button do site fica igual, inclusive botões especiais. */
button {
  background-color: #2563eb;
}

/* Melhor: estilo aplicado quando a intenção é botão primário. */
.botao-primario {
  background-color: #2563eb;
}
```

## Classe

Classe é a principal ferramenta para estilização profissional. Ela permite reaproveitamento sem exigir que o HTML tenha uma estrutura rígida.

```html
<article class="card-produto">
  <h2 class="card-produto__titulo">Tênis urbano</h2>
</article>
```

```css
.card-produto {
  padding: 1rem;
  border: 1px solid #e5e7eb;
}

.card-produto__titulo {
  font-size: 1.25rem;
}
```

### Boas práticas de nomes de classes

- Prefira nomes que expliquem função: `.botao-primario`, `.card-perfil`, `.aviso-erro`.
- Evite nomes presos a aparência temporária: `.azul`, `.grande`, `.margem20`.
- Use um idioma de forma consistente no projeto.
- Não crie abreviações difíceis de entender.
- Crie variações previsíveis: `.botao`, `.botao-secundario`, `.botao-perigo`.

## ID

ID identifica um elemento único.

```html
<section id="contato">...</section>
```

Ele pode ser útil para âncoras internas e integração com outras camadas, mas não deve ser a base de estilização comum.

```css
/* Evite como padrão de estilo. */
#contato {
  padding: 2rem;
}

/* Prefira classe reutilizável. */
.secao-contato {
  padding: 2rem;
}
```

### Diferença entre classe e ID

| Critério | Classe | ID |
|---|---|---|
| Reutilização | Pode aparecer em vários elementos. | Deve ser único na página. |
| Especificidade | Média. | Alta. |
| Uso recomendado | Estilização e componentes. | Âncora, identificação única e integrações. |
| Manutenção | Mais flexível. | Mais difícil de sobrescrever. |

## Agrupamento

Agrupamento evita repetição quando vários seletores compartilham a mesma declaração.

```css
h1,
h2,
h3 {
  line-height: 1.2;
  color: #111827;
}
```

Agrupe apenas regras que realmente fazem sentido juntas. Se uma exceção surgir logo depois, talvez o agrupamento esteja amplo demais.

## Descendente

Seleciona elementos dentro de outro elemento, em qualquer nível.

```css
.card p {
  color: #374151;
}
```

Use quando o contexto importa. Evite encadeamentos longos.

```css
/* Frágil: depende demais da árvore do HTML. */
main section div ul li a span {
  color: #2563eb;
}

/* Melhor: intenção direta. */
.link-menu__texto {
  color: #2563eb;
}
```

## Filho direto

Seleciona apenas filhos imediatos.

```css
.menu > li {
  margin-bottom: 0.5rem;
}
```

É útil quando a estrutura é parte da regra. Se a marcação ainda muda muito, prefira classes.

## Irmãos

O irmão adjacente (`+`) seleciona o elemento imediatamente seguinte. O irmão geral (`~`) seleciona irmãos seguintes.

```css
h2 + p {
  margin-top: 0.5rem;
}

input:checked ~ .mensagem {
  display: block;
}
```

Use para relações simples e visuais. Se a regra começar a controlar lógica complexa, reavalie a estrutura.

## Atributo

Seleciona elementos por atributos.

```css
input[type="email"] {
  border-color: #93c5fd;
}

button[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
```

É ótimo para estados nativos e campos específicos. Evite depender de atributos usados para outra responsabilidade.

## Universal

Seleciona tudo.

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

Use principalmente em reset ou normalização. Não use para aplicar estilos visuais amplos sem necessidade.

## Seletores para estados

Estados deixam a interface responder à interação.

```css
.botao:hover {
  background-color: #1d4ed8;
}

.botao:focus-visible {
  outline: 3px solid #f59e0b;
  outline-offset: 3px;
}

.campo:disabled {
  background-color: #f3f4f6;
}
```

Não dependa apenas de `:hover`, pois teclado e telas sensíveis ao toque precisam de alternativas claras.

## Critérios para escolher o seletor certo

1. **A regra é global?** Use elemento com cuidado.
2. **A regra representa um componente ou padrão?** Use classe.
3. **A regra depende de uma relação estrutural curta e estável?** Use descendente, filho direto ou irmão.
4. **A regra depende de um estado nativo?** Use pseudo-classe ou atributo.
5. **A regra precisa ser reaproveitada?** Classe é a melhor opção.
6. **A regra está difícil de sobrescrever?** Reduza especificidade.
7. **O seletor ficou grande demais?** Crie uma classe com intenção clara.

## Checklist de seletores

- [ ] O seletor comunica intenção?
- [ ] A regra não depende de HTML frágil?
- [ ] Classes são usadas para estilos reutilizáveis?
- [ ] IDs foram evitados para estilização comum?
- [ ] Estados de foco e interação foram considerados?
- [ ] A especificidade continua fácil de controlar?
