-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária 
-- para realizar o pagamento de todas as pessoas funcionárias.
SELECT SUM(salary) AS payment_employes 
FROM hr.employees
ORDER BY payment_employes DESC;