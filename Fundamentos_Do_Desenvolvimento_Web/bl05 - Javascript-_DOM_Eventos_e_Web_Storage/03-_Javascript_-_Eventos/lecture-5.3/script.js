// EVENTO DE CARREGAMENTO DE TODOS OS ELMENTOS DA PÁGINA
// 1
/* window.addEventListener( 'load' , fullPageLoaded )
function fullPageLoaded(e){
   // console.log('carregado!: ');
}; */
// 2
/* window.onload = function(){ 
    console.log('carregado!');
} */
// 3
/* window.onload = fullPageLoaded;

function fullPageLoaded(){
    console.log('carregado!');
} */

// EVENTO DE CARREGAMENTO DO DOM
/* document.addEventListener( 'DOMContentLoaded' , onDOMLoaded )
function onDOMLoaded(e){
   // console.log('DOM carregado!: ');
}; */


// EVENTO DE CLICK (c/ todos os outros + direto na tag)

/* let bt = document.querySelector('.hey');

bt.addEventListener( 'click' ,  onClicked)
function onClicked(e){
    //console.log('clicou: ', e)
} */

// GERAR NÚMEROS ALEATÓRIOS
//let n = 20 + Math.round( Math.random() * 60 );
//console.log(n)
// CONVERTER STRINGS EM NUMEROS SEM OUTROS CARACTERES
//let width = '500px';
//console.log('converter string em number: ', parseInt(width))

// LARGURA DA JANELA DO BROWSER

//console.log('inner: ', window.innerWidth);
//console.log('outer: ', window.outerWidth);

// EXERCICIO DE CORRIDA

let bt = document.querySelector('.hey');
let car1 = document.querySelector('.car1');
let car2 = document.querySelector('.car2');
let carPai = document.querySelector('.car-section');

let clicked = false;
//car1.addEventListener('click', yourCar);
//car2.addEventListener('click', yourCar);
carPai.addEventListener('click', yourCar);

function yourCar(e){
    // TARGET = FILHO ATUAL SENDO CLICADO
    console.log('e.target: ', e.target);
    // CURRENTTARGET -> SEMPRE SERÁ O ELEMENT QUE CRIOU O EVENTO (QUE VEM ANTES DE addEventListener)
    console.log('e.currentTarget: ', e.currentTarget);

    // se somente o pai for selecionado não coloque uma borda preta em volta do pai
    if(e.target == e.currentTarget ){
        // um retorno vazio dentro de uma função tem um comportamento semelhante ao break dentro do FOR
        return;
    }
    // comente a linha 65 até 69 para entender melhor o target e o currentTarget
     if(clicked == false){
        e.target.style.border = 'solid 20px black';
        clicked = true;
    }
}

car1.style.marginLeft = '3px';
car2.style.marginLeft = '3px';

// OBS: Essa maneira declarar funções precisa vir antes de se chamada no código
let startRace2 = function(e){
    startRace(e,'passando um texto como segunda param..');
}
bt.addEventListener('click', startRace2);

function startRace(e,e2){
    console.log('pegar param 2: ', e2 );

    if(clicked == true){

        let currentPos = car1.style.marginLeft;
        let random1 =( Math.random() * 20  )
        console.log(random1)
        let newPos = parseInt(currentPos) + random1;

        let currentPos2 = car2.style.marginLeft;
        let random2 =( Math.random() * 20  )
        console.log(random2)
        let newPos2 = parseInt(currentPos2) + random2 ;

        car1.style.marginLeft = newPos + 'px';
        car2.style.marginLeft = newPos2 + 'px';

        if(newPos > window.innerWidth){
            console.log('carro 1 ganhou')
        }
        if(newPos2 > window.innerWidth){
            console.log('carro 2 ganhou')
        }
    }
    //console.log(currentPos);
    //car2.style.marginLeft = '300px';
}
