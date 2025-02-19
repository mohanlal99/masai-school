let arr = [-2,1,-3,4,-1,2,1,-5,4]
let count=[]
for(let i =0;i<arr.length;i++){
  let temp = [];
  for(let j=0;j<i+1;j++){
    let newarr = arr.slice(j,i+1)
    count.push(newarr.reduce((total,item)=>total+item,0))
    temp.push(newarr)
    // console.log(temp)
  }
  // console.log(temp)
}
let max = Math.max(...count)
console.log(max)
