# Padrão profissional JavaScript básico

O padrão da Maleta para JavaScript básico é escrever código claro antes de código esperto.

```js
const LIMITE_APROVACAO = 7;

function verificarAprovacao(nota) {
  return nota >= LIMITE_APROVACAO;
}
```

Regras: nomes descritivos, `const` por padrão, `let` quando necessário, evitar `var`, comparação estrita, funções pequenas, retorno previsível, redução de repetição, testes em partes e leitura atenta de mensagens de erro. Não use recursos avançados sem entender o básico. Não misture lógica com manipulação visual nesta fase.

## Quando usar

Use este conhecimento quando precisar transformar uma ideia em passos lógicos claros, testar valores no console e preparar código JavaScript básico para projetos Front-end futuros.

## Erros comuns

- Copiar código sem entender o papel de cada linha.
- Misturar muitos assuntos ao mesmo tempo.
- Ignorar mensagens do console.
- Usar nomes vagos como `x`, `coisa` ou `dados` sem contexto.

## Boas práticas

- Prefira clareza em vez de código curto demais.
- Teste cada pequena parte com valores fixos.
- Use indentação consistente.
- Explique a intenção quando um comentário realmente ajudar.
