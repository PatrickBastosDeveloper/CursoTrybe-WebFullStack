/*15. Escreva uma query que exiba as seguintes 
informações de cada funcionário: id, primeiro 
nome e mês no qual foi contratado (exiba somente o mês).*/

SELECT 
    employee_id, first_name, MONTH(hire_date) 'hire_month'
FROM
    hr.employees;