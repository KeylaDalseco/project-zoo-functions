const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const primeiroAnimalDoColaborador = data.employees
    .find((employer) => employer.id === id).responsibleFor[0];
  const animal = data.species.find((specie) => specie.id === primeiroAnimalDoColaborador).residents;
  const animalOrdenado = animal.sort((a, b) => b.age - a.age);
  return Object.values(animalOrdenado[0]);
};

console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = getOldestFromFirstSpecies;
