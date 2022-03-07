const x = 3
const y = 7
const z = 5

const isEven = value => {
    return value % 2 == 0
}

console.log(isEven(x) || isEven(y) || isEven(z))