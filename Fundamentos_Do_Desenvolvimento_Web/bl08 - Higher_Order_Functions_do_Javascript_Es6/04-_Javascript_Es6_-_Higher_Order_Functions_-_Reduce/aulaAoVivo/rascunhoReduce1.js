// Somar valores e guardar
const numbers = [2, 3, 4, 6, 8, 12, 24];

// Com for:

let acumulador = 0;

for (let i = 0; i < numbers.length; i+=1) {
    acumulador = acumulador + numbers[i];    
};

console.log('somaTotal: ', acumulador);

// com HOF Reduce()

// Sintaxe
// array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial])) 

const soma = numbers.reduce((acumulator, item)=>{ return acumulator + item })
console.log(soma);

// com HOFs Filter() e Reduce()
const somaFIltrados = numbers
.filter((item) => item < 8)
.reduce(acumulator,item) => acumulator