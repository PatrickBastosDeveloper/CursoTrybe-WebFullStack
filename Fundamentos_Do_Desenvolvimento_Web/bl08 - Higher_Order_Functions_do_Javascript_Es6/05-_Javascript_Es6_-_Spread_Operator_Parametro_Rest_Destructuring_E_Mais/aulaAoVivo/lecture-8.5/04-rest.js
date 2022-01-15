// Saídas esperadas:
// sumAll([1, 2]) ==============> 3
// sumAll([1, 2, 3]) ===========> 6
// sumAll([1, 2, 3, 4, 5]) =====> 15

const sumAll = (...values) => {
  return values.reduce( (acc,current)=>{
    return acc = acc + current;
  } )
};

console.log(    sumAll( 1, 2,6,8,9,2 )        );


//console.log( sumAll([1, 2, 3]) );
//console.log( sumAll([1, 2, 4]) ); 

// Como fazer uma função que tenha a quantidade de parâmetros recebidos de forma variável?

