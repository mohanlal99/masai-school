function filterEvenNumbers(arr){
    return arr.filter(item=>item%2==0)
  }
  function sumOfArray(arr){
    return arr.reduce((total,item)=>total+item,0)
  }
  function sortAndConcat(arr1, arr2){
    // let data = arr.concat(arr2)
    arr1.sort((a,b)=>a-b)
    arr2.sort((a,b)=>a-b)
    
    return [...arr1, ...arr2]
  }
  
  let arr = [1,5,357,2,3,49,7,9,2,8,3454,0]
  console.log(filterEvenNumbers(arr))
  console.log(sumOfArray(arr))
  console.log(sortAndConcat([23,7,5,8,23,9,27],[29,4,58,65,92,3,74,589]))