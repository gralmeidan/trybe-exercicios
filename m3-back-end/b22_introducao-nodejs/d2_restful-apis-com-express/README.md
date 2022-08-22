# Bloco 22, Dia 2 - Node.js: API REST com Express

Hoje nós aprendemos como usar o node e o Express para criar APIs robustas, assim como as regras gerais da arquitetura REST.

## Exercícios desenvolvidos.

Observe o array de objetos abaixo:

```js
const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];
```

Agora, faça os exercícios a seguir:

1. Crie um servidor Node.js utilizando o framework Express 🚀
2. Crie um endpoint do tipo GET com a rota /myActivities/:id, que possa listar uma atividade do array por id 🚀
3. Crie um endpoint do tipo GET com a rota /myActivities, que possa listar todas as atividades do array 🚀
4. Crie um endpoint do tipo GET com a rota /filter/myActivities, que possa listar todas as atividades filtradas por status do array. A rota deve receber a informação por query e a chave deve-se chamar status. A chave status vai trazer consigo valor de Feito ou A fazer e o endpoint deve fazer o filtro das atividades 🚀
5. Crie um endpoint do tipo POST com a rota /myActivities, que possa adicionar atividades ao array.
6. Crie um endpoint do tipo PUT com a rota /myActivities/:id, que possa modificar uma atividade no array.
7. Crie um endpoint do tipo DELETE com a rota /myActivities/:id, que possa deletar uma atividade do array.
