SELECT mv.title AS nome,
  bo.domestic_sales AS vendas_nacionais,
  bo.international_sales AS vendas_internacionais
FROM movies AS mv
  INNER JOIN box_office AS bo ON bo.movie_id = mv.id;