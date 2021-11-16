//Uma padaria acaba de juntar um dinheirinho a mais e quer comprar um robô para otimizar uma tarefa, para isso, contrataram você, pessoa estudante da Trybe para poder ajudar a criar esse algoritmo. Bora ?


// Crie a tela do login. Obs: Pensando que temos um lugar que salva dados e que a senha validada tem que bater com ‘1234’ e exibirá a mensagem “Acesso permitido” e caso contrário “Acesso negado”.


//Onde salvo dados no Javascript ?
//Como eu faço essa verificação ?
// Como exibo uma mensagem?

let userName = "Caról Sìlva";
let userPassword = 1234;
let acess = false;

// if(userName === "Caról Sìlva" && userPassword === 1234){
//   console.log("Acesso permitido");
//   acess = true;
// }else{
//   console.log("Acesso negado");
//   acess = false;
// }

// Faça um programa que com determinada quantidade, adicione paẽs há uma sacola e exiba quantos pães  foram adicionados um por um se o acesso for permitido.Se não permitido o acesso, não é possível acessar essa página

//Como eu sei que o acesso ta permitido ?
// se tiver permitido, exibe os pães na sacola
// se não, mensagem de erro

// const quantidadeParaAdicionar = 5;
// let sacola;

// if(acess === true){
//   // eu adiciono a quantidade uma por uma na sacola
//   // como eu vou adicionar uma por uam na sacola ?
//   for(let index = 0; index <= quantidadeParaAdicionar; index += 1){
//     sacola = index;
//     // console.log("Existe"+ index+ "pão na sacola");
//     if(sacola === 0){
//       console.log("Não existe nenhum pão na sacola");
//     }else if (sacola === 1){
//       console.log("Existe "+ index+ " pão na sacola");
//     }else{
//       console.log("Existe "+ index+ " paẽs na sacola");
//     }
//   }
// }else {
//   console.log("Acesso negado");
// }


















// Agora a padaria evoluiu e comprou outro robô, esse robô é o responsável para ser o chef que faz os lanches, crie a primeira receita do robô:

// Criar x-queijão
// Ingredientes do Xqueijão: Pão, 10 pedaços de queijos, Pão, 10 pedaços de queijo e fecha com pão de fechamento.

// pão
// queijo
// queijo
// queijo
// queijo 

for(let index = 0; index < 2; index += 1){
  console.log("Adiciona Pão");
  for(let indexQueijo = 0; indexQueijo <= 10; indexQueijo += 1){
    console.log("Adiciona queijo");
  }
}
console.log("Adiciona pão de fechamento");







//Bônus

// E se a pessoa tiver pedir algum lanche e tiver alergia a bacon ? Como podemos fazer ?
// Utilize o seguinte array: let xTrybe = ["pão", "queijo", "bacon", "alface", "ketchup", "pão"];



//E se a pessoa tiver pedir algum lanche e tiver alergia a bacon ? Como podemos fazer ?
//Utilize o lanche xTrybe, já criado
// let xTrybe = ["pão", "queijo", "bacon", "alface", "ketchup", "pão"];


//Alinhamento

// Enquete
// Amanhã tem monitoria exclusiva projetos
