let n = 9;
let a =n
let p = 2
for(let i =1;i<=n;i++){
  let temp = ""
  for(let j =1;j<=i;j++){
    temp+= "* "
  }
  
  for(let k=1;k<=(n*2)-p;k++){
    temp += "  "
  }
  p+=2
  for(let j =1;j<=i;j++){
    temp+= "* "
  }
  console.log(temp)
  
  
  
}
