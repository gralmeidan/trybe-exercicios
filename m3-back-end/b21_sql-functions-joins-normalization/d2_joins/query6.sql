SELECT m.*
FROM movies AS m
  INNER JOIN box_office AS b ON b.movie_id = m.id
WHERE m.theater_id IS NOT NULL
  AND b.rating > 8;