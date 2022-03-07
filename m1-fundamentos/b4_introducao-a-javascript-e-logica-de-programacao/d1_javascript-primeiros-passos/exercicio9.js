const x = 2
const y = 4
const z = 6

const isOdd = value => {
    return value % 2 != 0
}

console.log(isOdd(x) || isOdd(y) || isOdd(z))