toDecimal = char => {
    switch (char) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return 0;
    }
}

let str = 'XLIII'
let num = 0;

for (let i = 0; i < str.length; i += 1) {
    if(toDecimal(str[i]) < toDecimal(str[i + 1])){
        num += toDecimal(str[i + 1]) - toDecimal(str[i])
        i += 1
    } else {
        num += toDecimal(str[i])
    }
}

console.log(num);