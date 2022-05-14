const readline = require('readline-sync');
const sinon = require('sinon');
const { expect } = require('chai');
const calculaArea = require('../calculaArea');

describe('quando o valor informado for maior ou igual a zero', () => {
    before(() => {
        /**
         * Criamos um stub para o método `questionInt`
         * forçamos o método a responder sempre com o valor `10`
         * sem de fato solicitar esse valor no terminal
         */
        sinon.stub(readline, 'questionInt')
            .returns(10);
    })

    after(() => {
        /**
         * Restauramos o stub ao final do caso de teste
         */
        readline.questionInt.restore();
    })
    describe('a resposta', () => {
        it('é um "number"', () => {
            const resposta = calculaArea();

            expect(resposta).to.be.a('number');
        })

        /**
         * Vamos forçar um cenário específico
         * nesse caso simularemos o caso onde é passado o valor do lado = 10
         */
        it('é igual a "100" quando o lado for "10"', () => {
            const resposta = calculaArea();

            expect(resposta).to.be.equals(100);
        })
    })
})

describe('quando o valor informado for negativo', () => {
    before(() => {
        sinon.stub(readline, 'questionInt')
            .returns(-4);
    })

    after(() => {
        readline.questionInt.restore();
    })

    it('Deve estourar um erro com a mensagem "Valor inválido"', () => {
        expect(calculaArea).to.throw('Valor inválido');
        /* A linha abaixo é uma outra forma de chamar a função caso precise passar parâmetros. */
        // expect(() => calculaArea()).to.throw('Valor inválido');

    })
})