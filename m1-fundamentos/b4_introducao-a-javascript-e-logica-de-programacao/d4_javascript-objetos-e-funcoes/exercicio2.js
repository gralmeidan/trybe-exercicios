// Exercício 1

let isPalindrome = str => {
    let invertedStr = ''
    for (const char of str) {
        invertedStr = char + invertedStr;
    }
    return invertedStr == str;
}

// Exercício 2

let indexOfBiggest = arr => {
    let index = 0;
    for (const i of arr) {
        if(arr[index] < arr[i]) index = i;
    }
    return index;
}

// Exercício 3

let indexOfSmallest = arr => {
    let index = 0;
    for (const i of arr) {
        if(arr[index] > arr[i]) index = i;
    }
    return index;
}

// Exercício 4

let largestName = arr => {
    let name = arr[0];
    for (const str of arr) {
        if(name.length < str.length) name = str;
    }
    return name;
}

// Exercício 5

let countRepeats = (value, arr) => {
    let count = 0;
    for (const num of arr) {
        if(value === num) count += 1
    }
    return count;
} 

let mostRepeats = arr => {
    let counted = [];
    let x = 0;
    for (const num of arr) {
        if(counted.find(e => e === num) == undefined){
            let repeats = countRepeats(num, arr)
            if(x < repeats){
                x = repeats
                counted.unshift(num)
            } else {
                counted.push(num)
            }
        }
    }
    return counted[0]
}

// Exercício 6

let sumOf1ToN = n => {
    let sum = 0;
    for(let i = 1; i <= n; i += 1){
        sum += i
    }
    return sum
}

// Exercício 7

let checkStringEnd = (str, substr) => {
    return str.substring(str.length - substr.length, str.length) === substr
}