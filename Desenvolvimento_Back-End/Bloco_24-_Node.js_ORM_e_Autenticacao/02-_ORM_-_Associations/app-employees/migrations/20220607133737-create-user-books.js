/* Como faço para criar uma chave primária composta em uma Migration do Sequelize?
A forma mais simples de fazer isso é indicar quais campos farão parte dessa chave;
composta, utilizando novamente o parâmetro primaryKey, nesses campos! No nosso exemplo,
ao invés de usar um id único para tabela, teremos dois campos com parâmetro;
primaryKey: true, sendo userId e bookId: */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserBooks', {
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'Users',
          key: 'user_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      bookId: {
        type: Sequelize.INTEGER,
        field: 'book_id',
        references: {
          model: 'Books',
          key: 'book_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('UserBooks');
  },
};

/* O Sequelize vai interpretar mais de um campo com primaryKey, como sendo a parte de 
uma chave primária composta, impedindo que combinações repetidas possam ser inseridas 
nessa tabela! Note ainda, que esses campos também são chaves estrangeiras, dada suas;
referencias( references ) a outras tabelas.; */