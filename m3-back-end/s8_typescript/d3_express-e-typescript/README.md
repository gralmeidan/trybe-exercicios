# Módulo 3, Seção 8, Dia 2 - Tipagem Estática e Generics

Hoje aprendemos algumas funções mais avançadas do TypeScript como Type Aliases, Classes, Type Assertion e Generics, e como utilizar TypeScript em conjunto com mysql2 e sequelize.

## Exerćicios desenvolvidos

<div class="c-bERVbn"><article class="c-cuoufz"><p>
Faça os exercícios utilizando o banco de dados abaixo:</p>

```sql

CREATE DATABASE IF NOT EXISTS `TypeScriptExpress`;
USE `TypeScriptExpress`;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `Posts`;
CREATE TABLE `Posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `author` varchar(45) NOT NULL,
  `category` varchar(45) NOT NULL,
  `publicationDate` date NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `Products`;
CREATE TABLE `Products`(
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(250) NOT NULL,
  `brand` varchar(250) NOT NULL,
  `price` integer NOT NULL,
  `manufacturing_date` date NOT NULL,
  `expiration_date` date NOT NULL
);

DROP TABLE IF EXISTS `Restaurants`;
CREATE TABLE `Restaurants` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `category` varchar(45) NOT NULL,
  `openingTime` time NOT NULL,
  `closingTime` time NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `Users`
VALUES
  (1, 'Geraldo', 'geraldo@email.com', '123456'),
  (2, 'Marceline', 'marceline@email.com', '123456');

INSERT INTO `Posts`
VALUES
  (1, 'Facebook vai dividir departamento de realidade aumentada e virtual', 'Renan', 'tecnologia', '2021-10-26'),
  (2, 'O que é UDP e quais as diferenças com o TCP?', 'Giulianna', 'tecnologia', '2021-10-26');

INSERT INTO `Products`
VALUES
  (1, 'macbook pro 16', 'apple', 3600, '2021-10-25', '2026-10-25'),
  (2, 'surface pro', 'microsoft', 2500, '2021-10-25', '2024-10-25'),
  (3, 'alienware', 'dell', 2000, '2021-10-25', '2022-10-25'),
  (4, 'alienware expired', 'dell', 2000, '2015-10-25', '2016-10-25');

INSERT INTO `Restaurants`
VALUES
  (1, 'Los Pollos Hermanos', 'Fast Food', '10:00:00', '23:00:00'),
  (2, 'Central Perk', 'Coffee House', '07:00:00', '13:30:00');

