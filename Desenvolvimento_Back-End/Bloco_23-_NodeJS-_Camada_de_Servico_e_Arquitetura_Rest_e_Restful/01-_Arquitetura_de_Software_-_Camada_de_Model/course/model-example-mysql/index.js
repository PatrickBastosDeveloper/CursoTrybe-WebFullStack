const express = require( 'express' );
// const express = require( 'body-parser' );
const app = express();
const port = 3001;

const Author = require( './models/Author' );
app.use( express.json() )

app.get('/authors', async(req, res)=>{
  const authors = await Author.getAll();

  res.status(200).json(authors);
} );

app.get('/authors/:id', async(req, res)=>{
  const { id } = req.params;
  const author = await Author.findById( id );
  
  if ( !author ) return res.status( 404 ).json( { message: 'Not found' } );
  res.status(200).json(author);
})

/* Para conseguir transformar o que vem "empacotado" no body é preciso importar 
o método body - parser, como foi feito na linha 2 desse arquivo.Só dessa forma é 
possível transformar esse conteúdo em um jason pra ser usado pela aplicação. */
app.post('/authors', async(req, res)=>{
  const { first_name, middle_name, last_name } = req.body;
  if(!Author.isValid(first_name, middle_name, last_name)) return res.status(400).json({message: 'Dados inválidos'})
  await Author.create( first_name, middle_name, last_name );

  res.status(201).json({message: 'Autor criado com sucesso!'})
} )


app.listen( port, () => console.log( `Example app listening on port ${ port }!` ) );

