const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const nameAnimal = data.species.find((specie) => specie.name === animal);
  const ageAnimal = nameAnimal.residents.every((animals) => animals.age >= age);
  return ageAnimal;
};

getAnimalsOlderThan('penguins', 10);

module.exports = getAnimalsOlderThan;
