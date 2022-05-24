const express = require( 'express' );
const app = express();
const port = 3001;

const author = require( './models/author' );

app.get('/authors', async(req, res)=>{
  const authors = await author.getAll();
  console.log(authors);
  res.status(200).json(authors);
} );
app.listen((port, () => console.log( `Example app listening on port ${port}!` ) ));
