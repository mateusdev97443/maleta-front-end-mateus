# Variáveis CSS

Variáveis CSS, também chamadas de custom properties, armazenam valores reutilizáveis diretamente no CSS. Elas ajudam a manter consistência, reduzem repetição e facilitam mudanças de tema.

## O que são custom properties

Uma custom property começa com `--`.

```css
:root {
  --cor-primaria: #2563eb;
  --espaco-2: 1rem;
}
```

Para usar o valor, utilize `var()`.

```css
.botao {
  background-color: var(--cor-primaria);
  padding: var(--espaco-2);
}
```

## `:root`

`:root` representa o elemento raiz do documento. Em HTML, equivale ao `html`, mas com especificidade de pseudo-classe.

```css
:root {
  --cor-texto: #111827;
  --cor-fundo: #ffffff;
  --fonte-base: Arial, Helvetica, sans-serif;
}
```

Variáveis declaradas em `:root` ficam disponíveis globalmente, salvo quando são sobrescritas em escopos mais específicos.

## Fallback em `var()`

`var()` aceita valor reserva caso a variável não exista.

```css
.alerta {
  color: var(--cor-alerta, #b91c1c);
}
```

Se `--cor-alerta` não estiver definida, o navegador usa `#b91c1c`.

Fallback é útil para componentes reutilizáveis e migrações graduais.

## Tokens de cor

Tokens de cor evitam valores soltos pelo projeto.

```css
:root {
  --cor-primaria: #2563eb;
  --cor-primaria-hover: #1d4ed8;
  --cor-texto: #111827;
  --cor-texto-suave: #4b5563;
  --cor-borda: #e5e7eb;
  --cor-fundo: #ffffff;
  --cor-superficie: #f9fafb;
}
```

Prefira nomes por função, não apenas pela cor.

```css
/* Menos flexível */
--azul: #2563eb;

/* Melhor */
--cor-primaria: #2563eb;
```

## Tokens de espaçamento

```css
:root {
  --espaco-1: 0.25rem;
  --espaco-2: 0.5rem;
  --espaco-3: 1rem;
  --espaco-4: 1.5rem;
  --espaco-5: 2rem;
}
```

Uma escala reduz valores mágicos e melhora consistência visual.

## Tokens de tipografia

```css
:root {
  --fonte-base: Arial, Helvetica, sans-serif;
  --fonte-mono: "Courier New", monospace;
  --texto-sm: 0.875rem;
  --texto-base: 1rem;
  --texto-lg: 1.25rem;
  --linha-base: 1.5;
}
```

Use tokens para tamanhos recorrentes, mas evite criar dezenas de opções sem necessidade.

## Escopo de variáveis

Variáveis respeitam a cascata. Você pode sobrescrever valores dentro de um componente.

```css
.card-alerta {
  --cor-card: #fef2f2;
  --cor-borda-card: #fecaca;

  background-color: var(--cor-card);
  border: 1px solid var(--cor-borda-card);
}
```

Isso permite customizar componentes sem duplicar todas as regras.

## Tema simples

```css
:root {
  --cor-fundo: #ffffff;
  --cor-texto: #111827;
  --cor-superficie: #f9fafb;
  --cor-acao: #2563eb;
}

.tema-escuro {
  --cor-fundo: #111827;
  --cor-texto: #f9fafb;
  --cor-superficie: #1f2937;
  --cor-acao: #60a5fa;
}

.pagina {
  color: var(--cor-texto);
  background-color: var(--cor-fundo);
}

.card {
  background-color: var(--cor-superficie);
}

.botao {
  background-color: var(--cor-acao);
}
```

A classe `.tema-escuro` troca os valores sem reescrever todos os componentes.

## Vantagens para manutenção

- troca rápida de cores e espaçamentos;
- redução de repetição;
- consistência entre componentes;
- facilidade para tema claro/escuro;
- leitura mais próxima da intenção do design.

## Erros comuns

| Erro | Problema | Correção |
|---|---|---|
| Criar variável para valor usado uma vez | Aumenta complexidade. | Use variável para decisões reutilizáveis. |
| Nomear por aparência pura | Dificulta mudança de tema. | Nomeie por função. |
| Misturar escalas sem padrão | Mantém inconsistência. | Defina tokens de espaçamento e fonte. |
| Não usar fallback em componente isolado | Pode quebrar se variável faltar. | Use `var(--nome, fallback)`. |
| Sobrescrever variável sem entender escopo | Resultado inesperado. | Documente escopos locais. |

## Checklist de variáveis

- [ ] Cores principais estão centralizadas?
- [ ] Espaçamentos recorrentes usam escala?
- [ ] Fontes e tamanhos comuns têm tokens?
- [ ] Variáveis têm nomes por função?
- [ ] Fallback foi usado quando o componente pode ser isolado?
