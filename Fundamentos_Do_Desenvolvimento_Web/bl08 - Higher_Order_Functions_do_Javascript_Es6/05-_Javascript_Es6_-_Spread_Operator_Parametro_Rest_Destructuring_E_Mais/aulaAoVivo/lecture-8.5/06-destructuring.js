const bestGuyInTheWorld = {
  name: 'Rodrigo Hilbert',
  birthplace: 'Orleans, Santa Catarina',
  city: 'São Paulo',
  jobs: ['Ator', 'Modelo', 'Cozinheiro', 'Caçador', 'Sniper', 'Piloto de Caça']
};

//const name = bestGuyInTheWorld.name
//const birthplace = bestGuyInTheWorld.birthplace
// Saída esperada: 'Rodrigo Hilbert de Orleans, Santa Catarina'

// object destructuring
const {name:bestGuy ,birthplace} = bestGuyInTheWorld;
console.log( `${bestGuy} de ${birthplace} `)

// array destructuring
const [,,job3,...jobs] = bestGuyInTheWorld.jobs; 
console.log('JOBS: ', job3);






