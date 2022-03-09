let isPrime = num => {
    for(let i = num - 1; i > 1; i --){
        if(num % i == 0) return false
    }
    return true
}

for(let i = 50; i > 0; i--){
    if(isPrime(i)){
        console.log(i)
        break;
    }
}