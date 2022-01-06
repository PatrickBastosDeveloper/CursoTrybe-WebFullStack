const numbers = [1, 2, 3, 4, 5];

// const newArr = numbers.filter( (item)=> {return item < 4} );

// ou

const newArr = numbers.filter( item=> {return item < 4} );

console.log('newArr', newArr);

// filter com objetos: 

const users = [
    { firstName: 'Homer', lastName: 'Simpson', isDriver: true},
    { firstName: 'Marge', lastName: 'Simpson', isDriver: true},
    { firstName: 'Bart', lastName: 'Simpson', isDriver: false},
    { firstName: 'Lisa', lastName: 'Simpson', isDriver: false},
    { firstName: 'Maggie', lastName: 'Simpson', isDriver: false},
];

// console.log('Não dirigem: ', users.filter(element => element.isDriver === false));
const filterNoDriver = array => array.filter(element => element.isDriver ===false);


// map

const users = [
    { firstName: 'Homer', lastName: 'Simpson', isDriver: true},
    { firstName: 'Marge', lastName: 'Simpson', isDriver: true},
    { firstName: 'Bart', lastName: 'Simpson', isDriver: false},
    { firstName: 'Lisa', lastName: 'Simpson', isDriver: false},
    { firstName: 'Maggie', lastName: 'Simpson', isDriver: false},
];

const newArr = users.map((item)=> item.firstName);
console.log('newArr:', newArr);