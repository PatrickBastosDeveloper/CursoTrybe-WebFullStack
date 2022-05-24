/* Nesse arquivo é estabelecido o objeto connection que possibilita se 
conectar ao mysql e executar queries. */

const mysql = require( 'mysql2/promise' );
// o módulo 'mysql2/promise' permite trabalhar com fulxo assíncrono.


const connection = mysql.createPool( { 
  user: 'root',
  password: '',
  host: 'localhost',
  database: 'model_example'
} );
/* creatPool() permite trabalhar com put conexões. 
Put conexões é uma forma de reaproveitar conexões pro mysql.
Ou seja, ao invé de ficar abrindo nova conexão sempre que sua aplicação;
for utilizar o mysql, ele vai abrir a conexão e mantê - la ativa para que 
nas próximas querys quer for utlizar ela estar pronta para uso. Isso faz com que 
a aplicação seja mais rápida*/

module.exports = connection;
