const bodyParser = require('body-parser')
const express = require( 'express' );

const app = express();
app.use( bodyParser.json() );

const langs = [ 'html', 'css', 'js', 'react' ];

app.get('/langs', (req, res) =>{
  res.send( langs );
} );

app.post('/langs', (req, res) =>{
  const { name } = req.body;
  langs.push( name );
  res.send(`Linguagem ${name} adicionada com sucesso!`)
} )

app.listen( 3001, () => console.log( "app rodando na porta 3000!" ) );