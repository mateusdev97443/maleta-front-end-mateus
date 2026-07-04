# Objetos: fundamentos

Objeto representa uma entidade com propriedades e valores.

## Objeto de projeto

```js
const projeto = {
  nome: "Maleta Front-end",
  fase: 5,
  tecnologia: "JavaScript",
  concluido: false
};
```

## Acesso com ponto e colchetes

```js
console.log(projeto.nome);
console.log(projeto["tecnologia"]);
```

Ponto é mais comum. Colchetes são úteis quando a propriedade está em uma variável.

```js
const campo = "fase";
console.log(projeto[campo]);
```

## Alterar e adicionar

```js
projeto.concluido = true;
projeto.revisadoPor = "Prompt Mestre";
```

## Objeto de aluno e array de objetos

```js
const aluno = {
  nome: "Mateus",
  trilha: "Front-end",
  estudandoJavaScript: true
};

const projetos = [
  { nome: "HTML", fase: 2 },
  { nome: "CSS", fase: 3 },
  { nome: "JavaScript", fase: 5 }
];
```

## Erros comuns

- Usar array quando o dado tem propriedades nomeadas.
- Esquecer vírgula entre propriedades.
- Criar objetos com nomes de propriedade pouco claros.
