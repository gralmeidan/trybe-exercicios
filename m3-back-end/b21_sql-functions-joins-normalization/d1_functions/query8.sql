SELECT job_id,
  SUM(salary)
FROM employees
GROUP BY job_id
HAVING job_id = 'it_prog';