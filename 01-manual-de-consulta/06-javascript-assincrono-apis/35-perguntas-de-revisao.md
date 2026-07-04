# Perguntas de revisão

Use estas perguntas para verificar se você entende o raciocínio por trás do código, não apenas a sintaxe.

## 1. Se uma linha com `setTimeout` aparece antes de um `console.log`, por que o log pode aparecer primeiro?

Resposta comentada: porque `setTimeout` agenda uma função para depois. Ele inicia a espera e libera a continuação do código. O `console.log` seguinte executa enquanto o temporizador ainda está pendente.

## 2. Qual é a diferença entre iniciar uma requisição e ter os dados prontos?

Resposta comentada: iniciar a requisição significa enviar o pedido. Ter dados prontos exige receber a resposta, validar status e converter o corpo, por exemplo com `response.json()`.

## 3. O que uma Promise representa em uma tela de Front-end?

Resposta comentada: representa uma operação futura, como buscar usuários. Enquanto ela está pendente, a tela pode mostrar loading; quando resolve, renderiza dados; quando rejeita, mostra erro.

## 4. Por que uma Promise resolvida não volta para pending?

Resposta comentada: uma Promise representa o resultado de uma operação específica. Depois de finalizada com sucesso ou falha, seu estado é definitivo para evitar resultados contraditórios.

## 5. Em que momento o `.then` executa?

Resposta comentada: ele executa quando a Promise anterior resolve. O valor recebido no `.then` é o valor resolvido ou retornado pela etapa anterior.

## 6. Por que esquecer `return` dentro de um `.then` com chaves causa problema?

Resposta comentada: sem `return`, o próximo `.then` recebe `undefined`. Isso é comum ao converter `response.json()` dentro de um bloco `{}`.

## 7. Quando o `.catch` é acionado?

Resposta comentada: ele é acionado quando uma Promise rejeita ou quando um erro é lançado em uma etapa anterior do encadeamento.

## 8. Para que serve `.finally` em uma busca com loading?

Resposta comentada: serve para executar uma limpeza em sucesso ou erro, como esconder loading e reabilitar botão.

## 9. O que `async` muda em uma função?

Resposta comentada: a função passa a retornar uma Promise e permite usar `await` dentro dela.

## 10. `await` trava o navegador inteiro?

Resposta comentada: não. Ele pausa a continuação da função `async`, mas o navegador continua podendo atualizar a interface e responder a eventos.

## 11. Por que usar `try/catch` com `async/await`?

Resposta comentada: porque falhas em operações aguardadas podem ser tratadas de forma legível, separando fluxo de sucesso, erro e finalização.

## 12. `fetch` retorna o JSON final?

Resposta comentada: não. `fetch` retorna uma Promise que resolve com `Response`. O JSON final vem depois de `await response.json()`.

## 13. Por que `response.json()` precisa de `await`?

Resposta comentada: porque a leitura e conversão do corpo também são assíncronas. Sem `await`, você fica com uma Promise, não com os dados.

## 14. Por que um 404 pode não cair automaticamente no `catch`?

Resposta comentada: porque o servidor respondeu. O `fetch` recebeu uma resposta HTTP, mesmo que o status indique erro. Você precisa verificar `response.ok` e lançar erro.

## 15. Cenário: a lista carregou corretamente, mas não encontrou itens. Isso é erro?

Resposta comentada: não necessariamente. Lista vazia é um estado válido e deve ter mensagem própria, diferente de erro de rede ou status inválido.

## 16. Cenário: o usuário clicou três vezes e a lista duplicou. Qual falha provável?

Resposta comentada: o botão não foi desabilitado durante o carregamento ou a lista anterior não foi limpa antes de renderizar novamente.

## 17. Por que não mostrar `TypeError: Failed to fetch` diretamente na tela?

Resposta comentada: é uma mensagem técnica. O usuário precisa de orientação clara, enquanto o detalhe técnico pode ficar no console para depuração.

## 18. Quando filtrar localmente em vez de chamar a API de novo?

Resposta comentada: quando os dados já estão carregados, a lista é pequena e o critério é simples. Isso evita requisições desnecessárias.

## 19. Qual risco de expor token no Front-end?

Resposta comentada: o código do Front-end é visível no navegador. Um segredo exposto pode ser copiado e usado por terceiros.

## 20. Por que separar `buscarUsuarios` e `renderizarUsuarios`?

Resposta comentada: porque uma função conversa com a API e outra atualiza o DOM. Essa separação facilita leitura, correção e reutilização.
