function extractAndReverse(arr){
    let newarr =arr.slice(3,5)
    let res = newarr.reverse()
    return res
  }
  
  console.log(extractAndReverse([15, 30, 45, 60, 75, 90]))