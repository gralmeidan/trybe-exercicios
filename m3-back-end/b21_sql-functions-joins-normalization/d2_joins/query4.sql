SELECT t.id,
  t.name,
  t.location,
  m.title
FROM theater AS t
  LEFT JOIN movies AS m ON t.id = m.theater_id
ORDER BY t.name;