/* 
Desenvolvendo com TDD:
1-Receberá um parâmetro com o nome do arquivo a ser lido. 
Esse arquivo deverá estar na pasta io-files;
2-Caso o arquivo solicitado exista, responderá uma string com o conteúdo do arquivo;
3-Caso o arquivo solicitado não exista, deverá responder null. 
*/

// const { expect } = require('chai');

// const leArquivo = require('./lerArquivo');

// const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

// describe('leArquivo', () => {
//   describe('Quando o arquivo existe', () => {
//     describe('a resposta', () => {
//       const resposta = leArquivo('arquivo.txt');

//       it('é uma string', () => {
//         expect(resposta).to.be.a('string');
//       });

//       it('é igual ao conteúdo do arquivo', () => {
//         expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
//       });
//     });
//   });

//   describe('Quando o arquivo não existe', () => {
//     it('a resposta é igual a "null"', () => {
//       const resposta = leArquivo('arquivo_que_nao_existe.txt');

//       expect(resposta).to.be.equal(null);
//     });
//   });
// } );

/* Aqui utilizamos uma nova asserção do chai, o a, que validará o "tipo" daquele retorno. Como se tivéssemos escrito: "espera a resposta ser uma string" (ou expect response to be a string). */