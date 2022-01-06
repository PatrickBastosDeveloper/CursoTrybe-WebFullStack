// crie um novo array somente com o primeiro nome de cada usuario
const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];



/* COM HOF MAP()
  - Não modifica o array original
  - Itera todos os itens do array (possbilitando mudar o conteudo de cada item)
  - Constrói um novo array com base no conteudo de retorno de cada chamada. (Voce pode retornar qualquer coisa)
*/
//const newArr =  users.map( (item) => item.firstName );

const newArr =  users.map( 
  (item) => {
      if(item.isDriver === true){
        return "oi"
      }else{
        return item.lastName
      }
  }
).filter().forEach(()=>{
  
})



console.log('newArr:', newArr)






// SIMULAÇÃO MANUAL
const firstNames = [];
for(let i=0;i<users.length;i+=1){
  firstNames.push(users[i].firstName)
}
console.log('newArr:', firstNames)


