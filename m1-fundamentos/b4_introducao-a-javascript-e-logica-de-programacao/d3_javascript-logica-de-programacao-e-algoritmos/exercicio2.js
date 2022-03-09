let str = 'banana'
let newstr = '';

for (const char of str) {
    newstr = char + newstr
}

console.log(newstr)