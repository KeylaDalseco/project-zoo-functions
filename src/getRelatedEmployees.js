const data = require('../data/zoo_data');

// 1 - verifica se a pessoa é gerente/managers pelo id (acessar o valor do array para ver se tem algo .legth === 0)
// 2 - se for, retorna true, senão false

const { employees } = data;

const isManager = (id) => {
  let manager = false;
  employees.forEach((employee) => {
    if (employee.managers.some((managerIds) => managerIds === id)) {
      manager = true;
    }
  });
  return manager;
};

console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

// aqui vc deve retornar todas as pessoas que são gerente da pessoa ex: quando recebe a stephanieId retorna quem são os gerentes dela

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const gerentes = employees.filter((managerIds) => managerIds.managers
      .some((managerIdss) => managerId === managerIdss));
    const resultado = gerentes.map((gerente) => `${gerente.firstName} ${gerente.lastName}`);
    return resultado;
  }
};

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
