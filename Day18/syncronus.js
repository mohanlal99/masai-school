let count = 0

console.log("start Task 1")
setTimeout(()=>{
  count++
  console.log("Task ",count)

},1000)
console.log("start Task 2")
setTimeout(()=>{
  count++
  console.log("Task ",count)

},4000)
console.log("start Task 3")
setTimeout(()=>{
  count++
  console.log("Task ",count)

},3000)

//don't confuse  because second setTimeout is run last but count value is 2 so thrid task print 2
// start Task 1
// start Task 2
// start Task 3
// Task  1
// Task  2
// Task  3
