function sum(valor1, valor2){
    return valor1 + valor2;
};

function subtraction(valor1, valor2){
    return valor1 + valor2;
};

function calculate(str, callback){
    let valor = parseInt(str) // parseInt pega todas as strings e deixa só número.
    
    console.log(callback(valor, valor));
};

calculate('100px', sum);
calculate('100px', subtraction);