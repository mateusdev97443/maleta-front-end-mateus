# Modelo de análise CSS

Use este roteiro para avaliar qualquer arquivo CSS.

## 1. Organização

- O arquivo tem seções claras?
- Regras globais, componentes e utilitários estão misturados?
- Há código morto ou comentários desatualizados?

## 2. Repetição

- Valores de cor, espaçamento e fonte se repetem demais?
- Há oportunidade de variáveis?
- Componentes parecidos poderiam compartilhar classe base?

## 3. Seletores

- Seletores são claros?
- Existem IDs usados para estilo comum?
- Há seletores longos dependentes da estrutura HTML?

## 4. Especificidade

- Existem disputas resolvidas com `!important`?
- Uma regra simples consegue sobrescrever outra quando necessário?
- A ordem do arquivo faz sentido?

## 5. Consistência visual

- Cores seguem uma paleta?
- Espaçamentos seguem escala?
- Bordas, raios e sombras têm padrão?

## 6. Acessibilidade

- Foco visível existe?
- Contraste é adequado?
- Conteúdo oculto foi tratado com cuidado?
- Links e botões têm estados perceptíveis?

## 7. Manutenção

- O CSS é fácil de explicar?
- Pequenas mudanças exigem alterações em muitos lugares?
- Nomes de classes comunicam intenção?

## 8. Riscos

- Alturas fixas podem cortar conteúdo?
- `overflow: hidden` esconde informação importante?
- Valores mágicos podem quebrar em outros conteúdos?

## Resultado da análise

Classifique cada ponto como:

- **Aprovado:** atende ao padrão.
- **Ajustar:** há melhoria simples necessária.
- **Risco:** pode causar bug, inacessibilidade ou manutenção difícil.
