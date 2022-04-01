const exercise1 = (num) => {
  let result = num
  for(let i = num - 1; i > 0; i --){
    result *= i
  }
  return result
}

// console.log(exercise1(4)) // 24

const exercise2 = (frase) => {
  const arr = frase.split(' ')
  let result = ''
  for (const word of arr) {
    if(word.length > result.length){
      result = word
    }
  }
  return result
}

console.log(exercise2("standing here I realize you are just like me trying to make history but who's to judge right from wrong when our guard is down I think we'll both agree that violence breeds violence but in the end it has to be this way")) // standing