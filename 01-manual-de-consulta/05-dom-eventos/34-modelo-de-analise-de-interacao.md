# Modelo de Análise de Interação

Antes de codar uma interação, responda às perguntas abaixo. Esse modelo força você a transformar uma ideia visual em passos técnicos.

## Perguntas obrigatórias

- Qual elemento dispara a ação?
- Qual evento será escutado?
- Qual elemento será alterado?
- O que muda: texto, classe, atributo, estilo ou estrutura?
- O elemento existe no DOM no momento da seleção?
- Preciso impedir comportamento padrão?
- Preciso validar dados?
- Qual feedback o usuário recebe?
- Como evitar código bagunçado?
- Como testar manualmente?

## Exemplo preenchido: preview de nome

- Elemento que dispara: campo `.campo-nome`.
- Evento: `input`.
- Elemento alterado: `.preview-nome`.
- Mudança: texto via `textContent`.
- Validação: se vazio, mostrar texto padrão.
- Feedback: o card muda enquanto o usuário digita.

```js
const campoNome = document.querySelector(".campo-nome");
const previewNome = document.querySelector(".preview-nome");

if (campoNome && previewNome) {
  campoNome.addEventListener("input", function () {
    previewNome.textContent = campoNome.value.trim() || "Nome ainda não informado.";
  });
}
```

## Exemplo preenchido: menu simples

- Elemento que dispara: botão `.menu-botao`.
- Evento: `click`.
- Elemento alterado: navegação `.menu`.
- Mudança: classe `menu--aberto`.
- Feedback: texto do botão alterna entre abrir e fechar.

## Teste manual recomendado

Teste o primeiro clique, o segundo clique, campo vazio, texto com espaços, envio por teclado, clique repetido e console sem erros.
