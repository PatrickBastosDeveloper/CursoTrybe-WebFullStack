const axios = require('axios');

// const getPokemonById = async (id) => {
//     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
//     return response.data;
// }

const getPokemonById = (id) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

async function main() {

    // for (let i = 1; i <= 10; i++) {
    //     const r = await getPokemonById(i);
    //     console.log(`PokeNome: ${r.name}`);
    // }

    const promises = [];
    for (let i = 1; i <= 50; i++) {
        promises.push(getPokemonById(i));
    }

    // const pokemons = await Promise.all(promises);
    // pokemons.forEach(pokemon => {
    //     console.log(`Pokenome: ${pokemon.data.name}`);
    // });

    const pokemons = await Promise.allSettled(promises);
    pokemons
        .filter(response => response.status == "fulfilled") // filtrar apenas o que deu sucesso
        .map(response => response.value.data) // pegar apenas o resultado trazido pela API
        .forEach((pokemon, i) => {
            console.log(`${i} Pokenome: ${pokemon.name}`); // Note o número do i, se bate com  80 do laço da linha 20
        });

}

main();

//
