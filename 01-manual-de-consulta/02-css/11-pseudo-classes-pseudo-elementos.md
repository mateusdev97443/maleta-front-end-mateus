# Pseudo-classes e pseudo-elementos

Pseudo-classes selecionam elementos em um estado, posição ou condição. Pseudo-elementos selecionam ou criam uma parte específica de um elemento.

## Diferença principal

| Recurso | Exemplo | Ideia |
|---|---|---|
| Pseudo-classe | `.botao:hover` | Estado ou condição do elemento. |
| Pseudo-elemento | `.botao::after` | Parte criada ou parte específica do elemento. |

## Estados de interação

### `:hover`

Aplica estilo quando o ponteiro passa sobre o elemento.

```css
.botao:hover {
  background-color: #1d4ed8;
}
```

Não dependa apenas de hover. Usuários de teclado e toque podem não receber esse feedback.

### `:focus`

Aplica estilo quando o elemento recebe foco.

```css
.campo:focus {
  border-color: #2563eb;
}
```

### `:focus-visible`

Mostra foco principalmente quando ele é relevante, como navegação por teclado.

```css
.botao:focus-visible,
a:focus-visible {
  outline: 3px solid #f59e0b;
  outline-offset: 3px;
}
```

Use para foco acessível. Nunca remova `outline` sem alternativa visível.

### `:active`

Aplica estilo durante a ativação, como clique pressionado.

```css
.botao:active {
  transform: translateY(1px);
}
```

Use de forma sutil para feedback imediato.

### `:visited`

Aplica estilo a links já visitados.

```css
a:visited {
  color: #6d28d9;
}
```

Mantenha contraste e não dependa de `:visited` para informação essencial.

## Posição entre filhos

### `:first-child` e `:last-child`

```css
.lista-item:first-child {
  border-top: 0;
}

.lista-item:last-child {
  margin-bottom: 0;
}
```

São úteis para remover espaçamentos nas extremidades.

### `:nth-child()`

```css
.tabela tr:nth-child(even) {
  background-color: #f9fafb;
}

.lista-item:nth-child(3) {
  font-weight: 700;
}
```

Use para padrões previsíveis, como linhas alternadas. Evite quando a posição muda com frequência e altera o significado visual.

## Pseudo-elementos

### `::before` e `::after`

Criam conteúdo decorativo antes ou depois do conteúdo real.

```css
.link-externo::after {
  content: " ↗";
}

.aviso::before {
  content: "!";
  font-weight: 700;
}
```

Cuidado: conteúdo essencial não deve depender de `::before` ou `::after`, pois pode não ser copiado, traduzido ou anunciado como esperado.

### `::placeholder`

Estiliza texto de placeholder em campos.

```css
.campo::placeholder {
  color: #6b7280;
}
```

Placeholder não substitui label. Use apenas como ajuda complementar.

### `::selection`

Estiliza texto selecionado pelo usuário.

```css
::selection {
  color: #111827;
  background-color: #bfdbfe;
}
```

Use contraste suficiente.

## Exemplos profissionais

```css
.card-link {
  color: #2563eb;
  text-decoration: underline;
}

.card-link:hover,
.card-link:focus-visible {
  color: #1d4ed8;
}

.card-link:focus-visible {
  outline: 3px solid #f59e0b;
  outline-offset: 3px;
}
```

```css
.campo {
  border: 1px solid #d1d5db;
}

.campo:focus-visible {
  border-color: #2563eb;
  outline: 3px solid #bfdbfe;
}

.campo::placeholder {
  color: #6b7280;
}
```

## Cuidados importantes

- Não remova foco sem criar foco alternativo.
- Não coloque texto essencial em `content`.
- Não use `:hover` como único indicador de interação.
- Teste estados com mouse, teclado e conteúdo real.
- Garanta contraste nos estados `hover`, `focus`, `active` e `visited`.
