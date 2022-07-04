module.exports = (sequelize, _DataTypes) => {
  // Com N:N
  
  // Primeiro de tudo, note que não temos nenhum atributo nesse model. Isso é possível porque 
  // quando estabelecemos os relacionamentos usando UserBooks como tabela de associação, o Sequelize 
  // já entende que esse model precisa ter os IDs das duas tabelas sendo associadas.
  const UserBook = sequelize.define( 'UserBook',
    {},
    { timestamps: false },
  );

  UserBook.associate = (models) => {
    // Depois, temos um novo tipo de relacionamento: o belongsToMany.Esse relacionamento cria um relacionamento;
    // do tipo N: N, utilizando o model especificado na opção through como tabela de associação. 
    models.Book.belongsToMany(models.User, {
      as: 'users', // Temos também o alias daquela associação, na chave as.
      through: UserBook,
      foreignKey: 'book_id',
      otherKey: 'user_id',
      // temos os parâmetros foreignKey e otherKey.Esses dois parâmetros dizem ao Sequelize qual campo utilizar na 
      // tabela de associação para identificar cada uma das entidades.
    });
    models.User.belongsToMany(models.Book, {
      as: 'books',
      through: UserBook,
      foreignKey: 'user_id',
      otherKey: 'book_id',
      // Lembre - se: foreignKey sempre se refere ao model em que chamamos; belongsToMany,
      // enquanto otherKey se refere ao model com o qual estamos criando a associação.
    });
  };
  return UserBook;
};
