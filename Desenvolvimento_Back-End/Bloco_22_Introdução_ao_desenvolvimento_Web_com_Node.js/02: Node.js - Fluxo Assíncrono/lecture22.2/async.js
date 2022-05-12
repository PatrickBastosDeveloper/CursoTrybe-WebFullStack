const axios = require('axios');

const getPokemonById = async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return response.data;
}

async function main() {
  const pokemon = await getPokemonById(1);

  console.log(`Pokemon: ${pokemon.name}`);
}

main();