
/* Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula. */

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  //escreva seu codigo aqui:
  return names.reduce((counter, name) => {
    const aCounter = name.match(/a/gi).length;
    return counter + aCounter;
  }, 0);
;}