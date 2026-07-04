# Perguntas de revisão

1. Qual é a diferença prática entre código síncrono e assíncrono? Resposta: síncrono termina uma etapa antes da próxima; assíncrono inicia uma operação futura e permite que o navegador continue respondendo.

2. Por que o navegador não deve esperar travado uma API responder? Resposta: porque a interface ficaria sem resposta, prejudicando clique, rolagem, leitura e feedback visual.

3. O que uma Promise representa? Resposta: uma operação cujo resultado ainda não está disponível, mas poderá ser sucesso ou falha.

4. Quais são os estados de uma Promise? Resposta: `pending` enquanto aguarda, `fulfilled` quando resolve e `rejected` quando falha.

5. Para que serve `.then()`? Resposta: executar uma etapa quando a Promise resolve e receber o valor resolvido.

6. Para que serve `.catch()`? Resposta: centralizar tratamento de falhas de uma Promise ou de um encadeamento.

7. Para que serve `.finally()`? Resposta: executar limpeza ou restauração visual independentemente de sucesso ou erro.

8. O que `async` muda em uma função? Resposta: faz a função retornar uma Promise e permite usar `await` dentro dela.

9. O que `await` faz? Resposta: pausa a continuação daquela função `async` até a Promise resolver ou rejeitar, sem travar o navegador inteiro.

10. Por que usar `try/catch` com `async/await`? Resposta: porque falhas em `await` podem ser capturadas em um bloco legível e próximo do fluxo principal.

11. O que é `fetch`? Resposta: uma API nativa do navegador para realizar requisições HTTP e receber uma Promise com a resposta.

12. `fetch` devolve diretamente o JSON final? Resposta: não. Ele devolve um `Response`; o corpo precisa ser lido com métodos como `response.json()`.

13. O que é JSON no consumo de API? Resposta: um formato textual comum para transportar dados que pode ser convertido para objetos e arrays em JavaScript.

14. Por que verificar `response.ok`? Resposta: porque respostas HTTP com erro, como 404, podem não cair automaticamente no `catch`.

15. Qual é a diferença entre erro de rede e status HTTP de erro? Resposta: erro de rede impede obter resposta; status de erro retorna resposta, mas indica problema no pedido.

16. Por que loading melhora a experiência? Resposta: ele confirma que a ação começou e reduz dúvida durante a espera.

17. O que uma boa mensagem de erro deve evitar? Resposta: detalhes técnicos, culpa no usuário e termos como stack trace; deve orientar tentativa segura.

18. Como renderizar dados no DOM com segurança básica? Resposta: usando `textContent` para texto e criando elementos em vez de concatenar HTML sem necessidade.

19. Quando filtrar localmente em vez de buscar de novo? Resposta: quando os dados necessários já foram carregados e o filtro é simples.

20. Qual boa prática evita eventos gigantes? Resposta: separar funções de busca, renderização, loading e erro.
