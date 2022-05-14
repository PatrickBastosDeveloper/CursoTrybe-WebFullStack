const { requestAPI } = require('./poke-api');

async function main() {

    const pokemons = await requestAPI(5);
    pokemons
        .map(response => response.value.data) // pegar apenas o resultado trazido pela API
        .forEach((pokemon, i) => {
            console.log(`${i} Pokenome: ${pokemon.name}`); // Note o número do i, se bate com  80 do laço da linha 20
        });

}

main();