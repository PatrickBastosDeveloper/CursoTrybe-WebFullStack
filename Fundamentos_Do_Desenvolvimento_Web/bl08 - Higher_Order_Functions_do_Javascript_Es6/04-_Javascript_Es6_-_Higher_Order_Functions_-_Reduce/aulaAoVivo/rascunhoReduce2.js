// Reduce para formar uma frase

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const starWars = epic.reduce((acumulador,item)=> {
return `${acumulador} ${item}`
});

console.log('starWars: ', starWars);