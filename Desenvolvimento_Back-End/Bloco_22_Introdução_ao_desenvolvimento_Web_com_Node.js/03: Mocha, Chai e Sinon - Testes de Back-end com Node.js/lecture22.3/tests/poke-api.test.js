const { expect } = require('chai');
const axios = require('axios');
const sinon = require('sinon');
const { requestAPI } = require('../poke-api');

//const pokesNamesExpected = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander'];

describe('Chama a função "requestAPI"', () => { // Mocha

    before(() => {
        sinon.stub(axios, 'get')
        .onFirstCall().resolves({ data: { name: 'bulbasaur', abilities: [{ ability: { name: 'overgrow' } }] }})
        .onSecondCall().resolves({ data: { name: 'ivysaur', abilities: [{ ability: { name: 'overgrow' } }] }})
        .onThirdCall().resolves({ data: { name: 'venusaur', abilities: [{ ability: { name: 'overgrow' } }] }})
        .resolves({ data: { name: 'charmander', abilities: [{ ability: { name: 'overgrow' } }] }});
    })

    describe('quando API é traz sucesso', () => {

        it('Retorna X pokemons', async () => {

            const qtd = 4;
            const pokes = await requestAPI(qtd);
            expect(pokes).to.be.an('array');
            expect(pokes.length).to.be.equal(qtd);

            for (let i = 0; i < qtd; i++) {
                expect(pokes[i]).to.has.property('status');
                expect(pokes[i].status).to.be.equal('fulfilled');
                expect(pokes[i]).to.has.property('value');
                expect(pokes[i].value).to.has.property('data');
                expect(pokes[i].value.data).to.has.property('name');
                expect(pokes[i].value.data).to.has.property('abilities');

                expect(pokes[i].value.data.abilities).to.be.an('array');
                expect(pokes[i].value.data.abilities[0]).to.has.property('ability');
                expect(pokes[i].value.data.abilities[0].ability).to.has.property('name');
                expect(pokes[i].value.data.abilities[0].ability.name).to.be.equal('overgrow');

            }


        })
    })

});