const connection = require( './connection' );

// Essa função retorna a lista de todos os autores.
const getAll = async () => { // Como operações com banco de dados, geralmente, são demoradas, já trabalhamos com fluxo assíncrono. 
  const result = await connection.execute( 'SELECT id, first_name, middle_name, last_name FROM authors' );
  // Nessse momento o getAll está executando uma query no banco de dados, 
  // armazenando o resultado (result) e passando para o escopo do node (return).
  return result;
};

module.exports = {
  getAll,
}