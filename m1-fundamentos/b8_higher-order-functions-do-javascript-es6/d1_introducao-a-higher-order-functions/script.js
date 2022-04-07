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

const checkStrictEquality = (x, y) => x === y;

const sorteio = (num, areEqual) => {
  const result = Math.floor(Math.random() * 5) + 1;
  return areEqual(result, num) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(sorteio(3, checkStrictEquality))