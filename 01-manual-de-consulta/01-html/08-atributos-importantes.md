# 08 — Atributos importantes

## Identificação e organização

- `id`: identificador único na página; útil para labels, âncoras e scripts.
- `class`: classificação reutilizável para estilo ou seleção.
- `lang`: idioma do documento ou de um trecho.
- `title`: informação complementar; não dependa dele para conteúdo essencial.
- `data-*`: dados personalizados para comportamento futuro.

## Acessibilidade

- `aria-*`: melhora comunicação com tecnologias assistivas quando HTML nativo não basta.
- `role`: define papel acessível; use com cautela.
- `hidden`: oculta conteúdo visualmente e semanticamente.
- `tabindex`: altera navegação por teclado; prefira fluxo natural.
- `alt`: texto alternativo de imagens.

## Navegação e mídia

- `href`: destino de links.
- `src`: origem de imagens, scripts, vídeos ou iframes.
- `type`: tipo de botão, input ou mídia.

## Formulários

- `name`: chave enviada no formulário.
- `value`: valor do campo.
- `checked`: estado inicial de checkbox/radio.
- `selected`: opção inicial em `select`.
- `required`: campo obrigatório.

## Regra prática

Antes de adicionar um atributo, pergunte: ele melhora identificação, acessibilidade, envio de dados, navegação ou manutenção? Se não, provavelmente é desnecessário.
