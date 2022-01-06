
// ENTRADA DE DADOS
const users = [
    { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
    { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
    { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
    { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
    { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
  ];

// FILTER COM HOFS
const meuArray = users.filter(element => {return element.isDriver === false});
console.log('não dirigem: ',  users.filter(element => element.isDriver === false  )    );

//const filterNoDriver = array => array.filter(element => element.isDriver === false);
//console.log('filterNoDriver:', filterNoDriver(users));



// FILTER SEM HOFS
const filterNoDriverWithFor = (array) => {
    const noDrivers = [];

    for (let i = 0; i < array.length; i += 1) {
        if (array[i].isDriver === false){
            noDrivers.push(array[i]);
        }
    }
    return noDrivers;
};


console.log('filterNoDriverWithFor:', filterNoDriverWithFor(users));
console.log('original:', users);
  