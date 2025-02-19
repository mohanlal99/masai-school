arr1 = ["car", "bike", "train"]
arr2 = ["plane", "ship"]

function modifyAndMerge(A1,A2){
  A1.splice(1,2,'scooter','bus')
  let newarr = A1.concat(A2)
  return newarr
}
console.log(modifyAndMerge(arr1,arr2))