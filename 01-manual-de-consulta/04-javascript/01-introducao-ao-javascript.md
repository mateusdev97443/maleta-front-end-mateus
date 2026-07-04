# Introdução ao JavaScript

JavaScript é a linguagem que dá lógica e comportamento aos projetos Front-end. HTML marca o conteúdo, CSS controla aparência e layout, e JavaScript trabalha com decisões, cálculos, validações, listas, regras e respostas a estados do sistema.

## HTML, CSS e JavaScript no mesmo projeto

Pense em uma página de produto:

- HTML descreve título, imagem, preço e botão.
- CSS define espaçamento, cor, grade, responsividade e destaque visual.
- JavaScript calcula preço final, verifica estoque, monta mensagens e decide se uma regra é verdadeira ou falsa.

```js
const preco = 120;
const desconto = 0.15;
const produtoDisponivel = true;

const precoFinal = preco - preco * desconto;

if (produtoDisponivel) {
  console.log(`Produto disponível por R$ ${precoFinal}.`);
} else {
  console.log("Produto indisponível no momento.");
}
```

## JavaScript como lógica e comportamento

Antes de manipular qualquer tela, JavaScript precisa responder perguntas: há estoque? a nota aprova? o nome foi informado? qual item da lista atende ao filtro? Esse raciocínio é o núcleo da linguagem para Front-end.

## Por que estudar lógica antes de manipular a tela

Quando o aluno pula direto para interface, ele pode decorar comandos sem entender a regra. A consequência é código que funciona apenas no exemplo copiado. Ao estudar lógica primeiro, Mateus aprende a separar problema, dados de entrada, processamento e saída.

## Onde aparece em projetos reais

JavaScript aparece em calculadoras de preço, filtros de catálogo, validações simples, mensagens condicionais, carrinhos, painéis com dados, alternância de estados e preparação de informações que serão mostradas na interface.

## Limites desta fase

Esta fase não aprofunda manipulação visual nem ferramentas avançadas. O foco é escrever lógica limpa, testar no console e criar base para fases futuras.
