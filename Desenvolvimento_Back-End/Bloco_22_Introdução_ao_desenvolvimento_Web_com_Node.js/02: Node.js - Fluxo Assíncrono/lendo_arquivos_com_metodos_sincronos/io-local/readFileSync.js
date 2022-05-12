const fs = require('fs');// Importar o módulo fs 

const nomeDoArquivo = 'lendo_arquivos_sincronos.txt';

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8'); // Chamar o método fs.readFileSync.
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}

/* Método fs.readFileSync
Esse método é responsável por ler arquivos e trazer seu conteúdo 
para dentro do Node.js. Por ser síncrono, ele espera a leitura do 
arquivo terminar para, só então, atribuir o resultado à constante data. */