// SOMAR VALORES e GUARDAR
const numbers = [2, 3, 4, 6, 8, 12, 24];

// com FOR

let acumulador = 0;
for(let i=0; i< numbers.length ;i+=1){
  acumulador = acumulador + numbers[i];
}
console.log('somaTotal: ', acumulador)



// com hof REDUCE()
  // Assim como o map() pode retornar qualquer coisa
  // Possui um parametro que guarda a informação passada para ele no loop anterior.
  // No retorno externo retorno uma única informação (objeto, array, number, string)
const soma = numbers.reduce( (acumulator,item) => acumulator + item , 5)
console.log('soma: ', soma)


// com hofs FILTER() E REDUCE()
const somaFiltrados = numbers
  .filter( (item) => item < 8 )
  .reduce((acumulator,item) => acumulator + item )

console.log('somaFiltrados: ', somaFiltrados)