É comum encontrar em JavaScript linhas de código que possuem comportamentos assíncronos. Você já conhece dois casos em que comportamentos assíncronos acontecem: callbacks e async/await . 
Para testar esses casos, o Jest fornece algumas soluções com o objetivo de que os testes aguardem o momento em que a função a ser testada for concluída e a informação necessária for retornada, para depois executar os testes. Isso evita que falsos positivos (teste passar quando deveria falhar) aconteçam e garante segurança para a aplicação.

Async/Await: para testar funções com async e await você deve utilizar a palavra-chave async na função passada para teste e await em algum retorno assíncrono que você está esperando, exatamente como você aprendeu em funções assíncronas com async/await .

async/await
Para aprender a realizar testes utilizando o async/await , você vai realizar uma requisição a API e testar o seu retorno em caso de sucesso e de falha.
Mas peraí, se eu vou realizar uma requisição para API para testar se ela está funcionando, o que acontece se ela estiver fora do ar?
Bem pensado! Ao fazer uma requisição para uma API, nós dependemos de diversos fatores externos ao nosso código, alguns exemplos são ter acesso a internet e o serviço da API funcionar... Então, tenha em mente que:
Você nunca deve testar uma requisição real para a API!
Imagine que você está utilizando uma API da previsão do tempo, no momento da criação do seu teste a previsão era de sol. No dia seguinte você vai dar continuidade para os testes, mas agora a API está retornando que a previsão é de chuva, ou seja, o teste passava enquanto a previsão era sol, quando passou a ser chuva, seu teste falhou. Além da falta de controle sobre o retorno de uma requisição, você também pode ter problemas como:
A URL da API estar incorreta.
Uma falha na conexão com a internet.
Uma instabilidade no servidor que gerencia a API.
Se nunca podemos testar nossa função com uma API real, então como podemos realizar os testes?
Lembra que ali em cima comentamos que o Jest nos oferece diversas ferramentas para testarmos nosso código? Uma dessas ferramentas é a simulação na execução da função, podendo definir o retorno que ela terá. Dessa forma, você consegue controlar diversos cenários, como sucesso e falha.
Não se preocupe em entender agora como essa simulação é criada, você vai aprender a criar essas simulações no módulo de Front-end, quando for trabalhar com testes em React. O objetivo do dia de hoje é entender como realizar testes em funções assíncronas.

Para acompanhar o dia, disponibilizamos um repositório com a simulação pronta para que você possa focar no conteúdo de hoje, que são testes assíncronos. Atente-se apenas ao arquivo fetchCharacter.js , que é responsável pela requisição e ao arquivo de teste fetchCharacter.test.js , que é o único arquivo a ser alterado.
