const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const names = data.employees
    .find((name) => employeeName === name.firstName || employeeName === name.lastName);
  if (!names) {
    return {};
  } return names;
};

console.log(getEmployeeByName('Bethea'));

module.exports = getEmployeeByName;
