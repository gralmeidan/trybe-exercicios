function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function encode(str) {
  return str.replace(
    /(a|e|i|o|u)/g,
    (match) => ['a', 'e', 'i', 'o', 'u'].indexOf(match) + 1
  );
}
function decode(str) {
  return str.replace(
    /(1|2|3|4|5)/g,
    (match) => ['a', 'e', 'i', 'o', 'u'][match - 1]
  );
}

function techList(arr, name) {
  let list = [];
  if (arr.length === 0) return 'Vazio!';
  for (const value of arr.sort()) {
    list.push({
      tech: value,
      name,
    });
  }
  return list;
}

function hydrate(str) {
  let sum = 0;
  for (const num of str.match(/\d/g)) {
    sum += parseInt(num);
  }
  return `${sum} copo${sum !== 1 ? 's' : ''} de água`;
}

// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  if (typeof id !== 'string' || typeof detail !== 'string') {
    throw new Error('Expected two strings as function parameters');
  }
  for (let i = 0; i < professionalBoard.length; i += 1) {
    if (professionalBoard[i].id === id) {
      return `${detail}: ${professionalBoard[i][detail]
        .toString()
        .replace(/,/g, ', ')}`;
    }
  }
  throw new Error('ID não identificada');
};

module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
  searchEmployee,
};
