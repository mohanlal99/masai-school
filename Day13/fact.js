const factroial = (num,result=1)=>{
    if(num<=0 || isNaN(num)){
        return "Invalid Number"
    }
    num = parseInt(num)
    result =result * num
  // console.log(result,num)
    if(num <= 1){
      return result
    }
    return factroial(num - 1,result)
}

// console.log(factroial('8'))

let MathLib = {
    fact:(num)=>{
        return factroial(num);
    }
}

console.log(MathLib.fact('8'))

