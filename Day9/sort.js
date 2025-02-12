let arr = [2,7,5]
// let newarr = arr.sort((a,b)=>a-b)
// let dset = [...new Set(newarr)]

// console.log(dset[dset.length -2])
// console.log(dset)

for(let i = 0;i<arr.length;i++){
  
  for(let j=0;j<arr.length;j++){
    console.log(arr[j+1])
   if(arr[j]>arr[j+1]){
      let temp = arr[j]
    arr[j] = arr[j+1]
    arr[j+1] = temp
   }
    
    
  }
  
}
console.log(arr)