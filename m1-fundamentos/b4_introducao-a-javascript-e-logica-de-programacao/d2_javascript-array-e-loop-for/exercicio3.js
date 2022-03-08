let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (const num of numbers) {
    sum += num
}

console.log(sum / (numbers.length - 1))