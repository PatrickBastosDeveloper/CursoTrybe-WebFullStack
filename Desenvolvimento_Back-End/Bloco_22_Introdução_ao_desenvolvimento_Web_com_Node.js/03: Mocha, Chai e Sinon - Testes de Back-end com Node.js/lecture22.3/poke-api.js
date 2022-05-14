const axios = require('axios');

const getPokemonById = (id) => {
    return axios.get(`https://pokeapiss.co/api/v2/pokemon/${id}`);
}

const requestAPI = async (qtd) => {
    const promises = [];
    for (let i = 1; i <= qtd; i++) {
        promises.push(getPokemonById(i));
    }
    const pokemons = await Promise.allSettled(promises);
    return pokemons
        .filter(response => response.status == "fulfilled")
}

module.exports = {
    requestAPI
}