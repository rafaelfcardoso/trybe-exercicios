const fs = require('fs').promises;

function readAll() {
  fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => {
      //Converter o conteúdo do arquivo de JSON para um Array utilizando `JSON.parse`
      const simpsons = JSON.parse(fileContent); 

      //- Mapear cada objeto do Array para uma string no formato correto
      const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

      // - Exibir as strings na tela
      strings.forEach((string) => console.log(string));
    });
}

// A função main é apenas para termos um ponto de entrada centralizado para o nosso script
function main() {
  readAll();
}

main();