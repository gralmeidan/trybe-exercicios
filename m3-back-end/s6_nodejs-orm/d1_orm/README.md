# Módulo 3, Seção 6, Dia 1 - ORM: Introdução ao sequelize

Hoje nós aprendemos sobre o que são ORMs e a como usar o sequelize em uma aplicação node para criar modelos para interação com um banco de dados e a como criar _migrations_ e _seeds_ para lidar com a estrutura do banco de dados através da CLI do sequelize.

## Exerćicios desenvolvidos

1. Crie uma migration para criar uma tabela books com as seguintes colunas:

- `id` dever ser do tipo integer, não pode ser nula e ser a chave primária da tabela com auto incremento;
- `title` deve ser do tipo string e não pode ser nulo;
- `author` deve ser do tipo string e não pode ser nulo;
- `pageQuantity` deve ser do tipo integer e pode ser nulo;
- `createdAt` deve ser do tipo date e não pode ser nulo;
- `updatedAt` deve ser do tipo date e não pode ser nulo;

2. Crie o model Book utilizando a API do Sequelize. O model deve conter os seguintes campos:

- `title`: deve ser do tipo DateType.STRING
- `author`: deve ser do tipo DateType.STRING
- `pageQuantity`: deve ser do tipo DateType.INTEGER
- `createdAt`: deve ser do tipo DateType.DATE
- `updatedAt`: deve ser do tipo DateType.DATE

### Listando os livros

3. Crie um service BooksService com o método getAll para retornar uma lista de livros por meio do model Book.

4. Crie um controller BooksController com o método getAll sendo um middleware para retornar a lista de livros por meio do método getAll de BookService.

5. Vincule a rota GET /books para acessar seu controller.

### Buscando um livro pelo id

6. No service BooksService crie um método getById que recebe um id como parâmetro e use o model Book para buscar esse livro. Retorne o objeto encontrado pelo model.

7. No controller BooksController crie o método getById sendo um middleware que recebe o id como parâmetro de rota e buscar o livro por meio do service. Se o livro não existir a resposta da requisição deve ter o status 404 e o json { "message": "Book not found" }.

8. Vincule a rota GET /books/:id para acessar seu controller.

### Cadastrando um livro

9. No service BooksService crie um método create que recebe um objeto com os atributos title, author, pageQuantity e salve um novo livro utilizando o model Book.

10. No controller BooksController crie o método create sendo um middleware que recebe os atributos title, author, pageQuantity do body da requisição e salve os dados por meio do service.

11. Vincule a rota POST /books para acessar seu controller.

### Editando um livro

12. No service BooksService crie um método update que recebe dois parâmetros: o id do livro a ser alterado e um objeto com os atributos title, author, pageQuantity e atualize o livro utilizando o model Book.

13. No controller BooksController crie o método update sendo um middleware que recebe o id como parâmetro de rota e os atributos title, author, pageQuantity do body da requisição e salve os dados por meio do service. A requisição deve retornar o status 200 e a mensagem ‘Book updated!’. Se o livro não for encontrado retornar a mensagem ‘Book not found!’.

14. Vincule a rota PUT /books/:id para acessar seu controller.

### Removendo um livro

15. No service BooksService crie um método remove que recebe o id do livro a ser removido e remova o mesmo utilizando o model Book.

16. No controller BooksController crie o método remove sendo um middleware que recebe o id como parâmetro de rota e remova o livro por meio do service.

17. Vincule a rota DELETE /books/:id para acessar seu controller.
