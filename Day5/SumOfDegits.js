function SumOfDegits(N,array) {
    let bag = []
    for (let i = 0; i < array.length; i++) {
        let str = array[i].toString()
        let split = str.split('')
        bag.push(parseInt(split[0])+parseInt(split[1]))
    }
    return bag
}

console.log(SumOfDegits(5,[12,14,16,17,29]))