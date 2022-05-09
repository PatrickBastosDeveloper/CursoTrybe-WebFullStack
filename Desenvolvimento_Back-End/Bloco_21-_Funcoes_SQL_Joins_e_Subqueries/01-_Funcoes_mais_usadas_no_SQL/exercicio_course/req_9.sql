/* 9. Escreva uma query que exiba em ordem decrescente 
a média salarial de todos os cargos, exceto das pessoas
programadoras (IT_PROG).*/

SELECT job_id, AVG(salary) 'average_salary_except_it_prog'
FROM hr.employees
WHERE job_id <> 'IT_PROG'
GROUP BY job_id
ORDER BY `average_salary_except_it_prog` DESC;