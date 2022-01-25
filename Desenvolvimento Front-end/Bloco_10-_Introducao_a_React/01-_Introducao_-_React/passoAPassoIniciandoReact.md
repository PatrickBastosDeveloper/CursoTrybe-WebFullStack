Antes de iniciarmos o conteúdo vamos testar se temos o npm e o npx funcionando corretamente? Para isso, vamos criar uma pasta, em qualquer lugar, e vamos acessá-la através do terminal. Uma vez que estamos dentro da pasta, no terminal, vamos executar o comando abaixo:
Copiar
npx create-react-app testando-meu-computador
Em seguida acesse a pasta:
Copiar
cd testando-meu-computador
⚠️ Atenção ⚠️
Caso tenha ocorrido algum erro, verifique qual foi seu tipo de erro e siga algum dos passos a seguir, caso contrário pule essa parte e siga para a parte Continuando o teste .
Se seu problema foi com versionamento, siga para Instalando o nvm
Se seu problema é ao digitar npm start , em geral esse erro ocorre porque existe uma pasta node_modules no diretório pai. Verifique se no erro ele indica um caminho parecido com /home/minhaPastaPessoal/node_modules/babel-jest, acesse a minhaPastaPessoal, delete a node_modules, acesse a pasta testando-meu-computador e rode o comando npm start novamente.
Instalando o nvm
Atenção: Só realize esse passo se você teve algum problema de versionamento ao rodar o comando do passo anterior. Caso contrário siga para "Continuando o teste" .
Para instalar o nvm vamos seguir quatro passos (o segundo é muito importante, não deixe de fazer !)
Primeiro vamos rodar o comando abaixo no terminal.
Nota: Caso você utilize outro terminal que não seja o bash , troque, no comando, o bash pelo nome do terminal que está utilizando. Por exemplo, se você está usando o zsh , troque bash por zsh .
Copiar
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
Para ficar mais evidente vamos ver como rodar o comando no zsh também:
Copiar
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | zsh
Vamos fechar TODAS as abas abertas do terminal. Elas precisam ser fechadas para que o script do passo anterior seja carregado no terminal.
Agora vamos abrir novamente o terminal e rodar o comando abaixo. Esse comando retornará a versão do nvm que acabamos de instalar, como o da foto na sequência:
Copiar
nvm --version

Imagem que mostra a versão do nvm instalada
Caso apareça a mensagem listada abaixo, volte ao segundo passo e o faça corretamente, fechando todas as abas de terminal que estiverem abertas.
Copiar
bash: command not found: nvm
Por fim, após todos os procedimentos bem sucedidos, vamos rodar o último comando:
Copiar
nvm install --lts
Para evitar problemas com a versão do node nos exercícios e projetos, é recomendado sempre usar a versão LTS (long-term support) da runtime. O comando anterior instala a última versão LTS atual do node , que atualmente (13/01/2022) está na 16.13.2.
Para verificar qual versão do node que está sendo usada no momento, é só rodar o comando:
Copiar
node --version
Antes de seguir para a parte "Continuando o teste" , vamos rodar o comando abaixo, o mesmo que tinha dado erro antes, agora ele dará certo e poderemos prosseguir:
Copiar
npx create-react-app testando-meu-computador
Continuando o teste
Após o npx terminar de executar, ele nos mostra um mini tutorial, em que teremos uma explicação sobre os principais comandos, como na foto abaixo.

Imagem que demonstra os comandos básicos do npm para usar o create-react-app
Para finalizarmos os testes, vamos utilizar os comandos que estão sendo sugeridos no final do tutorial (certifique-se de que está dentro da pasta criada pelo comando npx ):
Copiar
$ npm start
Após o npm start terminar de carregar (pode demorar um pouco), ele irá abrir uma aba em seu navegador e você verá algo parecido com o exemplo abaixo, o que significa que tudo está funcionando corretamente.

