// ACUMULAR OS VALORES DOS OBJETOS E GERAR UM NOVO BJETO
const players = [
  { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
  { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
  { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
  { fullName: 'Túlio Maravilha', email: 'deputado@futebol.br' },
];

players[0].idade = 25;
console.log('obj: ',players[0].idade)

const newPlayers = players.reduce( (acumulador,item)=> {
  acumulador[item.fullName] = item.email;  
  console.log('dentro: ',acumulador[item.fullName] )      
  return acumulador
},{});

console.log('newPlayers: ', newPlayers)

/*
const obj = {
  'Adriano Imperador' : 'didico@futebol.br',
}
*/




//players.reduce();


