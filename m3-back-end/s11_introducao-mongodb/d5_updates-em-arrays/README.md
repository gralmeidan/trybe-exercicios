# Módulo 3, Seção 11, Dia 5 - MongoDB: Updates Complexos - Arrays

Hoje aprendemos como construir updates e filters mais complexos para atualizar e filtrar arrays.

## Exercícios desenvolvidos

Utilize o seguinte dataset para execução dos exercícios:

```js
use cinema;
db.movies.drop();
db.movies.insertMany([
  {
    title: "Batman",
    category: [
      "action",
      "adventure",
    ],
    imdbRating: 7.7,
    budget: 35,
  },
  {
    title: "Godzilla",
    category: [
      "action",
      "adventure",
      "sci-fi",
    ],
    imdbRating: 6.6,
    budget: 1,
  },
  {
    title: "Home Alone",
    category: [
      "family",
      "comedy",
    ],
    imdbRating: 7.4,
  },
]);
```

1. Adicione a categoria "superhero" ao filme Batman.

2. Utilizando o modificador $each, adicione as categorias "villain" e "comic-based" ao filme Batman.

3. Remova a categoria "action" do filme Batman.

4. Remova o primeiro elemento do array category do filme Batman.

5. Remova o último elemento do array category do filme Batman.

6. Adicione o elemento "action" ao array category do filme Batman, garantindo que esse valor não se duplique.

7. Adicione a categoria "90's" aos filmes Batman e Home Alone.

8. Crie um array de documentos chamado cast para o filme Home Alone com os seguintes dados:

```json
{
  "actor": "Macaulay Culkin",
  "character": "Kevin"
},
{
  "actor": "Joe Pesci",
  "character": "Harry"
},
{
  "actor": "Daniel Stern"
}
```

9. Adicione o campo character com o valor Marv ao array de cast em que o campo actor seja igual a Daniel Stern no filme Home Alone.

10. Crie um array de documentos chamado cast para o filme Batman com os seguintes dados:

```json
{
  "character": "Batman"
},
{
  "character": "Alfred"
},
{
  "character": "Coringa"
}
```

11. Produza três querys para o filme Batman:

- Adicione o campo actor, que deve ser um array com o valor Christian Bale, ao array de cast em que o campo character seja igual a Batman;
- Adicione o campo actor, que deve ser um array com o valor Michael Caine, ao array de cast em que o campo character seja igual a Alfred;
- Adicione o campo actor, que deve ser um array com o valor Heath Ledger, ao array de cast em que o campo character seja igual a Coringa.

12. Adicione aos atores de cast do character Batman do filme Batman os valores "Michael Keaton", "Val Kilmer" e "George Clooney", e deixe o array em ordem alfabética.
