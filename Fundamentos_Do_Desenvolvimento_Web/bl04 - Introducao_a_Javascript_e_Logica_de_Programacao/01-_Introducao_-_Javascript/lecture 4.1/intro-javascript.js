
/////////////////////////////////////////////
// VARIÁVEIS ////////////////////////////////
let nome = "Murilo";  // string
let sobreNome = "Flesch"
let idade = 35;
let gaucho = true; // boolean // dado lógico



/////////////////////////////////////////////
// SAÍDA DE DADOS  //////////////////////////
nome = "Eduardo";

//console.log( "Oi! " + nome + " " + sobreNome)

/////////////////////////////////////////////
// CONSTANTES  //////////////////////////////
const fruta = "laranja";
//fruta = "maça";
//console.log('fruta: ', fruta)

/////////////////////////////////////////////
// OPERADORES ARITMÉTICOS //////////////////

// Soma
let num1 = 5;
let num2 = 10;
//let resultado = num1 + num2;


//console.log(resultado)
//console.log(2 + 2)
// Subtração
//console.log(2 - 2)
// Divisão
//console.log(2 / 2)
// Multiplicação
//console.log(2 * 2)


/////////////////////////////////////////////
// OPERADORES RELACIONAIS E LÓGICOS  (COMPARAÇÕES) ///////



// RELACIONAIS
let comparacao = 2 === "2";   //  > < == != >=  <= ===
//console.log(comparacao)

// LOGICOS
comparacao = (2 === "2") ||  (2 > 5);   //  ||  &&
//console.log(comparacao)


/////////////////////////////////////////////
// CONDICIONAIS /////////////////////////////

// if  
let numero1 = 10;
let numero2 = 10;

let resultado;

if(numero1 == numero2){
   resultado = numero1 + numero2;
}else{
   resultado = numero1 * numero2;
}


let fruta2 = "Maça"



if(fruta2 == "Maça"){
    console.log('é maça')
}else if (fruta2 != "Laranja"){
    console.log('é Laranja')
}else if(fruta2 == "Pera"){
    console.log('é Pera')
}

//console.log("resultado --->", resultado)
// Switch
let weekDay = 3;

switch (weekDay) {
    case 1:
        console.log('domingo')
        break;
    case 2:
        console.log('segunda')
        break;     
    case 3:
        console.log('terca')
        break;
    case 4:
        console.log('quarta')
        break; 
    default:
        console.log('n existe o dia da semana')
        break;
}




/////////////////////////////////////////////////////////////
// LOOPS (repetir varias vezes o mesmo código) /////////////
let r = 0;
let r2 = 0;
for (  index = 0  ;  index < 20 ;  index++    ) {
    r += index; 
    r2 += 1;
}

console.log('resultado: ',  r)
console.log('resultado: ',  r2)