const axios = require('axios');

const getPokemonById = async (id) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

        return response.data;
    } catch (err) {
        console.error(err.message);

        return {}
    }
}
async function main() {
    const promises = []
    for (let i = 0; i <= 50; i++) {
        const promise = getPokemonById(i);
        promises.push(promise);
    }

    pokemons = await Promise.all(promises);
    pokemons.forEach(
        pokemon => console.log(`Pokemon: ${pokemon.name}`)
    );
}

main();