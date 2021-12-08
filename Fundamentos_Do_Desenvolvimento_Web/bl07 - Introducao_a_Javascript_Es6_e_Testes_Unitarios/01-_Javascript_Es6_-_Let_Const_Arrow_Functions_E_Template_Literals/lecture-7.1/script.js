////////////// CONSTANTES ////////////////////
//////////////////////////////////////////////

// com variaveis simples
//const nome = 'Murilo';
//nome = 'eduardo';

//console.log(nome)

/* let nome2 = 'Murilo'
nome2 = 'Eduardo';
console.log(nome2) */

// com OBJ
 /* const obj = {
    nome: 'Murilo',
    idade: 35
}
obj.nome = 'Eduardo';
console.log(obj);  */


// com ARRAY
/* const frutas = ['maça'];
frutas.push('pera');

console.log(frutas) */

// com FOR normal
/* for(const i = 0;i < 5; i++){

} */

// com FOR/OF
/* const frutas = ['maça','pera'];

for(const fruta of frutas ){
    console.log(fruta);
} 
 */

////////////// VARIAVEIS ////////////////////
//////////////////////////////////////////////

// HOISTING ------------
//com var
//nome = 'Murilo';
//var nome;
//console.log(nome);

// com let/const
//let nome = 'Murilo';
//console.log(nome);

// ESCOPO -------------
// var x let
/* 
var nome = 'Murilo';

function init(){
    var idade = 35;

    if(true){
        let cidade = "porto alegre";


    }
    for(let i = 0; i< 5 ;i++){

    }
    console.log(i);
}
init();  */

//console.log(idade)


////////////// ESCOPO / THIS /////////////////
//////////////////////////////////////////////

/* //document.addEventListener('DOMContentLoaded', init)
button.addEventListener('click',init);
//init();
function init(event){
    if(true){
        this.style.display = 'none';
        console.log('meu this: ', button);
        console.log('meu this: ', event.target);
        console.log('meu this: ', this);
    }
} */

////////////// ARROW FUNCTIONS //////////////////////
/////////////////////////////////////////////
/*
1) Ela é uma função anônima
2) Não precisamos utilizar a palavra chave function
3) Ela possui uma seta entre os parâmetros e o corpo da função
4) Pode ter um return implícito
5) Quando tenho uma única linha, não precisamos utilizar {}
6) Quando tivermos um único parâmetro podemos usar () ou não
7) Sem parâmetros = () ou _
*/

/* const init = (num) => {
    let nome = 'Murilo'
    return 2+num;
}

console.log(init(5));
console.log(nome); */

//let init = () => 2+2
//button.addEventListener('click',()=> 2+2);
//button.addEventListener('click',function(){});



//init();

// retorno normal


// retorno implicito




////////////// STRINGS //////////////////////
/////////////////////////////////////////////

let num1 = 5;
let num2 = 10;

let pessoa = `Minha idade é  ${num1 + num2} e moro na cidade de PORTO ALEGRE `;

console.log(pessoa)