/*10. 🚀 Escreva um query que exiba média salarial e o número 
de funcionários de todos os departamentos com mais de dez 
funcionários. Dica: agrupe pelo DEPARTMENT_ID.*/

SELECT department_id job_id, 
AVG(salary) 'average_salary', 
COUNT(*) 'number_of_employess'
FROM hr.employees
GROUP BY department_id
HAVING `number_of_employess` > 10;


