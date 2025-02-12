//Z star printing 

function zStarPrinting(n){
    let temp = ""
    for(let i = 1;i<=n;i++){
      temp += '* '
    }
    console.log(temp)
      
      for(let i = 1;i<=n-2;i++){
        let ntemp = ''
        for(let j=1;j<n-1-i;j++){
          ntemp += "  "
        }
        ntemp += " * "
        console.log(ntemp)
      }
    console.log(temp)
  }
  
  let n = 12;
  zStarPrinting(n)