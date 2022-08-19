const { questionFloat } = require('readline-sync');

const weight = questionFloat('What\'s your weight? (kg)\n');
const height = questionFloat('What\'s your height? (m)\n');

const bmi = weight / (height ^ 2);

if (bmi <= 18.5) {
  console.log('Abaixo do peso (magreza)');
} else if (bmi <= 24.9) {
  console.log('Peso normal');
} else if (bmi <= 29.9) {
  console.log('Acima do peso (sobrepeso)');
} else if (bmi <= 34.9) {
  console.log('Obesidade grau I');
} else if (bmi <= 39.9) {
  console.log('Obesidade grau II');
} else {
  console.log('Obesidade graus III e IV');
}
