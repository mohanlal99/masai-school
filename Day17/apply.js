function multiplyNumbers(n1,n2){
    return (function(a,b){
      return a*b
    }).apply(0,[n1,n2])
   }
   
   console.log(multiplyNumbers(24,24))