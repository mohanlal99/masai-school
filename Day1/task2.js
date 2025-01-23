let arr = [1,2,3,4,5]

let newArr = []
newArr[0] = "NewTask"
newArr[1] = "NewTask1"
for (const element of arr) {
    newArr.push(element)
}
console.log(newArr)