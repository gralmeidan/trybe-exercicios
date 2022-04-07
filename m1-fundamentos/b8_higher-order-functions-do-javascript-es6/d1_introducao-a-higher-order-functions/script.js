// Requisito 1

const newEmployee = (nomeCompleto) => ({
  nomeCompleto,
  email: `${nomeCompleto.toLowerCase().replace(' ', '_')}@trybe.com`,
});

const newEmployees = (constructor) => ({
  id1: constructor('Pedro Guerra'),
  id2: constructor('Luiza Drumond'),
  id3: constructor('Carla Paiva'),
});

// console.log(newEmployees(newEmployee));
// Requisito 2
