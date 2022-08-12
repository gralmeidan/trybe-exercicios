SELECT m.*,
  t.name
FROM theater AS t
  RIGHT JOIN movies AS m ON m.theater_id = t.id
ORDER BY t.name;