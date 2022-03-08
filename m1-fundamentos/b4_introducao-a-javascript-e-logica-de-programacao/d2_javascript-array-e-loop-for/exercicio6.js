let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let x = 0;

for (const num of numbers) {
    if (num %2 != 0) x ++
}

if(x == 0) console.log('não há números ímpares')
console.log(x + ' números ímpares')