const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const menor18 = entrants.filter(({ age }) => age < 18);
  const maior18EMenor50 = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const maior50 = entrants.filter(({ age }) => age >= 50);
  return {
    adult: maior18EMenor50,
    child: menor18.length,
    senior: maior50.length,
  };
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants === []) return 0;
  const adult = countEntrants(entrants).adult * data.prices.adult;
  const child = countEntrants(entrants).child * data.prices.child;
  const senior = countEntrants(entrants).senior * data.prices.senior;
  return adult + child + senior;
};

module.exports = { calculateEntry, countEntrants };
