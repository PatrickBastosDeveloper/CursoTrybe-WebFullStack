-- Use o JOIN para exibir o nome, sobrenome e 
-- endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT
    S.first_name, S.last_name, A.address
FROM
    sakila.staff AS S
        INNER JOIN
    sakila.address AS A ON S.address_id = A.address_id;