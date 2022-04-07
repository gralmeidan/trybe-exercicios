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

// console.log(sorteio(3, checkStrictEquality))
// Requisito 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswer = (x, y) => {
  if (x === 'N.A' || y === 'N.A') return 0;
  return x === y ? 1 : -0.5;
};

Array.prototype.countEqualTo = function (arr, areEqual) {
  let count = 0.0;
  this.forEach((value, i) => (count += areEqual(value, arr[i])));
  return count;
};

console.log(
  `Nota final: ${RIGHT_ANSWERS.countEqualTo(STUDENT_ANSWERS, checkAnswer)}`
);
