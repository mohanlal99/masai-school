
function PowerOfTwo(n){
    n<1
    console.log(n)
    let sum = 1
    for(let i = 1; i<=n;i++){
        sum = sum*2
        if(sum == n) return true
    }
    return false
}

console.log(PowerOfTwo(256))




// function PowerOfTwo(n){
//     if(n<1){return false}
//     return (n & (n-1)) === 0
// }

// console.log(PowerOfTwo(1000000000))