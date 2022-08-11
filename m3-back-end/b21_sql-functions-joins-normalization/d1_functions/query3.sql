SELECT job_id,
  AVG(salary)
FROM employees
GROUP BY job_id;