let input =  ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]
let result = input.reduce((acc,item)=>{
  // if(!acc[item]){
  //   acc = {}
  // }
  // acc[item] = item+1 || 1
  // console.log()
  acc[item] = acc[item]+1 || 1
  return acc
},{})
console.log(result)