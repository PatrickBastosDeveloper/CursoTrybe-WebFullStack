/* Faça um programa que retorne o maior de três números. 
Defina no começo do programa três constantes com os valores que serão comparados. */

// const numero1 = 159
// const numero2 = 200
// const numero3 = 350

// if (numero1 > numero2 && numero1 > numero3){
//     console.log(numero1);
// } else if (numero2 > numero1 && numero2 > numero3){
//     console.log(numero2);
// }else {
//     console.log(numero3);
// }


const n1 = 10
const n2 = 5
const n3 = 3

if(n1 > n2 && n1 > n3){
    console.log("O maior número é " + n1);
}else if(n2 > n1 && n2 > n3){
    console.log ("O maior número é " + n2);
}else{
    console.log("O maior número é " + n3)
}