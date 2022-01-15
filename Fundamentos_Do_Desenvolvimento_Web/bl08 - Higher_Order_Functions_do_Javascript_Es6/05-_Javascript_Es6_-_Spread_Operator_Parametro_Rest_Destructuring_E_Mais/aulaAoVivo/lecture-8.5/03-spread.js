const points = [1.0, 2.2, -6.6, 10];
const otherPoints = [0.1, 3.5, -99.6];

printPointCoordinates = (x, y, z) => `Point coordinates are x = ${x}, y = ${y} and z = ${z}`;


console.log( printPointCoordinates(...points) );
console.log( printPointCoordinates(...otherPoints) );

//Saídas esperadas:
// - 'Point coordinates are x = 1, y = 2.2 and z = -6.6'
// - 'Point coordinates are x = 0.1, y = 3.5 and z = -99.6'


