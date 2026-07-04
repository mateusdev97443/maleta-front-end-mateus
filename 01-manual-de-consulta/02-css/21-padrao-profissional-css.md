# Padrão profissional CSS

Um CSS profissional não é apenas “funcionar visualmente”. Ele precisa ser previsível, legível, acessível, revisável e seguro para manutenção futura.

## Organização de arquivos

Projetos pequenos podem usar um único arquivo `styles.css`, desde que ele seja organizado. Projetos maiores podem separar por responsabilidade quando houver necessidade real.

Estrutura simples aceitável:

```text
css/
└── styles.css
```

Estrutura um pouco maior, ainda sem complexidade excessiva:

```text
css/
├── base.css
├── variaveis.css
├── componentes.css
└── utilitarios.css
```

A separação só vale a pena se facilitar manutenção. Criar muitos arquivos sem padrão também prejudica.

## Ordem recomendada dentro do CSS

1. Comentário inicial curto, se necessário.
2. Variáveis e tokens.
3. Reset ou normalização básica.
4. Estilos globais de elementos.
5. Componentes.
6. Variações de componentes.
7. Estados (`hover`, `focus-visible`, `disabled`).
8. Utilitários simples.
9. Exceções documentadas.

```css
/* 1. Tokens */
:root {
  --cor-primaria: #2563eb;
}

/* 2. Base */
body {
  font-family: Arial, sans-serif;
}

/* 3. Componente */
.botao {
  background-color: var(--cor-primaria);
}

/* 4. Estado */
.botao:focus-visible {
  outline: 3px solid #f59e0b;
}
```

## Ordem das propriedades em uma regra

Não existe uma única ordem universal, mas o projeto deve ser consistente. Uma ordem prática:

1. display e box model;
2. largura, altura e espaçamento;
3. tipografia;
4. cores e fundos;
5. bordas e sombras;
6. efeitos e estados.

```css
.card {
  display: block;
  max-width: 32rem;
  padding: 1rem;
  font-size: 1rem;
  color: var(--cor-texto);
  background-color: var(--cor-fundo);
  border: 1px solid var(--cor-borda);
  border-radius: 0.75rem;
}
```

## Padrão de nomenclatura

Classes devem comunicar responsabilidade.

```css
/* Bons nomes */
.card-produto { }
.card-produto__titulo { }
.botao-primario { }
.aviso-erro { }

/* Nomes fracos */
.azul { }
.grande { }
.caixa1 { }
.estilo-novo { }
```

Critérios para nomes:

- indicam função ou componente;
- são consistentes no idioma;
- não dependem de aparência temporária;
- evitam abreviações obscuras;
- permitem variações previsíveis.

## Uso de variáveis

Variáveis devem representar decisões reutilizáveis.

```css
:root {
  --cor-texto: #111827;
  --cor-fundo: #ffffff;
  --cor-primaria: #2563eb;
  --cor-borda: #e5e7eb;
  --espaco-3: 1rem;
  --raio-base: 0.5rem;
}
```

Use variáveis para:

- cores principais;
- cores de texto e borda;
- espaçamentos recorrentes;
- fontes e tamanhos comuns;
- raios de borda;
- sombras padronizadas.

Não crie variável para todo valor isolado. Variável demais sem critério vira ruído.

## Comentários úteis

Comentários devem explicar motivo, contexto ou limitação.

```css
/* Mantém contraste do texto sobre a imagem escura do banner. */
.hero {
  color: #ffffff;
}
```

Evite comentários óbvios.

```css
/* Cor azul */
.botao {
  background-color: blue;
}
```

## Critérios mínimos antes do commit

- CSS está no escopo da tarefa.
- Não há `style` inline desnecessário.
- Seletores são claros e pouco específicos.
- Foco visível foi preservado.
- Contraste básico foi revisado.
- Repetições importantes foram reduzidas.
- Valores mágicos foram removidos ou justificados.
- `display: none`, `opacity: 0` e `overflow: hidden` foram usados com cuidado.
- `git diff --check` passa sem erros.

## O que reprova um CSS profissional

| Problema | Por que reprova |
|---|---|
| Uso generalizado de `!important` | Indica cascata fora de controle. |
| Seletores enormes | Criam acoplamento com HTML frágil. |
| IDs como padrão de estilo | Aumentam especificidade sem necessidade. |
| Remover outline sem alternativa | Prejudica navegação por teclado. |
| Repetição excessiva de valores | Dificulta manutenção e consistência. |
| Alturas fixas cortando conteúdo | Quebra com conteúdo real. |
| Cores sem contraste | Prejudica leitura e acessibilidade. |
| Classes sem significado | Dificultam revisão e evolução. |
| Conteúdo invisível ainda focável | Cria armadilhas de interação. |

## Exemplo de estrutura CSS final aceitável

```css
:root {
  --cor-texto: #111827;
  --cor-fundo: #ffffff;
  --cor-primaria: #2563eb;
  --cor-primaria-hover: #1d4ed8;
  --cor-borda: #e5e7eb;
  --espaco-3: 1rem;
  --raio-base: 0.5rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
  color: var(--cor-texto);
  background-color: var(--cor-fundo);
}

.container {
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
}

.card {
  padding: var(--espaco-3);
  border: 1px solid var(--cor-borda);
  border-radius: var(--raio-base);
}

.botao {
  display: inline-block;
  padding: 0.75rem 1rem;
  border-radius: var(--raio-base);
  color: #ffffff;
  background-color: var(--cor-primaria);
  text-decoration: none;
}

.botao:hover,
.botao:focus-visible {
  background-color: var(--cor-primaria-hover);
}

.botao:focus-visible {
  outline: 3px solid #f59e0b;
  outline-offset: 3px;
}
```

## Padrão mínimo de qualidade

Uma entrega CSS está no mínimo profissional quando:

- é compreensível por outra pessoa;
- respeita HTML semântico;
- usa seletores de forma controlada;
- mantém foco visível e contraste adequado;
- evita gambiarras de especificidade;
- usa variáveis para decisões repetidas;
- não esconde conteúdo importante sem critério;
- passa nas verificações antes do commit.

CSS bom não é o mais complexo. É o que resolve o problema visual com clareza, segurança e manutenção possível.
