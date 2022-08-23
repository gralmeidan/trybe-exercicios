# Bloco 22, Dia 3 - Node.js: Testes de integração

Hoje aprendemos à como usar mocha, chai e sinon para escrever testes de integração para nossas apis

## Exercícios desenvolvidos

Crie e teste a api de uma loja de chocolates utilizando os dados abaixo:

```json
{
  "brands": [
    {
      "id": 1,
      "name": "Lindt & Sprungli"
    },
    {
      "id": 2,
      "name": "Ferrero"
    },
    {
      "id": 3,
      "name": "Ghirardelli"
    }
  ],
  "chocolates": [
    {
      "id": 1,
      "name": "Mint Intense",
      "brandId": 1
    },
    {
      "id": 2,
      "name": "White Coconut",
      "brandId": 1
    },
    {
      "id": 3,
      "name": "Mon Chéri",
      "brandId": 2
    },
    {
      "id": 4,
      "name": "Mounds",
      "brandId": 3
    }
  ]
}
```

**GET** /chocolates/total : Quantidade total de chocolates

- Esse endpoint deve retornar a quantidade de tipos de chocolates que existem na base de dados, usando o seguinte contrato:

> 👉 **GET** /chocolates/total

- Objetivo: Retornar a quantidade de tipos de chocolates que existem.
- Código HTTP: 200 - OK;

<hr/>

**GET** /chocolates/search : Pesquisa de chocolates por nome

- Esse endpoint deve retornar os chocolates que contém uma determinada palavra em seu nome, usando o seguinte contrato:

> 👉 **GET** /chocolates/search?name=Mo

- Objetivo: Retornar os chocolates que contém o termo pesquisado.
- Parâmetros de consulta (query params): name, tipo string
- Código HTTP: 200 - OK
- Caso não haja chocolates com a string passada, retorne um array vazio e status 404:

> 👉 **GET** /chocolates/search?name=ZZZ

- Objetivo: Retornar um array vazio quando não há chocolates que contenham o termo pesquisado.
- Parâmetros de consulta (query params): name, tipo string
- Código HTTP: 404 - Not Found

<hr/>

**PUT** /chocolates/:id : Atualiza um chocolate

- Esse endpoint deve atualizar um chocolate que existe na base de dados, usando o seguinte contrato:

> 👉 **PUT** /chocolates/1

- Objetivo: Atualizar um chocolate que existe na base de dados.
- Código HTTP: 200 - OK;
- Caso não haja um chocolate com a id passada, retorne uma mensagem de erro com status 404:

> 👉 **PUT** /chocolates/555

- Objetivo: Retornar uma mensagem de erro quando não há um chocolate com a id passada.
- Código HTTP: 404 - Not Found