```

</article>
<article class="c-cuoufz"><h2>
Atividade 1 🚀</h2>
<p>
<strong>Objetivos:</strong></p>
<ul>
  <li>
Criar um <strong>CRUD</strong> completo de pessoas usuárias de uma aplicação.  </li>
  <li>
Permitir que pessoas usuárias dessa aplicação façam <em>login</em> utilizando suas credenciais.  </li>
  <li>
<em>Utilize a tabela <strong>Users</strong> para realizar a atividade.</em>  </li>
</ul>
<p>
<strong>Rotas:</strong></p>
<ul>
  <li>
Uma rota que lista todos as pessoas usuárias da aplicação;  </li>
  <li>
Uma rota que lista uma única pessoa usuária a partir de seu <em>id</em>;  </li>
  <li>
Uma rota que permite cadastrar uma nova pessoa usuária da aplicação;  </li>
  <li>
Uma rota que permite editar o registro de uma única pessoa usuária cadastrada por meio de seu <em>id</em>;  </li>
  <li>
Uma rota que permite deletar uma pessoa usuária da aplicação a partir de seu <em>id</em>.  </li>
</ul>
<p>
<strong>Regras:</strong></p>
<ul>
  <li>
Uma pessoa usuária da aplicação deve possuir as propriedades <em>id</em>, nome, <em>email</em> e senha;  </li>
  <li>
Nenhuma propriedade de uma pessoa usuária da aplicação pode ser nula ou vazia;  </li>
  <li>
O <em>id</em> deve ser gerado automaticamente;  </li>
  <li>
A senha deve possuir no mínimo 6 e no máximo 12 caracteres;  </li>
  <li>
O nome deve possuir pelo menos 3 caracteres;  </li>
  <li>
O <em>email</em> deve possuir um formato de <em>email</em> válido (email@email.com);  </li>
  <li>
Ao criar um novo <code class="inline">user</code>, o <em>email</em> não pode já estar cadastrado.  </li>
</ul>
<p>
<strong>Bônus:</strong></p>
<ul>
  <li>
Tente utilizar o jwt para que um usuário somente possa deletar ou atualizar sua própria conta.  </li>
</ul>
</article><article class="c-cuoufz"><h2>
Atividade 2 🚀</h2>
<p>
<strong>Objetivos:</strong></p>
<ul>
  <li>
Criar um <strong>CRUD</strong> completo de <em>Blog Posts</em>.  </li>
  <li>
Listar <em>posts</em> por autor, categoria ou data de criação.  </li>
  <li>
<em>Utilize a tabela <strong>Posts</strong> para realizar a atividade.</em>  </li>
</ul>
<p>
<strong>Rotas:</strong>[</p>
<ul>
  <li>
Uma rota que lista todos os posts;  </li>
  <li>
Uma rota que lista um único post por meio de seu <em>id</em>;  </li>
  <li>
Uma rota que permite cadastrar um novo post;  </li>
  <li>
Uma rota que permite editar o registro de um post cadastrado a partir de seu <em>id</em>;  </li>
  <li>
Uma rota que permite deletar um post a partir de seu <em>id</em>.  </li>
  <li>
Uma rota que recebe via <code class="inline">query params</code> o <strong>autor, a categoria ou a data de criação</strong> e lista todos os <em>posts</em> que se encaixem no filtro;  </li>
</ul>
<p>
<strong>Regras:</strong></p>
<ul>
  <li>
Um post deve possuir as propriedades <em>id</em>, título, nome do autor, nome da categoria e data de criação;  </li>
  <li>
<strong>Nenhuma</strong> propriedade de um <em>post</em> pode ser nula ou vazia;  </li>
  <li>
O nome do autor deve possuir pelo menos 3 caracteres;  </li>
  <li>
O nome da categoria deve possuir pelo menos 3 caracteres;  </li>
  <li>
A <code class="inline">query param</code> de data de criação deve ser no formato: aaaa-mm-dd;  </li>
</ul>
</article><article class="c-cuoufz"><h2>
Atividade 3</h2>
<p>
<strong>Objetivos:</strong></p>
<ul>
  <li>
Criar um <strong>CRUD</strong> completo de produtos.  </li>
  <li>
Listar os produtos por faixa de preço.  </li>
  <li>
Listar os produtos que ainda não estão vencidos.  </li>
  <li>
<em>Utilize a tabela <strong>Products</strong> para realizar a atividade.</em>  </li>
</ul>
<p>
<strong>Rotas:</strong></p>
<ul>
  <li>
Uma rota que lista todos os produtos;  </li>
  <li>
Uma rota que lista um único produto por meio de seu <em>id</em>;  </li>
  <li>
Uma rota que permite cadastrar um novo produto;  </li>
  <li>
Uma rota que permite editar o registro de um produto cadastrado;  </li>
  <li>
Uma rota que permite deletar um produto a partir de seu <em>id</em>.  </li>
  <li>
Uma rota que recebe via <code class="inline">query params</code> um preço inicial e final e listar todos produtos que se encaixem no filtro;  </li>
  <li>
Uma rota que lista somente os produtos que ainda não estão vencidos;  </li>
</ul>
<p>
<strong>Regras:</strong></p>
<ul>
  <li>
Um produto deve possuir as propriedades <em>id</em>, nome, nome da marca, preço, data de fabricação e data de validade;  </li>
  <li>
<strong>Nenhuma</strong> propriedade de um produto pode ser nula ou vazia;  </li>
  <li>
O nome da marca deve possuir pelo menos 3 caracteres;  </li>
  <li>
O preço não pode receber um valor negativo;  </li>
  <li>
A data de fabricação não pode ser igual a data de validade;  </li>
  <li>
As <code class="inline">query params</code> de valor de preço inicial e final não podem receber valores negativos;  </li>
</ul>
</article><article class="c-cuoufz"><h2>
Atividade 4</h2>
<p>
<strong>Objetivos:</strong></p>
<ul>
  <li>
Criar um <strong>CRUD</strong> completo de restaurantes.  </li>
  <li>
Listar restaurantes que estão abertos.  </li>
  <li>
<em>Utilize a tabela <strong>Restaurants</strong> para realizar a atividade.</em>  </li>
</ul>
<p>
<strong>Rotas:</strong></p>
<ul>
  <li>
Uma rota que lista todos os restaurantes;  </li>
  <li>
Uma rota que lista um único restaurante por meio de seu <em>id</em>;  </li>
  <li>
Uma rota que permite cadastrar um novo restaurante;  </li>
  <li>
Uma rota que permite editar o registro de um restaurante cadastrado;  </li>
  <li>
Uma rota que permite deletar um restaurante a partir de seu <em>id</em>.  </li>
  <li>
Uma rota que lista somente os restaurantes que estão abertos no momento da chamada;  </li>
</ul>
<p>
<strong>Regras:</strong></p>
<ul>
  <li>
Um restaurante deve possuir as propriedades <em>id</em>, nome, tipo de comida que serve, horário da abertura e horário do fechamento;  </li>
  <li>
<strong>Nenhuma</strong> propriedade de um restaurante pode ser nula ou vazia;  </li>
  <li>
O nome deve possuir pelo menos 3 caracteres;  </li>
  <li>
O tipo de comida deve possuir no mínimo 3 caracteres;  </li>
</ul>
</article>
</div>
