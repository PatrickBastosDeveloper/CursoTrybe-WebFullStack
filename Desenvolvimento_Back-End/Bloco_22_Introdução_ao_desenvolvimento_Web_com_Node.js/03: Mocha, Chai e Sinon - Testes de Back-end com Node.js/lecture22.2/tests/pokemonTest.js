const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

// Nossa suite de teste relacionada a pokemons
describe('Pokemon', () => {

    describe('/GET/:id pokemon', () => {
        it('GET em Pokemon por ID', (done) => {
            let id_ = "1";
            chai.request('https://pokeapi.co/api/v2')
                .get('/pokemon/' + id_)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('abilities');
                    res.body.should.be.a('object');
                    done();
                });

        });
    });

})