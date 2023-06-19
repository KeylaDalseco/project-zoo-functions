const data = require('../data/zoo_data');

const { species } = data;

// // outra forma de acessar com o reduce:
// const newObject = species.reduce((acc, animals) => {
//   acc[animals.name] = animals.residents.length;
//   return acc;
// }, {});
// console.log(newObject);

const animalsList = () => {
  const chaves = {};
  species.forEach((element) => {
    chaves[element.name] = element.residents.length;
  });
  return chaves;
};

const countAnimals = (animal) => {
  if (!animal) {
    return animalsList();
  }
  const comparaNome = species.find((specie) => specie.name === animal.species).residents;
  const sexLength = comparaNome.filter((sexo) => sexo.sex === animal.sex).length;
  if (!animal.sex) {
    return comparaNome.length;
  }
  return sexLength;
};

console.log(countAnimals({ species: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
