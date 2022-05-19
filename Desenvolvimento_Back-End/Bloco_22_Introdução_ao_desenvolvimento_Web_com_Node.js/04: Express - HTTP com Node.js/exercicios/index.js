const authMiddleware = require('./authMiddleware');
const simpsonsUtils = require( './fs-utils' );

const bodyParser = require('body-parser')
const express = require( 'express' );

const app = express();
app.use( bodyParser.json() );
app.use(authMiddleware);

app.get('/ping', (req, res) => res.json({ "message": "pong" })); // ex1

app.post('/hello', (req, res) => { // ex2
  const { name, date } = req.body;
  return res.status(200).json({ "message": `Hello, ${name}! birthday ${date}` });
})

app.post('/greetings', (req, res) => { // ex3
  const { name, age } = req.body;

  if (parseInt(age, 10) <= 17) {
    // não esqueça de adicionar o return para impedir de que seu código continue.
    return res.status(401).json({ message: `Unauthorized` });
  }

  return res.status(200).json({ message: `Hello, ${name}!` });
} );

app.put('/users/:name/:age', (req, res) => { // ex4
  const { name, age } = req.params;

  return res.status(200)
    .json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });
} )

// ex5 - Criado um arquivo simpsons.json

app.get('/simpsons', async (req, res) => { // ex6
  try {
    const simpsons = await simpsonsUtils.getSimpsons();

    return res.status(200).json(simpsons);
  } catch (error) {
    return res.status(500).end();
  }
} )

app.get( // ex7
  '/simpsons/:id',
  async (req, res) => {
    try {
      const simpsons = await simpsonsUtils.getSimpsons();

      const simpson = simpsons.find(({ id }) => id === req.params.id);

      if (parseInt(!simpson)) {
        // não esqueça de adicionar o return para impedir de que seu código continue.
        return res.status(404).json({ message: 'simpson not found' });
      }

      return res.status(202).json(simpson);
    }
    catch (error) {
      return res.status(500).end();
    }
  }
);

app.post(
  '/simpsons',
  async (req, res) => {
    try {
      const { id, name } = req.body;

      const simpsons = await simpsonsUtils.getSimpsons();

      if (simpsons.map(({ id }) => id).includes(id)) {
        // não esqueça de adicionar o return para impedir de que seu código continue.
        return res.status(409).json({ message: 'id already exists' });
      }

      simpsons.push({ id, name });

      await simpsonsUtils.setSimpsons(simpsons);

      return res.status(204).end();
    } catch (error) {
      return res.status(500).end();
    }
  }
);


// app.delete(
//   '/simpsons',
//   async (req, res) => {
//     try {
//       const { id } = req.body;

//       const simpsons = await simpsonsUtils.getSimpsons();

//       if (simpsons.map(({ id }) => id).includes(id)) {
//         // não esqueça de adicionar o return para impedir de que seu código continue.
//         simpsons.splice({ id });
  
//         await simpsonsUtils.setSimpsons(simpsons)
  
//         return res.status(204).end();
        
//       }

//     } catch (error) {
//       return res.status(500).end();
//     }
//   }
// );


app.listen(3001, () => console.log('ouvindo na porta 3001!'));

// referência sobre params 
// Um USVString (en-US) se o parâmetro de pesquisa for encontrado; Caso contrário, null.
// A USVStringé uma seqüência de valores escalares Unicode . Essa definição difere daquela de DOMStringou do tipo JavaScript String, pois sempre representa uma sequência válida adequada para processamento de texto, enquanto o último pode conter pontos de código substitutos. O USVStringtipo geralmente é encontrado em APIs que realizam processamento de texto, enquanto DOMStringé usado pela maioria das outras APIs.
// https://developer.mozilla.org/pt-BR/docs/Web/API/URLSearchParams/get