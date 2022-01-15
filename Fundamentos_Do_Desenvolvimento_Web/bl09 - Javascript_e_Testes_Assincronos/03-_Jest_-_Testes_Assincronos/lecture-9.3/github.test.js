const fetchSimulator = require('./fetchSimulator')
const github = require('./github')
fetchSimulator(github, 'getGitHubUserInfos');

const {getGitHubUserInfos,getUserReposUrl} = require('./github');


describe('Testando github API', () => {
  let resultado
  const dadosRetornados = {
      name: 'Murilo Flesch',
      company: '@betrybe',
      twitter: undefined,
      bio: 'Frontend developer apaixonado por educação e tecnologia.',
      location: 'Porto Alegre'
  }
  
  beforeEach( async ()=>{
        resultado = await getGitHubUserInfos('muriloflesch');
  } )

  it('deve retornar um objeto contendo nome, company, twitter, bio, location',  () => {
     //expect.assertions(2)
     //const resultado = await getGitHubUserInfos('muriloflesch');
       expect(resultado).toEqual(dadosRetornados);
     //expect(resultado.name).toBe('Murilo Flesch');
  });

  it('com usuário \'muriloflesch\', deve retornar os dados desse usuário',  () => {
    //const resultado = await getGitHubUserInfos('muriloflesch');
     expect(resultado.name).toBe('Murilo Flesch');
  });
});