function starPrinting(n){
    let center = Math.floor(n/2)
    console.log(center)
    for(let i = 0;i<n;i++){
      let star =""
    for(let j = 0;j<n;j++){
      if((j==0 && i==0) || (i==0 && j==n-1) || (j==0 && i == n-1) || (i==n-1 && j == n-1) || center == i && center == j){
        star += "*"
      }
      else{
        star +=" "
      }
    }
    console.log(star)
  }
  }
  
  starPrinting(10)