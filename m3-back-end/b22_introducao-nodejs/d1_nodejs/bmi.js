const { questionFloat } = require('readline-sync');

const weight = questionFloat('What\'s your weight? (kg)\n');
const height = questionFloat('What\'s your height? (m)\n');

console.log(weight / height ^ 2);
