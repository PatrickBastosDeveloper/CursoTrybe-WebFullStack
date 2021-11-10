let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo 
//todos os valores nele contidos com a função console.log() ;

// for(let itensNumbers of numbers){
//     console.log(itensNumbers);
// }

//ou

//console.log(numbers)

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let soma;
for(let index = 0; index < numbers.length; index += 1){
      
    let soma =+ numbers[index];
    console.log(soma);
}
