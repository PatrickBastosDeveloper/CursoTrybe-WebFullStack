-- 2. 🚀 Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT  MAX(SALARY) - MIN(SALARY)
FROM hr.employees;