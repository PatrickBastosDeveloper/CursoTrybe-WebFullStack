// Acumular os vlaores dos objetos e gerar um novo objetos
const players = [
    { fullName: 'Adriano Imperador', email: 'didico@futebol.br'},
    { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br'},
    { fullName: 'Ronaldo Fenõmeno', email: 'cortedocascao@futebol.br'},
    { fullName: 'Túlio maravilha', email: 'deputado@futebol.br'},
]

const newPlayers = players.reduce((acumulador, item)=>{
    acumulador[item.fullName] = item.email
    return acumulador
});

console.log('newPlayers: ', newPlayers);