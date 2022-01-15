const pokemonName = 'ditto'

/* const data = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)).json()
  .then((response) =>  response.json())
  .then((data) => document.body.innerHTML += data.weight); */


async function addPokemonWeight(){
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  const data = await response.json();

  document.body.innerHTML += data.weight;
  init()
  console.log('meu data: ', data)
}

function init(){

}

addPokemonWeight();






document.body.innerHTML += 'Meu texto sincrono';





// COM ASYNC AWAIT
