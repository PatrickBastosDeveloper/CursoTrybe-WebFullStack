/*Exiba o nome, email, id do endereço, endereço e distrito dos 
clientes que moram no distrito da California e que contêm "rene" 
em seus nomes. As informações podem ser encontradas nas tabelas address e customer.*/

SELECT 
	CONCAT(c.first_name,' ', c.last_name) AS 'complete_name',
    c.email,
    c.address_id,
    a.district,
    a.address
FROM
    sakila.customer AS c
INNER JOIN sakila.address AS a
WHERE first_name LIKE '%rene%' 
AND a.district = 'California';
