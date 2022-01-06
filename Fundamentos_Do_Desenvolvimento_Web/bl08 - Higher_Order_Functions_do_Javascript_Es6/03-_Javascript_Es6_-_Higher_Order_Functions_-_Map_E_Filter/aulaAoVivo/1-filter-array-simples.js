const numbers = [1, 2, 3, 4, 5];

// COM HOF FILTER
// Devolve um novo array com todos os itens que retornaram TRUE
const newArr = numbers.filter( (item) => { return item < 4  }   )
//const newArr = numbers.filter( item =>  item < 2  );
console.log('newArr: ', newArr);

// SIMUAÇÃO MANUAL
const newFilter = (arr) => {
    let addNumbers = [];
    for(let i=0; i< arr.length; i+=1){
        if(arr[i] < 4){
            addNumbers.push(arr[i])
        }
    }
   return addNumbers
}

const newArr2 = newFilter(numbers);
console.log('newArr2: ', newArr2);
