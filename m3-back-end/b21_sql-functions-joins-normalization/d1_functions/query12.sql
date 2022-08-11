SELECT first_name,
  last_name
FROM employees
WHERE LENGTH(first_name) >= 8;