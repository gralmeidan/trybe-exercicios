SELECT mv.title AS nome,
  bo.rating AS nota
FROM movies AS mv
  INNER JOIN box_office AS bo ON bo.movie_id = mv.id
ORDER BY bo.rating DESC;