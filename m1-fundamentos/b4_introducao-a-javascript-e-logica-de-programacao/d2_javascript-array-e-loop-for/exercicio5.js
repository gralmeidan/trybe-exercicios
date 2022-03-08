let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let x = 0;

for (const num of numbers) {
    if (num > x) x = num
}

console.log(x)