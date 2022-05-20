const bodyParser = require('body-parser')
const express = require( 'express' );

const app = express();
app.use( bodyParser.json() );

const langs = [ 'html', 'css', 'js', 'react' ];

app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
} );

const logMiddleware = ( req, res, next ) => {
  const { token } = req.headers;
  if( !token ) return res.send( "Token não enviado" );
  next();
}


app.use((req, res, next)=>{ // o use() só influencia as rotas que estão abaixo dele.
  // console.log( "passou por aqui!" );
  next();
} )

app.get('/langs', logMiddleware, (req, res) =>{
    res.send( langs );
  } );
  
  app.post('/langs', logMiddleware, (req, res) =>{
    const { name } = req.body;
    langs.push( name );
    res.send(`Linguagem ${name} adicionada com sucesso!`)
} )

app.get('/xyz', (req, res)=>{ // função para teste de escopo do use()
  res.send( 'xuxa' );
})

app.listen( 3001, () => console.log( "app rodando na porta 3001!" ) );