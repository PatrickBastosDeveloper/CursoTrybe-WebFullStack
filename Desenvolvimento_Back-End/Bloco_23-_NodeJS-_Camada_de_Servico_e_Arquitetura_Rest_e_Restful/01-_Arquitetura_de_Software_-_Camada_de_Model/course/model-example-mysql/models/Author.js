const { type } = require( 'express/lib/response' );
const connection = require( './connection' );

// Essa função altera o formato orignal do banco de dado que era snake_case para camelCase.
const serialize = (authorData) =>{ 
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  }
}

// Essa função adiciona a chave valor fullName atualizando o banco de dados original.
const getNewAuthor = ({id, firstName, middleName, lastName})=>{
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' '); // O método join() é usado para transformar o array em strings separas por espaços (' ').
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName
  }
}

// Essa função retorna a lista de todos os autores.
const getAll = async () => { // Como operações com banco de dados, geralmente, são demoradas, já trabalhamos com fluxo assíncrono.
  const [authors] = await connection.execute( 'SELECT id, first_name, middle_name, last_name FROM authors' );
  return authors.map(serialize).map(getNewAuthor);
  // Nessse momento o getAll está executando uma query no banco de dados,
// armazenando o resultado (result) e passando para o escopo do node (return).
};

const findById = async(id)=>{
  const [ authorData ] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors WHERE id =?',
      [id]
  );
  if ( authorData.length === 0 ) return null;

  const { firstName, middleName, lastName } = authorData.map( serialize )[ 0 ];// [0] vai trazer apenas o primeiro elemento do array authorData.
  
  return getNewAuthor( { // Usa-se o getNewAuthor para retornar a resposta da função já no novo formato com fullName.
    id,
    firstName,
    middleName,
    lastName
  })
}
/* O método findById acima é muito semelhante a getAll. A grande diferença é que usamos o WHERE na 
nossa query para limitar o escopo da busca à pessoa autora procurada.No entanto,
em vez de passar valores diretamente na string, fazendo interpolação, é uma boa prática 
separar os valores da query.Fazemos isso usando '?' como parâmetros na string e usando,
como segundo argumento, um array que contém os valores que devem substituir todos os '?';
utilizados, na ordem. */

// Essa função valida se os campos estão preenchidos;
const isValid = (firstName, middleName, lastName) =>{
  if ( !firstName || typeof firstName !== 'string' ) return false;
  if ( !lastName || typeof lastName !== 'string' ) return false;

  return true;
}

// Essa função vai inserir o(s) novo(s) author(s) no banco de dados.
const create = async (firstName, middleName, lastName) => {
  connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
    [firstName, middleName, lastName]
  )
}


module.exports = {
  getAll,
  findById,
  isValid,
  create,
}


