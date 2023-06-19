const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { species } = data;

// Requisito realizado com ajuda da mentoria

const exibindoEspecies = (day) => species.filter((specie) => specie
  .availability.includes(day)).map(({ name }) => name);

const getAvailableHours = () => {
  const hora = Object.keys(hours).reduce((acc, cur) => {
    if (cur === 'Monday') {
      acc[cur] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
      return acc;
    }
    acc[cur] = {
      officeHour: `Open from ${hours[cur].open}am until ${hours[cur].close}pm`,
      exhibition: exibindoEspecies(cur),
    };
    return acc;
  }, {});
  return hora;
};
const getSchedule = (scheduleTarget) => {
  const animal = species.find(({ name }) => name === scheduleTarget);
  if (animal) {
    return animal.availability;
  }
  const diaDaSemana = Object.keys(hours).find((day) => day === scheduleTarget);
  if (diaDaSemana) {
    return { [scheduleTarget]: getAvailableHours()[scheduleTarget] };
  }
  return getAvailableHours();
};
console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
