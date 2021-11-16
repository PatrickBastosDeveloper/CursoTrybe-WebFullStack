
// FUNÇÃO SIMPLES
let valor1 = 1000;

function teste( param ){
    console.log("oi");
}

let arrSalario = [1000,500,2000]

function calculaIPRF(salario,base){
    let resultado = (salario / base) * salario;
    return resultado
}


let recebeCalculo1 = calculaIPRF(arrSalario[0] , 3 )
let recebeCalculo2 = calculaIPRF(arrSalario[1],5)
let recebeCalculo3 = calculaIPRF(arrSalario[2],8)


for(i = 0 ; i<5;i++){
    calculaIPRF(arrSalario[i],8)
}


console.log('calculo IPRF:',  recebeCalculo1);
console.log('calculo IPRF:',  recebeCalculo2);
console.log('calculo IPRF:',  recebeCalculo2);

// FUNCAO C/ PARAMETRO

// FUNCAO C/ PARAMETRO E RETORNO

// EXERCÍCIO LOTERIA
//DOC: https://www.w3schools.com/js/js_math.asp


// EXERCÍCIO LOTERIA REFATORADO C/ FUNÇÃO
