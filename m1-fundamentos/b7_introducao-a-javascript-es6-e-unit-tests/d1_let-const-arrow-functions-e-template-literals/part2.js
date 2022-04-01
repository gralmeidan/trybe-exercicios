const exercise1 = (num) => {
  let result = num
  for(let i = num - 1; i > 0; i --){
    result *= i
  }
  return result
}

console.log(exercise1(4)) // 24