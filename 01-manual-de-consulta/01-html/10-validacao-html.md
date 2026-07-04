# 10 — Validação HTML

Validar HTML ajuda a encontrar erros estruturais antes que eles virem problemas de acessibilidade, SEO ou comportamento.

## O que validar

- Tags abertas e fechadas corretamente.
- Aninhamento permitido.
- Atributos obrigatórios presentes.
- Valores válidos para atributos.
- IDs únicos.
- Estrutura semântica coerente.

## Erros comuns detectados

- Fechar tags na ordem errada.
- Colocar `div` diretamente dentro de elementos que aceitam apenas itens específicos.
- Repetir o mesmo `id`.
- Esquecer `alt` em `img`.
- Usar atributo inválido para determinada tag.

## Como pensar em qualidade estrutural

Um HTML bem formado deve ser legível sem CSS e sem JavaScript. A pessoa deve entender início, navegação, conteúdo principal, seções, formulários e rodapé apenas lendo a marcação.

## Rotina recomendada

1. Revise indentação e fechamento de tags.
2. Confira landmarks e headings.
3. Valide com ferramenta adequada.
4. Corrija erros, não apenas avisos visuais.
5. Faça nova leitura como se fosse outra pessoa mantendo o projeto.
