# Por que o navegador não pode travar

Este capítulo ensina entender responsividade durante esperas no contexto de JavaScript vanilla para Front-end. A ideia central é manter a página utilizável enquanto uma ação aguarda tempo, rede ou resposta externa.

## O que é

É uma forma de organizar código quando o resultado não aparece imediatamente. Em vez de bloquear toda a tela, o JavaScript inicia uma operação, continua permitindo interação e volta ao fluxo quando houver resposta.

## Por que existe

No navegador, uma requisição pode demorar, falhar ou retornar vazia. Se a interface ficasse parada, o usuário não saberia se clicou corretamente. Código assíncrono existe para controlar essa espera com previsibilidade.

## Quando usar

Use quando houver temporizadores, eventos que iniciam tarefas demoradas, leitura de dados externos, conversão de respostas ou atualização do DOM após uma operação futura.

## Como pensar antes de codar

Antes de escrever código, responda: qual ação inicia o fluxo, o que fica visível durante a espera, qual dado é esperado, como o erro será tratado e qual elemento do DOM será atualizado.

## Exemplo didático

```js
botao.disabled = true;
status.textContent = "Buscando dados sem travar a tela...";
```

## Aplicação no Front-end

Em uma tela real, esse padrão aparece quando um botão busca informações e precisa mostrar loading, evitar cliques repetidos, limpar resultados antigos e renderizar a resposta de forma clara.

## Erros comuns

- Achar que o resultado estará disponível na linha seguinte sem aguardar.
- Mostrar erro técnico para o usuário em vez de uma mensagem compreensível.
- Esquecer de restaurar o estado visual após sucesso ou falha.

## Boas práticas

- Dê nomes claros para funções assíncronas, como `carregarUsuarios`.
- Separe busca de dados, renderização e mensagens.
- Trate sucesso, falha e estado de carregamento.

## Exercício rápido

Crie um feedback visual para uma ação demorada sem usar laços bloqueantes.
