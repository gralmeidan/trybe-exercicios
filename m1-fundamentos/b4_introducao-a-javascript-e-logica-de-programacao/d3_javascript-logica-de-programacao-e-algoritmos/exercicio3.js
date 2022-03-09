let array = ['java', 'javascript', 'python', 'html', 'css'];

let longest = arr => {
    let longest = '';
    for (const str of arr) {
        if(str.length > longest.length) longest = str;
    }
    return longest;
}

let shortest = arr => {
    let shortest = arr[0];
    for (const str of arr) {
        if(str.length < shortest.length) shortest = str;
    }
    return shortest;
}

console.log('Maior: ' + longest(array) + "\nMenor: " + shortest(array))