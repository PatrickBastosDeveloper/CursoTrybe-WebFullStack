const express = require('express');
const { Address, Employee, Book, User } = require( './models' );
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
} );

app.post('/employees', async (req, res) => {
  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const employee = await Employee.create({ firstName, lastName, age });

    await Address.create({ city, street, number, employeeId: employee.id });

    return res.status(201).json({ message: 'Cadastrado com sucesso' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
      // Nota: a propriedade through: { attributes: [] } deve estar presente, pois sem ela,
      // em cada book, apareceriam todos seus respectivos users.
    } );

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
} );
// endpoint para teste do N:N localhost:3001/usersbooks/1

// Com Eager Loading:
// app.get('/employees/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const employee = await Employee.findOne({
//         where: { id },
//         include: [{ model: Address, as: 'addresses' }],
//       });
// // o campo include pode manipular os dados que serão retornados. Por exemplo, se não quisermos o acesso ao número do endereço, bastaria alterar o código, adicionando a propriedade attributes e dentro dela o que queremos fazer:      
//       //   where: { id },
//       //   include: [{
//       //     model: Address, as: 'addresses', attributes: { exclude: ['number'] },
//       //   }],
//       // });

//     if (!employee)
//       return res.status(404).json({ message: 'Funcionário não encontrado' });

//     return res.status(200).json(employee);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   };
// });

// Com Lazy Loading:
app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
const employee = await Employee.findOne({ where: { id } });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

       if (req.query.includeAddresses === 'true') {
         const addresses = await Address.findAll({ where: { employeeId: id } });
         return res.status(200).json({ employee, addresses });
       }

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});
// endpoints para teste do lazy loading:
// localhost:3001/employees/1?includeAddresses=true
// localhost:3001/employees/1includeAddresses=true

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;

/* A grande diferença quando vamos fazer uma requisição que necessite da utilização de uma association 
com o Sequelize, é o campo include.Esse campo diz ao Sequelize quais serão as configurações da requisição.
A propriedade model se refere a qual tabela será utilizada.Já a propriedade as deve ser igual à que 
declaramos no momento da criação da associação no respectivo model.; */
