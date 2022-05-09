-- 3. 🚀 Escreva uma query que exiba a média salarial de cada JOB_ID, ordenando pela média salarial em ordem decrescente.
SELECT 
    JOB_ID, (salary) AS 'Media_de_salario'
FROM
    hr.employees
GROUP BY JOB_ID
ORDER BY salary desc; 