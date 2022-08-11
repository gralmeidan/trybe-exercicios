SELECT job_id,
  AVG(salary) AS media_salario
FROM employees
GROUP BY job_id
HAVING job_id <> 'it_prog'
ORDER BY media_salario DESC;