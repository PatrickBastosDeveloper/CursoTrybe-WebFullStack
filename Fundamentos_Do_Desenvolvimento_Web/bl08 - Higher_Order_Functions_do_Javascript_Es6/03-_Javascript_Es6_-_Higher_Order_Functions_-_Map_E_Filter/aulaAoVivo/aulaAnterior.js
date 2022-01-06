/* ////////////////// forEach //////////
    ->  Itera valores do array sem retornar nada
    -> vai ate o final
    -> (c,i,a)
    -> (c)  Não modifica o original
    -> (a)  Modifica o original
*/

const fruits = ["apple", "orange", "cherry"];

fruits.forEach(
    function(currentValue, index, arr){
        return true;
    }
);
console.log('fruits: ', fruits)

//fruits.forEach(separada);
//fruits.forEach((currentValue, index, arr) => true );
//fruits.forEach(c => true );

/* function separada(currentValue, index, arr){
    return true;
}
*/


/* //////////////////// find /////////
    ->  Vai até onde a função retornar um valor  TRUE
    ->  Find retorna o valor atual da iteração no momento que o retorno foi TRUE.
    ->  params (c,i,a)
*/

const ages = [3, 10, 18, 20];

const find = ages.find(age => age > 18);
console.log('find: ', find)


/* //////////////////// some /////////
    -> Vai até onde a função retornar um valor  TRUE
    -> Some: Retorna TRUE caso exista algum retorno positivo e FALSE se não houver nenhum.
    -> Params (c,i,a)
*/
const ages = [3, 10, 18, 20];
const some = ages.some(age => age > 18);
console.log('some: ', some)



/* //////////////////// every ///////
    -> Precisa que a função retorne um valor TRUE em todas iterações.
    -> se positivo EVERY retorna TRUE caso contrário FALSE
    -> params (c,i,a)
*/
const ages = [3, 10, 18, 20];
ages.every(checkAge)
function checkAge(age) {
  return age > 18;
}



/* //////////////////// sort ///////
    -> Reordena o conteúdo do array original baseando-se no valor de retorno da função. 
    --> Esse valor de retorno é gerado baseado em 3 possibilidade de retorno (negativo, positivo, zero) e devem ser utilizados os 2 parâmetros fornecidos para gerar uma dessas 3 respostas.
    --> Alem de modificar o array de origem ele tbm retorna um novo array
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.sort();
const itens = fruits.sort((a, b) => a - b)
console.log(fruits)
console.log('itens: ', itens)