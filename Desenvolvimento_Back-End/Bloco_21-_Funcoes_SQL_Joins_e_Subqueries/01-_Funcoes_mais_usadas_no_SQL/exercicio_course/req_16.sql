/*16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.*/
SELECT UPPER(CONCAT(FIRST_NAME, " ", LAST_NAME))
FROM hr.employees;