function append(data) {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const divNome = document.createElement('div');
  const divImage = document.createElement('div');
  const img = document.createElement('img');

  divNome.innerHTML = data.name;
  img.src = data.imageUrl;
  divImage.appendChild(img);

  li.appendChild(divNome);
  li.appendChild(divImage);

  ul.appendChild(li);
}


async function fetchPokemon(pokemonName) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  const data = await response.json();

  const obj = {
    name: data.name,
    imageUrl: data.sprites.front_default
  }
  return obj
}

/* async function addPokemons() {
  console.log('meu retorno: ', await fetchPokemon('ditto'))
} */

async function addPokemons() {
    const dataPokemon = await fetchPokemon('ditto');
    const dataPokemon2 = await fetchPokemon('bulbasaur');

    append(dataPokemon);
    append(dataPokemon2);

 

  /* fetchPokemon('ditto').then( (data)=>{
      console.log('meu dado: ', data);
  } ) */
// console.log('meu retorno: ',  fetchPokemon('ditto'))
}

//addPokemons();

window.onload = addPokemons;
