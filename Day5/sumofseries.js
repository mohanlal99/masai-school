function sumofseries(N,X) {
    if(N<=0 || X<=0) return -1

    let sum = 0
    for (let i = 0; i < N; i++) {
        sum += X**i
    }

    return sum
}

console.log(sumofseries(3,2))

